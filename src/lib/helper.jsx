export function handleAboutClick(e) {
    const about = document.querySelector('#about')
    about.scrollIntoView({ behavior: 'smooth', block: 'center' })
    e.preventDefault()
}

export function handleSkillsClick(e) {
    const skills = document.querySelector('#skills')
    skills.scrollIntoView({ behavior: 'smooth', block: 'center' })
    e.preventDefault()
}

export function handleContactClick(e) {
    const contact = document.querySelector('#contact')
    contact.scrollIntoView({ behavior: 'smooth', block: 'center' })
    e.preventDefault()
}