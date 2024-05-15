import { data } from './main.js'

const header = document.querySelector('header')
const imgAvatar = document.createElement('img')
imgAvatar.src = './public/WhatsApp Image 2024-04-27 at 23.02.28.jpeg'
const titleName = document.createElement('h1')
titleName.textContent = data.name
const subTitle = document.createElement('h2')
subTitle.textContent = data.work
const linkDiv = document.createElement('div')
const linkCv = document.createElement('a')
linkCv.textContent = 'Descarga mi Cv'
const linkSkills = document.createElement('a')
linkSkills.textContent = 'Skills'
const linkFormacion = document.createElement('a')
linkFormacion.textContent = 'Formación'
const linkProyectos = document.createElement('a')
linkProyectos.textContent = 'Proyectos'
const linkContacto = document.createElement('a')
linkContacto.textContent = 'Contacto'

linkCv.addEventListener('click', function () {
  scrollToSection(cvSection)
})

linkSkills.addEventListener('click', function () {
  scrollToSection(skillsSection)
})

linkFormacion.addEventListener('click', function () {
  scrollToSection(formacionSection)
})

linkProyectos.addEventListener('click', function () {
  scrollToSection(proyectosSection)
})

linkContacto.addEventListener('click', function () {
  scrollToSection(contactoSection)
})

function scrollToSection(section) {
  section.scrollIntoView({ behavior: 'smooth' })
}

const imgtext1 = document.createElement('img')
imgtext1.className = 'imgtext1'
imgtext1.src = './public/devImg3.png'
const text1 = document.createElement('h3')
text1.className = 'text1'
text1.textContent =
  'Hola, mi nombre es Jesús Márquez y soy tu programador web Full Stack'
const descargarCv = document.createElement('a')
descargarCv.className = 'descargarCv'
descargarCv.href = data.myCv
descargarCv.textContent = 'Descarga mi CV'

header.appendChild(imgAvatar)
header.appendChild(titleName)
header.appendChild(subTitle)
header.appendChild(linkDiv)
linkDiv.appendChild(linkCv)
linkDiv.appendChild(linkSkills)
linkDiv.appendChild(linkFormacion)
linkDiv.appendChild(linkProyectos)
linkDiv.appendChild(linkContacto)
portafolio.appendChild(imgtext1)
portafolio2.appendChild(text1)
portafolio2.appendChild(descargarCv)
