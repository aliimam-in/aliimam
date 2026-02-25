/**
 * Auto-generated logo component: Brand Kako Talk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandKakoTalkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandKakoTalkOutlineLogo = React.forwardRef<SVGSVGElement, BrandKakoTalkOutlineLogoProps>(
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
      <path d="M10 8v7" />
  <path d="M14 10l-2 2.5l2 2.5" />
  <path d="M12 4c4.97 0 9 3.358 9 7.5c0 4.142 -4.03 7.5 -9 7.5c-.67 0 -1.323 -.061 -1.95 -.177l-3.05 2.177l.592 -2.962c-2.741 -1.284 -4.592 -3.73 -4.592 -6.538c0 -4.142 4.03 -7.5 9 -7.5" />
    </svg>
  )
);

BrandKakoTalkOutlineLogo.displayName = "BrandKakoTalkOutlineLogo";

export const BrandKakoTalkOutlineLogoMetadata = {
  id: "brand-kako-talk-outline",
  baseId: "brand-kako-talk-outline",
  variant: "default",
  name: "Brand Kako Talk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandKakoTalkOutlineLogo;
