/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareDashedBottomCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareDashedBottomCode = React.forwardRef<SVGSVGElement, SquareDashedBottomCodeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 9.5 8 12l2 2.5" />
  <path d="M14 21h1" />
  <path d="m14 9.5 2 2.5-2 2.5" />
  <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
  <path d="M9 21h1" />
    </svg>
  )
);
SquareDashedBottomCode.displayName = "SquareDashedBottomCode";
export const SquareDashedBottomCodeMetadata = { id: "square-dashed-bottom-code", baseId: "square-dashed-bottom-code", variant: "default", name: "Square Dashed Bottom Code", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareDashedBottomCode;
