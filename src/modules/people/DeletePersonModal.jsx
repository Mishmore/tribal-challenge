import tw from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getPeople, deletePerson, selectPersonDetail } from '@state/peopleSlice'
import {
  handleLoader,
  handleModalConfirmDeletePerson,
  selectModalConfirmDeletePerson,
  handleNotification,
} from '@state/uiSlice'

import ConfirmDeleteModal from '@components/ConfirmDeleteModal'

const DeletePersonModal = () => {
  const { t } = useTranslation()

  const { id } = useParams()

  const dispatch = useDispatch()
  const modal = useSelector(selectModalConfirmDeletePerson)
  const person = useSelector(selectPersonDetail)

  const closeModal = () => {
    dispatch(handleModalConfirmDeletePerson(false))
  }

  const submit = async () => {
    closeModal()
    try {
      dispatch(handleLoader(true))
      await dispatch(
        deletePerson({ businessId: id, personId: person?.personId })
      ).unwrap()
      dispatch(getPeople(id))
      dispatch(
        handleNotification({
          message: 'person_delete_success',
          active: true,
          type: 'success',
        })
      )
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
      title={t('confirm_delete', { business_name: person?.name })}
      onDeleteAction={submit}
    />
  )
}

export default DeletePersonModal
