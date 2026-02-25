/**
 * Auto-generated logo component: Poland (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PolandProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Poland = React.forwardRef<SVGSVGElement, PolandProps>(
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
      <path d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V15H1V24Z" fill="#CB2E40" />
<path d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z" fill="white" />
    </svg>
  )
);

Poland.displayName = "Poland";

export const PolandMetadata = {
  id: "Poland",
  baseId: "Poland",
  variant: "default",
  name: "Poland",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Poland;
