/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LampDeskProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LampDesk = React.forwardRef<SVGSVGElement, LampDeskProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z" />
  <path d="m14.207 4.793-3.414 3.414" />
  <path d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
  <path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" />
    </svg>
  )
);
LampDesk.displayName = "LampDesk";
export const LampDeskMetadata = { id: "lamp-desk", baseId: "lamp-desk", variant: "default", name: "Lamp Desk", category: "home", tags: [], viewBox: "0 0 24 24" } as const;
export default LampDesk;
