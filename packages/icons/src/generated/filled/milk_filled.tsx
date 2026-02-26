/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MilkFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MilkFilled = React.forwardRef<SVGSVGElement, MilkFilledProps>(
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
      <path d="M17.799 7l.144 .23a7 7 0 0 1 1.057 3.7v8.07a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.071a7 7 0 0 1 1.057 -3.698l.142 -.231zm-5.799 6a3 3 0 0 0 -2.995 2.824l-.005 .176a3 3 0 1 0 3 -3m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0 -2m2 -6h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 0 -2m1 -7a2 2 0 0 1 2 2v1h-10v-1a2 2 0 0 1 2 -2z" />
    </svg>
  )
);
MilkFilled.displayName = "MilkFilled";
export const MilkFilledMetadata = { 
  id: "milk_filled", 
  baseId: "milk", 
  variant: "filled", 
  name: "Milk", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MilkFilled;
