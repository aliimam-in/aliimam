/**
 * Auto-generated logo component: Mood Nervous Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodNervousOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodNervousOutlineLogo = React.forwardRef<SVGSVGElement, MoodNervousOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M8 16l2 -2l2 2l2 -2l2 2" />
    </svg>
  )
);

MoodNervousOutlineLogo.displayName = "MoodNervousOutlineLogo";

export const MoodNervousOutlineLogoMetadata = {
  id: "mood-nervous-outline",
  baseId: "mood-nervous-outline",
  variant: "default",
  name: "Mood Nervous Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodNervousOutlineLogo;
