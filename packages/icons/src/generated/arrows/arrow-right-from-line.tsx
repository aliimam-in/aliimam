/**
 * Auto-generated logo component: Arrow Right From Line (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightFromLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightFromLineLogo = React.forwardRef<SVGSVGElement, ArrowRightFromLineLogoProps>(
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
      <path d="M3 5v14" />
  <path d="M21 12H7" />
  <path d="m15 18 6-6-6-6" />
    </svg>
  )
);

ArrowRightFromLineLogo.displayName = "ArrowRightFromLineLogo";

export const ArrowRightFromLineLogoMetadata = {
  id: "arrow-right-from-line",
  baseId: "arrow-right-from-line",
  variant: "default",
  name: "Arrow Right From Line",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightFromLineLogo;
