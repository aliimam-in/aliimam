/**
 * Auto-generated logo component: Subtitles Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SubtitlesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SubtitlesOutlineLogo = React.forwardRef<SVGSVGElement, SubtitlesOutlineLogoProps>(
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
      <path d="M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3l12 0" />
  <path d="M7 15h5" />
  <path d="M15 15h2" />
  <path d="M17 12h-3" />
  <path d="M11 12h-1" />
    </svg>
  )
);

SubtitlesOutlineLogo.displayName = "SubtitlesOutlineLogo";

export const SubtitlesOutlineLogoMetadata = {
  id: "subtitles-outline",
  baseId: "subtitles-outline",
  variant: "default",
  name: "Subtitles Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SubtitlesOutlineLogo;
