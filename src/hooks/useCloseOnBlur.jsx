import { useEffect } from 'react'
import { useState } from 'react'

const useCloseOnBlur = (ref) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!active) return
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false)
      }
    }
    window.addEventListener('click', handleClick)

    return () => window.removeEventListener('click', handleClick)
  }, [active])
}

export default useCloseOnBlur
