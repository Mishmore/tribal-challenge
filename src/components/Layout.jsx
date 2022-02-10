import tw from 'twin.macro'
import 'styled-components/macro'

import { useSelector } from 'react-redux'
import { selectLoader } from '@state/uiSlice'

import logo from '@assets/images/tribal-logo.png'
import { Loader } from '@components/Loader'

const LayoutBase = tw.div``

const Logo = tw.img`w-24`

const Container = tw.div`container mx-auto xl:max-w-7xl! py-6 xl:py-8 px-4 xl:px-0`

const Header = tw.div`border-b border-gray-300 sticky top-0 bg-white`

export const Layout = ({ children }) => {
  const loader = useSelector(selectLoader)

  return (
    <LayoutBase>
      <Header>
        <Container tw="flex justify-center xl:justify-start">
          <Logo src={logo} />
        </Container>
      </Header>
      <Container>{children}</Container>
      <Loader active={loader} />
    </LayoutBase>
  )
}
