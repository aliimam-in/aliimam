/**
 * Auto-generated logo component: Umbrella Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UmbrellaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UmbrellaOutlineLogo = React.forwardRef<SVGSVGElement, UmbrellaOutlineLogoProps>(
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
      <path d="M4 12a8 8 0 0 1 16 0l-16 0" />
  <path d="M12 12v6a2 2 0 0 0 4 0" />
    </svg>
  )
);

UmbrellaOutlineLogo.displayName = "UmbrellaOutlineLogo";

export const UmbrellaOutlineLogoMetadata = {
  id: "umbrella-outline",
  baseId: "umbrella-outline",
  variant: "default",
  name: "Umbrella Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UmbrellaOutlineLogo;
