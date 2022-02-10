import tw from 'twin.macro'
import 'styled-components/macro'

export const Item = tw.li`text-sm xl:text-base flex justify-between 
items-center hover:shadow-md cursor-pointer`

export const IconWrapper = tw.div`p-3 xl:p-5 cursor-pointer`

export const Icon = tw.img`w-5 h-5`

export const List = tw.ul`divide-y divide-gray-200`
