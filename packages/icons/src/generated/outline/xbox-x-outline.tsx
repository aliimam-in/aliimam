/**
 * Auto-generated logo component: Xbox X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XboxXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XboxXOutlineLogo = React.forwardRef<SVGSVGElement, XboxXOutlineLogoProps>(
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
  <path d="M9 8l6 8" />
  <path d="M15 8l-6 8" />
    </svg>
  )
);

XboxXOutlineLogo.displayName = "XboxXOutlineLogo";

export const XboxXOutlineLogoMetadata = {
  id: "xbox-x-outline",
  baseId: "xbox-x-outline",
  variant: "default",
  name: "Xbox X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XboxXOutlineLogo;
