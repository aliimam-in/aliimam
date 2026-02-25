/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EggFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EggFilled = React.forwardRef<SVGSVGElement, EggFilledProps>(
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
      <path d="M12.002 2c-4.173 -.008 -8.002 6.058 -8.002 12.083c0 4.708 3.25 7.917 8 7.917c4.727 -.206 8 -3.328 8 -7.917c0 -6.02 -3.825 -12.075 -7.998 -12.083z" />
    </svg>
  )
);
EggFilled.displayName = "EggFilled";
export const EggFilledMetadata = { 
  id: "egg_filled", 
  baseId: "egg", 
  variant: "filled", 
  name: "Egg", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EggFilled;
