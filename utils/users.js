const API = "https://fakestoreapi.com/users"
const list = document.getElementById("productList")

axios.get(API).then(r => {
  list.innerHTML = ""
  r.data.forEach(u => {
    list.innerHTML += `
      <tr>
        <td>${u.id}</td>
        <td>${u.username}</td>
        <td>${u.email}</td>
        <td>${u.phone}</td>
      </tr>
    `
  })
})
