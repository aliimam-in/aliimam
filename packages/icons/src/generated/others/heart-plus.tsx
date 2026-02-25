/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HeartPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HeartPlus = React.forwardRef<SVGSVGElement, HeartPlusProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" />
  <path d="M15 15h6" />
  <path d="M18 12v6" />
    </svg>
  )
);
HeartPlus.displayName = "HeartPlus";
export const HeartPlusMetadata = { id: "heart-plus", baseId: "heart-plus", variant: "default", name: "Heart Plus", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default HeartPlus;
