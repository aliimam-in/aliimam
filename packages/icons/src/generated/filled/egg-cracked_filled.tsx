/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EggCrackedFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EggCrackedFilled = React.forwardRef<SVGSVGElement, EggCrackedFilledProps>(
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
      <path d="M11.236 2.066l-1.694 5.647l-.029 .123a1 1 0 0 0 .406 .978l2.764 1.974l-1.551 2.716a1 1 0 1 0 1.736 .992l2 -3.5l.052 -.105a1 1 0 0 0 -.339 -1.205l-2.918 -2.085l1.623 -5.41c3.641 1.074 6.714 6.497 6.714 11.892c0 4.59 -3.273 7.71 -8 7.917c-4.75 0 -8 -3.21 -8 -7.917c0 -5.654 3.372 -11.344 7.236 -12.017" />
    </svg>
  )
);
EggCrackedFilled.displayName = "EggCrackedFilled";
export const EggCrackedFilledMetadata = { 
  id: "egg-cracked_filled", 
  baseId: "egg-cracked", 
  variant: "filled", 
  name: "Egg Cracked", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EggCrackedFilled;
