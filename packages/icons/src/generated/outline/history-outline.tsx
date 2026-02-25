/**
 * Auto-generated logo component: History Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HistoryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HistoryOutlineLogo = React.forwardRef<SVGSVGElement, HistoryOutlineLogoProps>(
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
      <path d="M12 8l0 4l2 2" />
  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
    </svg>
  )
);

HistoryOutlineLogo.displayName = "HistoryOutlineLogo";

export const HistoryOutlineLogoMetadata = {
  id: "history-outline",
  baseId: "history-outline",
  variant: "default",
  name: "History Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HistoryOutlineLogo;
