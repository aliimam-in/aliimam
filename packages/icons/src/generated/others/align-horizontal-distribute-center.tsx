/**
 * Auto-generated logo component: Align Horizontal Distribute Center (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignHorizontalDistributeCenterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignHorizontalDistributeCenterLogo = React.forwardRef<SVGSVGElement, AlignHorizontalDistributeCenterLogoProps>(
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
      <rect width="6" height="14" x="4" y="5" rx="2" />
  <rect width="6" height="10" x="14" y="7" rx="2" />
  <path d="M17 22v-5" />
  <path d="M17 7V2" />
  <path d="M7 22v-3" />
  <path d="M7 5V2" />
    </svg>
  )
);

AlignHorizontalDistributeCenterLogo.displayName = "AlignHorizontalDistributeCenterLogo";

export const AlignHorizontalDistributeCenterLogoMetadata = {
  id: "align-horizontal-distribute-center",
  baseId: "align-horizontal-distribute-center",
  variant: "default",
  name: "Align Horizontal Distribute Center",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignHorizontalDistributeCenterLogo;
