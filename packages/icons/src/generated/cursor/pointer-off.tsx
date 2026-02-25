/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PointerOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PointerOff = React.forwardRef<SVGSVGElement, PointerOffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 4.5V4a2 2 0 0 0-2.41-1.957" />
  <path d="M13.9 8.4a2 2 0 0 0-1.26-1.295" />
  <path d="M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" />
  <path d="m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" />
  <path d="M6 6v8" />
  <path d="m2 2 20 20" />
    </svg>
  )
);
PointerOff.displayName = "PointerOff";
export const PointerOffMetadata = { id: "pointer-off", baseId: "pointer-off", variant: "default", name: "Pointer Off", category: "cursor", tags: [], viewBox: "0 0 24 24" } as const;
export default PointerOff;
