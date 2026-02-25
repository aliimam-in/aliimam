/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ForkliftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Forklift = React.forwardRef<SVGSVGElement, ForkliftProps>(
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
      <path d="M12 12H5a2 2 0 0 0-2 2v5" />
  <path d="M15 19h7" />
  <path d="M16 19V2" />
  <path d="M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828" />
  <path d="M7 19h4" />
  <circle cx="13" cy="19" r="2" />
  <circle cx="5" cy="19" r="2" />
    </svg>
  )
);
Forklift.displayName = "Forklift";
export const ForkliftMetadata = { 
  id: "forklift", 
  baseId: "forklift", 
  variant: "default", 
  name: "Forklift", 
  category: "transportation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Forklift;
