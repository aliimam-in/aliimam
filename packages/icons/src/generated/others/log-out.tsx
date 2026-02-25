/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LogOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LogOut = React.forwardRef<SVGSVGElement, LogOutProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m16 17 5-5-5-5" />
  <path d="M21 12H9" />
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    </svg>
  )
);
LogOut.displayName = "LogOut";
export const LogOutMetadata = { id: "log-out", baseId: "log-out", variant: "default", name: "Log Out", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default LogOut;
