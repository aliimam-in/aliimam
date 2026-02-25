/**
 * Auto-generated logo component: Spider Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpiderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpiderOutlineLogo = React.forwardRef<SVGSVGElement, SpiderOutlineLogoProps>(
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
      <path d="M5 4v2l5 5" />
  <path d="M2.5 9.5l1.5 1.5h6" />
  <path d="M4 19v-2l6 -6" />
  <path d="M19 4v2l-5 5" />
  <path d="M21.5 9.5l-1.5 1.5h-6" />
  <path d="M20 19v-2l-6 -6" />
  <path d="M8 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

SpiderOutlineLogo.displayName = "SpiderOutlineLogo";

export const SpiderOutlineLogoMetadata = {
  id: "spider-outline",
  baseId: "spider-outline",
  variant: "default",
  name: "Spider Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpiderOutlineLogo;
