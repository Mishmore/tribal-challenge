import tw from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { handleModalCreatePerson } from '@state/uiSlice'
import { selectBusinessDetail, getBusinessDetail } from '@state/businessSlice'

import { Layout, SectionHeader } from '@components/Layout'
import { Button, ButtomMobile } from '@components/Button'
import { Title } from '@components/Commons'
import PeopleList from '@components/people/PeopleList'
import DeletePersonModal from '@components/people/DeletePersonModal'
import CreatePersonModal from '@components/people/CreatePersonModal'
import EditPersonModal from '@components/people/EditPersonModal'

const BusinessDetail = () => {
  const { t } = useTranslation()

  const { id } = useParams()

  const dispatch = useDispatch()
  const business = useSelector(selectBusinessDetail)

  useEffect(() => {
    if (!business && id) dispatch(getBusinessDetail(id))
  }, [business, id])

  return (
    <Layout>
      <SectionHeader>
        <Title>{business?.name}</Title>
        <Button
          tw="hidden xl:block"
          onClick={() => dispatch(handleModalCreatePerson(true))}
        >
          {t('create_person')}
        </Button>
      </SectionHeader>
      <div tw="pb-10 xl:pb-0">
        <PeopleList />
      </div>
      <ButtomMobile onClick={() => dispatch(handleModalCreatePerson(true))}>
        {t('create_person')}
      </ButtomMobile>
      <DeletePersonModal />
      <CreatePersonModal />
      <EditPersonModal />
    </Layout>
  )
}

export default BusinessDetail
