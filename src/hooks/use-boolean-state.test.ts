import {describe, it, expect} from 'vitest'
import {renderHook} from '@testing-library/react-hooks'

import {useBooleanState} from './use-boolean-state'

describe(`useBooleanState hook`, () => {
  it(`Should provide setActive function`, () => {
    const {result, rerender, unmount} = renderHook(() => useBooleanState())
    expect(result.current.value).toBe(false)
    expect(result.all).toHaveLength(1)

    result.current.setValue(false)
    rerender()
    expect(result.current.value).toBe(false)
    expect(result.all).toHaveLength(2)

    result.current.setValue(true)
    rerender()
    expect(result.current.value).toBe(true)
    expect(result.all).toHaveLength(4)

    result.current.setValue(true)
    rerender()
    expect(result.current.value).toBe(true)
    expect(result.all).toHaveLength(5)

    result.current.setValue(false)
    rerender()
    expect(result.current.value).toBe(false)
    expect(result.all).toHaveLength(7)

    result.current.setValue(false)
    rerender()
    expect(result.current.value).toBe(false)
    expect(result.all).toHaveLength(8)

    unmount()
    expect(result.all).toHaveLength(8)
  })

  it(`Should provide activate function`, () => {
    const {result, rerender, unmount} = renderHook(() => useBooleanState(false))
    expect(result.current.value).toBe(false)
    expect(result.all).toHaveLength(1)

    result.current.activate()
    rerender()
    expect(result.current.value).toBe(true)
    expect(result.all).toHaveLength(3)

    result.current.activate()
    rerender()
    expect(result.current.value).toBe(true)
    expect(result.all).toHaveLength(4)

    unmount()
    expect(result.all).toHaveLength(4)
  })

  it(`Should provide deactivate function`, () => {
    const {result, rerender, unmount} = renderHook(() => useBooleanState(true))
    expect(result.current.value).toBe(true)
    expect(result.all).toHaveLength(1)

    result.current.deactivate()
    rerender()
    expect(result.current.value).toBe(false)
    expect(result.all).toHaveLength(3)

    result.current.deactivate()
    rerender()
    expect(result.current.value).toBe(false)
    expect(result.all).toHaveLength(4)

    unmount()
    expect(result.all).toHaveLength(4)
  })

  it(`Should provide toggle function`, () => {
    const {result, rerender, unmount} = renderHook(() => useBooleanState())
    expect(result.current.value).toBe(false)
    expect(result.all).toHaveLength(1)

    result.current.toggle()
    rerender()
    expect(result.current.value).toBe(true)
    expect(result.all).toHaveLength(3)

    result.current.toggle()
    rerender()
    expect(result.current.value).toBe(false)
    expect(result.all).toHaveLength(5)

    result.current.toggle()
    rerender()
    expect(result.current.value).toBe(true)
    expect(result.all).toHaveLength(7)

    result.current.toggle()
    rerender()
    expect(result.current.value).toBe(false)
    expect(result.all).toHaveLength(9)

    unmount()
    expect(result.all).toHaveLength(9)
  })
})
