/**
 * Auto-generated logo component: Cone Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ConePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ConePlusOutlineLogo = React.forwardRef<SVGSVGElement, ConePlusOutlineLogoProps>(
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
      <path d="M18.03 12.022l-5.16 -9.515a1 1 0 0 0 -1.74 0l-8.13 14.99v.5c0 1.66 4.03 3.003 9 3.003c.17 0 .34 -.002 .508 -.005" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

ConePlusOutlineLogo.displayName = "ConePlusOutlineLogo";

export const ConePlusOutlineLogoMetadata = {
  id: "cone-plus-outline",
  baseId: "cone-plus-outline",
  variant: "default",
  name: "Cone Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ConePlusOutlineLogo;
