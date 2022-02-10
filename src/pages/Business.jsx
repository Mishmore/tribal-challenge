import tw from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import { useDispatch } from 'react-redux'
import { handleModalCreateBusiness } from '@state/uiSlice'

import { Layout, SectionHeader } from '@components/Layout'
import { Button, ButtomMobile } from '@components/Button'
import { Title } from '@components/Commons'
import BussinessList from '@components/business/BusinessList'
import CreateBusinessModal from '@components/business/CreateBusinessModal'
import DeleteBusinessModal from '@components/business/DeleteBusinessModal'
import EditBusinessModal from '@components/business/EditBusinessModal'

const Business = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  return (
    <Layout>
      <SectionHeader>
        <Title>{t('business')}</Title>
        <Button
          tw="hidden xl:block"
          onClick={() => dispatch(handleModalCreateBusiness(true))}
        >
          {t('create_business')}
        </Button>
      </SectionHeader>
      <div tw="pb-10 xl:pb-0">
        <BussinessList />
      </div>
      <ButtomMobile onClick={() => dispatch(handleModalCreateBusiness(true))}>
        {t('create_business')}
      </ButtomMobile>
      <CreateBusinessModal />
      <DeleteBusinessModal />
      <EditBusinessModal />
    </Layout>
  )
}

export default Business
