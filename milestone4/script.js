var _a;
//listing element 
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var firstNameElement = document.getElementById('firstName');
    var lastNameElement = document.getElementById('lastName');
    var addressElement = document.getElementById('address');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (firstNameElement && lastNameElement && addressElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var firstName = firstNameElement.value;
        var lastName = lastNameElement.value;
        var address = addressElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var eduation = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //Create Resume Output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <P><strong>First Name:</strong> <span id = \"edit-firstName\" class = \"editable\"> ".concat(firstName, " </span></P>\n    <P><strong>Last Name:</strong> <span id = \"edit-lastName\" class = \"editable\"> ").concat(lastName, " </span></P>\n    <P><strong>Address:</strong> <span id = \"edit-address\" class = \"editable\"> ").concat(address, " </span></P>\n    <P><strong>Email:</strong> <span id = \"edit-email\" class = \"editable\"> ").concat(email, " </span></P>\n    <P><strong>Phone:</strong> <span id = \"edit-phone\" class = \"editable\"> ").concat(phone, " </span></P>\n    <h3>Education</h3>\n    <p id=\"edit-education\" class = \"editable\">").concat(eduation, "</p>\n    <h3>Working Experience</h3>\n    <p id=\"edit-work experience\" class = \"editable\">").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class = \"editable\">").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('One or More Output Elements are Missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace contant
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
