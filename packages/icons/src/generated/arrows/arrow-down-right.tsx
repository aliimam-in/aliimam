/**
 * Auto-generated logo component: Arrow Down Right (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownRightLogo = React.forwardRef<SVGSVGElement, ArrowDownRightLogoProps>(
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
      <path d="m7 7 10 10" />
  <path d="M17 7v10H7" />
    </svg>
  )
);

ArrowDownRightLogo.displayName = "ArrowDownRightLogo";

export const ArrowDownRightLogoMetadata = {
  id: "arrow-down-right",
  baseId: "arrow-down-right",
  variant: "default",
  name: "Arrow Down Right",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownRightLogo;
