/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NebulasNasFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NebulasNasFilled = React.forwardRef<SVGSVGElement, NebulasNasFilledProps>(
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
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.5 14.75L13.19 14.65L13 15.25L12 18.25L9.5 13.57L9.39999 13.38L6 12.25L8.17999 11.16L10 10.25L10.47 10.04L12 5.25L13.55 8.64999L14.5 10.75L14.09 10.96L18 12.25L13.5 14.75Z" fill="currentColor"/>
    </svg>
  )
);
NebulasNasFilled.displayName = "NebulasNasFilled";
export const NebulasNasFilledMetadata = { 
  id: "nebulas-nas_filled", 
  baseId: "nebulas-nas", 
  variant: "filled", 
  name: "Nebulas Nas", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NebulasNasFilled;
