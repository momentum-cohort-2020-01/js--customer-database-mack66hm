
// const name = document.querySelector('.name')
// const email = document.querySelector('.email')
// const address = document.querySelector('.location')
// const birthDate = document.querySelector('.dob')
// const dateBecameCustomer = document.querySelector('.registered')
// const image = document.querySelector('.picture')

// function customerData (customers) {
//   const listItem = document.createElement('li')
//   const figure = document.createElement('figure')
//   const img = document.createElement('img')
//   img.src = image

//   return customers
// }
// let row = document.querySelector('.row')

// for (let customer of customers) {
//     let box = document.createElement('div')
//     box.classList.add('cust')
//     row.appendChild(box)

//     let image = document.createElement('img')
//     box.appendChild(image)
//     image.src = customer.picture.large

// }

function capitalizeFirstLetter (string) {
  return string[0].toUpperCase() + string.slice(1)
}

// const customerNames = customers.map(function (customer) {
//   return capitalizeFirstLetter(customer.name.first) +
//   // customer.name.first[0].toUpperCase() +
//   ' ' +
//     capitalizeFirstLetter(customer.name.last)
//     //  customer.name.last[0].toUpperCase() + customer.name.last.slice(1)
// })

const customerListItems = customers.map(function (customer) {
    const wholeName = capitalizeFirstLetter(customer.name.first) + ' ' + capitalizeFirstLetter(customer.name.last)

  const li = document.createElement('li')
  li.textContent = wholeName
  const image= document.createElement('img')
  image.src = customer.picture.large
  li.appendChild(image)
  const email = document.createElement('p')
  email.innerText = customer.email
  li.appendChild(email)
  const address = document.createElement('p')
  address.innerText= customer.location.street + customer.location.city 
  + customer.location.state + customer.location.postcode
  li.appendChild(address)
  const dateOfBirth = document.createElement('p')
  dateOfBirth.innerText = customer.dob
  li.appendChild(dateOfBirth)
  const customerSince = document.createElement('p')
  customerSince.innerText = customer.registered
  li.appendChild(customerSince)
  return li
})

const ul = document.createElement('ul')
for (const li of customerListItems) {
  console.log(li)
  ul.appendChild(li)
}

document.querySelector('#customers').appendChild(ul)
