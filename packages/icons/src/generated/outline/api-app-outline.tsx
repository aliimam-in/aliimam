/**
 * Auto-generated logo component: Api App Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ApiAppOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ApiAppOutlineLogo = React.forwardRef<SVGSVGElement, ApiAppOutlineLogoProps>(
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
  <path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5" />
  <path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5" />
  <path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5" />
    </svg>
  )
);

ApiAppOutlineLogo.displayName = "ApiAppOutlineLogo";

export const ApiAppOutlineLogoMetadata = {
  id: "api-app-outline",
  baseId: "api-app-outline",
  variant: "default",
  name: "Api App Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ApiAppOutlineLogo;
