/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FunnelPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FunnelPlus = React.forwardRef<SVGSVGElement, FunnelPlusProps>(
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
      <path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348" />
  <path d="M16 6h6" />
  <path d="M19 3v6" />
    </svg>
  )
);
FunnelPlus.displayName = "FunnelPlus";
export const FunnelPlusMetadata = { 
  id: "funnel-plus", 
  baseId: "funnel-plus", 
  variant: "default", 
  name: "Funnel Plus", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FunnelPlus;
