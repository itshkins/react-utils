import {useEffect, useMemo, useState} from 'react'

import {defaultStorage, LocalState} from '../utils/local-state'

export const useLocalState = <TState>(
  key: string,
  defaultState: TState,
  storage: Storage = defaultStorage,
): [
  TState,
  (state: TState) => void,
] => {
  const localState = useMemo(() => new LocalState(key, storage), [key, storage])
  const [state, setState] = useState(() => localState.getState(defaultState))

  useEffect(() => {
    if (state === defaultState) {
      return
    }
    localState.setState(state)
  }, [state])

  return [state, setState]
}
