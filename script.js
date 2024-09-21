var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("submit", function (event) {
      var _a;
      event.preventDefault();
      // Type casting to the correct element types
      var nameElement = document.getElementById("name");
      var emailElement = document.getElementById("email");
      var phoneElement = document.getElementById("phone");
      var educationElement = document.getElementById("education");
      var skillElement = document.getElementById("skills");
      var experienceElement = document.getElementById("experience");
      var profilePictureElement = document.getElementById("ProfilePicture");
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
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var skills_1 = skillElement.value;
        var experience_1 = experienceElement.value;
        var profilePictureFile =
          (_a = profilePictureElement.files) === null || _a === void 0
            ? void 0
            : _a[0];
        // Check if profile picture is uploaded
        if (profilePictureFile) {
          var reader = new FileReader();
          reader.onload = function (e) {
            var _a;
            var profilePictureSrc =
              (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // Create resume output with the profile picture
            var resumeOutput =
              '\n                    <h2>Resume</h2>\n                    <img src="'
                .concat(
                  profilePictureSrc,
                  '" alt="Profile Picture" style="width: 100px; height: 100px;"><br>\n                    <p><strong>Name:</strong> <span id="edit-name" class="editable">'
                )
                .concat(
                  name_1,
                  '</span></p>\n                    <p><strong>Email:</strong> <span id="edit-email" class="editable">'
                )
                .concat(
                  email_1,
                  '</span></p>\n                    <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">'
                )
                .concat(
                  phone_1,
                  '</span></p>\n\n                    <h3>Education</h3>\n                    <p><span id="edit-education" class="editable">'
                )
                .concat(
                  education_1,
                  '</span></p>\n\n                    <h3>Skills</h3>\n                    <p><span id="edit-skills" class="editable">'
                )
                .concat(
                  skills_1,
                  '</span></p>\n\n                    <h3>Experience</h3>\n                    <p><span id="edit-experience" class="editable">'
                )
                .concat(experience_1, "</span></p>\n                ");
            var resumeOutputElement = document.getElementById("resumeOutput");
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
  var editableElement = document.querySelectorAll(".editable");
  editableElement.forEach(function (element) {
    element.addEventListener("click", function () {
      var _a;
      var currentElement = element;
      var currentValue = currentElement.textContent || "";
      // Replace content with input
      if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
        var input_1 = document.createElement("input");
        input_1.type = "text";
        input_1.value = currentValue;
        input_1.classList.add("editing", "input");
        input_1.addEventListener("blur", function () {
          currentElement.textContent = input_1.value;
          currentElement.style.display = "inline";
          input_1.remove();
        });
        currentElement.style.display = "none";
        (_a = currentElement.parentNode) === null || _a === void 0
          ? void 0
          : _a.insertBefore(input_1, currentElement);
        input_1.focus();
      }
    });
  });
}
