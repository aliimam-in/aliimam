/**
 * Auto-generated logo component: Alert Small Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertSmallOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertSmallOffOutlineLogo = React.forwardRef<SVGSVGElement, AlertSmallOffOutlineLogoProps>(
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
      <path d="M12 16h.01" />
  <path d="M12 7v1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AlertSmallOffOutlineLogo.displayName = "AlertSmallOffOutlineLogo";

export const AlertSmallOffOutlineLogoMetadata = {
  id: "alert-small-off-outline",
  baseId: "alert-small-off-outline",
  variant: "default",
  name: "Alert Small Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertSmallOffOutlineLogo;
