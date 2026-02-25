/**
 * Auto-generated logo component: S Turn Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface STurnLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const STurnLeftOutlineLogo = React.forwardRef<SVGSVGElement, STurnLeftOutlineLogoProps>(
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
      <path d="M19 7a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" />
  <path d="M17 5h-9.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7h-13.5" />
  <path d="M6 16l-3 3l3 3" />
    </svg>
  )
);

STurnLeftOutlineLogo.displayName = "STurnLeftOutlineLogo";

export const STurnLeftOutlineLogoMetadata = {
  id: "s-turn-left-outline",
  baseId: "s-turn-left-outline",
  variant: "default",
  name: "S Turn Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default STurnLeftOutlineLogo;
