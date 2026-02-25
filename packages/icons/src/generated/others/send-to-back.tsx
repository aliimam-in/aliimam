/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SendToBackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SendToBack = React.forwardRef<SVGSVGElement, SendToBackProps>(
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
      <rect x="14" y="14" width="8" height="8" rx="2" />
  <rect x="2" y="2" width="8" height="8" rx="2" />
  <path d="M7 14v1a2 2 0 0 0 2 2h1" />
  <path d="M14 7h1a2 2 0 0 1 2 2v1" />
    </svg>
  )
);
SendToBack.displayName = "SendToBack";
export const SendToBackMetadata = { 
  id: "send-to-back", 
  baseId: "send-to-back", 
  variant: "default", 
  name: "Send To Back", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SendToBack;
