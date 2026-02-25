/**
 * Auto-generated logo component: Align Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignLeftOutlineLogo = React.forwardRef<SVGSVGElement, AlignLeftOutlineLogoProps>(
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
      <path d="M4 6l16 0" />
  <path d="M4 12l10 0" />
  <path d="M4 18l14 0" />
    </svg>
  )
);

AlignLeftOutlineLogo.displayName = "AlignLeftOutlineLogo";

export const AlignLeftOutlineLogoMetadata = {
  id: "align-left-outline",
  baseId: "align-left-outline",
  variant: "default",
  name: "Align Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignLeftOutlineLogo;
