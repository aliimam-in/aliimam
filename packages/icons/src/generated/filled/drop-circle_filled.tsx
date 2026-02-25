/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DropCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DropCircleFilled = React.forwardRef<SVGSVGElement, DropCircleFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-4.177 4.092a1 1 0 0 0 -1.646 0l-2.602 3.764c-1.022 1.67 -.634 3.736 .875 4.929a4.144 4.144 0 0 0 5.095 0c1.51 -1.191 1.897 -3.26 .904 -4.882z" />
    </svg>
  )
);
DropCircleFilled.displayName = "DropCircleFilled";
export const DropCircleFilledMetadata = { 
  id: "drop-circle_filled", 
  baseId: "drop-circle", 
  variant: "filled", 
  name: "Drop Circle", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DropCircleFilled;
