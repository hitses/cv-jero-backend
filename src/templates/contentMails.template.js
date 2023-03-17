import { englishTemplate } from './templates/englishTemplate.js'
import { spanishTemplate } from './templates/spanishTemplate.js'

export async function contact(name, message, language = 'es') {
  return language === 'es'
    ? spanishTemplate(name, message)
    : englishTemplate(name, message)
}
