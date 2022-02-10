import tw from 'twin.macro'
import 'styled-components/macro'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import {
  selectPeople,
  selectPeopleStatus,
  getPeople,
  setPersonDetail,
} from '@state/peopleSlice'
import {
  handleLoader,
  handleModalConfirmDeletePerson,
  handleModalEditPerson,
} from '@state/uiSlice'

import { Item, IconWrapper, Icon, List } from '@components/ListItem'

import editIcon from '@assets/icons/edit-icon.svg'
import deleteIcon from '@assets/icons/delete-icon.svg'

const PeopleList = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const list = useSelector(selectPeople)
  const status = useSelector(selectPeopleStatus)

  useEffect(() => {
    try {
      if (status === 'idle') {
        dispatch(handleLoader(true))
        dispatch(getPeople(id))
      }
    } catch (e) {
      alert('Could not complete the process')
    } finally {
      if (status === 'succeeded' || status === 'failed')
        dispatch(handleLoader(false))
    }
  }, [dispatch, status])

  const handleEdit = (business) => {
    dispatch(setPersonDetail(business))
    dispatch(handleModalEditPerson(true))
  }

  const handleDelete = (business) => {
    dispatch(setPersonDetail(business))
    dispatch(handleModalConfirmDeletePerson(true))
  }

  return (
    <List>
      {status === 'succeeded' &&
        list.map((elm) => (
          <Item key={elm.personId}>
            <p tw="p-3 xl:p-5">{elm.name}</p>
            <p tw="p-3 xl:p-5 text-gray-600">{elm.role}</p>
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

export default PeopleList
