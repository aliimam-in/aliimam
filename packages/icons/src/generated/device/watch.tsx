/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WatchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Watch = React.forwardRef<SVGSVGElement, WatchProps>(
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
      <path d="M12 10v2.2l1.6 1" />
  <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
  <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
  <circle cx="12" cy="12" r="6" />
    </svg>
  )
);
Watch.displayName = "Watch";
export const WatchMetadata = { 
  id: "watch", 
  baseId: "watch", 
  variant: "default", 
  name: "Watch", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Watch;
