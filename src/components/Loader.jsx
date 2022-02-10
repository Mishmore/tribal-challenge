import tw from 'twin.macro'
import 'styled-components/macro'
import { Overlay } from './Overlay'

const Spinner = () => (
  <svg
    tw="animate-spin"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      tw="opacity-60"
      d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50Z"
      fill="#E0E2E8"
    />
    <path
      d="M100 50C100 43.4339 98.7067 36.9321 96.194 30.8658C93.6812 24.7995 89.9983 19.2876 85.3553 14.6447C80.7124 10.0017 75.2004 6.31876 69.1342 3.80602C63.0679 1.29329 56.5661 -2.87013e-07 50 0L50 10C55.2529 10 60.4543 11.0346 65.3073 13.0448C70.1604 15.055 74.5699 18.0014 78.2843 21.7157C81.9986 25.4301 84.945 29.8396 86.9552 34.6927C88.9654 39.5457 90 44.7471 90 50H100Z"
      fill="#F3F3F6"
    />
  </svg>
)

export const Loader = ({ active }) => {
  return (
    <Overlay active={active}>
      <Spinner />
    </Overlay>
  )
}
