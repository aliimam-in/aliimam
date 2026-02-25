/**
 * Auto-generated logo component: Brand Twitch Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTwitchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTwitchOutlineLogo = React.forwardRef<SVGSVGElement, BrandTwitchOutlineLogoProps>(
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
      <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1l.001 0" />
  <path d="M16 8l0 4" />
  <path d="M12 8l0 4" />
    </svg>
  )
);

BrandTwitchOutlineLogo.displayName = "BrandTwitchOutlineLogo";

export const BrandTwitchOutlineLogoMetadata = {
  id: "brand-twitch-outline",
  baseId: "brand-twitch-outline",
  variant: "default",
  name: "Brand Twitch Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTwitchOutlineLogo;
