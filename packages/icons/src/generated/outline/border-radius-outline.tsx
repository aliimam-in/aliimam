/**
 * Auto-generated logo component: Border Radius Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderRadiusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderRadiusOutlineLogo = React.forwardRef<SVGSVGElement, BorderRadiusOutlineLogoProps>(
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
      <path d="M4 12v-4a4 4 0 0 1 4 -4h4" />
  <path d="M16 4l0 .01" />
  <path d="M20 4l0 .01" />
  <path d="M20 8l0 .01" />
  <path d="M20 12l0 .01" />
  <path d="M4 16l0 .01" />
  <path d="M20 16l0 .01" />
  <path d="M4 20l0 .01" />
  <path d="M8 20l0 .01" />
  <path d="M12 20l0 .01" />
  <path d="M16 20l0 .01" />
  <path d="M20 20l0 .01" />
    </svg>
  )
);

BorderRadiusOutlineLogo.displayName = "BorderRadiusOutlineLogo";

export const BorderRadiusOutlineLogoMetadata = {
  id: "border-radius-outline",
  baseId: "border-radius-outline",
  variant: "default",
  name: "Border Radius Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderRadiusOutlineLogo;
