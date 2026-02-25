/**
 * Auto-generated logo component: Xbox B Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XboxBOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XboxBOutlineLogo = React.forwardRef<SVGSVGElement, XboxBOutlineLogoProps>(
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
      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9" />
  <path d="M13 12a2 2 0 1 1 0 4h-3v-4" />
  <path d="M13 12h-3" />
  <path d="M13 12a2 2 0 1 0 0 -4h-3v4" />
    </svg>
  )
);

XboxBOutlineLogo.displayName = "XboxBOutlineLogo";

export const XboxBOutlineLogoMetadata = {
  id: "xbox-b-outline",
  baseId: "xbox-b-outline",
  variant: "default",
  name: "Xbox B Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XboxBOutlineLogo;
