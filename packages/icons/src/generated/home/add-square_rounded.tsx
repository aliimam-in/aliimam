/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AddSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AddSquareRounded = React.forwardRef<SVGSVGElement, AddSquareRoundedProps>(
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
      <path d="M8 12H16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V8" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AddSquareRounded.displayName = "AddSquareRounded";
export const AddSquareRoundedMetadata = { 
  id: "add-square_rounded", 
  baseId: "add-square", 
  variant: "rounded", 
  name: "Add Square", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AddSquareRounded;
