/**
 * Auto-generated logo component: Aspect Ratio Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AspectRatioOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AspectRatioOffOutlineLogo = React.forwardRef<SVGSVGElement, AspectRatioOffOutlineLogoProps>(
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
      <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
  <path d="M7 12v-3h2" />
  <path d="M17 12v1m-2 2h-1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AspectRatioOffOutlineLogo.displayName = "AspectRatioOffOutlineLogo";

export const AspectRatioOffOutlineLogoMetadata = {
  id: "aspect-ratio-off-outline",
  baseId: "aspect-ratio-off-outline",
  variant: "default",
  name: "Aspect Ratio Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AspectRatioOffOutlineLogo;
