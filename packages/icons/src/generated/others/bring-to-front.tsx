/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BringToFrontProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BringToFront = React.forwardRef<SVGSVGElement, BringToFrontProps>(
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
      <rect x="8" y="8" width="8" height="8" rx="2" />
  <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
  <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
    </svg>
  )
);
BringToFront.displayName = "BringToFront";
export const BringToFrontMetadata = { 
  id: "bring-to-front", 
  baseId: "bring-to-front", 
  variant: "default", 
  name: "Bring To Front", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BringToFront;
