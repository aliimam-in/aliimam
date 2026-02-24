/**
 * Auto-generated logo component: Arrow Down To Line (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownToLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownToLineLogo = React.forwardRef<SVGSVGElement, ArrowDownToLineLogoProps>(
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
      <path d="M12 17V3" />
  <path d="m6 11 6 6 6-6" />
  <path d="M19 21H5" />
    </svg>
  )
);

ArrowDownToLineLogo.displayName = "ArrowDownToLineLogo";

export const ArrowDownToLineLogoMetadata = {
  id: "arrow-down-to-line",
  baseId: "arrow-down-to-line",
  variant: "default",
  name: "Arrow Down To Line",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownToLineLogo;
