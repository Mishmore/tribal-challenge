import tw from 'twin.macro'
import 'styled-components/macro'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {
  selectBusinessList,
  selectBusinessListStatus,
  getBusiness,
  setBusinessDetail,
} from '@state/businessSlice'
import {
  handleLoader,
  handleModalConfirmDeleteBusiness,
  handleModalEditBusiness,
} from '@state/uiSlice'

import { Item, IconWrapper, Icon, List } from '@components/ListItem'

import editIcon from '@assets/icons/edit-icon.svg'
import deleteIcon from '@assets/icons/delete-icon.svg'

const BussinessList = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const list = useSelector(selectBusinessList)
  const status = useSelector(selectBusinessListStatus)

  useEffect(() => {
    try {
      if (status === 'idle') {
        dispatch(handleLoader(true))
        dispatch(getBusiness())
      }
    } catch (e) {
      alert('Could not complete the process')
    } finally {
      if (status === 'succeeded' || status === 'failed')
        dispatch(handleLoader(false))
    }
  }, [dispatch, status])

  const handleEdit = (business) => {
    dispatch(setBusinessDetail(business))
    dispatch(handleModalEditBusiness(true))
  }

  const handleDelete = (business) => {
    dispatch(setBusinessDetail(business))
    dispatch(handleModalConfirmDeleteBusiness(true))
  }

  const handleDetail = (business) => {
    dispatch(setBusinessDetail(business))
    navigate(business.businessId)
  }

  return (
    <List>
      {status === 'succeeded' &&
        list.map((elm) => (
          <Item key={elm.businessId}>
            <p tw="flex-grow p-3 xl:p-5" onClick={() => handleDetail(elm)}>
              {elm.name}
            </p>
            <div tw="flex h-full">
              <IconWrapper tw="mr-3 pr-0" onClick={() => handleEdit(elm)}>
                <Icon src={editIcon} alt="edit" />
              </IconWrapper>
              <IconWrapper onClick={() => handleDelete(elm)}>
                <Icon src={deleteIcon} alt="delete" />
              </IconWrapper>
            </div>
          </Item>
        ))}
    </List>
  )
}

export default BussinessList
