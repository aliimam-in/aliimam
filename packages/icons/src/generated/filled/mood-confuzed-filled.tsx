/**
 * Auto-generated logo component: Mood Confuzed Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodConfuzedFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodConfuzedFilledLogo = React.forwardRef<SVGSVGElement, MoodConfuzedFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.43 10.162a11 11 0 0 0 -6.6 1.65a1 1 0 0 0 1.06 1.696a9 9 0 0 1 5.4 -1.35a1 1 0 0 0 .14 -1.996zm-6.56 -4.502l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
    </svg>
  )
);

MoodConfuzedFilledLogo.displayName = "MoodConfuzedFilledLogo";

export const MoodConfuzedFilledLogoMetadata = {
  id: "mood-confuzed-filled",
  baseId: "mood-confuzed-filled",
  variant: "default",
  name: "Mood Confuzed Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodConfuzedFilledLogo;
