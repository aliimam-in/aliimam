/**
 * Auto-generated logo component: Robot Face Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RobotFaceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RobotFaceOutlineLogo = React.forwardRef<SVGSVGElement, RobotFaceOutlineLogoProps>(
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
      <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
  <path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" />
  <path d="M9 7l-1 -4" />
  <path d="M15 7l1 -4" />
  <path d="M9 12v-1" />
  <path d="M15 12v-1" />
    </svg>
  )
);

RobotFaceOutlineLogo.displayName = "RobotFaceOutlineLogo";

export const RobotFaceOutlineLogoMetadata = {
  id: "robot-face-outline",
  baseId: "robot-face-outline",
  variant: "default",
  name: "Robot Face Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RobotFaceOutlineLogo;
