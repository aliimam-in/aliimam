/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AngryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Angry = React.forwardRef<SVGSVGElement, AngryProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
  <path d="M7.5 8 10 9" />
  <path d="m14 9 2.5-1" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
    </svg>
  )
);
Angry.displayName = "Angry";
export const AngryMetadata = { id: "angry", baseId: "angry", variant: "default", name: "Angry", category: "emoji", tags: [], viewBox: "0 0 24 24" } as const;
export default Angry;
