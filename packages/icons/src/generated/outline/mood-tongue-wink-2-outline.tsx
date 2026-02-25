/**
 * Auto-generated logo component: Mood Tongue Wink 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodTongueWink2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodTongueWink2OutlineLogo = React.forwardRef<SVGSVGElement, MoodTongueWink2OutlineLogoProps>(
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
  <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" />
  <path d="M15 10h-.01" />
  <path d="M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7" />
  <path d="M7 10c.5 -1 2.5 -1 3 0" />
    </svg>
  )
);

MoodTongueWink2OutlineLogo.displayName = "MoodTongueWink2OutlineLogo";

export const MoodTongueWink2OutlineLogoMetadata = {
  id: "mood-tongue-wink-2-outline",
  baseId: "mood-tongue-wink-2-outline",
  variant: "default",
  name: "Mood Tongue Wink 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodTongueWink2OutlineLogo;
