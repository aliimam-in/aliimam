/**
 * Auto-generated logo component: Subtitles Ai Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SubtitlesAiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SubtitlesAiOutlineLogo = React.forwardRef<SVGSVGElement, SubtitlesAiOutlineLogoProps>(
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
      <path d="M11.5 19h-5.5a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4" />
  <path d="M7 15h5" />
  <path d="M17 12h-3" />
  <path d="M11 12h-1" />
  <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
    </svg>
  )
);

SubtitlesAiOutlineLogo.displayName = "SubtitlesAiOutlineLogo";

export const SubtitlesAiOutlineLogoMetadata = {
  id: "subtitles-ai-outline",
  baseId: "subtitles-ai-outline",
  variant: "default",
  name: "Subtitles Ai Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SubtitlesAiOutlineLogo;
