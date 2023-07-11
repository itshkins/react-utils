# useMountedRef hook

A React hook that returns state that persists between page reloads.
It supports any storage that implements Storage interface, e.g. localStorage, sessionStorage, etc.

## Usage

```jsx
import {useLocalState} from '@itshkins/react-utils'

const LocalStateSandbox = () => {
  const [disabled, setDisabled] = useLocalState(`my-button-disabled`, {first: false, second: true}, sessionStorage)

  return (
    <div>
      <button onClick={() => setDisabled({first: true, second: false})} disabled={disabled.first} />
      <button onClick={() => setDisabled({first: false, second: true})} disabled={disabled.second} />
    </div>
  )
}
```
