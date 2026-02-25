/**
 * Auto-generated logo component: Arrow Up (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpLogo = React.forwardRef<SVGSVGElement, ArrowUpLogoProps>(
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
      <path d="m5 12 7-7 7 7" />
  <path d="M12 19V5" />
    </svg>
  )
);

ArrowUpLogo.displayName = "ArrowUpLogo";

export const ArrowUpLogoMetadata = {
  id: "arrow-up",
  baseId: "arrow-up",
  variant: "default",
  name: "Arrow Up",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpLogo;
