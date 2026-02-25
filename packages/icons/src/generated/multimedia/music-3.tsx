/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Music3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Music3 = React.forwardRef<SVGSVGElement, Music3Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="18" r="4" />
  <path d="M16 18V2" />
    </svg>
  )
);
Music3.displayName = "Music3";
export const Music3Metadata = { id: "music-3", baseId: "music-3", variant: "default", name: "Music 3", category: "multimedia", tags: [], viewBox: "0 0 24 24" } as const;
export default Music3;
