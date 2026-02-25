/**
 * Auto-generated logo component: Michelin Bib Gourmand Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MichelinBibGourmandOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MichelinBibGourmandOutlineLogo = React.forwardRef<SVGSVGElement, MichelinBibGourmandOutlineLogoProps>(
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
      <path d="M4.97 20c-2.395 -1.947 -4.763 -5.245 -1.005 -8c-.52 -4 3.442 -7.5 5.524 -7.5c.347 -1 1.499 -1.5 2.54 -1.5c1.04 0 2.135 .5 2.482 1.5c2.082 0 6.044 3.5 5.524 7.5c3.758 2.755 1.39 6.053 -1.005 8" />
  <path d="M8 11a1 2 0 1 0 2 0a1 2 0 1 0 -2 0" />
  <path d="M14 11a1 2 0 1 0 2 0a1 2 0 1 0 -2 0" />
  <path d="M8 17.085c3.5 2.712 6.5 2.712 9 -1.085" />
  <path d="M13 18.5c.815 -2.337 1.881 -1.472 2 -.55" />
    </svg>
  )
);

MichelinBibGourmandOutlineLogo.displayName = "MichelinBibGourmandOutlineLogo";

export const MichelinBibGourmandOutlineLogoMetadata = {
  id: "michelin-bib-gourmand-outline",
  baseId: "michelin-bib-gourmand-outline",
  variant: "default",
  name: "Michelin Bib Gourmand Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MichelinBibGourmandOutlineLogo;
