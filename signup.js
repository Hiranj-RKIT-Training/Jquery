// console.log("connected");


// document.getElementById("signup").addEventListener("submit", function (e) {
//     e.preventDefault();
//     ValidateForm();
// });

// let ValidateForm = () => {

//     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     let firstName = document.getElementById("usrFirstName").value;
//     let lastName = document.getElementById("usrLastName").value;
//     let email = document.getElementById("usrEmail").value;
//     let genderMale = document.getElementById("usrMale").checked;
//     let genderFemale = document.getElementById("usrFemale").checked;
//     let city = document.getElementById("usrCity").value;
//     let profilePic = document.getElementById("usrProfilePic").value;
//     let password = document.getElementById("usrPassword").value;
//     let confirmPassword = document.getElementById("cnfrmPassword").value;

//     let errors = [];

//     // Validate first and last name
//     if (!firstName) {
//         errors.push("First name is required.");
//     }
//     if (!lastName) {
//         errors.push("Last name is required.");
//     }

//     // Validate email

//     if (!email.match(emailPattern)) {
//         errors.push("Please enter a valid email address.");
//     }

//     // Validate gender selection
//     if (!genderMale && !genderFemale) {
//         errors.push("both gender");


//     }
//     if (!genderMale && !genderFemale) {
//         errors.push("Please select your gender.");
//     }

//     // Validate profile picture
//     if (!profilePic) {
//         errors.push("Please upload a profile picture.");
//     }

//     // Validate password length and match
//     if (password.length < 6) {
//         errors.push("Password must be at least 6 characters long.");
//     }
//     if (password !== confirmPassword) {
//         errors.push("Passwords do not match.");
//     }
//     if (city === "") {
//         errors.push("Please select a city.");
//     }
//     // Display errors or submit form
//     if (errors.length > 0) {
//         alert(errors.join("\n"));
//     } else {
//         alert("Form submitted successfully!");
//         window.location.href = "./"
//         // Optionally, you can submit the form here using AJAX or proceed with default behavior
//         // document.getElementById("signup").submit();
//     }
// }

console.log($);
$("#signup").validate({
    rules: {
        firstName: {
            required: true,
        },
        lastName: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        gender: {
            required: true,
        },
        cities: {
            required: true,
        },
        usrProfilePic: {
            required: true,
        },
        password: {
            required: true,
            minlength: 5
        },
        cnfrmPassword: {
            required: true,
            equalTo: "#usrPassword"
        },
    }, messages: {
        firstName: {
            required: "Please Enter First Name",
        },
        lastName: {
            required: "Please Enter Last Name",
        },
        email: {
            required: "Please Enter Email",
            email: "Please Enter valid Email"
        },

        gender: {
            required: "Please select Gender",
        },
        cities: {
            required: "Please Select City",
        },
        usrProfilePic: {
            required: "Please add Profile pic",
        },
        password: {
            required: "Please Enter Password",
        },
        cnfrmPassword: {
            required: "Please Enter Confirm Password",
            equalTo: "Password Does not Match"
        },
    }
});