import {describe, it, expect} from 'vitest'
import {renderHook} from '@testing-library/react-hooks'

import {useLocalState} from './use-local-state'

describe(`useLocalState hook`, () => {
  it(`Should be correct indicator of Storage API`, () => {
    const defaultStorage = sessionStorage
    const key = `key`
    const defaultState = {value: [] as string[]}
    expect(defaultStorage.getItem(key)).toBeNull()

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
    expect(JSON.parse(defaultStorage.getItem(key) ?? `null`)).not.toBe(newState)
    expect(JSON.parse(defaultStorage.getItem(key) ?? `null`)).toEqual(newState)

    unmount()
    expect(result.all).toHaveLength(3)
  })
})
