/**
 * Auto-generated logo component: Fish Christianity Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FishChristianityOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FishChristianityOutlineLogo = React.forwardRef<SVGSVGElement, FishChristianityOutlineLogoProps>(
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
      <path d="M22 7s-5.646 10 -12.308 10c-3.226 .025 -6.194 -1.905 -7.692 -5c1.498 -3.095 4.466 -5.025 7.692 -5c6.662 0 12.308 10 12.308 10" />
    </svg>
  )
);

FishChristianityOutlineLogo.displayName = "FishChristianityOutlineLogo";

export const FishChristianityOutlineLogoMetadata = {
  id: "fish-christianity-outline",
  baseId: "fish-christianity-outline",
  variant: "default",
  name: "Fish Christianity Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FishChristianityOutlineLogo;
