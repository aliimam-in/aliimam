/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WebhookProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Webhook = React.forwardRef<SVGSVGElement, WebhookProps>(
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
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
  <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
  <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  )
);
Webhook.displayName = "Webhook";
export const WebhookMetadata = { 
  id: "webhook", 
  baseId: "webhook", 
  variant: "default", 
  name: "Webhook", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Webhook;
