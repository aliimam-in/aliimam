/**
 * Auto-generated logo component: View 360 Number Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface View360NumberOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const View360NumberOutlineLogo = React.forwardRef<SVGSVGElement, View360NumberOutlineLogoProps>(
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
      <path d="M14 6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" />
  <path d="M3 5h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" />
  <path d="M17 7v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
  <path d="M3 16c0 1.657 4.03 3 9 3s9 -1.343 9 -3" />
    </svg>
  )
);

View360NumberOutlineLogo.displayName = "View360NumberOutlineLogo";

export const View360NumberOutlineLogoMetadata = {
  id: "view-360-number-outline",
  baseId: "view-360-number-outline",
  variant: "default",
  name: "View 360 Number Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default View360NumberOutlineLogo;
