import gsap from 'gsap'
import { useState, useEffect, RefObject } from 'react'

export const useScrollBar = (scrollBar: RefObject<HTMLDivElement>, scrollBarWrapper: RefObject<HTMLDivElement>) => {
  const [scrollbarHeight, setScrollbarHeight] = useState<string>('0')
  let windowHeight = window.innerHeight
  let documentHeight = document.documentElement.scrollHeight

  const scrollBarElement = scrollBar ? scrollBar.current : null
  const scrollBarWrapperElement = scrollBarWrapper ? scrollBarWrapper.current : null

  let scrollTop = 0
  const proxyTween = gsap.to({defaults: {ease: 'power3.inOut'}}, 1, {paused: true})
  const timeline = gsap.timeline({ paused: true })

  const scrollHandler = () => {
    scrollTop = window.scrollY
    const scrollPercent = Math.max(
      scrollTop / (documentHeight - windowHeight),
      0
    )

    proxyTween.progress(scrollPercent).pause() 
  }

  const tickHandler = () => {
    let progress = timeline.progress()
    progress += (proxyTween.progress() - progress) * 0.1
    timeline.progress(progress)
  }
  
  gsap.ticker.add(tickHandler)

  const test = () => {
    if (scrollBarElement && scrollBarWrapperElement) {
      timeline.to(scrollBarElement, 2, {
        y: scrollBarWrapperElement.scrollHeight - scrollBarElement.scrollHeight
      })
    }
  }

  const scrollbarHeightHandler = () => {
    windowHeight = window.innerHeight
    documentHeight = document.documentElement.scrollHeight

    setScrollbarHeight(`${(windowHeight / documentHeight * 100)}%`)
  }

  useEffect(() => {
    scrollbarHeightHandler()
    test()

    window.addEventListener('resize', (): void => {
      scrollbarHeightHandler()
    })

    window.addEventListener('scroll', (): void => {
      scrollHandler()
    })
  })

  return { scrollbarHeight }
}
