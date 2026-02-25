/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ToolboxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Toolbox = React.forwardRef<SVGSVGElement, ToolboxProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 12v4" />
  <path d="M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z" />
  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  <path d="M2 14h20" />
  <path d="M8 12v4" />
    </svg>
  )
);
Toolbox.displayName = "Toolbox";
export const ToolboxMetadata = { id: "toolbox", baseId: "toolbox", variant: "default", name: "Toolbox", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Toolbox;
