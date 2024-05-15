const data = {
  name: 'Jesús Márquez',
  avatar: './public/WhatsApp Image 2024-04-27 at 23.02.28.jpeg',
  email: '06jesusmarquez@gmail.com',
  work: 'Full Stack Developer',
  myCv: './public/MyCV_in.pdf'
}

export { data }

const container = document.getElementById('container')

const article1 = document.createElement('article')
article1.classList.add('article1')
const section1 = document.createElement('section')
section1.id = 'portafolio'
const section2 = document.createElement('section')
section2.id = 'portafolio2'
article1.appendChild(section1)
article1.appendChild(section2)

const article2 = document.createElement('article')
article2.classList.add('article2')
const h2 = document.createElement('h2')
h2.textContent = 'Skills'
const section3 = document.createElement('section')
section3.id = 'portafolio3'
article2.appendChild(h2)
article2.appendChild(section3)

const myStudies = document.createElement('article')
myStudies.classList.add('myStudies')
const h2Studies = document.createElement('h2')
h2Studies.textContent = 'Formación'
const sectionStudies = document.createElement('section')
sectionStudies.classList.add('myStudiesS1')
myStudies.appendChild(h2Studies)
myStudies.appendChild(sectionStudies)

const myProject = document.createElement('article')
myProject.classList.add('myProject')
const sectionProject = document.createElement('section')
sectionProject.classList.add('myProjectS1')
myProject.appendChild(sectionProject)

container.appendChild(article1)
container.appendChild(article2)
container.appendChild(myStudies)
container.appendChild(myProject)
