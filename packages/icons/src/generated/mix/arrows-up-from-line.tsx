/**
 * Auto-generated logo component: Arrows Up From Line (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsUpFromLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsUpFromLineLogo = React.forwardRef<SVGSVGElement, ArrowsUpFromLineLogoProps>(
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
      <path d="m4 6 3-3 3 3" />
  <path d="M7 17V3" />
  <path d="m14 6 3-3 3 3" />
  <path d="M17 17V3" />
  <path d="M4 21h16" />
    </svg>
  )
);

ArrowsUpFromLineLogo.displayName = "ArrowsUpFromLineLogo";

export const ArrowsUpFromLineLogoMetadata = {
  id: "arrows-up-from-line",
  baseId: "arrows-up-from-line",
  variant: "default",
  name: "Arrows Up From Line",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsUpFromLineLogo;
