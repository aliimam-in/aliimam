/**
 * Auto-generated logo component: Alert Triangle Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertTriangleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertTriangleOffOutlineLogo = React.forwardRef<SVGSVGElement, AlertTriangleOffOutlineLogoProps>(
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
      <path d="M21.998 17.997a1.913 1.913 0 0 0 -.255 -.872l-8.106 -13.534a1.914 1.914 0 0 0 -3.274 0l-1.04 1.736m-1.493 2.493l-5.573 9.304a1.914 1.914 0 0 0 1.636 2.871h16.107" />
  <path d="M12 16h.01" />
  <path d="M3 3l18 18" />
  <path d="M12 7v1" />
    </svg>
  )
);

AlertTriangleOffOutlineLogo.displayName = "AlertTriangleOffOutlineLogo";

export const AlertTriangleOffOutlineLogoMetadata = {
  id: "alert-triangle-off-outline",
  baseId: "alert-triangle-off-outline",
  variant: "default",
  name: "Alert Triangle Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertTriangleOffOutlineLogo;
