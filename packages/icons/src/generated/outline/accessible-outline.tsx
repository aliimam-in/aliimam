/**
 * Auto-generated logo component: Accessible Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AccessibleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AccessibleOutlineLogo = React.forwardRef<SVGSVGElement, AccessibleOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
  <path d="M11.5 7.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
    </svg>
  )
);

AccessibleOutlineLogo.displayName = "AccessibleOutlineLogo";

export const AccessibleOutlineLogoMetadata = {
  id: "accessible-outline",
  baseId: "accessible-outline",
  variant: "default",
  name: "Accessible Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AccessibleOutlineLogo;
