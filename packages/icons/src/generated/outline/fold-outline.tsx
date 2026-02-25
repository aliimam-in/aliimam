/**
 * Auto-generated logo component: Fold Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FoldOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FoldOutlineLogo = React.forwardRef<SVGSVGElement, FoldOutlineLogoProps>(
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
      <path d="M12 3v6l3 -3m-6 0l3 3" />
  <path d="M12 21v-6l3 3m-6 0l3 -3" />
  <path d="M4 12l1 0" />
  <path d="M9 12l1 0" />
  <path d="M14 12l1 0" />
  <path d="M19 12l1 0" />
    </svg>
  )
);

FoldOutlineLogo.displayName = "FoldOutlineLogo";

export const FoldOutlineLogoMetadata = {
  id: "fold-outline",
  baseId: "fold-outline",
  variant: "default",
  name: "Fold Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FoldOutlineLogo;
