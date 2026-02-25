/**
 * Auto-generated logo component: Dialpad Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DialpadOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DialpadOffOutlineLogo = React.forwardRef<SVGSVGElement, DialpadOffOutlineLogoProps>(
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
      <path d="M7 7h-4v-4" />
  <path d="M17 3h4v4h-4l0 -4" />
  <path d="M10 6v-3h4v4h-3" />
  <path d="M3 10h4v4h-4l0 -4" />
  <path d="M17 13v-3h4v4h-3" />
  <path d="M14 14h-4v-4" />
  <path d="M10 17h4v4h-4l0 -4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DialpadOffOutlineLogo.displayName = "DialpadOffOutlineLogo";

export const DialpadOffOutlineLogoMetadata = {
  id: "dialpad-off-outline",
  baseId: "dialpad-off-outline",
  variant: "default",
  name: "Dialpad Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DialpadOffOutlineLogo;
