/**
 * Auto-generated logo component: Confetti Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ConfettiOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ConfettiOffOutlineLogo = React.forwardRef<SVGSVGElement, ConfettiOffOutlineLogoProps>(
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
      <path d="M4 5h1" />
  <path d="M5 5v1" />
  <path d="M11.5 4l-.5 2" />
  <path d="M18 5h2" />
  <path d="M19 4v2" />
  <path d="M15 9l-1 1" />
  <path d="M18 13l2 -.5" />
  <path d="M18 19h1" />
  <path d="M19 19v1" />
  <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ConfettiOffOutlineLogo.displayName = "ConfettiOffOutlineLogo";

export const ConfettiOffOutlineLogoMetadata = {
  id: "confetti-off-outline",
  baseId: "confetti-off-outline",
  variant: "default",
  name: "Confetti Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ConfettiOffOutlineLogo;
