/**
 * Auto-generated logo component: Mood Sad (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodSadFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodSadFilledLogo = React.forwardRef<SVGSVGElement, MoodSadFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 9.86a4.5 4.5 0 0 0 -3.214 1.35a1 1 0 1 0 1.428 1.4a2.5 2.5 0 0 1 3.572 0a1 1 0 0 0 1.428 -1.4a4.5 4.5 0 0 0 -3.214 -1.35zm-2.99 -4.2l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
    </svg>
  )
);

MoodSadFilledLogo.displayName = "MoodSadFilledLogo";

export const MoodSadFilledLogoMetadata = {
  id: "mood-sad_filled",
  baseId: "mood-sad",
  variant: "filled",
  name: "Mood Sad",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodSadFilledLogo;
