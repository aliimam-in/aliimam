/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HourglassProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Hourglass = React.forwardRef<SVGSVGElement, HourglassProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5 22h14" />
  <path d="M5 2h14" />
  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </svg>
  )
);
Hourglass.displayName = "Hourglass";
export const HourglassMetadata = { id: "hourglass", baseId: "hourglass", variant: "default", name: "Hourglass", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Hourglass;
