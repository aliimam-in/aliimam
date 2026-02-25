/**
 * Auto-generated logo component: Load Balancer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LoadBalancerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LoadBalancerOutlineLogo = React.forwardRef<SVGSVGElement, LoadBalancerOutlineLogoProps>(
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
      <path d="M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 16v3" />
  <path d="M12 10v-7" />
  <path d="M9 6l3 -3l3 3" />
  <path d="M12 10v-7" />
  <path d="M9 6l3 -3l3 3" />
  <path d="M14.894 12.227l6.11 -2.224" />
  <path d="M17.159 8.21l3.845 1.793l-1.793 3.845" />
  <path d="M9.101 12.214l-6.075 -2.211" />
  <path d="M6.871 8.21l-3.845 1.793l1.793 3.845" />
    </svg>
  )
);

LoadBalancerOutlineLogo.displayName = "LoadBalancerOutlineLogo";

export const LoadBalancerOutlineLogoMetadata = {
  id: "load-balancer-outline",
  baseId: "load-balancer-outline",
  variant: "default",
  name: "Load Balancer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LoadBalancerOutlineLogo;
