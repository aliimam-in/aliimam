/**
 * Auto-generated logo component: Move Up Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoveUpLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoveUpLeftLogo = React.forwardRef<SVGSVGElement, MoveUpLeftLogoProps>(
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
      <path d="M5 11V5H11" />
  <path d="M5 5L19 19" />
    </svg>
  )
);

MoveUpLeftLogo.displayName = "MoveUpLeftLogo";

export const MoveUpLeftLogoMetadata = {
  id: "move-up-left",
  baseId: "move-up-left",
  variant: "default",
  name: "Move Up Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoveUpLeftLogo;
