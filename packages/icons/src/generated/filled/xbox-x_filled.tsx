/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface XboxXFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const XboxXFilled = React.forwardRef<SVGSVGElement, XboxXFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m3.6 5.2a1 1 0 0 0 -1.4 .2l-2.2 2.933l-2.2 -2.933a1 1 0 1 0 -1.6 1.2l2.55 3.4l-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2 -2.933l2.2 2.933a1 1 0 0 0 1.6 -1.2l-2.55 -3.4l2.55 -3.4a1 1 0 0 0 -.2 -1.4" />
    </svg>
  )
);
XboxXFilled.displayName = "XboxXFilled";
export const XboxXFilledMetadata = { 
  id: "xbox-x_filled", 
  baseId: "xbox-x", 
  variant: "filled", 
  name: "Xbox X", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default XboxXFilled;
