/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FaviconFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FaviconFilled = React.forwardRef<SVGSVGElement, FaviconFilledProps>(
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
      <path d="M19 4a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-14a4 4 0 0 1 -4 -4v-8a4 4 0 0 1 4 -4zm-13 5a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1m5 0a3 3 0 0 0 0 6a1 1 0 0 0 .117 -1.993l-.117 -.007a1 1 0 0 1 -.117 -1.993l.117 -.007a1 1 0 0 0 0 -2m5 0a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3" />
  <path d="M16 11a1 1 0 1 0 0 2a1 1 0 0 0 0 -2" />
    </svg>
  )
);
FaviconFilled.displayName = "FaviconFilled";
export const FaviconFilledMetadata = { 
  id: "favicon_filled", 
  baseId: "favicon", 
  variant: "filled", 
  name: "Favicon", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FaviconFilled;
