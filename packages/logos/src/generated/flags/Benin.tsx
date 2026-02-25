/**
 * Auto-generated logo component: Benin (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BeninProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Benin = React.forwardRef<SVGSVGElement, BeninProps>(
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
      <path d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V15H1V24Z" fill="#D63034" />
<path d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z" fill="#F6D44A" />
<path d="M5 4H13V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z" fill="#3B8655" />
    </svg>
  )
);

Benin.displayName = "Benin";

export const BeninMetadata = {
  id: "Benin",
  baseId: "Benin",
  variant: "default",
  name: "Benin",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Benin;
