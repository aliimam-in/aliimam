/**
 * Auto-generated logo component: Arrow Left From Line (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftFromLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftFromLineLogo = React.forwardRef<SVGSVGElement, ArrowLeftFromLineLogoProps>(
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
      <path d="m9 6-6 6 6 6" />
  <path d="M3 12h14" />
  <path d="M21 19V5" />
    </svg>
  )
);

ArrowLeftFromLineLogo.displayName = "ArrowLeftFromLineLogo";

export const ArrowLeftFromLineLogoMetadata = {
  id: "arrow-left-from-line",
  baseId: "arrow-left-from-line",
  variant: "default",
  name: "Arrow Left From Line",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftFromLineLogo;
