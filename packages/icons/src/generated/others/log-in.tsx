/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LogInProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LogIn = React.forwardRef<SVGSVGElement, LogInProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m10 17 5-5-5-5" />
  <path d="M15 12H3" />
  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    </svg>
  )
);
LogIn.displayName = "LogIn";
export const LogInMetadata = { id: "log-in", baseId: "log-in", variant: "default", name: "Log In", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default LogIn;
