/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StickerFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StickerFilled = React.forwardRef<SVGSVGElement, StickerFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M21.96 11.6598C20.77 10.9098 19.39 10.4998 17.97 10.4998C13.83 10.4998 10.47 13.8598 10.47 17.9998C10.47 19.4198 10.87 20.7898 11.62 21.9798C11.16 21.9698 10.69 21.9198 10.21 21.8498C6.09999 21.1498 2.78999 17.8198 2.10999 13.6998C0.97999 6.84977 6.81999 1.00978 13.67 2.13978C17.79 2.81978 21.12 6.12977 21.82 10.2398C21.9 10.7198 21.95 11.1998 21.96 11.6598Z" fill="currentColor"/>
<path d="M13.38 21.86C12.5 20.82 11.97 19.47 11.97 18C11.97 14.69 14.66 12 17.97 12C19.44 12 20.79 12.53 21.83 13.41" fill="currentColor"/>
    </svg>
  )
);
StickerFilled.displayName = "StickerFilled";
export const StickerFilledMetadata = { 
  id: "sticker_filled", 
  baseId: "sticker", 
  variant: "filled", 
  name: "Sticker", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StickerFilled;
