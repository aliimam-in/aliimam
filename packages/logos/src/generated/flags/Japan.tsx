/**
 * Auto-generated logo component: Japan (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JapanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Japan = React.forwardRef<SVGSVGElement, JapanProps>(
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
      <path d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z" fill="white" />
<path d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z" fill="#AE232F" />
    </svg>
  )
);

Japan.displayName = "Japan";

export const JapanMetadata = {
  id: "Japan",
  baseId: "Japan",
  variant: "default",
  name: "Japan",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Japan;
