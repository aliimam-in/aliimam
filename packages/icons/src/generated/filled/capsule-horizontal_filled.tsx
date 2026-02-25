/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CapsuleHorizontalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CapsuleHorizontalFilled = React.forwardRef<SVGSVGElement, CapsuleHorizontalFilledProps>(
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
      <path d="M15 5h-6a7 7 0 1 0 0 14h6a7 7 0 0 0 7 -7l-.007 -.303a7 7 0 0 0 -6.993 -6.697z" />
    </svg>
  )
);
CapsuleHorizontalFilled.displayName = "CapsuleHorizontalFilled";
export const CapsuleHorizontalFilledMetadata = { 
  id: "capsule-horizontal_filled", 
  baseId: "capsule-horizontal", 
  variant: "filled", 
  name: "Capsule Horizontal", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CapsuleHorizontalFilled;
