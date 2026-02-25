/**
 * Auto-generated logo component: Headphones Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeadphonesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeadphonesOutlineLogo = React.forwardRef<SVGSVGElement, HeadphonesOutlineLogoProps>(
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
      <path d="M4 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3" />
  <path d="M15 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2l0 -3" />
  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
    </svg>
  )
);

HeadphonesOutlineLogo.displayName = "HeadphonesOutlineLogo";

export const HeadphonesOutlineLogoMetadata = {
  id: "headphones-outline",
  baseId: "headphones-outline",
  variant: "default",
  name: "Headphones Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeadphonesOutlineLogo;
