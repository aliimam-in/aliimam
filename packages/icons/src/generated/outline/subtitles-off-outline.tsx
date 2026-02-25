/**
 * Auto-generated logo component: Subtitles Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SubtitlesOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SubtitlesOffOutlineLogo = React.forwardRef<SVGSVGElement, SubtitlesOffOutlineLogoProps>(
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
      <path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.13 .874m-2.006 2a3 3 0 0 1 -.864 .126h-12a3 3 0 0 1 -3 -3v-8c0 -1.35 .893 -2.493 2.12 -2.869" />
  <path d="M7 15h5" />
  <path d="M17 12h-1" />
  <path d="M12 12h-2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SubtitlesOffOutlineLogo.displayName = "SubtitlesOffOutlineLogo";

export const SubtitlesOffOutlineLogoMetadata = {
  id: "subtitles-off-outline",
  baseId: "subtitles-off-outline",
  variant: "default",
  name: "Subtitles Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SubtitlesOffOutlineLogo;
