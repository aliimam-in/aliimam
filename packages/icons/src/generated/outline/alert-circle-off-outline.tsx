/**
 * Auto-generated logo component: Alert Circle Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlertCircleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlertCircleOffOutlineLogo = React.forwardRef<SVGSVGElement, AlertCircleOffOutlineLogoProps>(
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
      <path d="M5.644 5.629a9 9 0 1 0 12.715 12.741m1.693 -2.349a9 9 0 0 0 -12.087 -12.068" />
  <path d="M12 7v1" />
  <path d="M12 16h.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AlertCircleOffOutlineLogo.displayName = "AlertCircleOffOutlineLogo";

export const AlertCircleOffOutlineLogoMetadata = {
  id: "alert-circle-off-outline",
  baseId: "alert-circle-off-outline",
  variant: "default",
  name: "Alert Circle Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlertCircleOffOutlineLogo;
