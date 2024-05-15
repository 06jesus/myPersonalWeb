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
