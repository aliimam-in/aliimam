/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WebhookOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WebhookOff = React.forwardRef<SVGSVGElement, WebhookOffProps>(
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
      <path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" />
  <path d="M9 3.4a4 4 0 0 1 6.52.66" />
  <path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" />
  <path d="M20.3 20.3a4 4 0 0 1-2.3.7" />
  <path d="M18.6 13a4 4 0 0 1 3.357 3.414" />
  <path d="m12 6 .6 1" />
  <path d="m2 2 20 20" />
    </svg>
  )
);
WebhookOff.displayName = "WebhookOff";
export const WebhookOffMetadata = { 
  id: "webhook-off", 
  baseId: "webhook-off", 
  variant: "default", 
  name: "Webhook Off", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WebhookOff;
