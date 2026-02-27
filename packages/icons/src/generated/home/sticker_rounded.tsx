/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StickerRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StickerRounded = React.forwardRef<SVGSVGElement, StickerRoundedProps>(
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
      <path d="M21.93 12.86C21.91 13.05 21.88 13.23 21.83 13.41C20.79 12.53 19.44 12 17.97 12C14.66 12 11.97 14.69 11.97 18C11.97 19.47 12.5 20.82 13.38 21.86C13.2 21.91 13.02 21.94 12.83 21.96C11.98 22.04 11.11 22 10.21 21.85C6.09999 21.15 2.78999 17.82 2.10999 13.7C0.97999 6.84999 6.81999 1.00999 13.67 2.13999C17.79 2.81999 21.12 6.12999 21.82 10.24C21.97 11.14 22.01 12.01 21.93 12.86Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.83 13.41C21.69 13.9 21.43 14.34 21.06 14.71L14.68 21.09C14.31 21.46 13.87 21.72 13.38 21.86C12.5 20.82 11.97 19.47 11.97 18C11.97 14.69 14.66 12 17.97 12C19.44 12 20.79 12.53 21.83 13.41Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
StickerRounded.displayName = "StickerRounded";
export const StickerRoundedMetadata = { 
  id: "sticker_rounded", 
  baseId: "sticker", 
  variant: "rounded", 
  name: "Sticker", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StickerRounded;
