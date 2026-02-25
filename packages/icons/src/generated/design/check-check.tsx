/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CheckCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CheckCheck = React.forwardRef<SVGSVGElement, CheckCheckProps>(
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
      <path d="M18 6 7 17l-5-5" />
  <path d="m22 10-7.5 7.5L13 16" />
    </svg>
  )
);
CheckCheck.displayName = "CheckCheck";
export const CheckCheckMetadata = { 
  id: "check-check", 
  baseId: "check-check", 
  variant: "default", 
  name: "Check Check", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CheckCheck;
