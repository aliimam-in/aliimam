/**
 * Auto-generated logo component: Mood Wink Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodWinkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodWinkOutlineLogo = React.forwardRef<SVGSVGElement, MoodWinkOutlineLogoProps>(
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
  <path d="M15 10h.01" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  <path d="M8.5 8.5l1.5 1.5l-1.5 1.5" />
    </svg>
  )
);

MoodWinkOutlineLogo.displayName = "MoodWinkOutlineLogo";

export const MoodWinkOutlineLogoMetadata = {
  id: "mood-wink-outline",
  baseId: "mood-wink-outline",
  variant: "default",
  name: "Mood Wink Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodWinkOutlineLogo;
