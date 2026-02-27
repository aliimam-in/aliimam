/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AddCircleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AddCircleRounded = React.forwardRef<SVGSVGElement, AddCircleRoundedProps>(
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
      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V8" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AddCircleRounded.displayName = "AddCircleRounded";
export const AddCircleRoundedMetadata = { 
  id: "add-circle_rounded", 
  baseId: "add-circle", 
  variant: "rounded", 
  name: "Add Circle", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AddCircleRounded;
