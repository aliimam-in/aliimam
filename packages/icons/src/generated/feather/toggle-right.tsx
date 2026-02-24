/**
 * Auto-generated logo component: Toggle Right (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToggleRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToggleRightLogo = React.forwardRef<SVGSVGElement, ToggleRightLogoProps>(
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
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/>
    </svg>
  )
);

ToggleRightLogo.displayName = "ToggleRightLogo";

export const ToggleRightLogoMetadata = {
  id: "toggle-right",
  baseId: "toggle-right",
  variant: "default",
  name: "Toggle Right",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToggleRightLogo;
