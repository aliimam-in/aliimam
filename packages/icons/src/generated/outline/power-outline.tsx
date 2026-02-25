/**
 * Auto-generated logo component: Power Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PowerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PowerOutlineLogo = React.forwardRef<SVGSVGElement, PowerOutlineLogoProps>(
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
      <path d="M7 6a7.75 7.75 0 1 0 10 0" />
  <path d="M12 4l0 8" />
    </svg>
  )
);

PowerOutlineLogo.displayName = "PowerOutlineLogo";

export const PowerOutlineLogoMetadata = {
  id: "power-outline",
  baseId: "power-outline",
  variant: "default",
  name: "Power Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PowerOutlineLogo;
