/**
 * Auto-generated logo component: Mood Wink 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodWink2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodWink2OutlineLogo = React.forwardRef<SVGSVGElement, MoodWink2OutlineLogoProps>(
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
  <path d="M9 10h-.01" />
  <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
  <path d="M15.5 8.5l-1.5 1.5l1.5 1.5" />
    </svg>
  )
);

MoodWink2OutlineLogo.displayName = "MoodWink2OutlineLogo";

export const MoodWink2OutlineLogoMetadata = {
  id: "mood-wink-2-outline",
  baseId: "mood-wink-2-outline",
  variant: "default",
  name: "Mood Wink 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodWink2OutlineLogo;
