/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Scale3dProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Scale3d = React.forwardRef<SVGSVGElement, Scale3dProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5 7v11a1 1 0 0 0 1 1h11" />
  <path d="M5.293 18.707 11 13" />
  <circle cx="19" cy="19" r="2" />
  <circle cx="5" cy="5" r="2" />
    </svg>
  )
);
Scale3d.displayName = "Scale3d";
export const Scale3dMetadata = { id: "scale-3d", baseId: "scale-3d", variant: "default", name: "Scale 3d", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Scale3d;
