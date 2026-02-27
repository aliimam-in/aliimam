/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextalignCenterRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextalignCenterRounded = React.forwardRef<SVGSVGElement, TextalignCenterRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M3 4.5H21"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.26001 9.5H16.74"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14.5H21"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.26001 19.5H16.74"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TextalignCenterRounded.displayName = "TextalignCenterRounded";
export const TextalignCenterRoundedMetadata = { 
  id: "textalign-center_rounded", 
  baseId: "textalign-center", 
  variant: "rounded", 
  name: "Textalign Center", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextalignCenterRounded;
