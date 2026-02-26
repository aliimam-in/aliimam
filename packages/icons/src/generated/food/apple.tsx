/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AppleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Apple = React.forwardRef<SVGSVGElement, AppleProps>(
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
      <path d="M12 6.528V3a1 1 0 0 1 1-1h0" />
  <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />
    </svg>
  )
);
Apple.displayName = "Apple";
export const AppleMetadata = { 
  id: "apple", 
  baseId: "apple", 
  variant: "default", 
  name: "Apple", 
  category: "food", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Apple;
