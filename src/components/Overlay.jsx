import tw, { styled } from 'twin.macro'
import 'styled-components/macro'

export const Overlay = styled.div`
  ${tw`fixed w-full h-screen top-0 left-0 right-0 bottom-0 z-0 overflow-hidden bg-black flex flex-col
   items-center justify-center invisible opacity-0 transition-all`}
  ${({ active }) => active && tw`visible opacity-20 z-40 transition-all`}
`
