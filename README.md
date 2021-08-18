# useElementSize

Pass an element `ref` that you’d like to observe. Its initial and changing `width` and `height` are returned.

Example:

```js
const ParentComponent = () => {
  const parentRef = useRef(null)
  const [width, height] = useElementSize(parentRef)

  return (
    <div ref={parentRef}>
      <MyComponent parentWidth={width} parentHeight={height} />
    </div>
  )
}
```

[Read the blog post](https://blog.nathanfitzsimmons.com/2021/05/05/window-pains-using-element-queries-in-your-react-app/)

#### TODO
- Use a single `ResizeObserver` ([Read more](https://groups.google.com/a/chromium.org/g/blink-dev/c/z6ienONUb5A/m/F5-VcUZtBAAJ))
