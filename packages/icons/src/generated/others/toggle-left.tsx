/**
 * Auto-generated logo component: Toggle Left (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToggleLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToggleLeftLogo = React.forwardRef<SVGSVGElement, ToggleLeftLogoProps>(
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
      <circle cx="9" cy="12" r="3" />
  <rect width="20" height="14" x="2" y="5" rx="7" />
    </svg>
  )
);

ToggleLeftLogo.displayName = "ToggleLeftLogo";

export const ToggleLeftLogoMetadata = {
  id: "toggle-left",
  baseId: "toggle-left",
  variant: "default",
  name: "Toggle Left",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToggleLeftLogo;
