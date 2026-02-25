/**
 * Auto-generated logo component: Mood Kid (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodKidFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodKidFilledLogo = React.forwardRef<SVGSVGElement, MoodKidFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 7.046 -9.232a3 3 0 0 0 2.949 3.556a1 1 0 0 0 0 -2l-.117 -.007a1 1 0 0 1 .117 -1.993c1.726 0 3.453 .447 5 1.34zm-1.8 10.946a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414zm-6.19 -5.286l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm6 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" />
    </svg>
  )
);

MoodKidFilledLogo.displayName = "MoodKidFilledLogo";

export const MoodKidFilledLogoMetadata = {
  id: "mood-kid_filled",
  baseId: "mood-kid",
  variant: "filled",
  name: "Mood Kid",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodKidFilledLogo;
