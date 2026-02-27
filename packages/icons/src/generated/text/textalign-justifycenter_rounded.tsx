/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextalignJustifycenterRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextalignJustifycenterRounded = React.forwardRef<SVGSVGElement, TextalignJustifycenterRoundedProps>(
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
<path d="M3 9.5H21"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14.5H21"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 19.5H21"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TextalignJustifycenterRounded.displayName = "TextalignJustifycenterRounded";
export const TextalignJustifycenterRoundedMetadata = { 
  id: "textalign-justifycenter_rounded", 
  baseId: "textalign-justifycenter", 
  variant: "rounded", 
  name: "Textalign Justifycenter", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextalignJustifycenterRounded;
