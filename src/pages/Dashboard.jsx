import tw from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import { useDispatch } from 'react-redux'
import { handleModalCreateBusiness } from '@state/uiSlice'

import { Layout } from '@components/Layout'
import { Button } from '@components/Button'
import { Title } from '@components/Commons'
import BussinessList from '@components/business/BusinessList'
import CreateBusinessModal from '@components/business/CreateBusinessModal'
import DeleteBusinessModal from '@components/business/DeleteBusinessModal'
import EditBusinessModal from '@components/business/EditBusinessModal'

const Dashboard = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  return (
    <Layout>
      <div tw="flex justify-between mb-5 xl:mb-10 items-center">
        <Title>{t('business')}</Title>
        <Button onClick={() => dispatch(handleModalCreateBusiness(true))}>
          {t('create_business')}
        </Button>
      </div>
      <BussinessList />
      <CreateBusinessModal />
      <DeleteBusinessModal />
      <EditBusinessModal />
    </Layout>
  )
}

export default Dashboard
