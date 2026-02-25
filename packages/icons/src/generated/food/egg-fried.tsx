/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EggFriedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EggFried = React.forwardRef<SVGSVGElement, EggFriedProps>(
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
      <circle cx="11.5" cy="12.5" r="3.5" />
  <path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" />
    </svg>
  )
);
EggFried.displayName = "EggFried";
export const EggFriedMetadata = { 
  id: "egg-fried", 
  baseId: "egg-fried", 
  variant: "default", 
  name: "Egg Fried", 
  category: "food", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EggFried;
