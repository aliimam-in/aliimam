/**
 * Auto-generated logo component: Api App Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ApiAppOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ApiAppOffOutlineLogo = React.forwardRef<SVGSVGElement, ApiAppOffOutlineLogoProps>(
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
      <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" />
  <path d="M15 15v3.5a2.5 2.5 0 1 1 -5 0v-.5" />
  <path d="M13 9h5.5a2.5 2.5 0 1 1 0 5h-.5" />
  <path d="M9 12v-3m.042 -3.957a2.5 2.5 0 0 1 4.958 .457v.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ApiAppOffOutlineLogo.displayName = "ApiAppOffOutlineLogo";

export const ApiAppOffOutlineLogoMetadata = {
  id: "api-app-off-outline",
  baseId: "api-app-off-outline",
  variant: "default",
  name: "Api App Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ApiAppOffOutlineLogo;
