/**
 * Auto-generated logo component: Cloud Alert (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudAlertLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudAlertLogo = React.forwardRef<SVGSVGElement, CloudAlertLogoProps>(
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
      <path d="M12 12v4" />
  <path d="M12 20h.01" />
  <path d="M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" />
    </svg>
  )
);

CloudAlertLogo.displayName = "CloudAlertLogo";

export const CloudAlertLogoMetadata = {
  id: "cloud-alert",
  baseId: "cloud-alert",
  variant: "default",
  name: "Cloud Alert",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudAlertLogo;
