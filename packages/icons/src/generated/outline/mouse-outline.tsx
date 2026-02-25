/**
 * Auto-generated logo component: Mouse Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MouseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MouseOutlineLogo = React.forwardRef<SVGSVGElement, MouseOutlineLogoProps>(
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
      <path d="M6 7a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4l0 -10" />
  <path d="M12 7l0 4" />
    </svg>
  )
);

MouseOutlineLogo.displayName = "MouseOutlineLogo";

export const MouseOutlineLogoMetadata = {
  id: "mouse-outline",
  baseId: "mouse-outline",
  variant: "default",
  name: "Mouse Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MouseOutlineLogo;
