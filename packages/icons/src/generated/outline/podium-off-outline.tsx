/**
 * Auto-generated logo component: Podium Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PodiumOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PodiumOffOutlineLogo = React.forwardRef<SVGSVGElement, PodiumOffOutlineLogoProps>(
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
      <path d="M12 8h7l-.621 2.485a2 2 0 0 1 -1.94 1.515h-.439m-4 0h-4.439a2 2 0 0 1 -1.94 -1.515l-.621 -2.485h3" />
  <path d="M7 8v-1m.864 -3.106a2.99 2.99 0 0 1 2.136 -.894" />
  <path d="M8 12l1 9" />
  <path d="M15.599 15.613l-.599 5.387" />
  <path d="M7 21h10" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PodiumOffOutlineLogo.displayName = "PodiumOffOutlineLogo";

export const PodiumOffOutlineLogoMetadata = {
  id: "podium-off-outline",
  baseId: "podium-off-outline",
  variant: "default",
  name: "Podium Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PodiumOffOutlineLogo;
