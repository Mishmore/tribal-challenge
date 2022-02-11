import tw, { styled } from 'twin.macro'
import 'styled-components/macro'

const BaseButton = tw.button`rounded-full p-2.5 text-sm xl:text-base w-full xl:w-40 hover:shadow`

const colors = {
  neutral: tw`bg-gray-200 text-black`,
  black: tw`bg-black text-white!`,
  danger: tw`bg-error-100 text-error-600`,
  linear: tw`bg-white text-error-600 border border-error-600`,
}

export const Button = styled(BaseButton)`
  ${({ color = 'black' }) => colors[color]}
`

export const ButtomMobile = tw(
  Button
)`xl:hidden fixed bottom-3 left-2/4 w-10/12 transform -translate-x-2/4`
