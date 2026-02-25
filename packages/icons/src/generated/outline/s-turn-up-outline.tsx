/**
 * Auto-generated logo component: S Turn Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface STurnUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const STurnUpOutlineLogo = React.forwardRef<SVGSVGElement, STurnUpOutlineLogoProps>(
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
      <path d="M7 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M5 17v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5" />
  <path d="M16 6l3 -3l3 3" />
    </svg>
  )
);

STurnUpOutlineLogo.displayName = "STurnUpOutlineLogo";

export const STurnUpOutlineLogoMetadata = {
  id: "s-turn-up-outline",
  baseId: "s-turn-up-outline",
  variant: "default",
  name: "S Turn Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default STurnUpOutlineLogo;
