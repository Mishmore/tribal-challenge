import tw from 'twin.macro'
import 'styled-components/macro'

import { useSelector } from 'react-redux'
import { selectLoader } from '@state/uiSlice'

import logo from '@assets/images/tribal-logo.png'
import { Loader } from '@components/Loader'
import { Link } from 'react-router-dom'
import Notification from '@components/Notification'
import LanguageSwitch from './LanguageSwitch'

const LayoutBase = tw.div``

const Logo = tw.img`w-24`

const Container = tw.div`container mx-auto xl:max-w-7xl! py-6 xl:py-8 px-4 xl:px-0`

const Header = tw.div`border-b border-gray-300 sticky top-0 bg-white`

export const SectionHeader = tw.div`flex justify-between mb-5 xl:mb-10 items-center`

export const Layout = ({ children }) => {
  const loader = useSelector(selectLoader)

  return (
    <LayoutBase>
      <Header>
        <Container tw="flex justify-between items-center">
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <LanguageSwitch />
        </Container>
      </Header>
      <Container>{children}</Container>
      <Loader active={loader} />
      <Notification />
    </LayoutBase>
  )
}
