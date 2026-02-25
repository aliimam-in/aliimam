/**
 * Auto-generated logo component: Gamepad Directional (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GamepadDirectionalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GamepadDirectionalLogo = React.forwardRef<SVGSVGElement, GamepadDirectionalLogoProps>(
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
      <path
    d="M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z" />
  <path
    d="M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z" />
  <path
    d="M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z" />
  <path
    d="M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z" />
    </svg>
  )
);

GamepadDirectionalLogo.displayName = "GamepadDirectionalLogo";

export const GamepadDirectionalLogoMetadata = {
  id: "gamepad-directional",
  baseId: "gamepad-directional",
  variant: "default",
  name: "Gamepad Directional",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GamepadDirectionalLogo;
