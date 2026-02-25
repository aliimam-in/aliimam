/**
 * Auto-generated logo component: Anchor (default)
 * Category: others
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
      <path d="M12 6v16" />
  <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
  <path d="M9 11h6" />
  <circle cx="12" cy="4" r="2" />
    </svg>
  )
);

AnchorLogo.displayName = "AnchorLogo";

export const AnchorLogoMetadata = {
  id: "anchor",
  baseId: "anchor",
  variant: "default",
  name: "Anchor",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AnchorLogo;
