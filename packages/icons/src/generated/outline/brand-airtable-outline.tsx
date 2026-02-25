/**
 * Auto-generated logo component: Brand Airtable Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAirtableOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAirtableOutlineLogo = React.forwardRef<SVGSVGElement, BrandAirtableOutlineLogoProps>(
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
      <path d="M3 10v8l7 -3v-2.6l-7 -2.4" />
  <path d="M3 6l9 3l9 -3l-9 -3l-9 3" />
  <path d="M14 12.3v8.7l7 -3v-8l-7 2.3" />
    </svg>
  )
);

BrandAirtableOutlineLogo.displayName = "BrandAirtableOutlineLogo";

export const BrandAirtableOutlineLogoMetadata = {
  id: "brand-airtable-outline",
  baseId: "brand-airtable-outline",
  variant: "default",
  name: "Brand Airtable Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAirtableOutlineLogo;
