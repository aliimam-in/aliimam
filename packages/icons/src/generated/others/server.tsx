/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ServerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Server = React.forwardRef<SVGSVGElement, ServerProps>(
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
  <line x1="6" x2="6.01" y1="6" y2="6" />
  <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
);
Server.displayName = "Server";
export const ServerMetadata = { 
  id: "server", 
  baseId: "server", 
  variant: "default", 
  name: "Server", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Server;
