/**
 * Auto-generated logo component: Chevrons Up Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsUpRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsUpRightOutlineLogo = React.forwardRef<SVGSVGElement, ChevronsUpRightOutlineLogoProps>(
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
      <path d="M9 7h8v8" />
  <path d="M5 11h8v8" />
    </svg>
  )
);

ChevronsUpRightOutlineLogo.displayName = "ChevronsUpRightOutlineLogo";

export const ChevronsUpRightOutlineLogoMetadata = {
  id: "chevrons-up-right-outline",
  baseId: "chevrons-up-right-outline",
  variant: "default",
  name: "Chevrons Up Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsUpRightOutlineLogo;
