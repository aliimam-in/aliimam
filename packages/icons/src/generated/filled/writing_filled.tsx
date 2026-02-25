/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WritingFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WritingFilled = React.forwardRef<SVGSVGElement, WritingFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M21 8v9a1 1 0 0 1 -.293 .707l-2 2a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006h-13a3 3 0 0 1 0 -6h4a1 1 0 0 0 0 -2h-3a1 1 0 0 1 0 -2h3a3 3 0 0 1 0 6h-4a1 1 0 0 0 0 2h10.585l-.292 -.293a1 1 0 0 1 -.293 -.707v-9zm-3 -6c1.673 0 3 1.327 3 3v1h-6v-1c0 -1.673 1.327 -3 3 -3" />
    </svg>
  )
);
WritingFilled.displayName = "WritingFilled";
export const WritingFilledMetadata = { id: "writing_filled", baseId: "writing", variant: "filled", name: "Writing", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default WritingFilled;
