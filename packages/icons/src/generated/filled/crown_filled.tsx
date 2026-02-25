/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CrownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CrownFilled = React.forwardRef<SVGSVGElement, CrownFilledProps>(
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
      <path d="M19 19h-14c-.5 0 -.9 -.3 -1 -.8l-2 -10c0 -.4 .1 -.8 .5 -1.1c.4 -.2 .8 -.2 1.1 0l4.1 3.3l3.4 -5.1c.4 -.6 1.3 -.6 1.7 0l3.4 5.1l4.1 -3.3c.3 -.3 .8 -.3 1.1 0c.4 .2 .5 .6 .5 1.1l-2 10c0 .5 -.5 .8 -1 .8z" />
    </svg>
  )
);
CrownFilled.displayName = "CrownFilled";
export const CrownFilledMetadata = { 
  id: "crown_filled", 
  baseId: "crown", 
  variant: "filled", 
  name: "Crown", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CrownFilled;
