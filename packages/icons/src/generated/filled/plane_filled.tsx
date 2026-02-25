/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlaneFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlaneFilled = React.forwardRef<SVGSVGElement, PlaneFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12.868 2.504l3.712 6.496h3.42a3 3 0 0 1 0 6h-3.42l-3.712 6.496a1 1 0 0 1 -.868 .504h-3a1 1 0 0 1 -.962 -1.275l1.636 -5.725h-2.26l-1.707 1.707a1 1 0 0 1 -.707 .293h-3a1 1 0 0 1 -.894 -1.447l1.776 -3.553l-1.776 -3.553a1 1 0 0 1 .894 -1.447h3a1 1 0 0 1 .707 .293l1.707 1.707h2.26l-1.636 -5.725a1 1 0 0 1 .962 -1.275h3a1 1 0 0 1 .868 .504" />
    </svg>
  )
);
PlaneFilled.displayName = "PlaneFilled";
export const PlaneFilledMetadata = { id: "plane_filled", baseId: "plane", variant: "filled", name: "Plane", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default PlaneFilled;
