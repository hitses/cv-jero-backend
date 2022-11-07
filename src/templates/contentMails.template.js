import { englishTemplate } from './templates/englishTemplate.js'
import { spanishTemplate } from './templates/spanishTemplate.js'

export async function contact(username, content, language = 'es') {
  return language === 'es'
    ? spanishTemplate(username, content)
    : englishTemplate(username, content)
}
