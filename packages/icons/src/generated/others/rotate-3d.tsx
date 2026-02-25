/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Rotate3dProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Rotate3d = React.forwardRef<SVGSVGElement, Rotate3dProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
  <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
  <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
    </svg>
  )
);
Rotate3d.displayName = "Rotate3d";
export const Rotate3dMetadata = { id: "rotate-3d", baseId: "rotate-3d", variant: "default", name: "Rotate 3d", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Rotate3d;
