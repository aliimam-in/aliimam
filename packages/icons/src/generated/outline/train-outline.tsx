/**
 * Auto-generated logo component: Train Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrainOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrainOutlineLogo = React.forwardRef<SVGSVGElement, TrainOutlineLogoProps>(
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
      <path d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8" />
  <path d="M3 15h16a2 2 0 0 0 2 -2" />
  <path d="M3 6v5h17.5" />
  <path d="M3 11v4" />
  <path d="M8 11v-5" />
  <path d="M13 11v-4.5" />
  <path d="M3 19h18" />
    </svg>
  )
);

TrainOutlineLogo.displayName = "TrainOutlineLogo";

export const TrainOutlineLogoMetadata = {
  id: "train-outline",
  baseId: "train-outline",
  variant: "default",
  name: "Train Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrainOutlineLogo;
