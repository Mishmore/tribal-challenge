import tw from 'twin.macro'
import 'styled-components/macro'

const Label = tw.label`text-xs xl:text-sm text-gray-600 mb-2 block`

const FieldBase = tw.fieldset`mb-5`

export const Field = ({ label, children }) => {
  return (
    <FieldBase>
      <Label>{label}</Label>
      {children}
    </FieldBase>
  )
}
