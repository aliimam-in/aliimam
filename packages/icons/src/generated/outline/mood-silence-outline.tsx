/**
 * Auto-generated logo component: Mood Silence Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodSilenceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodSilenceOutlineLogo = React.forwardRef<SVGSVGElement, MoodSilenceOutlineLogoProps>(
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
  <path d="M15 10h-.01" />
  <path d="M8 15h8" />
  <path d="M9 14v2" />
  <path d="M12 14v2" />
  <path d="M15 14v2" />
    </svg>
  )
);

MoodSilenceOutlineLogo.displayName = "MoodSilenceOutlineLogo";

export const MoodSilenceOutlineLogoMetadata = {
  id: "mood-silence-outline",
  baseId: "mood-silence-outline",
  variant: "default",
  name: "Mood Silence Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodSilenceOutlineLogo;
