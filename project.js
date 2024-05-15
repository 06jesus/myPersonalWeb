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
