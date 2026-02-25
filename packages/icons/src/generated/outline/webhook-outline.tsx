/**
 * Auto-generated logo component: Webhook Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WebhookOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WebhookOutlineLogo = React.forwardRef<SVGSVGElement, WebhookOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M4.876 13.61a4 4 0 1 0 6.124 3.39h6" />
  <path d="M15.066 20.502a4 4 0 1 0 1.934 -7.502c-.706 0 -1.424 .179 -2 .5l-3 -5.5" />
  <path d="M16 8a4 4 0 1 0 -8 0c0 1.506 .77 2.818 2 3.5l-3 5.5" />
    </svg>
  )
);

WebhookOutlineLogo.displayName = "WebhookOutlineLogo";

export const WebhookOutlineLogoMetadata = {
  id: "webhook-outline",
  baseId: "webhook-outline",
  variant: "default",
  name: "Webhook Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WebhookOutlineLogo;
