import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import SubHeader from '../SubHeader'

export default async function NewSub({lang}) {
  const { page } = await getDictionary(lang)

  return (
    <SubHeader page={page.home}/>
  )
}
