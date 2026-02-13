const API = "https://fakestoreapi.com/carts"
const cartList = document.getElementById("cartList")
const modal = document.getElementById("modal")
const addBtn = document.getElementById("addCartBtn")
const closeBtn = document.getElementById("close")

axios.get(API).then(r => {
  cartList.innerHTML = ""
  r.data.forEach(c => {
    cartList.innerHTML += `
      <tr>
        <td>${c.id}</td>
        <td>${c.userId}</td>
        <td>${c.date.split("T")[0]}</td>
        <td>${c.products.length}</td>
        <td><button class="edit">View</button></td>
      </tr>
    `
  })
})

addBtn.onclick = () => modal.classList.remove("hidden")
closeBtn.onclick = () => modal.classList.add("hidden")
