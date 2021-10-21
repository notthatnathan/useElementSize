import { useLayoutEffect, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

const defaultSize = [0, 0]

let resizeObserver
const callbacks = {}

/**
 * Returns current width and height of specified element.
 *
 * @param {Ref} ref element to use in size calculation
 */
const useElementSize = ref => {
  // returns 0 sizes for ssr
  if (typeof window === 'undefined') return [0, 0]

  const [size, setSize] = useState(defaultSize)
  // set unique id or reuse element's existing unique id
  const existingId = ref?.current?.getAttribute('resize-id')
  const testMode = process?.env?.NODE_ENV === 'test'
  const elId = useRef(existingId || `resize-${testMode ? 'test' : uuidv4()}`)

  const updateSizes = entries => {
    entries?.forEach(entry => {
      const target = entry.target.current || entry.target
      callbacks[target.getAttribute('resize-id')].forEach(c => c(entry))
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
    // more than one callback can be added for an element
    // in case of two instances watching the same ref
    callbacks[elId.current] = [
      ...callbacks[elId.current] || [],
      entry => {
      if (!entry) return

      if (entry.contentBoxSize?.[0]) {
        setSize([entry.contentBoxSize[0].inlineSize, entry.contentBoxSize[0].blockSize])
      } else if (entry?.contentBoxSize) {
        setSize([entry.contentBoxSize.inlineSize, entry.contentBoxSize[0].blockSize])
      } else {
        setSize([entry.contentRect.width, entry.contentRect.height])
      }
    }]

    // remove existing watch
    if (existingId) {
      resizeObserver.unobserve(ref?.current)
    }

    // watch for size changes
    resizeObserver.observe(ref?.current)

    // eslint-disable-next-line consistent-return
    return () => {
      if (!ref?.current) return

      resizeObserver.unobserve(ref?.current)
    }
  }, [ref?.current, existingId])

  return size
}

export default useElementSize
