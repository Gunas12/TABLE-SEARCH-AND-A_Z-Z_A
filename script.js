let tbody = document.querySelector("tbody")
let a_z = document.querySelector("#sort_down")
let z_a = document.querySelector("#sort_up")
let a_z1 = document.querySelector("#sort_down1")
let z_a1 = document.querySelector("#sort_up1")

let arr = [];


function createtr(element) {

  let tr = document.createElement("tr")
  let name = document.createElement("th")
  let unitprice = document.createElement("td")
  let unitinstock = document.createElement("td")
  let quantity = document.createElement("td")
  tbody.appendChild(tr)
  tr.appendChild(name)
  tr.appendChild(unitprice)
  tr.appendChild(unitinstock)
  tr.appendChild(quantity)

  tr.classList.add("tabletr")
  name.innerText = element.name
  unitprice.innerText = element.unitPrice
  unitinstock.innerText = element.unitsInStock
  quantity.innerText = element.quantityPerUnit

}


axios.get("https://northwind.vercel.app/api/products")
  .then(res => res.data)
  .then(data => data.forEach(element => {
    createtr(element);
    arr.push(element)

  }))




z_a.addEventListener("click", function () {
  tbody.innerText = " "
  console.log(tbody);
  axios.get("https://northwind.vercel.app/api/products")
    .then(res => {
      let newArr1;
      newArr1 = res.data
      res.data.sort((a, b) => b.name.localeCompare(a.name)).forEach(element => {
        createtr(element);
      }
      )

    })

    .catch((err) => console.log(err))

})

a_z.addEventListener("click", function () {
  tbody.innerText = " "

  axios.get("https://northwind.vercel.app/api/products")
    .then(res => {
      let newArr2;
      newArr2 = res.data
      res.data.sort((a, b) => a.name.localeCompare(b.name)).forEach(element => {
        createtr(element);
      }
      )
    })
    .catch((err) => console.log(err))

})


z_a1.addEventListener("click", function () {
  tbody.innerText = " "
  console.log(tbody);
  axios.get("https://northwind.vercel.app/api/products")
    .then(res => {
      let newArr1;
      newArr1 = res.data
      res.data.sort((a, b) => b.unitPrice - a.unitPrice).forEach(element => {
        createtr(element);
      }
      )

    })

    .catch((err) => console.log(err))

})

a_z1.addEventListener("click", function () {
  tbody.innerText = " "

  axios.get("https://northwind.vercel.app/api/products")
    .then(res => {
      let newArr2;
      newArr2 = res.data
      res.data.sort((a, b) => a.unitPrice - b.unitPrice).forEach(element => {
        createtr(element);
      }
      )
    })
    .catch((err) => console.log(err))

})

let input = document.querySelector("#search")

input.addEventListener("input", function () {
  tbody.innerText = " "
  arr.filter(element =>
    element.name.toLowerCase().includes(input.value.toLowerCase()))
    .forEach(element => {
      createtr(element)
    })

})




