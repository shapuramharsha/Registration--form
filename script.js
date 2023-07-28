const form = document.getElementById("registrationForm");
const displayDataDiv = document.getElementById("displayData");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const skills = document.getElementById("skills").value;

  const data = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Skills:</strong> ${skills}</p>
  `;

  displayDataDiv.innerHTML = data;
  form.reset();
});
