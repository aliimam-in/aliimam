/**
 * Auto-generated logo component: Algorand (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlgorandLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AlgorandLogo = React.forwardRef<SVGSVGElement, AlgorandLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
    <linearGradient id="c" x1="16" x2="16" y1="0" y2="30" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#FFF" stopOpacity=".5"/>
      <stop offset="100%" stopOpacity=".5"/>
    </linearGradient>
    <filter id="a" width="1.08" height="1.0966667" x="-.04" y="-.04" filterUnits="objectBoundingBox">
      <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/>
      <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
      <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/>
    </filter>
    <circle id="b" cx="16" cy="15" r="15"/>
  </defs>
  <use href="#b" filter="url(#a)" style={{display:'inline',fillRule:'evenodd'}/>
  <use href="#b" fill="#627eea" style={{display:'inline',fill:'#e5e5e5',fillOpacity:'1',fillRule:'evenodd'}/>
  <use href="#b" fill="url(#c)" style={{display:'inline',mixBlendMode:'soft-light',fill:'url(#c)',fillRule:'evenodd'}/>
  <circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097" style={{display:'inline',fill:'none',fillRule:'evenodd'}/>
  <path d="m10.331859 23 7.221238-12.601771.99115 3.256638L13.022125 23h2.83186l3.539822-6.088495L20.951328 23H23.5l-2.40708-9.061945 1.699118-2.973453h-2.548674L19.252216 7h-2.407083L7.5 23Z" style={{fill:'#000',fillOpacity:'1',stroke:'none',strokeWidth:'.141594',strokeOpacity:'1'}/>
    </svg>
  )
);

AlgorandLogo.displayName = "AlgorandLogo";

export const AlgorandLogoMetadata = {
  id: "algorand",
  baseId: "algorand",
  variant: "default",
  name: "Algorand",
  category: "mix",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default AlgorandLogo;
