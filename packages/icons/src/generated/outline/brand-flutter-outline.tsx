/**
 * Auto-generated logo component: Brand Flutter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFlutterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFlutterOutlineLogo = React.forwardRef<SVGSVGElement, BrandFlutterOutlineLogoProps>(
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
      <path d="M7 14l-3 -3l8 -8h6l-11 11" />
  <path d="M14 21l-5 -5l5 -5h5l-5 5l5 5l-5 0" />
    </svg>
  )
);

BrandFlutterOutlineLogo.displayName = "BrandFlutterOutlineLogo";

export const BrandFlutterOutlineLogoMetadata = {
  id: "brand-flutter-outline",
  baseId: "brand-flutter-outline",
  variant: "default",
  name: "Brand Flutter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFlutterOutlineLogo;
