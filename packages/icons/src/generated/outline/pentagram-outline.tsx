/**
 * Auto-generated logo component: Pentagram Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PentagramOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PentagramOutlineLogo = React.forwardRef<SVGSVGElement, PentagramOutlineLogoProps>(
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
      <path d="M5.636 5.636a9 9 0 1 1 12.728 12.728a9 9 0 0 1 -12.728 -12.728" />
  <path d="M15.236 11l5.264 4h-6.5l-2 6l-2 -6h-6.5l5.276 -4l-2.056 -6.28l5.28 3.78l5.28 -3.78l-2.044 6.28" />
    </svg>
  )
);

PentagramOutlineLogo.displayName = "PentagramOutlineLogo";

export const PentagramOutlineLogoMetadata = {
  id: "pentagram-outline",
  baseId: "pentagram-outline",
  variant: "default",
  name: "Pentagram Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PentagramOutlineLogo;
