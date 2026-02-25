/**
 * Auto-generated logo component: Alert Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertCircleOutlineLogo = React.forwardRef<SVGSVGElement, AlertCircleOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 8v4" />
  <path d="M12 16h.01" />
    </svg>
  )
);

AlertCircleOutlineLogo.displayName = "AlertCircleOutlineLogo";

export const AlertCircleOutlineLogoMetadata = {
  id: "alert-circle-outline",
  baseId: "alert-circle-outline",
  variant: "default",
  name: "Alert Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertCircleOutlineLogo;
