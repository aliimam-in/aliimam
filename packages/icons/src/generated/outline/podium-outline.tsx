/**
 * Auto-generated logo component: Podium Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PodiumOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PodiumOutlineLogo = React.forwardRef<SVGSVGElement, PodiumOutlineLogoProps>(
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
      <path d="M5 8h14l-.621 2.485a2 2 0 0 1 -1.94 1.515h-8.878a2 2 0 0 1 -1.94 -1.515l-.621 -2.485" />
  <path d="M7 8v-2a3 3 0 0 1 3 -3" />
  <path d="M8 12l1 9" />
  <path d="M16 12l-1 9" />
  <path d="M7 21h10" />
    </svg>
  )
);

PodiumOutlineLogo.displayName = "PodiumOutlineLogo";

export const PodiumOutlineLogoMetadata = {
  id: "podium-outline",
  baseId: "podium-outline",
  variant: "default",
  name: "Podium Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PodiumOutlineLogo;
