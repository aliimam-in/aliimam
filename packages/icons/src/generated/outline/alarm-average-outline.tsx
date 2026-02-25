/**
 * Auto-generated logo component: Alarm Average Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlarmAverageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlarmAverageOutlineLogo = React.forwardRef<SVGSVGElement, AlarmAverageOutlineLogoProps>(
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
      <path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" />
  <path d="M7 4l-2.75 2" />
  <path d="M17 4l2.75 2" />
  <path d="M8 13h1l2 3l2 -6l2 3h1" />
    </svg>
  )
);

AlarmAverageOutlineLogo.displayName = "AlarmAverageOutlineLogo";

export const AlarmAverageOutlineLogoMetadata = {
  id: "alarm-average-outline",
  baseId: "alarm-average-outline",
  variant: "default",
  name: "Alarm Average Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlarmAverageOutlineLogo;
