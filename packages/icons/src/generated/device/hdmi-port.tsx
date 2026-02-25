/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HdmiPortProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HdmiPort = React.forwardRef<SVGSVGElement, HdmiPortProps>(
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
      <path d="M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" />
  <path d="M7.5 12h9" />
    </svg>
  )
);
HdmiPort.displayName = "HdmiPort";
export const HdmiPortMetadata = { 
  id: "hdmi-port", 
  baseId: "hdmi-port", 
  variant: "default", 
  name: "Hdmi Port", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HdmiPort;
