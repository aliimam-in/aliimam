/**
 * Auto-generated logo component: Skateboard Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SkateboardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SkateboardOutlineLogo = React.forwardRef<SVGSVGElement, SkateboardOutlineLogoProps>(
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
      <path d="M5 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
    </svg>
  )
);

SkateboardOutlineLogo.displayName = "SkateboardOutlineLogo";

export const SkateboardOutlineLogoMetadata = {
  id: "skateboard-outline",
  baseId: "skateboard-outline",
  variant: "default",
  name: "Skateboard Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SkateboardOutlineLogo;
