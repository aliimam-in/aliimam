/**
 * Auto-generated logo component: Arrow Down Bar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownBarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownBarOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownBarOutlineLogoProps>(
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
      <path d="M12 3v18" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M9 3h6" />
    </svg>
  )
);

ArrowDownBarOutlineLogo.displayName = "ArrowDownBarOutlineLogo";

export const ArrowDownBarOutlineLogoMetadata = {
  id: "arrow-down-bar-outline",
  baseId: "arrow-down-bar-outline",
  variant: "default",
  name: "Arrow Down Bar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownBarOutlineLogo;
