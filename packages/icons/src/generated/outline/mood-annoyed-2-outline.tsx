/**
 * Auto-generated logo component: Mood Annoyed 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodAnnoyed2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodAnnoyed2OutlineLogo = React.forwardRef<SVGSVGElement, MoodAnnoyed2OutlineLogoProps>(
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
      <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" />
  <path d="M15 14c-2 0 -3 1 -3.5 2.05" />
  <path d="M10 9.25c-.5 1 -2.5 1 -3 0" />
  <path d="M17 9.25c-.5 1 -2.5 1 -3 0" />
    </svg>
  )
);

MoodAnnoyed2OutlineLogo.displayName = "MoodAnnoyed2OutlineLogo";

export const MoodAnnoyed2OutlineLogoMetadata = {
  id: "mood-annoyed-2-outline",
  baseId: "mood-annoyed-2-outline",
  variant: "default",
  name: "Mood Annoyed 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodAnnoyed2OutlineLogo;
