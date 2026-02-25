/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareArrowOutUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareArrowOutUpLeft = React.forwardRef<SVGSVGElement, SquareArrowOutUpLeftProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
  <path d="m3 3 9 9" />
  <path d="M3 9V3h6" />
    </svg>
  )
);
SquareArrowOutUpLeft.displayName = "SquareArrowOutUpLeft";
export const SquareArrowOutUpLeftMetadata = { id: "square-arrow-out-up-left", baseId: "square-arrow-out-up-left", variant: "default", name: "Square Arrow Out Up Left", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareArrowOutUpLeft;
