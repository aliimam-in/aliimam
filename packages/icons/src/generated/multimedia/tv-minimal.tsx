/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TvMinimalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TvMinimal = React.forwardRef<SVGSVGElement, TvMinimalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M7 21h10" />
  <rect width="20" height="14" x="2" y="3" rx="2" />
    </svg>
  )
);
TvMinimal.displayName = "TvMinimal";
export const TvMinimalMetadata = { 
  id: "tv-minimal", 
  baseId: "tv-minimal", 
  variant: "default", 
  name: "Tv Minimal", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TvMinimal;
