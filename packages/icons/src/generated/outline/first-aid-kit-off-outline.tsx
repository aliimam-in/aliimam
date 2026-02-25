/**
 * Auto-generated logo component: First Aid Kit Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FirstAidKitOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FirstAidKitOffOutlineLogo = React.forwardRef<SVGSVGElement, FirstAidKitOffOutlineLogoProps>(
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
      <path d="M8.595 4.577a2 2 0 0 1 1.405 -.577h4a2 2 0 0 1 2 2v2" />
  <path d="M12 8h6a2 2 0 0 1 2 2v6m-.576 3.405a2 2 0 0 1 -1.424 .595h-12a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
  <path d="M10 14h4" />
  <path d="M12 12v4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FirstAidKitOffOutlineLogo.displayName = "FirstAidKitOffOutlineLogo";

export const FirstAidKitOffOutlineLogoMetadata = {
  id: "first-aid-kit-off-outline",
  baseId: "first-aid-kit-off-outline",
  variant: "default",
  name: "First Aid Kit Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FirstAidKitOffOutlineLogo;
