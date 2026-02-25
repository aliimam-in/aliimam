/**
 * Auto-generated logo component: Heart Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartSearchOutlineLogo = React.forwardRef<SVGSVGElement, HeartSearchOutlineLogoProps>(
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
      <path d="M12 20l-.975 -.966l-6.525 -6.462a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.37 5.428" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

HeartSearchOutlineLogo.displayName = "HeartSearchOutlineLogo";

export const HeartSearchOutlineLogoMetadata = {
  id: "heart-search-outline",
  baseId: "heart-search-outline",
  variant: "default",
  name: "Heart Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartSearchOutlineLogo;
