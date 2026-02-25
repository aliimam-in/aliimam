/**
 * Auto-generated logo component: Windsock Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindsockOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WindsockOutlineLogo = React.forwardRef<SVGSVGElement, WindsockOutlineLogoProps>(
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
      <path d="M6 3v18" />
  <path d="M6 11l12 -1v-4l-12 -1" />
  <path d="M10 5.5v5" />
  <path d="M14 6v4" />
  <path d="M4 21h4" />
    </svg>
  )
);

WindsockOutlineLogo.displayName = "WindsockOutlineLogo";

export const WindsockOutlineLogoMetadata = {
  id: "windsock-outline",
  baseId: "windsock-outline",
  variant: "default",
  name: "Windsock Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WindsockOutlineLogo;
