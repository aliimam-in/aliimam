/**
 * Auto-generated logo component: Copyleft Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CopyleftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CopyleftOutlineLogo = React.forwardRef<SVGSVGElement, CopyleftOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M10 9.75a3.016 3.016 0 0 1 4.163 .173a2.993 2.993 0 0 1 0 4.154a3.016 3.016 0 0 1 -4.163 .173" />
    </svg>
  )
);

CopyleftOutlineLogo.displayName = "CopyleftOutlineLogo";

export const CopyleftOutlineLogoMetadata = {
  id: "copyleft-outline",
  baseId: "copyleft-outline",
  variant: "default",
  name: "Copyleft Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CopyleftOutlineLogo;
