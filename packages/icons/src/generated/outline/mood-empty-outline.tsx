/**
 * Auto-generated logo component: Mood Empty Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodEmptyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodEmptyOutlineLogo = React.forwardRef<SVGSVGElement, MoodEmptyOutlineLogoProps>(
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
  <path d="M9 10l.01 0" />
  <path d="M15 10l.01 0" />
  <path d="M9 15l6 0" />
    </svg>
  )
);

MoodEmptyOutlineLogo.displayName = "MoodEmptyOutlineLogo";

export const MoodEmptyOutlineLogoMetadata = {
  id: "mood-empty-outline",
  baseId: "mood-empty-outline",
  variant: "default",
  name: "Mood Empty Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodEmptyOutlineLogo;
