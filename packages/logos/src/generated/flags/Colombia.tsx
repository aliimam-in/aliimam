/**
 * Auto-generated logo component: Colombia (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColombiaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Colombia = React.forwardRef<SVGSVGElement, ColombiaProps>(
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
      <path d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V21H1V24Z" fill="#B92932" />
<path d="M1 15H31V22H1V15Z" fill="#0F2C83" />
<path d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z" fill="#F8D047" />
    </svg>
  )
);

Colombia.displayName = "Colombia";

export const ColombiaMetadata = {
  id: "Colombia",
  baseId: "Colombia",
  variant: "default",
  name: "Colombia",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default Colombia;
