/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBigLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBigLeftFilled = React.forwardRef<SVGSVGElement, ArrowBigLeftFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" />
    </svg>
  )
);
ArrowBigLeftFilled.displayName = "ArrowBigLeftFilled";
export const ArrowBigLeftFilledMetadata = { id: "arrow-big-left_filled", baseId: "arrow-big-left", variant: "filled", name: "Arrow Big Left", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowBigLeftFilled;
