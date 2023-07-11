import {describe, it, expect} from 'vitest'
import {renderHook} from '@testing-library/react-hooks'

import {useMountedRef} from './use-mounted-ref'

describe(`useMountedRef hook`, () => {
  it(`Should be correct indicator of component mounted state`, () => {
    const {result, unmount} = renderHook(() => useMountedRef())
    expect(result.current).toEqual({current: true})
    expect(result.all).toHaveLength(1)

    unmount()
    expect(result.current).toEqual({current: false})
    expect(result.all).toHaveLength(1)
  })
})
