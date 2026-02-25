/**
 * Auto-generated logo component: Align Justified Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignJustifiedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignJustifiedOutlineLogo = React.forwardRef<SVGSVGElement, AlignJustifiedOutlineLogoProps>(
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
  <path d="M4 12l16 0" />
  <path d="M4 18l12 0" />
    </svg>
  )
);

AlignJustifiedOutlineLogo.displayName = "AlignJustifiedOutlineLogo";

export const AlignJustifiedOutlineLogoMetadata = {
  id: "align-justified-outline",
  baseId: "align-justified-outline",
  variant: "default",
  name: "Align Justified Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignJustifiedOutlineLogo;
