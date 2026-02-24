/**
 * Auto-generated logo component: Alert Octagon (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertOctagonLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertOctagonLogo = React.forwardRef<SVGSVGElement, AlertOctagonLogoProps>(
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
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
);

AlertOctagonLogo.displayName = "AlertOctagonLogo";

export const AlertOctagonLogoMetadata = {
  id: "alert-octagon",
  baseId: "alert-octagon",
  variant: "default",
  name: "Alert Octagon",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertOctagonLogo;
