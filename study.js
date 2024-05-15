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
