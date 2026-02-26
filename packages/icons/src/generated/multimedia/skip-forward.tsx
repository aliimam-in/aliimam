/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SkipForwardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SkipForward = React.forwardRef<SVGSVGElement, SkipForwardProps>(
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
      <path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
    </svg>
  )
);
SkipForward.displayName = "SkipForward";
export const SkipForwardMetadata = { 
  id: "skip-forward", 
  baseId: "skip-forward", 
  variant: "default", 
  name: "Skip Forward", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SkipForward;
