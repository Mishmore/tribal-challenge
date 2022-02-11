import tw from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import { Modal } from '@components/Modal'
import { Button } from '@components/Button'

const Form = tw.form`flex flex-col`

const ConfirmDeleteModal = ({ active, handleClose, title, onDeleteAction }) => {
  const { t } = useTranslation()

  return (
    <Modal active={active} handleClose={handleClose} title={title}>
      <Form>
        <div tw="flex justify-center">
          <Button
            type="button"
            tw="w-28 mx-2"
            color="neutral"
            onClick={handleClose}
          >
            {t('cancel')}
          </Button>
          <Button
            type="button"
            color="danger"
            tw="w-28 mx-2"
            onClick={onDeleteAction}
          >
            {t('delete')}
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default ConfirmDeleteModal
