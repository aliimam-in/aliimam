/**
 * Auto-generated logo component: Alert Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertSquareOutlineLogo = React.forwardRef<SVGSVGElement, AlertSquareOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M12 8v4" />
  <path d="M12 16h.01" />
    </svg>
  )
);

AlertSquareOutlineLogo.displayName = "AlertSquareOutlineLogo";

export const AlertSquareOutlineLogoMetadata = {
  id: "alert-square-outline",
  baseId: "alert-square-outline",
  variant: "default",
  name: "Alert Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertSquareOutlineLogo;
