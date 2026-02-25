/**
 * Auto-generated logo component: Eye Table Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeTableOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeTableOutlineLogo = React.forwardRef<SVGSVGElement, EyeTableOutlineLogoProps>(
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
      <path d="M8 18h-.011" />
  <path d="M12 18h-.011" />
  <path d="M16 18h-.011" />
  <path d="M4 3h16" />
  <path d="M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17" />
  <path d="M14 7h-4" />
  <path d="M9 15h1" />
  <path d="M14 15h1" />
  <path d="M12 11v-4" />
    </svg>
  )
);

EyeTableOutlineLogo.displayName = "EyeTableOutlineLogo";

export const EyeTableOutlineLogoMetadata = {
  id: "eye-table-outline",
  baseId: "eye-table-outline",
  variant: "default",
  name: "Eye Table Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeTableOutlineLogo;
