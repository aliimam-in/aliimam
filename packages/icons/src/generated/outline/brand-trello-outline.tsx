/**
 * Auto-generated logo component: Brand Trello Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTrelloOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTrelloOutlineLogo = React.forwardRef<SVGSVGElement, BrandTrelloOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M7 7h3v10h-3l0 -10" />
  <path d="M14 7h3v6h-3l0 -6" />
    </svg>
  )
);

BrandTrelloOutlineLogo.displayName = "BrandTrelloOutlineLogo";

export const BrandTrelloOutlineLogoMetadata = {
  id: "brand-trello-outline",
  baseId: "brand-trello-outline",
  variant: "default",
  name: "Brand Trello Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTrelloOutlineLogo;
