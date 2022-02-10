import tw from 'twin.macro'

import i18n from 'i18next'

const Wrapper = tw.div`overflow-hidden rounded divide-x`

const Button = tw.button`px-2 bg-white`

const LanguageSwitch = () => {
  const handleSwitch = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Wrapper>
      <Button onClick={() => handleSwitch('es')}>Español</Button>
      <Button onClick={() => handleSwitch('en')}>English</Button>
    </Wrapper>
  )
}

export default LanguageSwitch