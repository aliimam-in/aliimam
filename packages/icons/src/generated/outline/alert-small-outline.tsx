/**
 * Auto-generated logo component: Alert Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertSmallOutlineLogo = React.forwardRef<SVGSVGElement, AlertSmallOutlineLogoProps>(
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
      <path d="M12 8v4" />
  <path d="M12 16h.01" />
    </svg>
  )
);

AlertSmallOutlineLogo.displayName = "AlertSmallOutlineLogo";

export const AlertSmallOutlineLogoMetadata = {
  id: "alert-small-outline",
  baseId: "alert-small-outline",
  variant: "default",
  name: "Alert Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertSmallOutlineLogo;
