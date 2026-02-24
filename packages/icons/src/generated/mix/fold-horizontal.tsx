/**
 * Auto-generated logo component: Fold Horizontal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FoldHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FoldHorizontalLogo = React.forwardRef<SVGSVGElement, FoldHorizontalLogoProps>(
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
      <path d="M2 12h6" />
  <path d="M22 12h-6" />
  <path d="M12 2v2" />
  <path d="M12 8v2" />
  <path d="M12 14v2" />
  <path d="M12 20v2" />
  <path d="m19 9-3 3 3 3" />
  <path d="m5 15 3-3-3-3" />
    </svg>
  )
);

FoldHorizontalLogo.displayName = "FoldHorizontalLogo";

export const FoldHorizontalLogoMetadata = {
  id: "fold-horizontal",
  baseId: "fold-horizontal",
  variant: "default",
  name: "Fold Horizontal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FoldHorizontalLogo;
