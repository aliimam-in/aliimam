/**
 * Auto-generated logo component: Alert Square Rounded Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertSquareRoundedOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertSquareRoundedOffOutlineLogo = React.forwardRef<SVGSVGElement, AlertSquareRoundedOffOutlineLogoProps>(
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
      <path d="M19.201 19.199c-1.35 1.35 -3.6 1.801 -7.201 1.801c-7.2 0 -9 -1.8 -9 -9c0 -3.598 .45 -5.847 1.797 -7.197m2.626 -1.376c1.204 -.307 2.709 -.427 4.577 -.427c7.2 0 9 1.8 9 9c0 1.865 -.12 3.367 -.425 4.57" />
  <path d="M12 7v1" />
  <path d="M12 16h.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AlertSquareRoundedOffOutlineLogo.displayName = "AlertSquareRoundedOffOutlineLogo";

export const AlertSquareRoundedOffOutlineLogoMetadata = {
  id: "alert-square-rounded-off-outline",
  baseId: "alert-square-rounded-off-outline",
  variant: "default",
  name: "Alert Square Rounded Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertSquareRoundedOffOutlineLogo;
