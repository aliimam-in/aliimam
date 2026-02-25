/**
 * Auto-generated logo component: Arrow Down From Line (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownFromLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownFromLineLogo = React.forwardRef<SVGSVGElement, ArrowDownFromLineLogoProps>(
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
      <path d="M19 3H5" />
  <path d="M12 21V7" />
  <path d="m6 15 6 6 6-6" />
    </svg>
  )
);

ArrowDownFromLineLogo.displayName = "ArrowDownFromLineLogo";

export const ArrowDownFromLineLogoMetadata = {
  id: "arrow-down-from-line",
  baseId: "arrow-down-from-line",
  variant: "default",
  name: "Arrow Down From Line",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownFromLineLogo;
