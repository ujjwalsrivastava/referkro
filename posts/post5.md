# Fill multiple skill , press enter & fill one more skill in same blank space using javascript & css

HTML Code -:

```html
<!-- s1 -->
<div id="skillsContainer" class="skills-container">
  <!-- A text input (skillsInput) where users type their skills. -->
  <input
    type="text"
    id="skillsInput"
    name="skillsInput"
    placeholder="Type and press Enter"
    required
  />
</div>
<!-- A hidden input field (skills) that stores all skills as a comma-separated string. This field is included when the form is submitted. -->
<input type="hidden" id="skills" name="skills" />
<br /><br />
```

JAVASCRIPT Code -:

```javascript
const skillsContainer = document.getElementById("skillsContainer"); //The container holding skill tags.
const skillsInput = document.getElementById("skillsInput"); //The text input field where users type skills.
const skillsField = document.getElementById("skills"); //The hidden field to store the skills as a comma-separated list.

let skills = [];

skillsInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && skillsInput.value.trim() !== "") {
    event.preventDefault(); // prevents the default behavior (submitting the form).

    // Add skill to the array
    const skill = skillsInput.value.trim();
    skills.push(skill);

    // Update hidden field
    skillsField.value = skills.join(",");

    // Create a skill tag
    const skillTag = document.createElement("span");
    skillTag.className = "skill-tag";
    skillTag.textContent = skill;

    // Add remove button
    const removeButton = document.createElement("span");
    removeButton.className = "remove";
    removeButton.textContent = "x";
    removeButton.addEventListener("click", function () {
      // Remove skill from the array
      skills = skills.filter((s) => s !== skill);
      skillsField.value = skills.join(",");

      // Remove the skill tag from DOM
      skillsContainer.removeChild(skillTag);
    });

    skillTag.appendChild(removeButton);
    skillsContainer.insertBefore(skillTag, skillsInput);

    // Clear the input
    skillsInput.value = "";
  }
});
```

CSS Code:

```css
/* s1 */
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}

.skill-tag {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
}

.skill-tag .remove {
  margin-left: 5px;
  cursor: pointer;
}

#skillsInput {
  border: none;
  outline: none;
  flex: 1;
  min-width: 150px;
}
/* s1 */
```
