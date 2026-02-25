/**
 * Auto-generated logo component: Box Align Top Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxAlignTopLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxAlignTopLeftOutlineLogo = React.forwardRef<SVGSVGElement, BoxAlignTopLeftOutlineLogoProps>(
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
      <path d="M11 5v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1" />
  <path d="M15 4h-.01" />
  <path d="M20 4h-.01" />
  <path d="M20 9h-.01" />
  <path d="M20 15h-.01" />
  <path d="M4 15h-.01" />
  <path d="M20 20h-.01" />
  <path d="M15 20h-.01" />
  <path d="M9 20h-.01" />
  <path d="M4 20h-.01" />
    </svg>
  )
);

BoxAlignTopLeftOutlineLogo.displayName = "BoxAlignTopLeftOutlineLogo";

export const BoxAlignTopLeftOutlineLogoMetadata = {
  id: "box-align-top-left-outline",
  baseId: "box-align-top-left-outline",
  variant: "default",
  name: "Box Align Top Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxAlignTopLeftOutlineLogo;
