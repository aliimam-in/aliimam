/**
 * Auto-generated logo component: Slice Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SliceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SliceOutlineLogo = React.forwardRef<SVGSVGElement, SliceOutlineLogoProps>(
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
      <path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" />
    </svg>
  )
);

SliceOutlineLogo.displayName = "SliceOutlineLogo";

export const SliceOutlineLogoMetadata = {
  id: "slice-outline",
  baseId: "slice-outline",
  variant: "default",
  name: "Slice Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SliceOutlineLogo;
