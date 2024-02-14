document.addEventListener('DOMContentLoaded', function () {
    // Get the select element
    var selectElement = document.getElementById('floatingSelect');

    // Get the Proceed button
    var proceedButton = document.querySelector('.btn-primary');

    // Add click event listener to the Proceed button
    proceedButton.addEventListener('click', function () {
        // Get the selected value from the select element
        var selectedValue = selectElement.value;

        // Redirect based on the selected role
        if (selectedValue === '1') {
            // Teacher selected, redirect to Teacher_login.html
            window.location.href = './teacher_login.html';
        } else if (selectedValue === '2') {
            // Student selected, redirect to Student.html
            window.location.href = './student_login.html';
        }
    });
});




// Student Login Page
// document.addEventListener('DOMContentLoaded', function () {
//     // Get the select element
//     var selectElement = document.getElementById('floatingSelect');

//     // Get the Proceed button
//     var proceedButton = document.querySelector('.btn-primary');

//     // Add click event listener to the Proceed button
//     proceedButton.addEventListener('click', function () {
//         // Get the selected value from the select element
//         var rollNo = document.getElementById('StudentRollNo').value;
//         var email = document.getElementById('StudentEmail').value;
//         var password = document.getElementById('Password').value;
//         var detail = document.getElementById('StudentRollNo','StudentEmail','StudentPassword').value;

//         // Get the Proceed button
//     var proceedButton = document.querySelector('.btn-primary');
//     });
// });
// function validateStudentLogin() {
//     // Retrieve values from the form
//     var rollNo = document.getElementById('StudentRollNo').value;
//     var email = document.getElementById('StudentEmail').value;
//     var password = document.getElementById('Password').value;

//     // Check if any field is empty
//     if (!rollNo || !email || !password) {
//         alert('Please fill in all fields');
//         return false;
//     }

//     // Retrieve stored student details from local storage
//     var storedStudentDetails = JSON.parse(localStorage.getItem('studentDetails'));

//     // Check if the student details exist in local storage
//     if (storedStudentDetails && storedStudentDetails[rollNo]) {
//         var storedEmail = storedStudentDetails[rollNo].email;
//         var storedPassword = storedStudentDetails[rollNo].password;

//         // Validate the entered email and password against the stored data
//         if (email === storedEmail && password === storedPassword) {
//             // Successful login, redirect to student_dashboard.html
//             window.location.href = 'student_dashboard.html';
//             return true;
//         } else {
//             alert('Invalid email or password');
//             return false;
//         }
//     } else {
//         alert('Student details not found');
//         return false;
//     }
// }

// // Function to store student details in local storage
// function storeStudentDetails(rollNo, email, password) {
//     var storedStudentDetails = JSON.parse(localStorage.getItem('studentDetails')) || {};

//     // Store the student details using the rollNo as the key
//     storedStudentDetails[rollNo] = {
//         email: email,
//         password: password
//     };

//     // Update the local storage
//     localStorage.setItem('studentDetails', JSON.stringify(storedStudentDetails));
// }

// function loginStudent() {
//     if (validateStudentLogin()) {
//         // Successful login, redirect to student_dashboard.html
//         window.location.href = 'student_dashboard.html';
//     }
// }

