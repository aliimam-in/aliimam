/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NetworkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Network = React.forwardRef<SVGSVGElement, NetworkProps>(
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
  <rect x="2" y="16" width="6" height="6" rx="1" />
  <rect x="9" y="2" width="6" height="6" rx="1" />
  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
  <path d="M12 12V8" />
    </svg>
  )
);
Network.displayName = "Network";
export const NetworkMetadata = { 
  id: "network", 
  baseId: "network", 
  variant: "default", 
  name: "Network", 
  category: "network", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Network;
