/**
 * Auto-generated logo component: Arrow Down To Dot (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownToDotLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownToDotLogo = React.forwardRef<SVGSVGElement, ArrowDownToDotLogoProps>(
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
      <path d="M12 2v14" />
  <path d="m19 9-7 7-7-7" />
  <circle cx="12" cy="21" r="1" />
    </svg>
  )
);

ArrowDownToDotLogo.displayName = "ArrowDownToDotLogo";

export const ArrowDownToDotLogoMetadata = {
  id: "arrow-down-to-dot",
  baseId: "arrow-down-to-dot",
  variant: "default",
  name: "Arrow Down To Dot",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownToDotLogo;
