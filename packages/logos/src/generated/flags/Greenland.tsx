/**
 * Auto-generated logo component: Greenland (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GreenlandProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Greenland = React.forwardRef<SVGSVGElement, GreenlandProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M31 8C31 5.7908 29.2092 4 27 4H5C2.7908 4 1 5.7908 1 8V17H31V8Z" fill="white" />
<path d="M5 28H27C29.2092 28 31 26.2092 31 24V16H1V24C1 26.2092 2.7908 28 5 28Z" fill="#CA0A2B" />
<path d="M11 22C14.3137 22 17 19.3137 17 16C17 12.6863 14.3137 10 11 10C7.68629 10 5 12.6863 5 16C5 19.3137 7.68629 22 11 22Z" fill="white" />
<path d="M11 10C7.6863 10 5 12.6863 5 16H17C17 12.6863 14.3137 10 11 10Z" fill="#CA0A2B" />
    </svg>
  )
);

Greenland.displayName = "Greenland";

export const GreenlandMetadata = {
  id: "Greenland",
  baseId: "Greenland",
  variant: "default",
  name: "Greenland",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Greenland;
