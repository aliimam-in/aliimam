/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScreenShareOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScreenShareOff = React.forwardRef<SVGSVGElement, ScreenShareOffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
  <path d="M8 21h8" />
  <path d="M12 17v4" />
  <path d="m22 3-5 5" />
  <path d="m17 3 5 5" />
    </svg>
  )
);
ScreenShareOff.displayName = "ScreenShareOff";
export const ScreenShareOffMetadata = { id: "screen-share-off", baseId: "screen-share-off", variant: "default", name: "Screen Share Off", category: "monitor", tags: [], viewBox: "0 0 24 24" } as const;
export default ScreenShareOff;
