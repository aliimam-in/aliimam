/**
 * Auto-generated logo component: Switzerland (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwitzerlandProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Switzerland = React.forwardRef<SVGSVGElement, SwitzerlandProps>(
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
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="#C93927" />
<path d="M14 10H18V22H14V10Z" fill="white" />
<path d="M22 14V18H10V14H22Z" fill="white" />
    </svg>
  )
);

Switzerland.displayName = "Switzerland";

export const SwitzerlandMetadata = {
  id: "Switzerland",
  baseId: "Switzerland",
  variant: "default",
  name: "Switzerland",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Switzerland;
