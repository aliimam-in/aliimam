/**
 * Auto-generated logo component: Align Vertical Distribute End (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignVerticalDistributeEndLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignVerticalDistributeEndLogo = React.forwardRef<SVGSVGElement, AlignVerticalDistributeEndLogoProps>(
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
      <rect width="14" height="6" x="5" y="14" rx="2" />
  <rect width="10" height="6" x="7" y="4" rx="2" />
  <path d="M2 20h20" />
  <path d="M2 10h20" />
    </svg>
  )
);

AlignVerticalDistributeEndLogo.displayName = "AlignVerticalDistributeEndLogo";

export const AlignVerticalDistributeEndLogoMetadata = {
  id: "align-vertical-distribute-end",
  baseId: "align-vertical-distribute-end",
  variant: "default",
  name: "Align Vertical Distribute End",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignVerticalDistributeEndLogo;
