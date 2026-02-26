/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SubscriptProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Subscript = React.forwardRef<SVGSVGElement, SubscriptProps>(
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
      <path d="m4 5 8 8" />
  <path d="m12 5-8 8" />
  <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" />
    </svg>
  )
);
Subscript.displayName = "Subscript";
export const SubscriptMetadata = { 
  id: "subscript", 
  baseId: "subscript", 
  variant: "default", 
  name: "Subscript", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Subscript;
