import { englishTemplate } from './templates/englishTemplate.js'
import { spanishTemplate } from './templates/spanishTemplate.js'
import { templateToMe } from './templates/templateToMe.js'

export async function contact(name, message, language = 'es') {
  return language === 'es'
    ? spanishTemplate(name, message)
    : englishTemplate(name, message)
}

export async function contactToMe(name, message, email) {
  return templateToMe(name, message, email)
}
