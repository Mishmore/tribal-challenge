import tw from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useDispatch, useSelector } from 'react-redux'
import {
  updateBusiness,
  fetchBusiness,
  selectBusinessDetail,
} from '@state/businessSlice'
import {
  handleModalEditBusiness,
  selectModalEditBusiness,
  handleLoader,
} from '@state/uiSlice'

import { Modal } from '@components/Modal'
import { Field } from '@components/Field'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

const Form = tw.form`flex flex-col`

const EditBusinessModal = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const modal = useSelector(selectModalEditBusiness)
  const business = useSelector(selectBusinessDetail)

  const schema = yup.object({
    name: yup.string().trim().required('Ingrese un nombre válido'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const closeModal = () => {
    reset()
    dispatch(handleModalEditBusiness(false))
  }

  const submit = async (data) => {
    closeModal()
    try {
      dispatch(handleLoader(true))
      await dispatch(
        updateBusiness({ businessId: business?.businessId, data })
      ).unwrap()
      dispatch(fetchBusiness())
      alert('empresa editada')
    } catch (e) {
      alert('Could not complete the process')
    } finally {
      dispatch(handleLoader(false))
    }
  }

  return (
    <Modal active={modal} handleClose={closeModal} title={t('edit_business')}>
      <Form onSubmit={handleSubmit(submit)}>
        <Field label={t('business_name')}>
          <Input form={register('name')} error={errors.name?.message} />
        </Field>
        <div tw="flex justify-center">
          <Button
            type="button"
            tw="w-28 mx-2"
            color="neutral"
            onClick={closeModal}
          >
            {t('cancel')}
          </Button>
          <Button type="submit" tw="w-28 mx-2">
            {t('save')}
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default EditBusinessModal
