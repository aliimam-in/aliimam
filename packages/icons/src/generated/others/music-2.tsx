/**
 * Auto-generated logo component: Music 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Music2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Music2Logo = React.forwardRef<SVGSVGElement, Music2LogoProps>(
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
      <circle cx="8" cy="18" r="4" />
  <path d="M12 18V2l7 4" />
    </svg>
  )
);

Music2Logo.displayName = "Music2Logo";

export const Music2LogoMetadata = {
  id: "music-2",
  baseId: "music-2",
  variant: "default",
  name: "Music 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Music2Logo;
