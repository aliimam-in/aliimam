/**
 * Auto-generated logo component: Bulma (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BulmaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Bulma = React.forwardRef<SVGSVGElement, BulmaProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 373"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#00D1B2" fillRule="nonzero" points="0 256 23.2727273 93.0909091 116.363636 0 232.727273 116.363636 162.909091 186.181818 256 279.272727 116.363636 372.363636"></polygon>
    </g>
    </svg>
  )
);

Bulma.displayName = "Bulma";

export const BulmaMetadata = {
  id: "bulma",
  baseId: "bulma",
  variant: "default",
  name: "Bulma",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 373",
} as const;

export default Bulma;
