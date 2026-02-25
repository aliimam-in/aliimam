/**
 * Auto-generated logo component: Fold Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FoldUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FoldUpOutlineLogo = React.forwardRef<SVGSVGElement, FoldUpOutlineLogoProps>(
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
      <path d="M12 13v-8l-3 3m6 0l-3 -3" />
  <path d="M9 17l1 0" />
  <path d="M14 17l1 0" />
  <path d="M19 17l1 0" />
  <path d="M4 17l1 0" />
    </svg>
  )
);

FoldUpOutlineLogo.displayName = "FoldUpOutlineLogo";

export const FoldUpOutlineLogoMetadata = {
  id: "fold-up-outline",
  baseId: "fold-up-outline",
  variant: "default",
  name: "Fold Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FoldUpOutlineLogo;
