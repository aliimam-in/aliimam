/**
 * Auto-generated logo component: Filter 2 Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2PinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2PinOutlineLogo = React.forwardRef<SVGSVGElement, Filter2PinOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M4 6h16" />
  <path d="M6 12h10" />
  <path d="M9 18h3" />
  <path d="M19 18v.01m2.121 2.111c.42 -.419 .706 -.954 .821 -1.536c.116 -.582 .056 -1.185 -.17 -1.733c-.227 -.548 -.611 -1.017 -1.105 -1.347c-.493 -.33 -1.073 -.506 -1.667 -.506c-.593 0 -1.173 .176 -1.667 .506c-.493 .33 -.878 .798 -1.105 1.347c-.227 .548 -.286 1.151 -.17 1.733c.116 .582 .402 1.116 .821 1.536c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879l-2.121 -2.121" />
    </svg>
  )
);

Filter2PinOutlineLogo.displayName = "Filter2PinOutlineLogo";

export const Filter2PinOutlineLogoMetadata = {
  id: "filter-2-pin-outline",
  baseId: "filter-2-pin-outline",
  variant: "default",
  name: "Filter 2 Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2PinOutlineLogo;
