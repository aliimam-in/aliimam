/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrainFrontProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TrainFront = React.forwardRef<SVGSVGElement, TrainFrontProps>(
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
      <path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
  <path d="m9 15-1-1" />
  <path d="m15 15 1-1" />
  <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
  <path d="m8 19-2 3" />
  <path d="m16 19 2 3" />
    </svg>
  )
);
TrainFront.displayName = "TrainFront";
export const TrainFrontMetadata = { 
  id: "train-front", 
  baseId: "train-front", 
  variant: "default", 
  name: "Train Front", 
  category: "transportation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TrainFront;
