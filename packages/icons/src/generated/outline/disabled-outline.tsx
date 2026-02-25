/**
 * Auto-generated logo component: Disabled Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DisabledOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DisabledOutlineLogo = React.forwardRef<SVGSVGElement, DisabledOutlineLogoProps>(
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
      <path d="M9 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M11 7l0 8l4 0l4 5" />
  <path d="M11 11l5 0" />
  <path d="M7 11.5a5 5 0 1 0 6 7.5" />
    </svg>
  )
);

DisabledOutlineLogo.displayName = "DisabledOutlineLogo";

export const DisabledOutlineLogoMetadata = {
  id: "disabled-outline",
  baseId: "disabled-outline",
  variant: "default",
  name: "Disabled Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DisabledOutlineLogo;
