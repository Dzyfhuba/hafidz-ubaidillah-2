import { getDictionary } from "@/get-dictionary"
import { i18n } from "@/i18n-config"
import PageProps from "@/types/page"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const Home = async (props: PageProps) => {
  const dictionary = await getDictionary(props.params.lang)

  return (
    <>
      <h1>{dictionary.dashboard}</h1>
    </>
  )
}

export default Home