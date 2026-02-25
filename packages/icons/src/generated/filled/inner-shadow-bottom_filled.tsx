/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface InnerShadowBottomFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const InnerShadowBottomFilled = React.forwardRef<SVGSVGElement, InnerShadowBottomFilledProps>(
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
      <path d="M5.144 4.72c3.92 -3.695 10.093 -3.625 13.927 .209c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm3.32 10.816a1 1 0 1 0 -1.414 1.414a7 7 0 0 0 9.9 0a1 1 0 0 0 -1.414 -1.414a5 5 0 0 1 -7.072 0z" />
    </svg>
  )
);
InnerShadowBottomFilled.displayName = "InnerShadowBottomFilled";
export const InnerShadowBottomFilledMetadata = { 
  id: "inner-shadow-bottom_filled", 
  baseId: "inner-shadow-bottom", 
  variant: "filled", 
  name: "Inner Shadow Bottom", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default InnerShadowBottomFilled;
