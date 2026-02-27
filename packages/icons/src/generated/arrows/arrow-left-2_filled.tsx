/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowLeft2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowLeft2Filled = React.forwardRef<SVGSVGElement, ArrowLeft2FilledProps>(
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
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 12.75H10.31L12.03 14.47C12.32 14.76 12.32 15.24 12.03 15.53C11.88 15.68 11.69 15.75 11.5 15.75C11.31 15.75 11.12 15.68 10.97 15.53L7.97 12.53C7.68 12.24 7.68 11.76 7.97 11.47L10.97 8.47C11.26 8.18 11.74 8.18 12.03 8.47C12.32 8.76 12.32 9.24 12.03 9.53L10.31 11.25H15.5C15.91 11.25 16.25 11.59 16.25 12C16.25 12.41 15.91 12.75 15.5 12.75Z" fill="currentColor"/>
    </svg>
  )
);
ArrowLeft2Filled.displayName = "ArrowLeft2Filled";
export const ArrowLeft2FilledMetadata = { 
  id: "arrow-left-2_filled", 
  baseId: "arrow-left-2", 
  variant: "filled", 
  name: "Arrow Left 2", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowLeft2Filled;
