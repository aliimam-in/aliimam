/**
 * Auto-generated logo component: Alert Square Rounded Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertSquareRoundedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertSquareRoundedOutlineLogo = React.forwardRef<SVGSVGElement, AlertSquareRoundedOutlineLogoProps>(
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
      <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
  <path d="M12 8v4" />
  <path d="M12 16h.01" />
    </svg>
  )
);

AlertSquareRoundedOutlineLogo.displayName = "AlertSquareRoundedOutlineLogo";

export const AlertSquareRoundedOutlineLogoMetadata = {
  id: "alert-square-rounded-outline",
  baseId: "alert-square-rounded-outline",
  variant: "default",
  name: "Alert Square Rounded Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertSquareRoundedOutlineLogo;
