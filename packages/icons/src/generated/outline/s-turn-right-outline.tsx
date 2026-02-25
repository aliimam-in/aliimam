/**
 * Auto-generated logo component: S Turn Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface STurnRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const STurnRightOutlineLogo = React.forwardRef<SVGSVGElement, STurnRightOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 5h9.5a3.5 3.5 0 0 1 0 7h-9a3.5 3.5 0 0 0 0 7h13.5" />
  <path d="M18 16l3 3l-3 3" />
    </svg>
  )
);

STurnRightOutlineLogo.displayName = "STurnRightOutlineLogo";

export const STurnRightOutlineLogoMetadata = {
  id: "s-turn-right-outline",
  baseId: "s-turn-right-outline",
  variant: "default",
  name: "S Turn Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default STurnRightOutlineLogo;
