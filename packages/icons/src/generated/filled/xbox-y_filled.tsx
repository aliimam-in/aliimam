/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface XboxYFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const XboxYFilled = React.forwardRef<SVGSVGElement, XboxYFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m3.6 5.2a1 1 0 0 0 -1.4 .2l-2.2 2.933l-2.2 -2.933a1 1 0 1 0 -1.6 1.2l2.81 3.748l-.01 3.649a1 1 0 0 0 .997 1.003l.117 -.006a1 1 0 0 0 .886 -.991l.01 -3.683l2.79 -3.72a1 1 0 0 0 -.2 -1.4" />
    </svg>
  )
);
XboxYFilled.displayName = "XboxYFilled";
export const XboxYFilledMetadata = { 
  id: "xbox-y_filled", 
  baseId: "xbox-y", 
  variant: "filled", 
  name: "Xbox Y", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default XboxYFilled;
