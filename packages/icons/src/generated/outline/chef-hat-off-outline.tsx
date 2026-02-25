/**
 * Auto-generated logo component: Chef Hat Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChefHatOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChefHatOffOutlineLogo = React.forwardRef<SVGSVGElement, ChefHatOffOutlineLogoProps>(
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
      <path d="M8.72 4.712a4 4 0 0 1 7.19 1.439a4 4 0 0 1 2.09 7.723v.126m0 4v3h-12v-7.126a4 4 0 0 1 .081 -7.796" />
  <path d="M6.161 17.009l10.839 -.009" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ChefHatOffOutlineLogo.displayName = "ChefHatOffOutlineLogo";

export const ChefHatOffOutlineLogoMetadata = {
  id: "chef-hat-off-outline",
  baseId: "chef-hat-off-outline",
  variant: "default",
  name: "Chef Hat Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChefHatOffOutlineLogo;
