/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FirstlineRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FirstlineRounded = React.forwardRef<SVGSVGElement, FirstlineRoundedProps>(
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
      <path d="M14 4.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 9.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 19.5H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57V8.42C3.5 9.55 3.95 10 5.07 10H7.92C9.05 10 9.5 9.55 9.5 8.43Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FirstlineRounded.displayName = "FirstlineRounded";
export const FirstlineRoundedMetadata = { 
  id: "firstline_rounded", 
  baseId: "firstline", 
  variant: "rounded", 
  name: "Firstline", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FirstlineRounded;
