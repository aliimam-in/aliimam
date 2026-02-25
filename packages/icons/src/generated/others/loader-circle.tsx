/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LoaderCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LoaderCircle = React.forwardRef<SVGSVGElement, LoaderCircleProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
);
LoaderCircle.displayName = "LoaderCircle";
export const LoaderCircleMetadata = { id: "loader-circle", baseId: "loader-circle", variant: "default", name: "Loader Circle", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default LoaderCircle;
