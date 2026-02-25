/**
 * Auto-generated logo component: Play Card 10 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayCard10FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayCard10FilledLogo = React.forwardRef<SVGSVGElement, PlayCard10FilledLogoProps>(
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-8.01 -10a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1m4.5 0c-1.453 0 -2.5 1.395 -2.5 3v2c0 1.605 1.047 3 2.5 3s2.5 -1.395 2.5 -3v-2c0 -1.605 -1.047 -3 -2.5 -3m0 2c.203 0 .5 .395 .5 1v2c0 .605 -.297 1 -.5 1s-.5 -.395 -.5 -1v-2c0 -.605 .297 -1 .5 -1m-6.49 -6h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
    </svg>
  )
);

PlayCard10FilledLogo.displayName = "PlayCard10FilledLogo";

export const PlayCard10FilledLogoMetadata = {
  id: "play-card-10-filled",
  baseId: "play-card-10-filled",
  variant: "default",
  name: "Play Card 10 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayCard10FilledLogo;
