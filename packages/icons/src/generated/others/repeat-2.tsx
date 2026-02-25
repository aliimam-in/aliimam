/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Repeat2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Repeat2 = React.forwardRef<SVGSVGElement, Repeat2Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m2 9 3-3 3 3" />
  <path d="M13 18H7a2 2 0 0 1-2-2V6" />
  <path d="m22 15-3 3-3-3" />
  <path d="M11 6h6a2 2 0 0 1 2 2v10" />
    </svg>
  )
);
Repeat2.displayName = "Repeat2";
export const Repeat2Metadata = { id: "repeat-2", baseId: "repeat-2", variant: "default", name: "Repeat 2", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Repeat2;
