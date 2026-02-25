/**
 * Auto-generated logo component: Rosette Asterisk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RosetteAsteriskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RosetteAsteriskOutlineLogo = React.forwardRef<SVGSVGElement, RosetteAsteriskOutlineLogoProps>(
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
      <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55l0 -1" />
  <path d="M12 8.5v7" />
  <path d="M9 10l6 4" />
  <path d="M9 14l6 -4" />
    </svg>
  )
);

RosetteAsteriskOutlineLogo.displayName = "RosetteAsteriskOutlineLogo";

export const RosetteAsteriskOutlineLogoMetadata = {
  id: "rosette-asterisk-outline",
  baseId: "rosette-asterisk-outline",
  variant: "default",
  name: "Rosette Asterisk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RosetteAsteriskOutlineLogo;
