/**
 * Auto-generated logo component: Subtitles Edit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SubtitlesEditOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SubtitlesEditOutlineLogo = React.forwardRef<SVGSVGElement, SubtitlesEditOutlineLogoProps>(
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
      <path d="M11.5 19h-5.5a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v3" />
  <path d="M7 15h5" />
  <path d="M17 12h-3" />
  <path d="M11 12h-1" />
  <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" />
    </svg>
  )
);

SubtitlesEditOutlineLogo.displayName = "SubtitlesEditOutlineLogo";

export const SubtitlesEditOutlineLogoMetadata = {
  id: "subtitles-edit-outline",
  baseId: "subtitles-edit-outline",
  variant: "default",
  name: "Subtitles Edit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SubtitlesEditOutlineLogo;
