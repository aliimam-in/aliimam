/**
 * Auto-generated logo component: Sausage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SausageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SausageOutlineLogo = React.forwardRef<SVGSVGElement, SausageOutlineLogoProps>(
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
      <path d="M5.5 5.5a2.5 2.5 0 0 0 -2.5 2.5c0 7.18 5.82 13 13 13a2.5 2.5 0 1 0 0 -5a8 8 0 0 1 -8 -8a2.5 2.5 0 0 0 -2.5 -2.5" />
  <path d="M5.195 5.519l-1.243 -1.989a1 1 0 0 1 .848 -1.53h1.392a1 1 0 0 1 .848 1.53l-1.245 1.99" />
  <path d="M18.482 18.225l1.989 -1.243a1 1 0 0 1 1.53 .848v1.392a1 1 0 0 1 -1.53 .848l-1.991 -1.245" />
    </svg>
  )
);

SausageOutlineLogo.displayName = "SausageOutlineLogo";

export const SausageOutlineLogoMetadata = {
  id: "sausage-outline",
  baseId: "sausage-outline",
  variant: "default",
  name: "Sausage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SausageOutlineLogo;
