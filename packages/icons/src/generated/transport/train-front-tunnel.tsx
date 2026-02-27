/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrainFrontTunnelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TrainFrontTunnel = React.forwardRef<SVGSVGElement, TrainFrontTunnelProps>(
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
      <path d="M2 22V12a10 10 0 1 1 20 0v10" />
  <path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" />
  <path d="M10 15h.01" />
  <path d="M14 15h.01" />
  <path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" />
  <path d="m9 19-2 3" />
  <path d="m15 19 2 3" />
    </svg>
  )
);
TrainFrontTunnel.displayName = "TrainFrontTunnel";
export const TrainFrontTunnelMetadata = { 
  id: "train-front-tunnel", 
  baseId: "train-front-tunnel", 
  variant: "default", 
  name: "Train Front Tunnel", 
  category: "transport", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TrainFrontTunnel;
