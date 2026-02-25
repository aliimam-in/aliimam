/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HandshakeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Handshake = React.forwardRef<SVGSVGElement, HandshakeProps>(
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
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
  <path d="m21 3 1 11h-2" />
  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
  <path d="M3 4h8" />
    </svg>
  )
);
Handshake.displayName = "Handshake";
export const HandshakeMetadata = { 
  id: "handshake", 
  baseId: "handshake", 
  variant: "default", 
  name: "Handshake", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Handshake;
