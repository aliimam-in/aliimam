/**
 * Auto-generated logo component: Window Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WindowOutlineLogo = React.forwardRef<SVGSVGElement, WindowOutlineLogoProps>(
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
      <path d="M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7" />
  <path d="M5 13l14 0" />
  <path d="M12 3l0 18" />
    </svg>
  )
);

WindowOutlineLogo.displayName = "WindowOutlineLogo";

export const WindowOutlineLogoMetadata = {
  id: "window-outline",
  baseId: "window-outline",
  variant: "default",
  name: "Window Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WindowOutlineLogo;
