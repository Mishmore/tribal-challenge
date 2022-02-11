import tw, { styled } from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import { useSelector, useDispatch } from 'react-redux'
import { selectNotification, handleNotification } from '@state/uiSlice'

import { IconWrapper, Icon } from '@components/ListItem'

import closeIcon from '@assets/icons/close-icon.svg'
import { useEffect } from 'react'

const colors = {
  success: tw`bg-green-400`,
  warning: tw`bg-yellow-200`,
  danger: tw`bg-red-400`,
}

const NotificationBase = styled.div`
  ${tw`shadow-lg p-3 lg:p-4 rounded-lg absolute
  w-11/12 lg:w-96 z-50 bottom-5 lg:bottom-6
   grid grid-cols-12 left-2/4 lg:right-6 lg:left-auto
   transform lg:transform-none -translate-x-2/4`}
  ${({ type }) => colors[type]};
`

const Notification = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const notification = useSelector(selectNotification)
  const { active, message, type } = notification

  const handleClose = () => {
    dispatch(handleNotification({ ...notification, active: false }))
  }

  useEffect(() => {
    setTimeout(() => {
      if (notification?.active) handleClose()
    }, 2000)
  }, [notification])

  return (
    active && (
      <NotificationBase type={type}>
        <IconWrapper onClick={handleClose} tw="p-2 absolute top-2 right-2">
          <Icon src={closeIcon} tw="w-3 h-3" />
        </IconWrapper>
        <div tw="col-span-10">{t(message)}</div>
      </NotificationBase>
    )
  )
}

export default Notification
