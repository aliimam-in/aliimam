/**
 * Auto-generated logo component: Home Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeShareOutlineLogo = React.forwardRef<SVGSVGElement, HomeShareOutlineLogoProps>(
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
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.247 0 .484 .045 .702 .127" />
  <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

HomeShareOutlineLogo.displayName = "HomeShareOutlineLogo";

export const HomeShareOutlineLogoMetadata = {
  id: "home-share-outline",
  baseId: "home-share-outline",
  variant: "default",
  name: "Home Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeShareOutlineLogo;
