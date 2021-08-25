import { useLayoutEffect, useState, useRef } from 'react'

const defaultSize = [0, 0]

let resizeObserver
const callbacks = {}

/**
 * Returns current width and height of specified element.
 *
 * @param {Ref} ref element to use in size calculation
 */
const useElementSize = ref => {
  const [size, setSize] = useState(defaultSize)
  // generate id based on current number of callbacks
  const elId = useRef(`resize-${Object.keys(callbacks).length + 1}`)

  const updateSizes = entries => {
    window.requestAnimationFrame(() => {
      entries.forEach(entry => {
        const target = entry.target.current || entry.target
        callbacks[target.getAttribute('resize-id')](entry)
      })
    })
  }

  // all instances use the same observer
  resizeObserver = resizeObserver || new ResizeObserver(updateSizes)

  useLayoutEffect(() => {
    if (!ref?.current) return

    ref.current.setAttribute('resize-id', elId.current)

    // set initial size
    setSize([
      ref?.current?.getBoundingClientRect().width,
      ref?.current?.getBoundingClientRect().height,
    ])

    // add callback for this instance
    callbacks[elId.current] = entry => {
      if (!entry) return

      if (entry.contentBoxSize?.[0]) {
        setSize([entry.contentBoxSize[0].inlineSize, entry.contentBoxSize[0].blockSize])
      } else if (entries?.contentBoxSize) {
        setSize([entry.contentBoxSize.inlineSize, entry.contentBoxSize[0].blockSize])
      } else {
        setSize([entry.contentRect.width, entry.contentRect.height])
      }
    }

    // watch for size changes
    resizeObserver.observe(ref?.current)

    // eslint-disable-next-line consistent-return
    return () => {
      if (!ref?.current) return

      resizeObserver.unobserve(ref?.current)
    }
  }, [ref?.current])

  return size
}

export default useElementSize
