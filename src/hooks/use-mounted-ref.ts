import {useRef, useEffect} from 'react'

export const useMountedRef = (defaultMounted = false) => {
  const mounted = useRef(defaultMounted)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  return mounted
}
