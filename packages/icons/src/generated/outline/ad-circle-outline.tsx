/**
 * Auto-generated logo component: Ad Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AdCircleOutlineLogo = React.forwardRef<SVGSVGElement, AdCircleOutlineLogoProps>(
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
      <path d="M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" />
  <path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
  <path d="M7 13h3" />
  <path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1" />
    </svg>
  )
);

AdCircleOutlineLogo.displayName = "AdCircleOutlineLogo";

export const AdCircleOutlineLogoMetadata = {
  id: "ad-circle-outline",
  baseId: "ad-circle-outline",
  variant: "default",
  name: "Ad Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AdCircleOutlineLogo;
