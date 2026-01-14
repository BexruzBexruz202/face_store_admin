const elForm = document.querySelector(".form__container");
const api = "https://fakestoreapi.com/auth/login";

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const user = {
    username: username,
    password: password,
  };
  localStorage.setItem("username", username);
  login(api, user);
});

function login(url, data) {
  return axios
    .post(url, data)
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        Toastify({
          text: "Login Successfull",
          duration: 1500,
          destination: "https://github.com/apvarun/toastify-js",
          gravity: "top",
          position: "center",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {},
        }).showToast();

        setTimeout(() => {
          window.location.href = "/pagess/dashboard.html";
        }, 1500);
      }
    })
    .catch((err) => {
      Toastify({
        text: "Login Failed",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background:
            "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
        },
        onClick: function () {},
      }).showToast();
    });
}
