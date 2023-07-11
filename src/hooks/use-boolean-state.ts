import {useState, useCallback} from 'react'

const TOGGLE = (v) => !v
const ARRAY = []

export const useBooleanState = (defaultState = false) => {
  const [value, setValue] = useState(defaultState)

  const activate = useCallback(() => {
    setValue(true)
  }, ARRAY)

  const deactivate = useCallback(() => {
    setValue(false)
  }, ARRAY)

  const toggle = useCallback(() => {
    setValue(TOGGLE)
  }, ARRAY)

  return {
    value,
    setValue,
    activate,
    deactivate,
    toggle,
  }
}
