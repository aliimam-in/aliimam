/**
 * Auto-generated logo component: Sdk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SdkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SdkOutlineLogo = React.forwardRef<SVGSVGElement, SdkOutlineLogoProps>(
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
      <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" />
  <path d="M17 8v8" />
  <path d="M21 8l-3 4l3 4" />
  <path d="M17 12h1" />
  <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2" />
    </svg>
  )
);

SdkOutlineLogo.displayName = "SdkOutlineLogo";

export const SdkOutlineLogoMetadata = {
  id: "sdk-outline",
  baseId: "sdk-outline",
  variant: "default",
  name: "Sdk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SdkOutlineLogo;
