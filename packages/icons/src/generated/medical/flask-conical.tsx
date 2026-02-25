/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlaskConicalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlaskConical = React.forwardRef<SVGSVGElement, FlaskConicalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
  <path d="M6.453 15h11.094" />
  <path d="M8.5 2h7" />
    </svg>
  )
);
FlaskConical.displayName = "FlaskConical";
export const FlaskConicalMetadata = { id: "flask-conical", baseId: "flask-conical", variant: "default", name: "Flask Conical", category: "medical", tags: [], viewBox: "0 0 24 24" } as const;
export default FlaskConical;
