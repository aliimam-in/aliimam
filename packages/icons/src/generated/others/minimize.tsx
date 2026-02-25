/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MinimizeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Minimize = React.forwardRef<SVGSVGElement, MinimizeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
  <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
  <path d="M3 16h3a2 2 0 0 1 2 2v3" />
  <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
);
Minimize.displayName = "Minimize";
export const MinimizeMetadata = { id: "minimize", baseId: "minimize", variant: "default", name: "Minimize", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Minimize;
