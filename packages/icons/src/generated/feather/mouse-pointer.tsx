/**
 * Auto-generated logo component: Mouse Pointer (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MousePointerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MousePointerLogo = React.forwardRef<SVGSVGElement, MousePointerLogoProps>(
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
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/>
    </svg>
  )
);

MousePointerLogo.displayName = "MousePointerLogo";

export const MousePointerLogoMetadata = {
  id: "mouse-pointer",
  baseId: "mouse-pointer",
  variant: "default",
  name: "Mouse Pointer",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MousePointerLogo;
