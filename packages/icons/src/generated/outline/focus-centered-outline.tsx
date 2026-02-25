/**
 * Auto-generated logo component: Focus Centered Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FocusCenteredOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FocusCenteredOutlineLogo = React.forwardRef<SVGSVGElement, FocusCenteredOutlineLogoProps>(
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
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    </svg>
  )
);

FocusCenteredOutlineLogo.displayName = "FocusCenteredOutlineLogo";

export const FocusCenteredOutlineLogoMetadata = {
  id: "focus-centered-outline",
  baseId: "focus-centered-outline",
  variant: "default",
  name: "Focus Centered Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FocusCenteredOutlineLogo;
