import tw, { styled } from 'twin.macro'
import 'styled-components/macro'
import { Overlay } from './Overlay'

const ModalWrapper = tw.div`absolute`

const BaseModal = styled.div`
  ${tw`absolute bg-white rounded-lg shadow-lg p-5 xl:p-8 right-0 top-12 w-11/12 xl:w-96 z-50 invisible
  fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
  ${({ active }) => active && tw`visible`}
`

const TitleModal = tw.h3`text-base xl:text-xl font-bold text-center mb-4 xl:mb-6`

export const Modal = ({ children, active, handleClose, title }) => {
  return (
    <ModalWrapper>
      <Overlay onClick={handleClose} active={active} />
      <BaseModal active={active}>
        <TitleModal>{title}</TitleModal>
        {children}
      </BaseModal>
    </ModalWrapper>
  )
}
