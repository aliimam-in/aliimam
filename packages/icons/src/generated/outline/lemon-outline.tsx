/**
 * Auto-generated logo component: Lemon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LemonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LemonOutlineLogo = React.forwardRef<SVGSVGElement, LemonOutlineLogoProps>(
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
      <path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143" />
  <path d="M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192" />
  <path d="M10.464 10.464l4.597 4.597" />
  <path d="M10.464 10.464v6.364" />
  <path d="M10.464 10.464h6.364" />
    </svg>
  )
);

LemonOutlineLogo.displayName = "LemonOutlineLogo";

export const LemonOutlineLogoMetadata = {
  id: "lemon-outline",
  baseId: "lemon-outline",
  variant: "default",
  name: "Lemon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LemonOutlineLogo;
