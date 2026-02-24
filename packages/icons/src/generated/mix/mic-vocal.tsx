/**
 * Auto-generated logo component: Mic Vocal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicVocalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MicVocalLogo = React.forwardRef<SVGSVGElement, MicVocalLogoProps>(
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
      <path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" />
  <path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" />
  <circle cx="16" cy="7" r="5" />
    </svg>
  )
);

MicVocalLogo.displayName = "MicVocalLogo";

export const MicVocalLogoMetadata = {
  id: "mic-vocal",
  baseId: "mic-vocal",
  variant: "default",
  name: "Mic Vocal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicVocalLogo;
