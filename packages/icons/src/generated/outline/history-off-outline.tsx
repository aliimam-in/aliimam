/**
 * Auto-generated logo component: History Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HistoryOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HistoryOffOutlineLogo = React.forwardRef<SVGSVGElement, HistoryOffOutlineLogoProps>(
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
      <path d="M3.05 11a8.975 8.975 0 0 1 2.54 -5.403m2.314 -1.697a9 9 0 0 1 12.113 12.112m-1.695 2.312a9 9 0 0 1 -14.772 -3.324m-.5 5v-5h5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HistoryOffOutlineLogo.displayName = "HistoryOffOutlineLogo";

export const HistoryOffOutlineLogoMetadata = {
  id: "history-off-outline",
  baseId: "history-off-outline",
  variant: "default",
  name: "History Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HistoryOffOutlineLogo;
