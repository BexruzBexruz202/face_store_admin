const API = "https://fakestoreapi.com/products"
const productList = document.getElementById("productList")
const modal = document.getElementById("modal")
const titleInput = document.getElementById("title")
const priceInput = document.getElementById("price")
let editId = null

function loadProducts() {
  axios.get(API).then(r => {
    productList.innerHTML = ""
    r.data.forEach(p => {
      productList.innerHTML += `
        <tr>
          <td>${p.id}</td>
          <td>${p.title}</td>
          <td>$${p.price}</td>
          <td class="actions">
            <button class="edit" onclick="editProduct(${p.id}, '${p.title}', ${p.price})">Edit</button>
            <button class="delete" onclick="deleteProduct(${p.id})">Delete</button>
          </td>
        </tr>
      `
    })
  })
}
loadProducts()

document.getElementById("addProductBtn").onclick = () => {
  modal.classList.remove("hidden")
  editId = null
  titleInput.value = ""
  priceInput.value = ""
}

document.getElementById("saveProduct").onclick = () => {
  const product = { title: titleInput.value, price: priceInput.value }
  editId
    ? axios.put(`${API}/${editId}`, product).then(loadProducts)
    : axios.post(API, product).then(loadProducts)
  modal.classList.add("hidden")
}

function editProduct(id, title, price) {
  modal.classList.remove("hidden")
  titleInput.value = title
  priceInput.value = price
  editId = id
}

function deleteProduct(id) {
  axios.delete(`${API}/${id}`).then(loadProducts)
}

document.querySelector(".close").onclick = () => {
  modal.classList.add("hidden")
}
