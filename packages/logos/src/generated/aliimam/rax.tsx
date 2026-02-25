/**
 * Auto-generated logo component: Rax (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RaxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Rax = React.forwardRef<SVGSVGElement, RaxProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 257"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M0.610648945,0.666966355 L63.4580282,64.7259611 L166.962032,63.9622748 C166.962032,63.9622748 190.079993,65.7495835 190.079993,94.1732312 C190.079993,122.596878 170.470166,124.642108 170.470166,124.642108 L127.738364,125.788645 L186.298915,187.01253 C186.298915,187.01253 256,171.198777 256,94.4130164 C256,17.6272558 176.607393,0 176.607393,0 L0.610648945,0.666966355 Z M0,126.312546 L89.6506243,126.312546 L217.247963,254.672336 L126.596414,256.43345 L0,126.312546 Z" fill="#F76927"></path>
    </g>
    </svg>
  )
);

Rax.displayName = "Rax";

export const RaxMetadata = {
  id: "rax",
  baseId: "rax",
  variant: "default",
  name: "Rax",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 257",
} as const;

export default Rax;
