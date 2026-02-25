/**
 * Auto-generated logo component: Router Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RouterOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RouterOffOutlineLogo = React.forwardRef<SVGSVGElement, RouterOffOutlineLogoProps>(
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
      <path d="M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362 .36 -.861 .583 -1.412 .583h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8" />
  <path d="M17 17v.01" />
  <path d="M13 17v.01" />
  <path d="M12.226 8.2a4 4 0 0 1 6.024 .55" />
  <path d="M9.445 5.407a8 8 0 0 1 12.055 1.093" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RouterOffOutlineLogo.displayName = "RouterOffOutlineLogo";

export const RouterOffOutlineLogoMetadata = {
  id: "router-off-outline",
  baseId: "router-off-outline",
  variant: "default",
  name: "Router Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RouterOffOutlineLogo;
