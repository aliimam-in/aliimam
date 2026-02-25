/**
 * Auto-generated logo component: Balloon Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BalloonOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BalloonOffOutlineLogo = React.forwardRef<SVGSVGElement, BalloonOffOutlineLogoProps>(
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
      <path d="M14 8a2 2 0 0 0 -2 -2" />
  <path d="M7.762 3.753a6 6 0 0 1 10.238 4.247c0 1.847 -.37 3.564 -1.007 4.993m-1.59 2.42c-.967 1 -2.14 1.587 -3.403 1.587c-3.314 0 -6 -4.03 -6 -9c0 -.593 .086 -1.166 .246 -1.707" />
  <path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BalloonOffOutlineLogo.displayName = "BalloonOffOutlineLogo";

export const BalloonOffOutlineLogoMetadata = {
  id: "balloon-off-outline",
  baseId: "balloon-off-outline",
  variant: "default",
  name: "Balloon Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BalloonOffOutlineLogo;
