/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrainTrackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TrainTrack = React.forwardRef<SVGSVGElement, TrainTrackProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
TrainTrack.displayName = "TrainTrack";
export const TrainTrackMetadata = { 
  id: "train-track", 
  baseId: "train-track", 
  variant: "default", 
  name: "Train Track", 
  category: "transport", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TrainTrack;
