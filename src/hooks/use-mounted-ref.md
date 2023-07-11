# useMountedRef hook

A React hook that returns a ref object returns true when component is mounted and false otherwise.
It is __useful__ in case you are __unable to cancel async operation__, e.g. your __api client doesn't support cancellation__.

## Usage

```jsx
import {useMountedRef} from '@itshkins/react-utils'

const EntityForm = () => {
  const mounted = useMountedRef()

  const submit = useCallback((evt) => {
      const data = new FormData(evt.target)

      apiClient
        .createEntity(data)
        .then(() => {
          if (mounted.current) {
            // do something
          }
        })
        .catch(() => {
          if (mounted.current) {
            // do something
          }
        })
  )}, [mounted])

  return <form onSubmit={submit} />
}
```
