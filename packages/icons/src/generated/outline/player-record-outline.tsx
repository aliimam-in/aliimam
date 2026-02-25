/**
 * Auto-generated logo component: Player Record Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlayerRecordOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlayerRecordOutlineLogo = React.forwardRef<SVGSVGElement, PlayerRecordOutlineLogoProps>(
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
      <path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    </svg>
  )
);

PlayerRecordOutlineLogo.displayName = "PlayerRecordOutlineLogo";

export const PlayerRecordOutlineLogoMetadata = {
  id: "player-record-outline",
  baseId: "player-record-outline",
  variant: "default",
  name: "Player Record Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlayerRecordOutlineLogo;
