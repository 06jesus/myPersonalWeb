const data = {
  name: 'Jesús Márquez',
  avatar: './public/WhatsApp Image 2024-04-27 at 23.02.28.jpeg',
  email: '06jesusmarquez@gmail.com',
  work: 'Full Stack Developer',
  myCv: './public/MyCV_in.pdf'
}

const header = document.querySelector('header')
const portafolio = document.querySelector('#portafolio')
const portafolio2 = document.querySelector('#portafolio2')
const portafolio3 = document.querySelector('#portafolio3')

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

header.appendChild(imgAvatar)
header.appendChild(titleName)
header.appendChild(subTitle)
header.appendChild(linkDiv)
linkDiv.appendChild(linkCv)
linkDiv.appendChild(linkSkills)
linkDiv.appendChild(linkFormacion)
linkDiv.appendChild(linkProyectos)
linkDiv.appendChild(linkContacto)

const cvSection = document.querySelector('#portafolio')
const skillsSection = document.querySelector('#portafolio2')
const formacionSection = document.querySelector('.myStudiesS1')
const proyectosSection = document.querySelector('.myProject')
const contactoSection = document.querySelector('.myFooter')

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

portafolio.appendChild(imgtext1)
portafolio2.appendChild(text1)
portafolio2.appendChild(descargarCv)

const skills = [
  { name: 'html5', logo: './public/html.png' },
  { name: 'css', logo: './public/css.png' },
  { name: 'js', logo: './public/js.webp' },
  { name: 'delphin', logo: './public/delphin.png' },
  { name: 'git', logo: './public/git.png' },
  { name: 'github', logo: './public/github.png' },
  { name: 'notion', logo: './public/notion.png' },
  { name: 'figma', logo: './public/figma.webp' },
  { name: 'slack', logo: './public/slack.png' },
  { name: 'Netlify', logo: './public/netlify.png' }
]

for (const skill of skills) {
  const divSkill = document.createElement('div')
  const imgSkill = document.createElement('img')
  imgSkill.alt = skill.name
  imgSkill.src = skill.logo
  portafolio3.appendChild(divSkill)
  divSkill.appendChild(imgSkill)
  const titleSkills = document.createElement('p')
  titleSkills.textContent = skill.name
  divSkill.appendChild(titleSkills)
}

const sectionStudies = document.querySelector('.myStudiesS1')
const myStudies = [
  {
    name: 'The Power MBA',
    curso: 'Programador web Full Stack',
    date: '2024',
    clase: 'tp'
  },
  {
    name: 'Universidad I. de Valencia',
    curso: 'Asesor financiero en banca e inversión',
    date: '2020-2021',
    clase: 'uiv'
  }
]
for (const studie of myStudies) {
  const studieDiv = document.createElement('div')
  studieDiv.className = studie.clase
  const studieCenter = document.createElement('h3')
  studieCenter.textContent = studie.name
  const studieTitle = document.createElement('h4')
  studieTitle.textContent = studie.curso
  sectionStudies.appendChild(studieDiv)
  studieDiv.appendChild(studieCenter)
  studieDiv.appendChild(studieTitle)
}

const articleProjects = document.querySelector('.myProject')
const titleProjects = document.createElement('h2')
titleProjects.textContent = 'Proyectos'
articleProjects.appendChild(titleProjects)
const sectionProjects = document.querySelector('.myProjectS1')
const myProjects = [
  {
    identificador: 'project1',
    nombre: 'Deseo Coffee',
    imagen: './public/project1.png',
    enlace: 'https://deseocoffee.com/'
  },
  {
    identificador: 'project2',
    nombre: 'Yamaha Motors',
    imagen: './public/project2.png',
    enlace:
      'https://66349d058c951bc678023363--dainty-syrniki-7a0062.netlify.app/'
  }
]
for (const project of myProjects) {
  const projectDiv = document.createElement('div')
  const projectImg = document.createElement('img')
  projectImg.alt = project.name
  projectImg.src = project.imagen
  const tecnologic = document.createElement('p')
  tecnologic.textContent = 'HTML5 - CSS - JAVASCRIPT - VITE'
  const aProject = document.createElement('a')
  aProject.href = project.enlace
  aProject.alt = project.nombre
  aProject.textContent = 'Ver'

  sectionProjects.appendChild(projectDiv)
  projectDiv.appendChild(projectImg)
  projectDiv.appendChild(tecnologic)
  projectDiv.appendChild(aProject)
}

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
