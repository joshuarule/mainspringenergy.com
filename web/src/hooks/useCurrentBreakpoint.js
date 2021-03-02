import { useState, useEffect } from 'react'

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

const getBreakpoint = (width = getWidth()) => {
  return {
    value: width >= 1000 ? 'large' : width >= 768 ? 'medium' : 'small',
    width,
  }
}

export const useCurrentBreakpoint = () => {
  const [hasRan, setHasRan] = useState(false)
  let [breakpoint, setBreakpoint] = useState({ breakpoint: 'large' })

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    if (!hasRan) {
      setHasRan(true)

      // save current window width in the state object
      setBreakpoint(getBreakpoint())
    }

    // timeoutId for debounce mechanism
    let timeoutId = null
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setBreakpoint(getBreakpoint()), 150)
    }
    // set resize listener
    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener)
    }
  }, [hasRan])

  return breakpoint
}
