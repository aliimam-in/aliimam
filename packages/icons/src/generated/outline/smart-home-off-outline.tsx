/**
 * Auto-generated logo component: Smart Home Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SmartHomeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SmartHomeOffOutlineLogo = React.forwardRef<SVGSVGElement, SmartHomeOffOutlineLogoProps>(
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
      <path d="M7.097 7.125l-2.037 1.585a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12c.559 0 1.064 -.229 1.427 -.598m.572 -3.417v-5.185c0 -.823 -.38 -1.6 -1.03 -2.105l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-1.029 .8" />
  <path d="M15.332 15.345c-2.213 .976 -5.335 .86 -7.332 -.345" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SmartHomeOffOutlineLogo.displayName = "SmartHomeOffOutlineLogo";

export const SmartHomeOffOutlineLogoMetadata = {
  id: "smart-home-off-outline",
  baseId: "smart-home-off-outline",
  variant: "default",
  name: "Smart Home Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SmartHomeOffOutlineLogo;
