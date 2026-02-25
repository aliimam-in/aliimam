/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CirclesFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CirclesFilled = React.forwardRef<SVGSVGElement, CirclesFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
  <path d="M17.5 12a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
  <path d="M12 2a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
    </svg>
  )
);
CirclesFilled.displayName = "CirclesFilled";
export const CirclesFilledMetadata = { id: "circles_filled", baseId: "circles", variant: "filled", name: "Circles", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CirclesFilled;
