import gsap from 'gsap'
import { useState, useEffect, RefObject } from 'react'

export const useScrollBar = (scrollBar: RefObject<HTMLDivElement>, scrollBarWrapper: RefObject<HTMLDivElement>) => {
  const [scrollbarHeight, setScrollbarHeight] = useState<string>('0')
  let windowHeight = window.innerHeight
  let documentHeight = document.documentElement.offsetHeight

  const scrollBarElement = scrollBar ? scrollBar.current : null

  let scrollTween = gsap.to(scrollBarElement, {
    yPercent: 0,
    ease: "none",
    paused: true,
  })

  const updateScrollBar = () => {
    console.log('scrollY / (document.body.scrollHeight - innerHeight)', scrollY / (document.body.scrollHeight - innerHeight))
    scrollTween.progress(scrollY / (document.body.scrollHeight - innerHeight))
  }

  const setBarHeight = () => {
    windowHeight = window.innerHeight
    documentHeight = document.documentElement.offsetHeight

    setScrollbarHeight(`${(windowHeight / documentHeight * 100)}%`)
    const percentage = scrollBarElement ? Math.abs(((150/scrollBarElement.offsetHeight) - 1) * 100) : 0
    scrollTween = gsap.to(scrollBarElement, {
      yPercent: percentage, 
      ease: "none", 
      paused: true,
    })
  }

  useEffect(() => {
    setBarHeight()

    window.addEventListener('resize', updateScrollBar)
    window.addEventListener('resize', setBarHeight)
    window.addEventListener('scroll', updateScrollBar)
  })

  return { scrollbarHeight }
}
