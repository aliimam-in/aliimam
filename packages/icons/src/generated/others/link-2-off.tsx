/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Link2OffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Link2Off = React.forwardRef<SVGSVGElement, Link2OffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M9 17H7A5 5 0 0 1 7 7" />
  <path d="M15 7h2a5 5 0 0 1 4 8" />
  <line x1="8" x2="12" y1="12" y2="12" />
  <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
);
Link2Off.displayName = "Link2Off";
export const Link2OffMetadata = { id: "link-2-off", baseId: "link-2-off", variant: "default", name: "Link 2 Off", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Link2Off;
