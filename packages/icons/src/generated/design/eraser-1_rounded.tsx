/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Eraser1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Eraser1Rounded = React.forwardRef<SVGSVGElement, Eraser1RoundedProps>(
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
      <path d="M9 22H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.90997 17.58L6.41998 21.09C7.58998 22.26 9.49997 22.26 10.66 21.09L21.09 10.66C22.26 9.48997 22.26 7.57997 21.09 6.41997L17.58 2.90997C16.41 1.73997 14.5 1.73997 13.34 2.90997L2.90997 13.34C1.73997 14.5 1.73997 16.41 2.90997 17.58Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.12 9.13L14.87 16.88" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.52002 17.66L9.16998 12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.34003 20.49L12 14.83" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Eraser1Rounded.displayName = "Eraser1Rounded";
export const Eraser1RoundedMetadata = { 
  id: "eraser-1_rounded", 
  baseId: "eraser-1", 
  variant: "rounded", 
  name: "Eraser 1", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Eraser1Rounded;
