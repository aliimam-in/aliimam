/**
 * Auto-generated logo component: Waves Ladder (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WavesLadderLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WavesLadderLogo = React.forwardRef<SVGSVGElement, WavesLadderLogoProps>(
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
      <path d="M19 5a2 2 0 0 0-2 2v11" />
  <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  <path d="M7 13h10" />
  <path d="M7 9h10" />
  <path d="M9 5a2 2 0 0 0-2 2v11" />
    </svg>
  )
);

WavesLadderLogo.displayName = "WavesLadderLogo";

export const WavesLadderLogoMetadata = {
  id: "waves-ladder",
  baseId: "waves-ladder",
  variant: "default",
  name: "Waves Ladder",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WavesLadderLogo;
