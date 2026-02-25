/**
 * Auto-generated logo component: Sunrise Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunriseFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunriseFilledLogo = React.forwardRef<SVGSVGElement, SunriseFilledLogoProps>(
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
      <path d="M4 16a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z" />
  <path d="M12 12a5 5 0 0 1 5 5a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1a5 5 0 0 1 5 -5" />
  <path d="M21 16a1 1 0 0 1 0 2h-1a1 1 0 0 1 0 -2z" />
  <path d="M6.307 9.893l.7 .7a1 1 0 0 1 -1.414 1.414l-.7 -.7a1 1 0 0 1 1.414 -1.414" />
  <path d="M19.107 9.893a1 1 0 0 1 0 1.414l-.7 .7a1 1 0 0 1 -1.414 -1.414l.7 -.7a1 1 0 0 1 1.414 0" />
  <path d="M12.707 2.293l3 3a1 1 0 1 1 -1.414 1.414l-1.293 -1.292v3.585a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -1 -1v-3.586l-1.293 1.293a1 1 0 0 1 -1.414 -1.414l2.958 -2.96a1 1 0 0 1 .15 -.135l.127 -.08l.068 -.033l.11 -.041l.12 -.029c.3 -.055 .627 .024 .881 .278" />
  <path d="M3 20h18a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2" />
  <path d="M12 12a5 5 0 0 1 4.583 7.002h-9.166a5 5 0 0 1 4.583 -7.002" />
    </svg>
  )
);

SunriseFilledLogo.displayName = "SunriseFilledLogo";

export const SunriseFilledLogoMetadata = {
  id: "sunrise-filled",
  baseId: "sunrise-filled",
  variant: "default",
  name: "Sunrise Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunriseFilledLogo;
