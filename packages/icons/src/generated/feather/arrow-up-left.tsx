/**
 * Auto-generated logo component: Arrow Up Left (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpLeftLogo = React.forwardRef<SVGSVGElement, ArrowUpLeftLogoProps>(
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
      <line x1="17" y1="17" x2="7" y2="7"/><polyline points="7 17 7 7 17 7"/>
    </svg>
  )
);

ArrowUpLeftLogo.displayName = "ArrowUpLeftLogo";

export const ArrowUpLeftLogoMetadata = {
  id: "arrow-up-left",
  baseId: "arrow-up-left",
  variant: "default",
  name: "Arrow Up Left",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpLeftLogo;
