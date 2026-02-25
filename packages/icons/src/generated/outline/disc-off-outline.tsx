/**
 * Auto-generated logo component: Disc Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiscOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiscOffOutlineLogo = React.forwardRef<SVGSVGElement, DiscOffOutlineLogoProps>(
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
      <path d="M20.044 16.04a9 9 0 0 0 -12.082 -12.085m-2.333 1.688a9 9 0 0 0 6.371 15.357c2.491 0 4.73 -1 6.36 -2.631" />
  <path d="M11.298 11.288a1 1 0 1 0 1.402 1.427" />
  <path d="M7 12c0 -1.38 .559 -2.629 1.462 -3.534m2.607 -1.38c.302 -.056 .613 -.086 .931 -.086" />
  <path d="M12 17a4.985 4.985 0 0 0 3.551 -1.48m1.362 -2.587c.057 -.302 .087 -.614 .087 -.933" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DiscOffOutlineLogo.displayName = "DiscOffOutlineLogo";

export const DiscOffOutlineLogoMetadata = {
  id: "disc-off-outline",
  baseId: "disc-off-outline",
  variant: "default",
  name: "Disc Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiscOffOutlineLogo;
