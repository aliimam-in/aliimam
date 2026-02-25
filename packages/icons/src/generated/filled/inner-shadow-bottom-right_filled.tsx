/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface InnerShadowBottomRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const InnerShadowBottomRightFilled = React.forwardRef<SVGSVGElement, InnerShadowBottomRightFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm6 9a1 1 0 0 0 -1 1a5 5 0 0 1 -5 5a1 1 0 0 0 0 2a7 7 0 0 0 7 -7a1 1 0 0 0 -1 -1z" />
    </svg>
  )
);
InnerShadowBottomRightFilled.displayName = "InnerShadowBottomRightFilled";
export const InnerShadowBottomRightFilledMetadata = { 
  id: "inner-shadow-bottom-right_filled", 
  baseId: "inner-shadow-bottom-right", 
  variant: "filled", 
  name: "Inner Shadow Bottom Right", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default InnerShadowBottomRightFilled;
