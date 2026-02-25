/**
 * Auto-generated logo component: Flask 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Flask2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Flask2OutlineLogo = React.forwardRef<SVGSVGElement, Flask2OutlineLogoProps>(
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
      <path d="M6.1 15h11.8" />
  <path d="M14 3v7.342a6 6 0 0 1 1.318 10.658h-6.635a6 6 0 0 1 1.317 -10.66v-7.34h4" />
  <path d="M9 3h6" />
    </svg>
  )
);

Flask2OutlineLogo.displayName = "Flask2OutlineLogo";

export const Flask2OutlineLogoMetadata = {
  id: "flask-2-outline",
  baseId: "flask-2-outline",
  variant: "default",
  name: "Flask 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flask2OutlineLogo;
