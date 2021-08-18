import { useLayoutEffect, useState } from 'react'

/**
 * Returns current width and height of specified element.
 *
 * @param {Ref} ref element to use in size calculation
 */
const useElementSize = ref => {
  // only runs in the browser
  if (typeof window === 'undefined') return [0, 0];

  const [size, setSize] = useState([0, 0])

  const elObserver = new ResizeObserver(entries => {
    window.requestAnimationFrame(() => {
      if (entries?.[0]?.contentBoxSize?.[0]) {
        setSize([entries[0].contentBoxSize[0].inlineSize, entries[0].contentBoxSize[0].blockSize])
      } else if (entries?.contentBoxSize) {
        setSize([entries[0].contentBoxSize.inlineSize, entries[0].contentBoxSize[0].blockSize])
      } else {
        setSize([entries[0].contentRect.width, entries[0].contentRect.height])
      }
    })
  })

  useLayoutEffect(() => {
    if (!ref?.current) return

    // set initial size
    setSize([
      ref?.current?.getBoundingClientRect().width * (window.visualViewport?.scale || 1) || 0,
      ref?.current?.getBoundingClientRect().height * (window.visualViewport?.scale || 1) || 0,
    ])

    // watch for size changes
    elObserver.observe(ref?.current)

    // eslint-disable-next-line consistent-return
    return () => {
      if (!ref?.current) return

      elObserver.unobserve(ref?.current)
    }
  }, [ref?.current])

  return size
}

export default useElementSize
