// // Get refernence to the form and didply area //
// const form = document.getElementById('resumeForm')as HTMLFormElement;
// const resumeDisplyElement =document.getElementById('resume-container') as HTMLDivElement;
// //Handle form submisstion //
// form.addEventListener('submit',(event:Event)=>{
// event.preventDefault();// prevent page reload
// //collect input value//
// const name =(document.getElementById('name')as HTMLInputElement).value
// const profile  =(document.getElementById('profile')as HTMLInputElement).value
// const phon =(document.getElementById('phon')as HTMLInputElement).value
// const email =(document.getElementById('email')as HTMLInputElement).value
// const address =(document.getElementById('address')as HTMLInputElement).value
// const education =(document.getElementById('education')as HTMLInputElement).value
// const experience =(document.getElementById('experince')as HTMLInputElement).value
// const skills =(document.getElementById('skills')as HTMLInputElement).value
// // Genrate the resume content dynamiclly//
// const resumeHTML =`
// <h2><b>resume</b></h2>
// <h3>personal Information</h3>
// <p><b>Name:<b/><span contenteditable="true">${name}</span></p>
// <p><b>Profile:<b/><span contenteditable="true">${profile}</span></p>
// <p><b>Phon:<b/><span contenteditable="true">${phon}}</span></p>
// <p><b>Email:<b/><span contenteditable="true">${email}}</span></p>
// <p><b>Address:<b/><span contenteditable="true">${address}}</span></p>
// <he>Education</h3>
// <p  contenteditable="true>${education}</p>
// <he>experince</h3>
// <p  contenteditable="true>${experience}</p>
// <h3>Skills</h3>
// <p  contenteditable="true>${skills}</p>
// `;
// // disply the  generated resume //
// if(resumeDisplyElement){
//   resumeDisplyElement.innerHTML=resumeHTML;
// }else
// console.error
// ('The  resume display element is missing');
// })
// // Get references to the form and elements
// const form = document.getElementById('resumeForm') as HTMLFormElement;
// const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
// // Resume display elements
// const profileImg = document.getElementById('profile') as HTMLImageElement;
// const nameElement = document.querySelector('.right-panel #name') as HTMLHeadingElement;
// const profileElement = document.getElementById('profil') as HTMLParagraphElement;
// const phoneElement = document.querySelector('#contactList #phone') as HTMLLIElement;
// const emailElement = document.querySelector('#contactList #email') as HTMLLIElement;
// const addressElement = document.querySelector('#contactList #address') as HTMLLIElement;
// const educationElement = document.querySelector('.right-panel #education') as HTMLParagraphElement;
// const experienceElement = document.querySelector('.right-panel #experience') as HTMLParagraphElement;
// const skillsList = document.querySelector('.right-panel #skills') as HTMLUListElement;
// // Event listener for the generate button
// generateBtn.addEventListener('click', () => {
//   // Collect input values
//   const nameInput = (document.getElementById('name') as HTMLInputElement).value;
//   const profileInput = (document.getElementById('profile') as HTMLTextAreaElement).value;
//   const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
//   const emailInput = (document.getElementById('email') as HTMLInputElement).value;
//   const addressInput = (document.getElementById('address') as HTMLInputElement).value;
//   const educationInput = (document.getElementById('education') as HTMLTextAreaElement).value;
//   const experienceInput = (document.getElementById('experience') as HTMLTextAreaElement).value;
//   const skillsInput = (document.getElementById('skills') as HTMLInputElement).value;
//   // Update resume sections
//   nameElement.textContent = nameInput || 'Your Name';
//   profileElement.textContent = profileInput || 'Your profile description will appear here.';
//   phoneElement.textContent = phoneInput || 'Your phone';
//   emailElement.textContent = emailInput || 'Your email';
//   addressElement.textContent = addressInput || 'Your address';
//   educationElement.textContent = educationInput || 'Your education details';
//   experienceElement.textContent = experienceInput || 'Your experience';
//   // Update skills section
//   skillsList.innerHTML = ''; // Clear existing skills
//   if (skillsInput) {
//     skillsInput.split(',').forEach((skill) => {
//       const skillItem = document.createElement('li');
//       skillItem.textContent = skill.trim();
//       skillsList.appendChild(skillItem);
//     });
//   }
// });
var form = document.getElementById('resumeForm');
var generateBtn = document.getElementById('generateBtn');
// Resume display elements
var profileImg = document.getElementById('profile');
var nameElement = document.querySelector('.right-panel #name');
var profileElement = document.getElementById('profil');
var phoneElement = document.querySelector('#contactList #phone');
var emailElement = document.querySelector('#contactList #email');
var addressElement = document.querySelector('#contactList #address');
var educationElement = document.querySelector('.right-panel #education');
var experienceElement = document.querySelector('.right-panel #experience');
var skillsList = document.querySelector('.right-panel #skills');
// Event listener for the generate button
generateBtn.addEventListener('click', function () {
    // Collect input values
    var nameInput = document.getElementById('name').value;
    var profileInput = document.getElementById('profile').value;
    var phoneInput = document.getElementById('phone').value;
    var emailInput = document.getElementById('email').value;
    var addressInput = document.getElementById('address').value;
    var educationInput = document.getElementById('education').value;
    var experienceInput = document.getElementById('experience').value;
    var skillsInput = document.getElementById('skills').value;
    // Update resume sections (non-editable)
    nameElement.textContent = nameInput || 'Your Name';
    profileElement.textContent = profileInput || 'Your profile description will appear here.';
    phoneElement.textContent = phoneInput || 'Your phone';
    emailElement.textContent = emailInput || 'Your email';
    addressElement.textContent = addressInput || 'Your address';
    educationElement.textContent = educationInput || 'Your education details';
    experienceElement.textContent = experienceInput || 'Your experience';
    // Update skills section (non-editable)
    skillsList.innerHTML = ''; // Clear existing skills
    if (skillsInput) {
        skillsInput.split(',').forEach(function (skill) {
            var skillItem = document.createElement('li');
            skillItem.textContent = skill.trim();
            skillItem.setAttribute('style', 'pointer-events: none;'); // Disable interaction
            skillsList.appendChild(skillItem);
        });
    }
    // Disable all the input fields after generating the resume
    var inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
        input.disabled = true;
    });
});
