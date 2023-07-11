import {describe, it, expect} from 'vitest'
import {renderHook} from '@testing-library/react-hooks'

import {useLocalState} from './use-local-state'

describe(`useLocalState hook`, () => {
  it(`Should be correct indicator of Storage API`, () => {
    const defaultStorage = sessionStorage
    const key = `my-key`
    const defaultState = {value: [] as string[]}
    expect(defaultStorage.getItem(key)).toBeNull()

    const getStorageItem = () => JSON.parse(defaultStorage.getItem(key) ?? `null`)

    const {result, rerender, unmount} = renderHook(() => useLocalState(key, defaultState, defaultStorage))
    const [firstState, setState] = result.current
    expect(firstState).toBe(defaultState)
    expect(result.all).toHaveLength(1)
    expect(defaultStorage.getItem(key)).toBeNull()

    const newState = {value: [`item`]}
    setState(newState)
    rerender()
    const [secondState] = result.current
    expect(secondState).toBe(newState)
    expect(result.all).toHaveLength(3)
    expect(getStorageItem()).not.toBe(newState)
    expect(getStorageItem()).toEqual(newState)

    unmount()
    expect(result.all).toHaveLength(3)
  })
})
