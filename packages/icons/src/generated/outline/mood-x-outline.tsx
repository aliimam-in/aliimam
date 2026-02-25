/**
 * Auto-generated logo component: Mood X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodXOutlineLogo = React.forwardRef<SVGSVGElement, MoodXOutlineLogoProps>(
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
      <path d="M20.983 12.556a9 9 0 1 0 -8.433 8.427" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M9.5 15c.658 .64 1.56 1 2.5 1c.194 0 .386 -.015 .574 -.045" />
  <path d="M21.5 21.5l-5 -5" />
  <path d="M16.5 21.5l5 -5" />
    </svg>
  )
);

MoodXOutlineLogo.displayName = "MoodXOutlineLogo";

export const MoodXOutlineLogoMetadata = {
  id: "mood-x-outline",
  baseId: "mood-x-outline",
  variant: "default",
  name: "Mood X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodXOutlineLogo;
