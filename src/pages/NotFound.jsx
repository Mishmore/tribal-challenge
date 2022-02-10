import tw from 'twin.macro'
import 'styled-components/macro'

import { useTranslation } from 'react-i18next'
import '@translations/i18n'

import { Layout, SectionHeader } from '@components/Layout'
import { Button } from '@components/Button'
import { Title } from '@components/Commons'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SectionHeader>
        <Title>{t('not_found')}</Title>
      </SectionHeader>
      <div tw="pb-10 xl:pb-0">
        <p tw="mb-5">{t('not_found_description')}</p>
        <Link to="/">
          <Button>{t('go_home')}</Button>
        </Link>
      </div>
    </Layout>
  )
}

export default NotFound
