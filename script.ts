document.getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Type casting to the correct element types
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const skillElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const profilePictureElement = document.getElementById(
      "ProfilePicture"
    ) as HTMLInputElement;

    // Check all elements are present
    if (
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      skillElement &&
      experienceElement &&
      profilePictureElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const skills = skillElement.value;
      const experience = experienceElement.value;
      const profilePictureFile = profilePictureElement.files?.[0];

      // Check if profile picture is uploaded
      if (profilePictureFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const profilePictureSrc = e.target?.result as string;

          // Create resume output with the profile picture
          const resumeOutput = `
                    <h2>Resume</h2>
                    <img src="${profilePictureSrc}" alt="Profile Picture" style="width: 100px; height: 100px;"><br>
                    <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
                    <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
                    <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>

                    <h3>Education</h3>
                    <p><span id="edit-education" class="editable">${education}</span></p>

                    <h3>Skills</h3>
                    <p><span id="edit-skills" class="editable">${skills}</span></p>

                    <h3>Experience</h3>
                    <p><span id="edit-experience" class="editable">${experience}</span></p>
                `;

          const resumeOutputElement = document.getElementById("resumeOutput");
          if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
          } else {
            console.error("The resume output element is missing.");
          }
        };

        // Read the profile picture as a DataURL
        reader.readAsDataURL(profilePictureFile);
      } else {
        console.error("No profile picture was uploaded.");
      }
    } else {
      console.error("One or more input elements are missing.");
    }
  });

function makeEditable() {
  const editableElement = document.querySelectorAll(".editable");
  editableElement.forEach((element) => {
    element.addEventListener("click", function () {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || ``;

      // Replace content with input
      if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing", "input");

        input.addEventListener("blur", function () {
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove();
        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}
