/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LineDotRightHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LineDotRightHorizontal = React.forwardRef<SVGSVGElement, LineDotRightHorizontalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M 3 12 L 15 12" />
  <circle cx="18" cy="12" r="3" />
    </svg>
  )
);
LineDotRightHorizontal.displayName = "LineDotRightHorizontal";
export const LineDotRightHorizontalMetadata = { id: "line-dot-right-horizontal", baseId: "line-dot-right-horizontal", variant: "default", name: "Line Dot Right Horizontal", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default LineDotRightHorizontal;
