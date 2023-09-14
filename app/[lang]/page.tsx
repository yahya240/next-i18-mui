import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { Container } from '@mui/material'
import NavBar from './components/NavBar'
import HorizentalLine from './components/HorizentalLine'
import MainCarousel from './components/MainCarousel'
import SimpleSlider from './components/SimpleSlider'
import QuiltedImageList from './components/QuiltedImageList'
import NewSub from './components/NewSub'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <Container>
      <NavBar />
      <HorizentalLine />
      <NewSub lang={lang} />
      <MainCarousel />
      <SimpleSlider />
      <QuiltedImageList />
    </Container>
  )
}
