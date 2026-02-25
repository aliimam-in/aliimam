/**
 * Auto-generated logo component: Needle Thread Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NeedleThreadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NeedleThreadOutlineLogo = React.forwardRef<SVGSVGElement, NeedleThreadOutlineLogoProps>(
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
      <path d="M3 21c-.667 -.667 3.262 -6.236 11.785 -16.709a3.5 3.5 0 1 1 5.078 4.791c-10.575 8.612 -16.196 12.585 -16.863 11.918" />
  <path d="M17.5 6.5l-1 1" />
  <path d="M17 7c-2.333 -2.667 -3.5 -4 -5 -4s-2 1 -2 2c0 4 8.161 8.406 6 11c-1.056 1.268 -3.363 1.285 -5.75 .808" />
  <path d="M5.739 15.425c-1.393 -.565 -3.739 -1.925 -3.739 -3.425" />
  <path d="M19.5 9.5l1.5 1.5" />
    </svg>
  )
);

NeedleThreadOutlineLogo.displayName = "NeedleThreadOutlineLogo";

export const NeedleThreadOutlineLogoMetadata = {
  id: "needle-thread-outline",
  baseId: "needle-thread-outline",
  variant: "default",
  name: "Needle Thread Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NeedleThreadOutlineLogo;
