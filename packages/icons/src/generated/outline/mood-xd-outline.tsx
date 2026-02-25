/**
 * Auto-generated logo component: Mood Xd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodXdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodXdOutlineLogo = React.forwardRef<SVGSVGElement, MoodXdOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M9 14h6a3 3 0 0 1 -6 0" />
  <path d="M9 8l6 3" />
  <path d="M9 11l6 -3" />
    </svg>
  )
);

MoodXdOutlineLogo.displayName = "MoodXdOutlineLogo";

export const MoodXdOutlineLogoMetadata = {
  id: "mood-xd-outline",
  baseId: "mood-xd-outline",
  variant: "default",
  name: "Mood Xd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodXdOutlineLogo;
