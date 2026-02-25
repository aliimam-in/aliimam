/**
 * Auto-generated logo component: Triangle Alert (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleAlertLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleAlertLogo = React.forwardRef<SVGSVGElement, TriangleAlertLogoProps>(
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
    </svg>
  )
);

TriangleAlertLogo.displayName = "TriangleAlertLogo";

export const TriangleAlertLogoMetadata = {
  id: "triangle-alert",
  baseId: "triangle-alert",
  variant: "default",
  name: "Triangle Alert",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleAlertLogo;
