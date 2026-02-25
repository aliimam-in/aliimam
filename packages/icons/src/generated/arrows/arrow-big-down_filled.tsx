/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBigDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBigDownFilled = React.forwardRef<SVGSVGElement, ArrowBigDownFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 2l-.15 .005a2 2 0 0 0 -1.85 1.995v6.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-6.999a2 2 0 0 0 -2 -2h-4z" />
    </svg>
  )
);
ArrowBigDownFilled.displayName = "ArrowBigDownFilled";
export const ArrowBigDownFilledMetadata = { id: "arrow-big-down_filled", baseId: "arrow-big-down", variant: "filled", name: "Arrow Big Down", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowBigDownFilled;
