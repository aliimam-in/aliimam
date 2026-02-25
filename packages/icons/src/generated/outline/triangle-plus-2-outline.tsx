/**
 * Auto-generated logo component: Triangle Plus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrianglePlus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrianglePlus2OutlineLogo = React.forwardRef<SVGSVGElement, TrianglePlus2OutlineLogoProps>(
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
      <path d="M18.69 12.027l-5.054 -8.437a1.914 1.914 0 0 0 -3.274 0l-8.105 13.535a1.914 1.914 0 0 0 1.636 2.871h8.107" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

TrianglePlus2OutlineLogo.displayName = "TrianglePlus2OutlineLogo";

export const TrianglePlus2OutlineLogoMetadata = {
  id: "triangle-plus-2-outline",
  baseId: "triangle-plus-2-outline",
  variant: "default",
  name: "Triangle Plus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrianglePlus2OutlineLogo;
