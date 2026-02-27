/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlashCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlashCircleFilled = React.forwardRef<SVGSVGElement, FlashCircleFilledProps>(
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
      <path d="M11.97 2C6.45 2 1.97 6.48 1.97 12C1.97 17.52 6.45 22 11.97 22C17.49 22 21.97 17.52 21.97 12C21.97 6.48 17.5 2 11.97 2ZM15.72 12.35L12 16.58L11.56 17.08C10.95 17.77 10.45 17.59 10.45 16.66V12.7H8.75C7.98 12.7 7.77 12.23 8.28 11.65L12 7.42L12.44 6.92C13.05 6.23 13.55 6.41 13.55 7.34V11.3H15.25C16.02 11.3 16.23 11.77 15.72 12.35Z" fill="currentColor"/>
    </svg>
  )
);
FlashCircleFilled.displayName = "FlashCircleFilled";
export const FlashCircleFilledMetadata = { 
  id: "flash-circle_filled", 
  baseId: "flash-circle", 
  variant: "filled", 
  name: "Flash Circle", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlashCircleFilled;
