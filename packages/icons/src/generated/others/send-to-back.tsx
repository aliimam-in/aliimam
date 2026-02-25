/**
 * Auto-generated logo component: Send To Back (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SendToBackLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SendToBackLogo = React.forwardRef<SVGSVGElement, SendToBackLogoProps>(
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
      <rect x="14" y="14" width="8" height="8" rx="2" />
  <rect x="2" y="2" width="8" height="8" rx="2" />
  <path d="M7 14v1a2 2 0 0 0 2 2h1" />
  <path d="M14 7h1a2 2 0 0 1 2 2v1" />
    </svg>
  )
);

SendToBackLogo.displayName = "SendToBackLogo";

export const SendToBackLogoMetadata = {
  id: "send-to-back",
  baseId: "send-to-back",
  variant: "default",
  name: "Send To Back",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SendToBackLogo;
