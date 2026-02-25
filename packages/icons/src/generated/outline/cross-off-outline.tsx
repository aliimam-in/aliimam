/**
 * Auto-generated logo component: Cross Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrossOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CrossOffOutlineLogo = React.forwardRef<SVGSVGElement, CrossOffOutlineLogoProps>(
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
      <path d="M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CrossOffOutlineLogo.displayName = "CrossOffOutlineLogo";

export const CrossOffOutlineLogoMetadata = {
  id: "cross-off-outline",
  baseId: "cross-off-outline",
  variant: "default",
  name: "Cross Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CrossOffOutlineLogo;
