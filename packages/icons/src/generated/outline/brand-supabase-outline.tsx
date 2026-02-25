/**
 * Auto-generated logo component: Brand Supabase Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSupabaseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSupabaseOutlineLogo = React.forwardRef<SVGSVGElement, BrandSupabaseOutlineLogoProps>(
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
      <path d="M4 14h8v7l8 -11h-8v-7l-8 11" />
    </svg>
  )
);

BrandSupabaseOutlineLogo.displayName = "BrandSupabaseOutlineLogo";

export const BrandSupabaseOutlineLogoMetadata = {
  id: "brand-supabase-outline",
  baseId: "brand-supabase-outline",
  variant: "default",
  name: "Brand Supabase Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSupabaseOutlineLogo;
