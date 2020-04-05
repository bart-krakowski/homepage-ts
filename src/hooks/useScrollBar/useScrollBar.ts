import gsap from 'gsap'
import { useState, useEffect, RefObject } from 'react'

export const useScrollBar = (scrollBar: RefObject<HTMLDivElement>, scrollBarWrapper: RefObject<HTMLDivElement>) => {
  const [scrollbarHeight, setScrollbarHeight] = useState<string>('0')
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollBarElement = scrollBar ? scrollBar.current : null
  const scrollBarWrapperElement = scrollBarWrapper ? scrollBarWrapper.current : null

  if (scrollBarElement && scrollBarWrapperElement) {
    let scrollTop = 0
    const timeline = gsap.timeline({ paused: true })
    .to(scrollBarElement, 2, {
      y: scrollBarWrapperElement.scrollHeight - scrollBarElement.scrollHeight
    })

    const proxyTween = gsap.to({defaults: {ease: 'easeNone'}}, 1, {paused: true})

    const scrollHandler = () => {

      scrollTop = window.scrollY
      const scrollPercent = Math.max(
        scrollTop / (documentHeight - windowHeight),
        0
      )

      console.log('scrollPercenSt', scrollPercent)

      proxyTween.progress(scrollPercent).pause() 
    }

    const tickHandler = () => {
      let progress = timeline.progress()
      progress += (proxyTween.progress() - progress) * 0.1
      timeline.progress(progress)
    }
    
    gsap.ticker.add(tickHandler)

    useEffect(() => {
      window.addEventListener('scroll', (): void => {
        scrollHandler()
      })
    })
  }

  const scrollbarHeightHandler = () => {
    setScrollbarHeight(`${(windowHeight / documentHeight * 100)}%`)
  }

  useEffect(() => {
    scrollbarHeightHandler()

    window.addEventListener('resize', (): void => {
      scrollbarHeightHandler()
    })
  })

  return { scrollbarHeight }
}
