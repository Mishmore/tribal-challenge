import tw from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import { useDispatch, useSelector } from 'react-redux'
import {
  getBusiness,
  deleteBusiness,
  selectBusinessDetail,
} from '@state/businessSlice'
import {
  handleLoader,
  handleModalConfirmDeleteBusiness,
  selectModalConfirmDeleteBusiness,
} from '@state/uiSlice'

import ConfirmDeleteModal from '@components/ConfirmDeleteModal'

const DeleteBusinessModal = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const modal = useSelector(selectModalConfirmDeleteBusiness)
  const business = useSelector(selectBusinessDetail)

  const closeModal = () => {
    dispatch(handleModalConfirmDeleteBusiness(false))
  }

  const submit = async () => {
    closeModal()
    try {
      dispatch(handleLoader(true))
      await dispatch(deleteBusiness(business?.businessId)).unwrap()
      dispatch(getBusiness())
      alert('empresa eliminada')
    } catch (e) {
      alert('Could not complete the process')
    } finally {
      dispatch(handleLoader(false))
    }
  }

  return (
    <ConfirmDeleteModal
      active={modal}
      handleClose={closeModal}
      title={t('confirm_delete', { business_name: business?.name })}
      onDeleteAction={submit}
    />
  )
}

export default DeleteBusinessModal
