/**
 * Auto-generated logo component: Badge Ar (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeArFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeArFilledLogo = React.forwardRef<SVGSVGElement, BadgeArFilledLogoProps>(
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
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-10.5 4a2.5 2.5 0 0 0 -2.5 2.5v4.5a1 1 0 0 0 2 0v-1h1v1a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-4.5a2.5 2.5 0 0 0 -2.5 -2.5m7 0h-1.5a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1.196l1.168 1.75a1 1 0 0 0 1.387 .278l.093 -.07a1 1 0 0 0 .184 -1.317l-1.159 -1.738l.044 -.023a2.5 2.5 0 0 0 -1.217 -4.684m-7 2a.5 .5 0 0 1 .5 .5v1.5h-1v-1.5a.5 .5 0 0 1 .41 -.492zm7 0a.5 .5 0 1 1 0 1h-.5v-1z" />
    </svg>
  )
);

BadgeArFilledLogo.displayName = "BadgeArFilledLogo";

export const BadgeArFilledLogoMetadata = {
  id: "badge-ar_filled",
  baseId: "badge-ar",
  variant: "filled",
  name: "Badge Ar",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeArFilledLogo;
