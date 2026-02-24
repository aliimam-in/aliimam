/**
 * Auto-generated logo component: Arrow Big Down Dash (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBigDownDashLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBigDownDashLogo = React.forwardRef<SVGSVGElement, ArrowBigDownDashLogoProps>(
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
      <path d="M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" />
  <path d="M9 4h6" />
    </svg>
  )
);

ArrowBigDownDashLogo.displayName = "ArrowBigDownDashLogo";

export const ArrowBigDownDashLogoMetadata = {
  id: "arrow-big-down-dash",
  baseId: "arrow-big-down-dash",
  variant: "default",
  name: "Arrow Big Down Dash",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBigDownDashLogo;
