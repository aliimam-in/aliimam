/**
 * Auto-generated logo component: Badge Hd Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeHdFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeHdFilledLogo = React.forwardRef<SVGSVGElement, BadgeHdFilledLogoProps>(
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
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-4 4h-1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3m-5 0a1 1 0 0 0 -1 1v2h-1v-2a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-2h1v2a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1m5 2a1 1 0 0 1 1 1v2a1 1 0 0 1 -.883 .993l-.117 .007z" />
    </svg>
  )
);

BadgeHdFilledLogo.displayName = "BadgeHdFilledLogo";

export const BadgeHdFilledLogoMetadata = {
  id: "badge-hd-filled",
  baseId: "badge-hd-filled",
  variant: "default",
  name: "Badge Hd Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeHdFilledLogo;
