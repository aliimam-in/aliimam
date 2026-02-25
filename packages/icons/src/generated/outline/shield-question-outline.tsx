/**
 * Auto-generated logo component: Shield Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldQuestionOutlineLogo = React.forwardRef<SVGSVGElement, ShieldQuestionOutlineLogoProps>(
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
      <path d="M15.065 19.732c-.95 .557 -1.98 .986 -3.065 1.268a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c.51 1.738 .617 3.55 .333 5.303" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

ShieldQuestionOutlineLogo.displayName = "ShieldQuestionOutlineLogo";

export const ShieldQuestionOutlineLogoMetadata = {
  id: "shield-question-outline",
  baseId: "shield-question-outline",
  variant: "default",
  name: "Shield Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldQuestionOutlineLogo;
