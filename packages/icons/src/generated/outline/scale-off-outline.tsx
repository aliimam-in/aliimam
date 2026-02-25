/**
 * Auto-generated logo component: Scale Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScaleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScaleOffOutlineLogo = React.forwardRef<SVGSVGElement, ScaleOffOutlineLogoProps>(
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
      <path d="M7 20h10" />
  <path d="M9.452 5.425l2.548 -.425l6 1" />
  <path d="M12 3v5m0 4v8" />
  <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
  <path d="M18.873 14.871a3 3 0 0 0 2.127 -2.871l-3 -6l-2.677 5.355" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ScaleOffOutlineLogo.displayName = "ScaleOffOutlineLogo";

export const ScaleOffOutlineLogoMetadata = {
  id: "scale-off-outline",
  baseId: "scale-off-outline",
  variant: "default",
  name: "Scale Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScaleOffOutlineLogo;
