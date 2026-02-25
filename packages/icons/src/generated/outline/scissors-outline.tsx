/**
 * Auto-generated logo component: Scissors Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScissorsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScissorsOutlineLogo = React.forwardRef<SVGSVGElement, ScissorsOutlineLogoProps>(
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
      <path d="M3 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M8.6 8.6l10.4 10.4" />
  <path d="M8.6 15.4l10.4 -10.4" />
    </svg>
  )
);

ScissorsOutlineLogo.displayName = "ScissorsOutlineLogo";

export const ScissorsOutlineLogoMetadata = {
  id: "scissors-outline",
  baseId: "scissors-outline",
  variant: "default",
  name: "Scissors Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScissorsOutlineLogo;
