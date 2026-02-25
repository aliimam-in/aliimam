/**
 * Auto-generated logo component: Chef Hat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChefHatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChefHatOutlineLogo = React.forwardRef<SVGSVGElement, ChefHatOutlineLogoProps>(
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
      <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151" />
  <path d="M6.161 17.009l11.839 -.009" />
    </svg>
  )
);

ChefHatOutlineLogo.displayName = "ChefHatOutlineLogo";

export const ChefHatOutlineLogoMetadata = {
  id: "chef-hat-outline",
  baseId: "chef-hat-outline",
  variant: "default",
  name: "Chef Hat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChefHatOutlineLogo;
