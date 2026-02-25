/**
 * Auto-generated logo component: Mood Cog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodCogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodCogOutlineLogo = React.forwardRef<SVGSVGElement, MoodCogOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 0 -8.983 9" />
  <path d="M16.001 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M18.001 14.5v1.5" />
  <path d="M18.001 20v1.5" />
  <path d="M21.032 16.25l-1.299 .75" />
  <path d="M16.27 19l-1.3 .75" />
  <path d="M14.97 16.25l1.3 .75" />
  <path d="M19.733 19l1.3 .75" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M9.5 15c.658 .64 1.56 1 2.5 1" />
    </svg>
  )
);

MoodCogOutlineLogo.displayName = "MoodCogOutlineLogo";

export const MoodCogOutlineLogoMetadata = {
  id: "mood-cog-outline",
  baseId: "mood-cog-outline",
  variant: "default",
  name: "Mood Cog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodCogOutlineLogo;
