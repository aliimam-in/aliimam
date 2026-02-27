/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AddRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AddRounded = React.forwardRef<SVGSVGElement, AddRoundedProps>(
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
      <path d="M6 12H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18V6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AddRounded.displayName = "AddRounded";
export const AddRoundedMetadata = { 
  id: "add_rounded", 
  baseId: "add", 
  variant: "rounded", 
  name: "Add", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AddRounded;
