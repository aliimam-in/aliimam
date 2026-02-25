/**
 * Auto-generated logo component: Api Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ApiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ApiOutlineLogo = React.forwardRef<SVGSVGElement, ApiOutlineLogoProps>(
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
      <path d="M4 13h5" />
  <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
  <path d="M20 8v8" />
  <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
    </svg>
  )
);

ApiOutlineLogo.displayName = "ApiOutlineLogo";

export const ApiOutlineLogoMetadata = {
  id: "api-outline",
  baseId: "api-outline",
  variant: "default",
  name: "Api Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ApiOutlineLogo;
