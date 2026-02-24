/**
 * Auto-generated logo component: Chef Hat (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChefHatLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChefHatLogo = React.forwardRef<SVGSVGElement, ChefHatLogoProps>(
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
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
  <path d="M6 17h12" />
    </svg>
  )
);

ChefHatLogo.displayName = "ChefHatLogo";

export const ChefHatLogoMetadata = {
  id: "chef-hat",
  baseId: "chef-hat",
  variant: "default",
  name: "Chef Hat",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChefHatLogo;
