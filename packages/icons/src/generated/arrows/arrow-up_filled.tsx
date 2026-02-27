/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpFilled = React.forwardRef<SVGSVGElement, ArrowUpFilledProps>(
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
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 12.03C15.38 12.18 15.19 12.25 15 12.25C14.81 12.25 14.62 12.18 14.47 12.03L12.75 10.31V15.5C12.75 15.91 12.41 16.25 12 16.25C11.59 16.25 11.25 15.91 11.25 15.5V10.31L9.53 12.03C9.24 12.32 8.76 12.32 8.47 12.03C8.18 11.74 8.18 11.26 8.47 10.97L11.47 7.97C11.76 7.68 12.24 7.68 12.53 7.97L15.53 10.97C15.82 11.26 15.82 11.74 15.53 12.03Z" fill="currentColor"/>
    </svg>
  )
);
ArrowUpFilled.displayName = "ArrowUpFilled";
export const ArrowUpFilledMetadata = { 
  id: "arrow-up_filled", 
  baseId: "arrow-up", 
  variant: "filled", 
  name: "Arrow Up", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUpFilled;
