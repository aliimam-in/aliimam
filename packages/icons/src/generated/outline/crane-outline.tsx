/**
 * Auto-generated logo component: Crane Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CraneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CraneOutlineLogo = React.forwardRef<SVGSVGElement, CraneOutlineLogoProps>(
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
  <path d="M9 21v-18l-6 6h18" />
  <path d="M9 3l10 6" />
  <path d="M17 9v4a2 2 0 1 1 -2 2" />
    </svg>
  )
);

CraneOutlineLogo.displayName = "CraneOutlineLogo";

export const CraneOutlineLogoMetadata = {
  id: "crane-outline",
  baseId: "crane-outline",
  variant: "default",
  name: "Crane Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CraneOutlineLogo;
