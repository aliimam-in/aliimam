/**
 * Auto-generated logo component: Fold Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FoldDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FoldDownOutlineLogo = React.forwardRef<SVGSVGElement, FoldDownOutlineLogoProps>(
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
      <path d="M12 11v8l3 -3m-6 0l3 3" />
  <path d="M9 7l1 0" />
  <path d="M14 7l1 0" />
  <path d="M19 7l1 0" />
  <path d="M4 7l1 0" />
    </svg>
  )
);

FoldDownOutlineLogo.displayName = "FoldDownOutlineLogo";

export const FoldDownOutlineLogoMetadata = {
  id: "fold-down-outline",
  baseId: "fold-down-outline",
  variant: "default",
  name: "Fold Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FoldDownOutlineLogo;
