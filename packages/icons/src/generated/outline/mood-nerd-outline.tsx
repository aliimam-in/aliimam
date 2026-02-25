/**
 * Auto-generated logo component: Mood Nerd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodNerdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodNerdOutlineLogo = React.forwardRef<SVGSVGElement, MoodNerdOutlineLogoProps>(
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
  <path d="M6 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  <path d="M3.5 9h2.5" />
  <path d="M18 9h2.5" />
  <path d="M10 9.5c1.333 -1.333 2.667 -1.333 4 0" />
    </svg>
  )
);

MoodNerdOutlineLogo.displayName = "MoodNerdOutlineLogo";

export const MoodNerdOutlineLogoMetadata = {
  id: "mood-nerd-outline",
  baseId: "mood-nerd-outline",
  variant: "default",
  name: "Mood Nerd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodNerdOutlineLogo;
