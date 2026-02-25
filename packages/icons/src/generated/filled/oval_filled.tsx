/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OvalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OvalFilled = React.forwardRef<SVGSVGElement, OvalFilledProps>(
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
      <path d="M12 2c3.972 0 7 4.542 7 10s-3.028 10 -7 10c-3.9 0 -6.89 -4.379 -6.997 -9.703l-.003 -.297l.003 -.297c.107 -5.323 3.097 -9.703 6.997 -9.703z" />
    </svg>
  )
);
OvalFilled.displayName = "OvalFilled";
export const OvalFilledMetadata = { 
  id: "oval_filled", 
  baseId: "oval", 
  variant: "filled", 
  name: "Oval", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default OvalFilled;
