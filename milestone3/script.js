var _a;
//listing element 
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var eduation = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //Create Resume Output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <P><strong>Name:</strong> ".concat(name_1, " </P>\n    <P><strong>Email:</strong> ").concat(email, " </P>\n    <P><strong>Phone:</strong> ").concat(phone, " </P>\n\n    <h3>Education:</h3>\n    <p>").concat(eduation, "</p>\n\n    <h3>Work Experience:</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills:</h3>\n    <p>").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The Resume Output Elements are Missing');
        }
    }
    else {
        console.error('One or More Output Elements are Missing');
    }
});
