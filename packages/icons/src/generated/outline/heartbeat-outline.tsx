/**
 * Auto-generated logo component: Heartbeat Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeartbeatOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeartbeatOutlineLogo = React.forwardRef<SVGSVGElement, HeartbeatOutlineLogoProps>(
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
      <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
  <path d="M3 13h2l2 3l2 -6l1 3h3" />
    </svg>
  )
);

HeartbeatOutlineLogo.displayName = "HeartbeatOutlineLogo";

export const HeartbeatOutlineLogoMetadata = {
  id: "heartbeat-outline",
  baseId: "heartbeat-outline",
  variant: "default",
  name: "Heartbeat Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeartbeatOutlineLogo;
