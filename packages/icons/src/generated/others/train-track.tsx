/**
 * Auto-generated logo component: Train Track (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrainTrackLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrainTrackLogo = React.forwardRef<SVGSVGElement, TrainTrackLogoProps>(
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
      <path d="M2 17 17 2" />
  <path d="m2 14 8 8" />
  <path d="m5 11 8 8" />
  <path d="m8 8 8 8" />
  <path d="m11 5 8 8" />
  <path d="m14 2 8 8" />
  <path d="M7 22 22 7" />
    </svg>
  )
);

TrainTrackLogo.displayName = "TrainTrackLogo";

export const TrainTrackLogoMetadata = {
  id: "train-track",
  baseId: "train-track",
  variant: "default",
  name: "Train Track",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrainTrackLogo;
