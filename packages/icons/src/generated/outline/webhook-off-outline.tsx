/**
 * Auto-generated logo component: Webhook Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WebhookOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WebhookOffOutlineLogo = React.forwardRef<SVGSVGElement, WebhookOffOutlineLogoProps>(
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
  <path d="M15.066 20.502a4 4 0 0 0 4.763 -.675m1.171 -2.827a4 4 0 0 0 -4 -4" />
  <path d="M16 8a4 4 0 0 0 -6.824 -2.833m-1.176 2.833c0 1.506 .77 2.818 2 3.5l-3 5.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WebhookOffOutlineLogo.displayName = "WebhookOffOutlineLogo";

export const WebhookOffOutlineLogoMetadata = {
  id: "webhook-off-outline",
  baseId: "webhook-off-outline",
  variant: "default",
  name: "Webhook Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WebhookOffOutlineLogo;
