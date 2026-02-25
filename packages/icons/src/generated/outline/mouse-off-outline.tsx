/**
 * Auto-generated logo component: Mouse Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MouseOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MouseOffOutlineLogo = React.forwardRef<SVGSVGElement, MouseOffOutlineLogoProps>(
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
      <path d="M7.733 3.704a3.982 3.982 0 0 1 2.267 -.704h4a4 4 0 0 1 4 4v7m-.1 3.895a4 4 0 0 1 -3.9 3.105h-4a4 4 0 0 1 -4 -4v-10c0 -.3 .033 -.593 .096 -.874" />
  <path d="M12 7v1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MouseOffOutlineLogo.displayName = "MouseOffOutlineLogo";

export const MouseOffOutlineLogoMetadata = {
  id: "mouse-off-outline",
  baseId: "mouse-off-outline",
  variant: "default",
  name: "Mouse Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MouseOffOutlineLogo;
