/**
 * Auto-generated logo component: Panels Top Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PanelsTopLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PanelsTopLeftLogo = React.forwardRef<SVGSVGElement, PanelsTopLeftLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="M9 21V9" />
    </svg>
  )
);

PanelsTopLeftLogo.displayName = "PanelsTopLeftLogo";

export const PanelsTopLeftLogoMetadata = {
  id: "panels-top-left",
  baseId: "panels-top-left",
  variant: "default",
  name: "Panels Top Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PanelsTopLeftLogo;
