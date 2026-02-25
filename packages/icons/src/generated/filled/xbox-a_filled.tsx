/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface XboxAFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const XboxAFilled = React.forwardRef<SVGSVGElement, XboxAFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m.936 5.649c-.324 -.865 -1.548 -.865 -1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111 .035a1 1 0 0 0 1.176 -.62l.507 -1.351h3.114l.507 1.351a1 1 0 1 0 1.872 -.702zm-.936 3.199l.807 2.152h-1.614z" />
    </svg>
  )
);
XboxAFilled.displayName = "XboxAFilled";
export const XboxAFilledMetadata = { 
  id: "xbox-a_filled", 
  baseId: "xbox-a", 
  variant: "filled", 
  name: "Xbox A", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default XboxAFilled;
