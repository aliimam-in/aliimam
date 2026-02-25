/**
 * Auto-generated logo component: Forklift Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ForkliftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ForkliftOutlineLogo = React.forwardRef<SVGSVGElement, ForkliftOutlineLogoProps>(
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
      <path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 17l5 0" />
  <path d="M3 17v-6h13v6" />
  <path d="M5 11v-4h4" />
  <path d="M9 11v-6h4l3 6" />
  <path d="M22 15h-3v-10" />
  <path d="M16 13l3 0" />
    </svg>
  )
);

ForkliftOutlineLogo.displayName = "ForkliftOutlineLogo";

export const ForkliftOutlineLogoMetadata = {
  id: "forklift-outline",
  baseId: "forklift-outline",
  variant: "default",
  name: "Forklift Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ForkliftOutlineLogo;
