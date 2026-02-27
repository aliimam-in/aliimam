/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FatrowsFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FatrowsFilled = React.forwardRef<SVGSVGElement, FatrowsFilledProps>(
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
      <path d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z" fill="currentColor"/>
<path d="M12.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H12.9C14.4 10.5 15 9.86 15 8.27V4.23C15 2.64 14.4 2 12.9 2Z" fill="currentColor"/>
    </svg>
  )
);
FatrowsFilled.displayName = "FatrowsFilled";
export const FatrowsFilledMetadata = { 
  id: "fatrows_filled", 
  baseId: "fatrows", 
  variant: "filled", 
  name: "Fatrows", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FatrowsFilled;
