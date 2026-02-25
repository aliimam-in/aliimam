/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PauseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pause = React.forwardRef<SVGSVGElement, PauseProps>(
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
      <rect x="14" y="3" width="5" height="18" rx="1" />
  <rect x="5" y="3" width="5" height="18" rx="1" />
    </svg>
  )
);
Pause.displayName = "Pause";
export const PauseMetadata = { 
  id: "pause", 
  baseId: "pause", 
  variant: "default", 
  name: "Pause", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Pause;
