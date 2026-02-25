/**
 * Auto-generated logo component: Stack Pop Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StackPopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StackPopOutlineLogo = React.forwardRef<SVGSVGElement, StackPopOutlineLogoProps>(
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
      <path d="M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5" />
  <path d="M4 15l8 4l8 -4" />
  <path d="M12 11v-7" />
  <path d="M9 7l3 -3l3 3" />
    </svg>
  )
);

StackPopOutlineLogo.displayName = "StackPopOutlineLogo";

export const StackPopOutlineLogoMetadata = {
  id: "stack-pop-outline",
  baseId: "stack-pop-outline",
  variant: "default",
  name: "Stack Pop Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StackPopOutlineLogo;
