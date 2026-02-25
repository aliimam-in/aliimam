/**
 * Auto-generated logo component: Confucius Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ConfuciusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ConfuciusOutlineLogo = React.forwardRef<SVGSVGElement, ConfuciusOutlineLogoProps>(
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
      <path d="M9 19l3 2v-18" />
  <path d="M4 10l8 -2" />
  <path d="M4 18l8 -10" />
  <path d="M20 18l-8 -8l8 -4" />
    </svg>
  )
);

ConfuciusOutlineLogo.displayName = "ConfuciusOutlineLogo";

export const ConfuciusOutlineLogoMetadata = {
  id: "confucius-outline",
  baseId: "confucius-outline",
  variant: "default",
  name: "Confucius Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ConfuciusOutlineLogo;
