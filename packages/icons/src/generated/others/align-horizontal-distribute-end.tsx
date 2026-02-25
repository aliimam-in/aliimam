/**
 * Auto-generated logo component: Align Horizontal Distribute End (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignHorizontalDistributeEndLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignHorizontalDistributeEndLogo = React.forwardRef<SVGSVGElement, AlignHorizontalDistributeEndLogoProps>(
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
  <path d="M10 2v20" />
  <path d="M20 2v20" />
    </svg>
  )
);

AlignHorizontalDistributeEndLogo.displayName = "AlignHorizontalDistributeEndLogo";

export const AlignHorizontalDistributeEndLogoMetadata = {
  id: "align-horizontal-distribute-end",
  baseId: "align-horizontal-distribute-end",
  variant: "default",
  name: "Align Horizontal Distribute End",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignHorizontalDistributeEndLogo;
