/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RotateCcwProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RotateCcw = React.forwardRef<SVGSVGElement, RotateCcwProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
    </svg>
  )
);
RotateCcw.displayName = "RotateCcw";
export const RotateCcwMetadata = { id: "rotate-ccw", baseId: "rotate-ccw", variant: "default", name: "Rotate Ccw", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default RotateCcw;
