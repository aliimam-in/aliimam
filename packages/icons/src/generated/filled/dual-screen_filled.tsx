/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DualScreenFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DualScreenFilled = React.forwardRef<SVGSVGElement, DualScreenFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 3a1 1 0 0 1 1 1v15a1 1 0 0 1 -1 1h-5v2a1 1 0 0 1 -1.351 .936l-8 -3a1 1 0 0 1 -.649 -.936v-15a1 1 0 0 1 .212 -.616l.068 -.079l.078 -.072l.066 -.05l.092 -.058l.065 -.033l.1 -.04l.099 -.028l.046 -.01l.108 -.013l.066 -.001zm-5.649 3.064a1 1 0 0 1 .649 .936v11h4v-13h-7.486z" />
    </svg>
  )
);
DualScreenFilled.displayName = "DualScreenFilled";
export const DualScreenFilledMetadata = { id: "dual-screen_filled", baseId: "dual-screen", variant: "filled", name: "Dual Screen", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default DualScreenFilled;
