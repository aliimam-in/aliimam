/**
 * Auto-generated logo component: Anchor Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AnchorOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AnchorOffOutlineLogo = React.forwardRef<SVGSVGElement, AnchorOffOutlineLogoProps>(
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
      <path d="M12 12v9" />
  <path d="M4 13a8 8 0 0 0 14.138 5.13m1.44 -2.56a7.99 7.99 0 0 0 .422 -2.57" />
  <path d="M21 13h-2" />
  <path d="M5 13h-2" />
  <path d="M12.866 8.873a3 3 0 1 0 -3.737 -3.747" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AnchorOffOutlineLogo.displayName = "AnchorOffOutlineLogo";

export const AnchorOffOutlineLogoMetadata = {
  id: "anchor-off-outline",
  baseId: "anchor-off-outline",
  variant: "default",
  name: "Anchor Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AnchorOffOutlineLogo;
