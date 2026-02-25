/**
 * Auto-generated logo component: Mood Wrrr Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodWrrrOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodWrrrOutlineLogo = React.forwardRef<SVGSVGElement, MoodWrrrOutlineLogoProps>(
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
  <path d="M8 16l1 -1l1.5 1l1.5 -1l1.5 1l1.5 -1l1 1" />
  <path d="M8.5 11.5l1.5 -1.5l-1.5 -1.5" />
  <path d="M15.5 11.5l-1.5 -1.5l1.5 -1.5" />
    </svg>
  )
);

MoodWrrrOutlineLogo.displayName = "MoodWrrrOutlineLogo";

export const MoodWrrrOutlineLogoMetadata = {
  id: "mood-wrrr-outline",
  baseId: "mood-wrrr-outline",
  variant: "default",
  name: "Mood Wrrr Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodWrrrOutlineLogo;
