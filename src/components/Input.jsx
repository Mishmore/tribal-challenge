import tw from 'twin.macro'
import 'styled-components/macro'

const InputBase = tw.input`text-sm xl:text-base p-3 bg-gray-200 w-full outline-none rounded-lg`

const Error = tw.small`text-error-600`

export const Input = ({ form, error }) => {
  return (
    <div>
      <InputBase {...{ ...form }} />
      <Error>{error}</Error>
    </div>
  )
}
