/**
 * Auto-generated logo component: Api Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ApiOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ApiOffOutlineLogo = React.forwardRef<SVGSVGElement, ApiOffOutlineLogoProps>(
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
  <path d="M12 16v-4m0 -4h3a2 2 0 0 1 2 2v1c0 .554 -.225 1.055 -.589 1.417m-3.411 .583h-1" />
  <path d="M20 8v8" />
  <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ApiOffOutlineLogo.displayName = "ApiOffOutlineLogo";

export const ApiOffOutlineLogoMetadata = {
  id: "api-off-outline",
  baseId: "api-off-outline",
  variant: "default",
  name: "Api Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ApiOffOutlineLogo;
