/**
 * Auto-generated logo component: Mood Empty (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodEmptyFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodEmptyFilledLogo = React.forwardRef<SVGSVGElement, MoodEmptyFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 10.66h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-5.99 -5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
    </svg>
  )
);

MoodEmptyFilledLogo.displayName = "MoodEmptyFilledLogo";

export const MoodEmptyFilledLogoMetadata = {
  id: "mood-empty_filled",
  baseId: "mood-empty",
  variant: "filled",
  name: "Mood Empty",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodEmptyFilledLogo;
