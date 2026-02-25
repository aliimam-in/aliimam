/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MousePointer2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MousePointer2 = React.forwardRef<SVGSVGElement, MousePointer2Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
    </svg>
  )
);
MousePointer2.displayName = "MousePointer2";
export const MousePointer2Metadata = { id: "mouse-pointer-2", baseId: "mouse-pointer-2", variant: "default", name: "Mouse Pointer 2", category: "cursor", tags: [], viewBox: "0 0 24 24" } as const;
export default MousePointer2;
