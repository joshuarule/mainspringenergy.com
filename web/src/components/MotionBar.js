import React, { useEffect } from 'react'
import { motion, useViewportScroll, useMotionValue } from 'framer-motion'
import { useCurrentBreakpoint } from '../hooks/useCurrentBreakpoint'

export default function MotionBar() {
  const { scrollY, scrollYProgress } = useViewportScroll()
  const x1 = useMotionValue(0)
  const x2 = useMotionValue(0)
  const x3 = useMotionValue(0)
  const x4 = useMotionValue(0)
  const isMobile = useCurrentBreakpoint().value === 'small'

  useEffect(() => {
    function updateVelocity() {
      const currentScrollY = scrollY.get()
      const currentScrollYProgress = scrollYProgress.get() * (isMobile ? 4 : 1)
      x1.set(currentScrollY * (currentScrollYProgress * 22))
      x2.set(currentScrollY * (currentScrollYProgress * 15))
      x3.set(currentScrollY * (currentScrollYProgress * 20))
      x4.set(currentScrollY * (currentScrollYProgress * 12))
    }

    const unsubscribeScroll = scrollY.onChange(updateVelocity)

    return () => {
      unsubscribeScroll()
    }
  }, [scrollY, isMobile])

  const barSize = isMobile ? 24 : 12
  const mobileIncreaseSize = 24 - 12

  // each line is an svg
  return (
    <svg
      width="1047px"
      height="228px"
      viewBox="0 0 1047 228"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%' }}
    >
      <title>Company Animation</title>
      <defs>
        <clipPath id="mask1">
          <rect x="267" y={`0`} width="780" height={barSize} />
        </clipPath>
        <clipPath id="mask2">
          <rect x="160" y="72" width="780" height={barSize} />
        </clipPath>
        <clipPath id="mask3">
          <rect x="80" y="145" width="780" height={barSize} />
        </clipPath>
        <clipPath id="mask4">
          <rect x="0" y="216" width="780" height={barSize} />
        </clipPath>
      </defs>
      <g
        clipPath={'url(#mask1)'}
        // style={{ transform: [{ translateY: '-24px' }] }}
        transform={isMobile ? `translate(0, -${barSize + barSize / 2})` : ''}
      >
        <rect fill="#2F758F" x="267" y="0" width="780" height={barSize}></rect>
        <motion.path
          style={{ translateX: x1 }}
          d={`M570,0 C569.25323,0 578.782084,0 598.586563,0 C618.391042,0 638.195521,0 658,0 L658,${
            12 + mobileIncreaseSize
          } L570,${12 + mobileIncreaseSize}L570,0 Z`}
          id="Rectangle"
          fill="#E5D3C3"
        ></motion.path>
      </g>
      <g
        clipPath={'url(#mask2)'}
        transform={isMobile ? `translate(0, -${barSize / 2})` : ''}
      >
        <rect fill="#2F758F" x="160" y="72" width="780" height={barSize}></rect>
        <motion.path
          style={{ translateX: x2 }}
          d={`M700,72 C701.464762,72 711.730794,72 730.798096,72 C749.865397,72 768.932699,72 788,72 L788,${
            84 + mobileIncreaseSize
          } L700,${84 + mobileIncreaseSize} L700,72 Z`}
          fill="#60B350"
        ></motion.path>
      </g>
      <g
        clipPath={'url(#mask3)'}
        transform={isMobile ? `translate(0, ${barSize / 2})` : ''}
      >
        <rect fill="#2F758F" x="80" y="145" width="780" height={barSize}></rect>
        <motion.path
          style={{ translateX: x3 }}
          d={`M482,145 C484.391879,145 494.966949,145 513.725212,145 C532.483475,145 551.241737,145 570,145 L570,${
            157 + mobileIncreaseSize
          } L482,${157 + mobileIncreaseSize} L482,145 Z`}
          id="Rectangle-Copy-12"
          fill="#FFE224"
        ></motion.path>
      </g>
      <g
        clipPath={'url(#mask4)'}
        transform={isMobile ? `translate(0, ${barSize + barSize / 2})` : ''}
      >
        <rect fill="#2F758F" x="0" y="216" width="780" height={barSize}></rect>
        <motion.path
          style={{ translateX: x4 }}
          d={`M281,216 C287.465586,216 299.39856,216 316.79892,216 C334.19928,216 351.59964,216 369,216 L369,${
            228 + mobileIncreaseSize
          } L281,${228 + mobileIncreaseSize} L281,216 Z`}
          id="Rectangle-Copy-13"
          fill="#B2E7F6"
        ></motion.path>
      </g>
    </svg>
  )
}
