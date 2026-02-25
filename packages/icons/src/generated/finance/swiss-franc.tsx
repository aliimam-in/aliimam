/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SwissFrancProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SwissFranc = React.forwardRef<SVGSVGElement, SwissFrancProps>(
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
      <path d="M10 21V3h8" />
  <path d="M6 16h9" />
  <path d="M10 9.5h7" />
    </svg>
  )
);
SwissFranc.displayName = "SwissFranc";
export const SwissFrancMetadata = { 
  id: "swiss-franc", 
  baseId: "swiss-franc", 
  variant: "default", 
  name: "Swiss Franc", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SwissFranc;
