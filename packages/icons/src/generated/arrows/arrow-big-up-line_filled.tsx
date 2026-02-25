/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBigUpLineFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBigUpLineFilled = React.forwardRef<SVGSVGElement, ArrowBigUpLineFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v5a1 1 0 0 0 1 1h6l.117 -.007a1 1 0 0 0 .883 -.993l-.001 -5h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z" />
  <path d="M15 20a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z" />
    </svg>
  )
);
ArrowBigUpLineFilled.displayName = "ArrowBigUpLineFilled";
export const ArrowBigUpLineFilledMetadata = { id: "arrow-big-up-line_filled", baseId: "arrow-big-up-line", variant: "filled", name: "Arrow Big Up Line", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowBigUpLineFilled;
