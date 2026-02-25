/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignVerticalJustifyCenterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignVerticalJustifyCenter = React.forwardRef<SVGSVGElement, AlignVerticalJustifyCenterProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="14" height="6" x="5" y="16" rx="2" />
  <rect width="10" height="6" x="7" y="2" rx="2" />
  <path d="M2 12h20" />
    </svg>
  )
);
AlignVerticalJustifyCenter.displayName = "AlignVerticalJustifyCenter";
export const AlignVerticalJustifyCenterMetadata = { id: "align-vertical-justify-center", baseId: "align-vertical-justify-center", variant: "default", name: "Align Vertical Justify Center", category: "align", tags: [], viewBox: "0 0 24 24" } as const;
export default AlignVerticalJustifyCenter;
