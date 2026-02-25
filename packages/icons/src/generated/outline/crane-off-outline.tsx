/**
 * Auto-generated logo component: Crane Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CraneOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CraneOffOutlineLogo = React.forwardRef<SVGSVGElement, CraneOffOutlineLogoProps>(
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
      <path d="M6 21h6" />
  <path d="M9 21v-12" />
  <path d="M9 5v-2l-1 1" />
  <path d="M6 6l-3 3h6" />
  <path d="M13 9h8" />
  <path d="M9 3l10 6" />
  <path d="M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1 -2 -2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CraneOffOutlineLogo.displayName = "CraneOffOutlineLogo";

export const CraneOffOutlineLogoMetadata = {
  id: "crane-off-outline",
  baseId: "crane-off-outline",
  variant: "default",
  name: "Crane Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CraneOffOutlineLogo;
