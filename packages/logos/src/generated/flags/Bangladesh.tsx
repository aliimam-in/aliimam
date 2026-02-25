/**
 * Auto-generated logo component: Bangladesh (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BangladeshProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Bangladesh = React.forwardRef<SVGSVGElement, BangladeshProps>(
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
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#2D694F" />
<path d="M16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z" fill="#E13E47" />
    </svg>
  )
);

Bangladesh.displayName = "Bangladesh";

export const BangladeshMetadata = {
  id: "Bangladesh",
  baseId: "Bangladesh",
  variant: "default",
  name: "Bangladesh",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Bangladesh;
