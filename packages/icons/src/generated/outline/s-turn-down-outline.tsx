/**
 * Auto-generated logo component: S Turn Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface STurnDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const STurnDownOutlineLogo = React.forwardRef<SVGSVGElement, STurnDownOutlineLogoProps>(
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
      <path d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
  <path d="M5 7v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0v13.5" />
  <path d="M16 18l3 3l3 -3" />
    </svg>
  )
);

STurnDownOutlineLogo.displayName = "STurnDownOutlineLogo";

export const STurnDownOutlineLogoMetadata = {
  id: "s-turn-down-outline",
  baseId: "s-turn-down-outline",
  variant: "default",
  name: "S Turn Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default STurnDownOutlineLogo;
