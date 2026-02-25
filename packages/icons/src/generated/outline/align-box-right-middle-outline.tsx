/**
 * Auto-generated logo component: Align Box Right Middle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignBoxRightMiddleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignBoxRightMiddleOutlineLogo = React.forwardRef<SVGSVGElement, AlignBoxRightMiddleOutlineLogoProps>(
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
      <path d="M15 15h2" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M11 12h6" />
  <path d="M13 9h4" />
    </svg>
  )
);

AlignBoxRightMiddleOutlineLogo.displayName = "AlignBoxRightMiddleOutlineLogo";

export const AlignBoxRightMiddleOutlineLogoMetadata = {
  id: "align-box-right-middle-outline",
  baseId: "align-box-right-middle-outline",
  variant: "default",
  name: "Align Box Right Middle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignBoxRightMiddleOutlineLogo;
