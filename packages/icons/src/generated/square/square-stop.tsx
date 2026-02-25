/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareStopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareStop = React.forwardRef<SVGSVGElement, SquareStopProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  )
);
SquareStop.displayName = "SquareStop";
export const SquareStopMetadata = { id: "square-stop", baseId: "square-stop", variant: "default", name: "Square Stop", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareStop;
