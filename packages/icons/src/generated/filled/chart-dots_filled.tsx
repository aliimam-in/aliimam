/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartDotsFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartDotsFilled = React.forwardRef<SVGSVGElement, ChartDotsFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-18a1 1 0 0 1 1 -1z" />
  <path d="M19 4a3 3 0 1 1 -.651 5.93l-2.002 3.202a3 3 0 1 1 -4.927 .337l-1.378 -1.655a3 3 0 1 1 1.538 -1.282l1.378 1.654a2.994 2.994 0 0 1 1.693 -.115l2.002 -3.203a3 3 0 0 1 2.347 -4.868z" />
    </svg>
  )
);
ChartDotsFilled.displayName = "ChartDotsFilled";
export const ChartDotsFilledMetadata = { id: "chart-dots_filled", baseId: "chart-dots", variant: "filled", name: "Chart Dots", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ChartDotsFilled;
