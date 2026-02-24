/**
 * Auto-generated logo component: Headphones (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeadphonesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeadphonesLogo = React.forwardRef<SVGSVGElement, HeadphonesLogoProps>(
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
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  )
);

HeadphonesLogo.displayName = "HeadphonesLogo";

export const HeadphonesLogoMetadata = {
  id: "headphones",
  baseId: "headphones",
  variant: "default",
  name: "Headphones",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeadphonesLogo;
