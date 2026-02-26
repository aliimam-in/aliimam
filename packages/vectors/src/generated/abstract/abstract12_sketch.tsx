
'use client';
import React from 'react';

export interface Abstract12SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract12Sketch = React.forwardRef<SVGSVGElement, Abstract12SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 446 446"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M185.597 207.808C178.69 215.272 179.024 222.29 186.488 224.296C193.395 226.189 206.095 214.938 202.196 210.259C198.074 205.357 189.05 204.02 185.597 207.808Z" fill="currentColor"/>
<path d="M183.591 291.917C179.024 292.697 172.674 307.18 175.347 310.411C180.695 316.872 188.159 315.2 194.174 306.176C200.524 296.373 195.734 289.8 183.591 291.917Z" fill="currentColor"/>
<path d="M161.199 165.365C156.298 167.259 153.735 177.953 157.3 181.184C162.759 186.086 167.661 184.859 173.454 177.172C179.358 169.486 171.114 161.466 161.199 165.365Z" fill="currentColor"/>
<path d="M142.929 242.455C140.033 244.795 135.354 252.592 135.354 255.154C135.354 264.512 153.178 260.502 158.86 249.808C161.645 244.572 148.054 238.333 142.929 242.455Z" fill="currentColor"/>
<path d="M224.141 250.698C218.236 251.589 214.56 263.845 219.128 267.075C223.249 269.972 226.036 269.191 231.494 263.286C240.295 254.04 233.944 249.25 224.141 250.698Z" fill="currentColor"/>
<path d="M247.982 291.137C238.513 304.394 238.958 313.418 248.985 313.418C252.327 313.418 265.806 298.157 265.806 294.369C265.695 287.573 252.215 285.121 247.982 291.137Z" fill="currentColor"/>
<path d="M274.607 232.429C269.037 235.214 264.804 250.921 269.037 253.149C274.719 256.157 281.848 251.923 288.087 241.786C291.875 235.547 282.071 228.753 274.607 232.429Z" fill="currentColor"/>
<path d="M218.906 133.28C206.095 146.982 205.537 157.565 217.68 157.565C221.802 157.565 232.943 147.428 236.842 140.187C240.295 133.503 224.365 127.375 218.906 133.28Z" fill="currentColor"/>
<path d="M262.241 185.862C256.56 182.965 251.435 183.746 248.873 187.868C238.624 204.467 250.99 211.04 263.355 195.443C267.366 190.542 267.032 188.313 262.241 185.862Z" fill="currentColor"/>
<path d="M309.922 172.605C308.585 168.594 299.227 165.475 294.994 167.592C291.652 169.263 285.97 184.526 287.864 186.754C292.766 192.77 312.484 180.069 309.922 172.605Z" fill="currentColor"/>
    </svg>
  )
);

Abstract12Sketch.displayName = "Abstract12Sketch";

export const Abstract12SketchMetadata = {
  id: "abstract12_sketch",
  baseId: "abstract12",
  variant: "sketch",
  name: "Abstract12",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract12Sketch;
