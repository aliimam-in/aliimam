/**
 * Auto-generated logo component: Anchor (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AnchorLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AnchorLogo = React.forwardRef<SVGSVGElement, AnchorLogoProps>(
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
      <circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
    </svg>
  )
);

AnchorLogo.displayName = "AnchorLogo";

export const AnchorLogoMetadata = {
  id: "anchor",
  baseId: "anchor",
  variant: "default",
  name: "Anchor",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AnchorLogo;
