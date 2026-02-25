/**
 * Auto-generated logo component: Disabled Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DisabledOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DisabledOffOutlineLogo = React.forwardRef<SVGSVGElement, DisabledOffOutlineLogoProps>(
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
      <path d="M11 7a2 2 0 1 0 -2 -2" />
  <path d="M11 11v4h4l4 5" />
  <path d="M15 11h1" />
  <path d="M7 11.5a5 5 0 1 0 6 7.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DisabledOffOutlineLogo.displayName = "DisabledOffOutlineLogo";

export const DisabledOffOutlineLogoMetadata = {
  id: "disabled-off-outline",
  baseId: "disabled-off-outline",
  variant: "default",
  name: "Disabled Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DisabledOffOutlineLogo;
