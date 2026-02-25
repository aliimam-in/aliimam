/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RouteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Route = React.forwardRef<SVGSVGElement, RouteProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="6" cy="19" r="3" />
  <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
  <circle cx="18" cy="5" r="3" />
    </svg>
  )
);
Route.displayName = "Route";
export const RouteMetadata = { id: "route", baseId: "route", variant: "default", name: "Route", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Route;
