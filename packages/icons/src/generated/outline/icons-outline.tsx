/**
 * Auto-generated logo component: Icons Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IconsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IconsOutlineLogo = React.forwardRef<SVGSVGElement, IconsOutlineLogoProps>(
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
      <path d="M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
  <path d="M2.5 21h8l-4 -7l-4 7" />
  <path d="M14 3l7 7" />
  <path d="M14 10l7 -7" />
  <path d="M14 14h7v7h-7l0 -7" />
    </svg>
  )
);

IconsOutlineLogo.displayName = "IconsOutlineLogo";

export const IconsOutlineLogoMetadata = {
  id: "icons-outline",
  baseId: "icons-outline",
  variant: "default",
  name: "Icons Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IconsOutlineLogo;
