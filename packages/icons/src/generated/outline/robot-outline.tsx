/**
 * Auto-generated logo component: Robot Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RobotOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RobotOutlineLogo = React.forwardRef<SVGSVGElement, RobotOutlineLogoProps>(
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
      <path d="M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4" />
  <path d="M12 2v2" />
  <path d="M9 12v9" />
  <path d="M15 12v9" />
  <path d="M5 16l4 -2" />
  <path d="M15 14l4 2" />
  <path d="M9 18h6" />
  <path d="M10 8v.01" />
  <path d="M14 8v.01" />
    </svg>
  )
);

RobotOutlineLogo.displayName = "RobotOutlineLogo";

export const RobotOutlineLogoMetadata = {
  id: "robot-outline",
  baseId: "robot-outline",
  variant: "default",
  name: "Robot Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RobotOutlineLogo;
