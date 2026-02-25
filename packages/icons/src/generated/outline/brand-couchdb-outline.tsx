/**
 * Auto-generated logo component: Brand Couchdb Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCouchdbOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCouchdbOutlineLogo = React.forwardRef<SVGSVGElement, BrandCouchdbOutlineLogoProps>(
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
      <path d="M6 12h12v-2a2 2 0 0 1 2 -2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2a2 2 0 0 1 2 2v2" />
  <path d="M6 15h12" />
  <path d="M6 18h12" />
  <path d="M21 11v7" />
  <path d="M3 11v7" />
    </svg>
  )
);

BrandCouchdbOutlineLogo.displayName = "BrandCouchdbOutlineLogo";

export const BrandCouchdbOutlineLogoMetadata = {
  id: "brand-couchdb-outline",
  baseId: "brand-couchdb-outline",
  variant: "default",
  name: "Brand Couchdb Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCouchdbOutlineLogo;
