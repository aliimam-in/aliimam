/**
 * Auto-generated logo component: Funnel (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FunnelLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FunnelLogo = React.forwardRef<SVGSVGElement, FunnelLogoProps>(
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
      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
    </svg>
  )
);

FunnelLogo.displayName = "FunnelLogo";

export const FunnelLogoMetadata = {
  id: "funnel",
  baseId: "funnel",
  variant: "default",
  name: "Funnel",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FunnelLogo;
