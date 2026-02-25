/**
 * Auto-generated logo component: Gymnastics Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GymnasticsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GymnasticsOutlineLogo = React.forwardRef<SVGSVGElement, GymnasticsOutlineLogoProps>(
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
      <path d="M7 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M13 21l1 -9l7 -6" />
  <path d="M3 11h6l5 1" />
  <path d="M11.5 8.5l4.5 -3.5" />
    </svg>
  )
);

GymnasticsOutlineLogo.displayName = "GymnasticsOutlineLogo";

export const GymnasticsOutlineLogoMetadata = {
  id: "gymnastics-outline",
  baseId: "gymnastics-outline",
  variant: "default",
  name: "Gymnastics Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GymnasticsOutlineLogo;
