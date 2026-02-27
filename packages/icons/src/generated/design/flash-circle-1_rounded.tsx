/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlashCircle1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlashCircle1Rounded = React.forwardRef<SVGSVGElement, FlashCircle1RoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.67999 11.91L10.33 12.32L9.38 16.1601C9.16 17.0601 9.59998 17.36 10.36 16.83L15.54 13.24C16.17 12.8 16.08 12.29 15.33 12.1L13.68 11.69L14.63 7.85C14.85 6.95 14.41 6.65001 13.65 7.18001L8.47 10.77C7.84 11.21 7.92999 11.72 8.67999 11.91Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FlashCircle1Rounded.displayName = "FlashCircle1Rounded";
export const FlashCircle1RoundedMetadata = { 
  id: "flash-circle-1_rounded", 
  baseId: "flash-circle-1", 
  variant: "rounded", 
  name: "Flash Circle 1", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlashCircle1Rounded;
