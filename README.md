# useElementSize

React hook to track the size of an element. Pass an element `ref` that you’d like to observe. Its initial and changing `width` and `height` are returned.


## Example

```js
const ParentComponent = () => {
  const parentRef = useRef(null)
  const [width, height] = useElementSize(parentRef, [300, 100])

  return (
    <div ref={parentRef}>
      <MyComponent parentWidth={width} parentHeight={height} />
    </div>
  )
}
```

## Arguments

- `ref`: The element ref to watch for size changes.
- `defaultSize` (optional): Provide a default size to return if a measurement isn’t yet available. Helpful for server-side rendering.

---

[Read the blog post](https://unsure.me/window-pains-using-element-queries-in-your-react-app/)
