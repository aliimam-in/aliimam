/**
 * Auto-generated logo component: Mood Sad 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodSad2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodSad2OutlineLogo = React.forwardRef<SVGSVGElement, MoodSad2OutlineLogoProps>(
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
  <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
  <path d="M10 9.25c-.5 1 -2.5 1 -3 0" />
  <path d="M17 9.25c-.5 1 -2.5 1 -3 0" />
    </svg>
  )
);

MoodSad2OutlineLogo.displayName = "MoodSad2OutlineLogo";

export const MoodSad2OutlineLogoMetadata = {
  id: "mood-sad-2-outline",
  baseId: "mood-sad-2-outline",
  variant: "default",
  name: "Mood Sad 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodSad2OutlineLogo;
