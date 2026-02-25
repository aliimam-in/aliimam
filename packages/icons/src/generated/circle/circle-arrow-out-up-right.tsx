/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowOutUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowOutUpRight = React.forwardRef<SVGSVGElement, CircleArrowOutUpRightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M22 12A10 10 0 1 1 12 2" />
  <path d="M22 2 12 12" />
  <path d="M16 2h6v6" />
    </svg>
  )
);
CircleArrowOutUpRight.displayName = "CircleArrowOutUpRight";
export const CircleArrowOutUpRightMetadata = { id: "circle-arrow-out-up-right", baseId: "circle-arrow-out-up-right", variant: "default", name: "Circle Arrow Out Up Right", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleArrowOutUpRight;
