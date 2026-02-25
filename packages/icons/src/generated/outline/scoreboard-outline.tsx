/**
 * Auto-generated logo component: Scoreboard Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScoreboardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScoreboardOutlineLogo = React.forwardRef<SVGSVGElement, ScoreboardOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M12 5v2" />
  <path d="M12 10v1" />
  <path d="M12 14v1" />
  <path d="M12 18v1" />
  <path d="M7 3v2" />
  <path d="M17 3v2" />
  <path d="M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" />
  <path d="M6 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
    </svg>
  )
);

ScoreboardOutlineLogo.displayName = "ScoreboardOutlineLogo";

export const ScoreboardOutlineLogoMetadata = {
  id: "scoreboard-outline",
  baseId: "scoreboard-outline",
  variant: "default",
  name: "Scoreboard Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScoreboardOutlineLogo;
