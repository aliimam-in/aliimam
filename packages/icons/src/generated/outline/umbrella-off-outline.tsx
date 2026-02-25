/**
 * Auto-generated logo component: Umbrella Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UmbrellaOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UmbrellaOffOutlineLogo = React.forwardRef<SVGSVGElement, UmbrellaOffOutlineLogoProps>(
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
      <path d="M12 12h-8c0 -2.209 .895 -4.208 2.342 -5.656m2.382 -1.645a8 8 0 0 1 11.276 7.301l-4 0" />
  <path d="M12 12v6a2 2 0 1 0 4 0" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

UmbrellaOffOutlineLogo.displayName = "UmbrellaOffOutlineLogo";

export const UmbrellaOffOutlineLogoMetadata = {
  id: "umbrella-off-outline",
  baseId: "umbrella-off-outline",
  variant: "default",
  name: "Umbrella Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UmbrellaOffOutlineLogo;
