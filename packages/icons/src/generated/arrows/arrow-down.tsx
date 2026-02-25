/**
 * Auto-generated logo component: Arrow Down (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownLogo = React.forwardRef<SVGSVGElement, ArrowDownLogoProps>(
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
      <path d="M12 5v14" />
  <path d="m19 12-7 7-7-7" />
    </svg>
  )
);

ArrowDownLogo.displayName = "ArrowDownLogo";

export const ArrowDownLogoMetadata = {
  id: "arrow-down",
  baseId: "arrow-down",
  variant: "default",
  name: "Arrow Down",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownLogo;
