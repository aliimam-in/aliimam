/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CookingPotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CookingPot = React.forwardRef<SVGSVGElement, CookingPotProps>(
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
      <path d="M2 12h20" />
  <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
  <path d="m4 8 16-4" />
  <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
    </svg>
  )
);
CookingPot.displayName = "CookingPot";
export const CookingPotMetadata = { 
  id: "cooking-pot", 
  baseId: "cooking-pot", 
  variant: "default", 
  name: "Cooking Pot", 
  category: "food", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CookingPot;
