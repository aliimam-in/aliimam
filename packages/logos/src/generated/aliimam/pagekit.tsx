/**
 * Auto-generated logo component: Pagekit (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PagekitProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Pagekit = React.forwardRef<SVGSVGElement, PagekitProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#212121" fillRule="nonzero" points="0 0 0 320 128 320 128 272 48 272 48 45.3333333 208 45.3333333 208 224 128 224 128 272 256 272 256 0"></polygon>
    </g>
    </svg>
  )
);

Pagekit.displayName = "Pagekit";

export const PagekitMetadata = {
  id: "pagekit",
  baseId: "pagekit",
  variant: "default",
  name: "Pagekit",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 320",
} as const;

export default Pagekit;
