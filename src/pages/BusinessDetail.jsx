import tw from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import { useDispatch, useSelector } from 'react-redux'
import { handleModalCreateBusiness } from '@state/uiSlice'
import { selectBusinessDetail } from '@state/businessSlice'

import { Layout } from '@components/Layout'
import { Button } from '@components/Button'
import { Title } from '@components/Commons'
import PeopleList from '@components/people/PeopleList'
import DeletePersonModal from '@components/people/DeletePersonModal'

const BusinessDetail = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const selectedBusiness = useSelector(selectBusinessDetail)

  return (
    <Layout>
      <div tw="flex justify-between mb-5 xl:mb-10 items-center">
        <Title>{selectedBusiness?.name}</Title>
        <Button onClick={() => dispatch(handleModalCreateBusiness(true))}>
          {t('create_person')}
        </Button>
      </div>
      <PeopleList />
      <DeletePersonModal />
    </Layout>
  )
}

export default BusinessDetail
