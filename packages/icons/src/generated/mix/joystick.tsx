/**
 * Auto-generated logo component: Joystick (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JoystickLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JoystickLogo = React.forwardRef<SVGSVGElement, JoystickLogoProps>(
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
      <path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" />
  <path d="M6 15v-2" />
  <path d="M12 15V9" />
  <circle cx="12" cy="6" r="3" />
    </svg>
  )
);

JoystickLogo.displayName = "JoystickLogo";

export const JoystickLogoMetadata = {
  id: "joystick",
  baseId: "joystick",
  variant: "default",
  name: "Joystick",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JoystickLogo;
