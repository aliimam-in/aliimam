/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DraftingCompassProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DraftingCompass = React.forwardRef<SVGSVGElement, DraftingCompassProps>(
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
      <path d="m12.99 6.74 1.93 3.44" />
  <path d="M19.136 12a10 10 0 0 1-14.271 0" />
  <path d="m21 21-2.16-3.84" />
  <path d="m3 21 8.02-14.26" />
  <circle cx="12" cy="5" r="2" />
    </svg>
  )
);
DraftingCompass.displayName = "DraftingCompass";
export const DraftingCompassMetadata = { 
  id: "drafting-compass", 
  baseId: "drafting-compass", 
  variant: "default", 
  name: "Drafting Compass", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DraftingCompass;
