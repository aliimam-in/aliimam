/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronsRightLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronsRightLeft = React.forwardRef<SVGSVGElement, ChevronsRightLeftProps>(
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
      <path d="m20 17-5-5 5-5" />
  <path d="m4 17 5-5-5-5" />
    </svg>
  )
);
ChevronsRightLeft.displayName = "ChevronsRightLeft";
export const ChevronsRightLeftMetadata = { 
  id: "chevrons-right-left", 
  baseId: "chevrons-right-left", 
  variant: "default", 
  name: "Chevrons Right Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChevronsRightLeft;
