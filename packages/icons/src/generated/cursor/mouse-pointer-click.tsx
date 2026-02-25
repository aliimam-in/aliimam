/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MousePointerClickProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MousePointerClick = React.forwardRef<SVGSVGElement, MousePointerClickProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14 4.1 12 6" />
  <path d="m5.1 8-2.9-.8" />
  <path d="m6 12-1.9 2" />
  <path d="M7.2 2.2 8 5.1" />
  <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
    </svg>
  )
);
MousePointerClick.displayName = "MousePointerClick";
export const MousePointerClickMetadata = { id: "mouse-pointer-click", baseId: "mouse-pointer-click", variant: "default", name: "Mouse Pointer Click", category: "cursor", tags: [], viewBox: "0 0 24 24" } as const;
export default MousePointerClick;
