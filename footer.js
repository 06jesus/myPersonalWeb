const myFooter = document.querySelector('.myFooter')
const footerDiv = document.createElement('div')
const footerTitle = document.createElement('h2')
footerTitle.textContent = 'Hablemos de tu Proyecto'
const footerWhatsApp = document.createElement('a')
footerWhatsApp.textContent = 'Escribeme'
footerWhatsApp.href = 'https://wa.me/675224543'
const footerEmail = document.createElement('p')
footerEmail.textContent = 'info@jesusmarquez.com'
myFooter.appendChild(footerDiv)
footerDiv.appendChild(footerTitle)
footerDiv.appendChild(footerWhatsApp)
footerDiv.appendChild(footerEmail)
