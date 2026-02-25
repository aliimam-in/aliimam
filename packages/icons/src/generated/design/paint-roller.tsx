/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PaintRollerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaintRoller = React.forwardRef<SVGSVGElement, PaintRollerProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="16" height="6" x="2" y="2" rx="2" />
  <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
  <rect width="4" height="6" x="8" y="16" rx="1" />
    </svg>
  )
);
PaintRoller.displayName = "PaintRoller";
export const PaintRollerMetadata = { id: "paint-roller", baseId: "paint-roller", variant: "default", name: "Paint Roller", category: "design", tags: [], viewBox: "0 0 24 24" } as const;
export default PaintRoller;
