/**
 * Auto-generated logo component: Brand Snowflake Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSnowflakeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSnowflakeOutlineLogo = React.forwardRef<SVGSVGElement, BrandSnowflakeOutlineLogoProps>(
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
      <path d="M14 21v-5.5l4.5 2.5" />
  <path d="M10 21v-5.5l-4.5 2.5" />
  <path d="M3.5 14.5l4.5 -2.5l-4.5 -2.5" />
  <path d="M20.5 9.5l-4.5 2.5l4.5 2.5" />
  <path d="M10 3v5.5l-4.5 -2.5" />
  <path d="M14 3v5.5l4.5 -2.5" />
  <path d="M12 11l1 1l-1 1l-1 -1l1 -1" />
    </svg>
  )
);

BrandSnowflakeOutlineLogo.displayName = "BrandSnowflakeOutlineLogo";

export const BrandSnowflakeOutlineLogoMetadata = {
  id: "brand-snowflake-outline",
  baseId: "brand-snowflake-outline",
  variant: "default",
  name: "Brand Snowflake Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSnowflakeOutlineLogo;
