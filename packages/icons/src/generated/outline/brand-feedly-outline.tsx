/**
 * Auto-generated logo component: Brand Feedly Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandFeedlyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandFeedlyOutlineLogo = React.forwardRef<SVGSVGElement, BrandFeedlyOutlineLogoProps>(
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
      <path d="M7.833 12.278l4.445 -4.445" />
  <path d="M10.055 14.5l2.223 -2.222" />
  <path d="M12.278 16.722l.555 -.555" />
  <path d="M19.828 14.828a4 4 0 0 0 0 -5.656l-5 -5a4 4 0 0 0 -5.656 0l-5 5a4 4 0 0 0 0 5.656l6.171 6.172h3.314l6.171 -6.172" />
    </svg>
  )
);

BrandFeedlyOutlineLogo.displayName = "BrandFeedlyOutlineLogo";

export const BrandFeedlyOutlineLogoMetadata = {
  id: "brand-feedly-outline",
  baseId: "brand-feedly-outline",
  variant: "default",
  name: "Brand Feedly Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandFeedlyOutlineLogo;
