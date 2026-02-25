/**
 * Auto-generated logo component: Anchor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AnchorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AnchorOutlineLogo = React.forwardRef<SVGSVGElement, AnchorOutlineLogoProps>(
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
      <path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2" />
  <path d="M9 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

AnchorOutlineLogo.displayName = "AnchorOutlineLogo";

export const AnchorOutlineLogoMetadata = {
  id: "anchor-outline",
  baseId: "anchor-outline",
  variant: "default",
  name: "Anchor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AnchorOutlineLogo;
