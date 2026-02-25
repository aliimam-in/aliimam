/**
 * Auto-generated logo component: Alert Triangle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertTriangleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertTriangleOutlineLogo = React.forwardRef<SVGSVGElement, AlertTriangleOutlineLogoProps>(
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
      <path d="M12 9v4" />
  <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
  <path d="M12 16h.01" />
    </svg>
  )
);

AlertTriangleOutlineLogo.displayName = "AlertTriangleOutlineLogo";

export const AlertTriangleOutlineLogoMetadata = {
  id: "alert-triangle-outline",
  baseId: "alert-triangle-outline",
  variant: "default",
  name: "Alert Triangle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertTriangleOutlineLogo;
