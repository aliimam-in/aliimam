/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AppWindowFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AppWindowFilled = React.forwardRef<SVGSVGElement, AppWindowFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-12.99 3l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm3 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" />
    </svg>
  )
);
AppWindowFilled.displayName = "AppWindowFilled";
export const AppWindowFilledMetadata = { id: "app-window_filled", baseId: "app-window", variant: "filled", name: "App Window", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default AppWindowFilled;
