//listing element 
document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstNameElement = document.getElementById('firstName') as HTMLInputElement;
    const lastNameElement = document.getElementById('lastName') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if (firstNameElement && lastNameElement && addressElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const firstName = firstNameElement.value;
        const lastName = lastNameElement.value;
        const address = addressElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const eduation = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;


    //Create Resume Output
    const resumeOutput=`
    <h2>Resume</h2>
    <P><strong>First Name:</strong> <span id = "edit-firstName" class = "editable"> ${firstName} </span></P>
    <P><strong>Last Name:</strong> <span id = "edit-lastName" class = "editable"> ${lastName} </span></P>
    <P><strong>Address:</strong> <span id = "edit-address" class = "editable"> ${address} </span></P>
    <P><strong>Email:</strong> <span id = "edit-email" class = "editable"> ${email} </span></P>
    <P><strong>Phone:</strong> <span id = "edit-phone" class = "editable"> ${phone} </span></P>
    <h3>Education</h3>
    <p id="edit-education" class = "editable">${eduation}</p>
    <h3>Working Experience</h3>
    <p id="edit-work experience" class = "editable">${experience}</p>
    <h3>Skills</h3>
    <p id="edit-skills" class = "editable">${skills}</p>
    `;


    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
            resumeOutputElement.innerHTML= resumeOutput;
        makeEditable();
    }
}else{
    console.error('One or More Output Elements are Missing')
}
});


function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click' , function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "" ;

            //replace contant
            if (currentElement.tagName === "P"  || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input')
                input.type = 'text'
                input.value =currentValue
                input.classList.add('editing-input')


                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })


                currentElement.style.display ='none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}