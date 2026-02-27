/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CopyFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CopyFilled = React.forwardRef<SVGSVGElement, CopyFilledProps>(
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
      <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" fill="currentColor"/>
<path d="M17.1 2H12.9C9.81693 2 8.37099 3.09409 8.06975 5.73901C8.00673 6.29235 8.465 6.75 9.02191 6.75H11.1C15.3 6.75 17.25 8.7 17.25 12.9V14.9781C17.25 15.535 17.7077 15.9933 18.261 15.9303C20.9059 15.629 22 14.1831 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z" fill="currentColor"/>
    </svg>
  )
);
CopyFilled.displayName = "CopyFilled";
export const CopyFilledMetadata = { 
  id: "copy_filled", 
  baseId: "copy", 
  variant: "filled", 
  name: "Copy", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CopyFilled;
