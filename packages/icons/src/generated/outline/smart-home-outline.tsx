/**
 * Auto-generated logo component: Smart Home Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SmartHomeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SmartHomeOutlineLogo = React.forwardRef<SVGSVGElement, SmartHomeOutlineLogoProps>(
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
      <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
  <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
    </svg>
  )
);

SmartHomeOutlineLogo.displayName = "SmartHomeOutlineLogo";

export const SmartHomeOutlineLogoMetadata = {
  id: "smart-home-outline",
  baseId: "smart-home-outline",
  variant: "default",
  name: "Smart Home Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SmartHomeOutlineLogo;
