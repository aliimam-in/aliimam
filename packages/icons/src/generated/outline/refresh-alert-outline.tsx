/**
 * Auto-generated logo component: Refresh Alert Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RefreshAlertOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RefreshAlertOutlineLogo = React.forwardRef<SVGSVGElement, RefreshAlertOutlineLogoProps>(
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
      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
  <path d="M12 9l0 3" />
  <path d="M12 15l.01 0" />
    </svg>
  )
);

RefreshAlertOutlineLogo.displayName = "RefreshAlertOutlineLogo";

export const RefreshAlertOutlineLogoMetadata = {
  id: "refresh-alert-outline",
  baseId: "refresh-alert-outline",
  variant: "default",
  name: "Refresh Alert Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RefreshAlertOutlineLogo;
