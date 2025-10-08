"use client"

import { useEffect, useState } from "react"

interface RainbowEffectProps {
  text?: string
  className?: string
  fontSize?: number
}

export function RainbowEffect({
  fontSize = 20,
  text = "design",
  className = "",
}: RainbowEffectProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 400)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const desktopTextShadow = `
    1px 5px #FFD20E, 1px 6px #000, 
    2px 10px #E5BC08, 2px 11px #000, 
    3px 15px #EC8401, 3px 16px #000, 
    4px 20px #E65C04, 4px 21px #000, 
    5px 25px #E52E06, 5px 26px #000, 
    6px 30px #DE006B, 6px 31px #000, 
    7px 35px #CA039E, 7px 36px #000, 
    8px 40px #A203CB, 8px 41px #000, 
    9px 45px #6D01C9, 9px 46px #000, 
    10px 50px #22008F, 10px 51px #000,
    11px 55px #062F9A, 11px 56px #000,
    12px 60px #0045AC, 12px 61px #000,
    13px 65px #007DB2, 13px 66px #000, 
    14px 70px #00B8D9, 14px 71px #000
  `

  const mobileStyles = {
    textShadow: "none",
    background: "linear-gradient(to bottom, #FFD20E, #EC8401, #E65C04)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    lineHeight: "130%",
  }

  const desktopStyles = {
    color: "white",
    WebkitTextStroke: "1px #000",
    textStroke: "1px #000",
    textShadow: desktopTextShadow,
    lineHeight: "100%",
  }

  const baseStyles = {
    fontFamily: "sans-serif",
    fontStyle: "italic" as const,
    fontSize: `${fontSize}vw`,
    wordBreak: "break-all" as const,
  }

  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
        className={className}
      >
        <p
          className={className}
          style={{
            ...baseStyles,
            ...(isMobile ? mobileStyles : desktopStyles),
          }}
        >
          {text}
        </p>
      </div>
    </>
  )
}
