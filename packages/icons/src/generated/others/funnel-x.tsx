/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FunnelXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FunnelX = React.forwardRef<SVGSVGElement, FunnelXProps>(
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
      <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" />
  <path d="m16.5 3.5 5 5" />
  <path d="m21.5 3.5-5 5" />
    </svg>
  )
);
FunnelX.displayName = "FunnelX";
export const FunnelXMetadata = { 
  id: "funnel-x", 
  baseId: "funnel-x", 
  variant: "default", 
  name: "Funnel X", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FunnelX;
