/**
 * Auto-generated logo component: Align Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignRightOutlineLogo = React.forwardRef<SVGSVGElement, AlignRightOutlineLogoProps>(
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
  <path d="M10 12l10 0" />
  <path d="M6 18l14 0" />
    </svg>
  )
);

AlignRightOutlineLogo.displayName = "AlignRightOutlineLogo";

export const AlignRightOutlineLogoMetadata = {
  id: "align-right-outline",
  baseId: "align-right-outline",
  variant: "default",
  name: "Align Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignRightOutlineLogo;
