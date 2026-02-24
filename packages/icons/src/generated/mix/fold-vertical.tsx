/**
 * Auto-generated logo component: Fold Vertical (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FoldVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FoldVerticalLogo = React.forwardRef<SVGSVGElement, FoldVerticalLogoProps>(
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
      <path d="M12 22v-6" />
  <path d="M12 8V2" />
  <path d="M4 12H2" />
  <path d="M10 12H8" />
  <path d="M16 12h-2" />
  <path d="M22 12h-2" />
  <path d="m15 19-3-3-3 3" />
  <path d="m15 5-3 3-3-3" />
    </svg>
  )
);

FoldVerticalLogo.displayName = "FoldVerticalLogo";

export const FoldVerticalLogoMetadata = {
  id: "fold-vertical",
  baseId: "fold-vertical",
  variant: "default",
  name: "Fold Vertical",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FoldVerticalLogo;
