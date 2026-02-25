/**
 * Auto-generated logo component: Umbrella Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UmbrellaOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UmbrellaOffLogo = React.forwardRef<SVGSVGElement, UmbrellaOffLogoProps>(
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
      <path d="M12 13v7a2 2 0 0 0 4 0" />
  <path d="M12 2v2" />
  <path d="M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" />
  <path d="m2 2 20 20" />
  <path d="M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" />
    </svg>
  )
);

UmbrellaOffLogo.displayName = "UmbrellaOffLogo";

export const UmbrellaOffLogoMetadata = {
  id: "umbrella-off",
  baseId: "umbrella-off",
  variant: "default",
  name: "Umbrella Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UmbrellaOffLogo;
