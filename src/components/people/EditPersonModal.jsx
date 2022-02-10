import tw from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import { useParams } from 'react-router-dom'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useDispatch, useSelector } from 'react-redux'
import { editPerson, getPeople, selectPersonDetail } from '@state/peopleSlice'
import {
  handleLoader,
  handleModalEditPerson,
  selectModalEditPerson,
} from '@state/uiSlice'

import { Modal } from '@components/Modal'
import { Field } from '@components/Field'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useEffect } from 'react'

const Form = tw.form`flex flex-col`

const EditPersonModal = () => {
  const { t } = useTranslation()

  const { id } = useParams()

  const dispatch = useDispatch()
  const modal = useSelector(selectModalEditPerson)
  const person = useSelector(selectPersonDetail)

  const schema = yup.object({
    name: yup
      .string()
      .trim()
      .matches(/^[a-zA-Z\s]*$/, { message: 'Only letters and spaces allowed' })
      .required('Enter a valid name'),
    role: yup
      .string()
      .trim()
      .matches(/^[a-zA-Z\s]*$/, {
        message: 'Only letters and spaces allowed',
      })
      .required('Enter a valid role'),
    email: yup.string().email().required('Enter a valid email'),
    phone: yup
      .string()
      .trim()
      .matches(/^[- +()]*[0-9][- +()0-9]*$/, {
        message: 'Enter a valid format',
      })
      .required('Enter a valid number'),
    join_date: yup.string().trim().required('Enter a valid date'),
  })

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const closeModal = () => {
    reset()
    dispatch(handleModalEditPerson(false))
  }

  const submit = async (data) => {
    closeModal()
    try {
      dispatch(handleLoader(true))
      await dispatch(
        editPerson({ businessId: id, personId: person?.personId, data })
      ).unwrap()
      dispatch(getPeople(id))
      alert('persona creada')
    } catch (e) {
      alert('Could not complete the process')
    } finally {
      dispatch(handleLoader(false))
    }
  }

  useEffect(() => {
    if (person) {
      setValue('name', person.name)
      setValue('role', person.role)
      setValue('email', person.email)
      setValue('phone', person.phone)
      setValue('join_date', person.join_date)
    }
  }, [person, setValue])

  return (
    <Modal active={modal} handleClose={closeModal} title={t('edit_person')}>
      <Form onSubmit={handleSubmit(submit)}>
        <Field label={t('name')}>
          <Input form={register('name')} error={errors.name?.message} />
        </Field>
        <Field label={t('role')}>
          <Input form={register('role')} error={errors.role?.message} />
        </Field>
        <Field label={t('email')}>
          <Input form={register('email')} error={errors.email?.message} />
        </Field>
        <Field label={t('phone')}>
          <Input form={register('phone')} error={errors.phone?.message} />
        </Field>
        <Field label={t('join_date')}>
          <Input
            form={register('join_date')}
            error={errors.join_date?.message}
          />
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

export default EditPersonModal
