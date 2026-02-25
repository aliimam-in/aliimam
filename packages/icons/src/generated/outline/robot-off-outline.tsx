/**
 * Auto-generated logo component: Robot Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RobotOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RobotOffOutlineLogo = React.forwardRef<SVGSVGElement, RobotOffOutlineLogoProps>(
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
      <path d="M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2m-4 0h-4a2 2 0 0 1 -2 -2v-4" />
  <path d="M12 2v2" />
  <path d="M9 12v9" />
  <path d="M15 15v6" />
  <path d="M5 16l4 -2" />
  <path d="M9 18h6" />
  <path d="M14 8v.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RobotOffOutlineLogo.displayName = "RobotOffOutlineLogo";

export const RobotOffOutlineLogoMetadata = {
  id: "robot-off-outline",
  baseId: "robot-off-outline",
  variant: "default",
  name: "Robot Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RobotOffOutlineLogo;
