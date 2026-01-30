const elUsers = document.querySelector("#users");
const elLogout = document.querySelector(".logout");

fetch("https://fakestoreapi.com/users")
  .then(res => res.json())
  .then(users => renderUsers(users))
  .catch(err => console.error(err));

function renderUsers(users) {
  elUsers.innerHTML = "";

  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "user";

    div.innerHTML = `
      <h3 class = "users_text">${user.name.firstname} ${user.name.lastname}</h3>
      <p class = "users_text"><b>Username:</b> ${user.username}</p>
      <p class = "users_text"><b>Email:</b> ${user.email}</p>
      <p class = "users_text"><b>Phone:</b> ${user.phone}</p>
      <p class = "users_text"><b>City:</b> ${user.address.city}</p>
    `;

    elUsers.appendChild(div);
  });
}

elLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "../index.html";
});
