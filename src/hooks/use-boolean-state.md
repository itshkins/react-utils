# useBooleanState hook

A React hook that returns an object with boolean state and methods to change it.
It's common to have a boolean state in your component, e.g. isActive, isDisabled, etc.
It is __useful__ in case you are __unable to cancel async operation__, e.g. your __api client doesn't support cancellation__.

## Usage

```jsx
import {useBooleanState} from '@itshkins/react-utils'

const DisabledSandbox = () => {
  const disabled = useBooleanState()

  return (
    <div>
      <button onClick={disabled.activate} />
      <button onClick={disabled.deactivate} />
      <button onClick={disabled.toggle} />
    </div>
  )
}
```
