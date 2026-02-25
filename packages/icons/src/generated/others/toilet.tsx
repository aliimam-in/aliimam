/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ToiletProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Toilet = React.forwardRef<SVGSVGElement, ToiletProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18" />
  <path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" />
    </svg>
  )
);
Toilet.displayName = "Toilet";
export const ToiletMetadata = { id: "toilet", baseId: "toilet", variant: "default", name: "Toilet", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Toilet;
