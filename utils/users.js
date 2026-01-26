const elUsers = document.querySelector("#users");

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
      <h3>${user.name.firstname} ${user.name.lastname}</h3>
      <p><b>Username:</b> ${user.username}</p>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Phone:</b> ${user.phone}</p>
      <p><b>City:</b> ${user.address.city}</p>
    `;

    elUsers.appendChild(div);
  });
}
