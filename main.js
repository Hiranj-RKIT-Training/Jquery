// doubts
// ajax not working 
// arrow function not working 


// API Url
const baseUrl = "https://xw7sbct9v6-1.algolianet.com/1/indexes/products/query?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.32.1&x-algolia-application-id=XW7SBCT9V6&x-algolia-api-key=6b5e76b49705eb9f51a06d3c82f7acee";

// API Headers
const headers = {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded"
};
//  API Call 
let GetData = async (query = "trending") => {
    // Clearing the Div
    document.getElementById('shoesGrid').innerHTML = "";
    // console.log(query);
    let q = `{"params": "query=${query}&hitsPerPage=${48}"}`;
    //API Call
    let response = await fetch(baseUrl, {
        method: "POST",
        headers: headers,
        body: q,
    });
    // converting data to JSON
    let data = await response.json();
    // console.log(data)
    // Creating UI for each Shoe
    let shoes = data['hits'];
    // console.log(shoes);
    shoes.forEach(element => {

        let shoe = {
            name: element['name'],
            photo: element['thumbnail_url'],
            price: element['price'],
        }

        let createdUi = CreateBox(shoe);
        // let shoeGrid = document.getElementById("shoesGrid");
        // shoeGrid.appendChild(createdUi);
        $("#shoesGrid").append(createdUi);

    });

}
let RemoveBrands = () => {
    $('.brandsButton').each(function () {
        $(this).removeClass("seletedBrand");
    })
}

let CreateBox = (shoe) => {
    // creating shoe thumbmail
    let thumbmail = $("<img>", {}).attr("src", shoe.photo);

    // creating shoe title
    let shoeName = $("<h5>", {}).text(shoe.name);
    // shoeName.appendChild(document.createTextNode(shoe.name));

    // creating shoe price
    let shoePrice = $("<h4>", {}).text(`\$${shoe.price}`);
    //appending in div and setting class Shoebox
    let shoeBox = $('<div>', {
        class: "shoeBox",
    })
    shoeBox.append(thumbmail);
    shoeBox.append(shoeName);
    shoeBox.append(shoePrice);
    return shoeBox
}

let GetBrand = (brand) => {
    //unselecting all buttons 
    RemoveBrands();
    $(brand).toggleClass("seletedBrand");


    // creating UI
    // Function LOC - index.js
    GetData($(brand).val());
}
$(function () {
    $("#logo").on("click", () => {
        RemoveBrands();
        GetData();
    })
    // $("#searchbar").change(() => {
    //     console.log($(this).val());
    // })
    $("#searchbar").on("change", function () {
        GetBrand(this);
    })
    $("#login").on("click", function () {
        $(location).attr('href', "./login.html");
    });
    $("#signup").on("click", function () {
        $(location).attr("href", "./signup.html");
    });
    $(".brandsButton").on("click", function () {
        let val = $(this).val();
        console.log(val);
        GetBrand(this);
    });

    // $.ajax({
    //     url: baseUrl,
    //     headers: headers,
    //     success: function (data) {
    //         console.log(data);
    //     },
    //     error: function (xhr, status, error) {
    //         console.error("AJAX Error:", error);
    //     }
    // });
    GetData();
});
