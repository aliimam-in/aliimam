/**
 * Auto-generated logo component: Elevator Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ElevatorFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ElevatorFilledLogo = React.forwardRef<SVGSVGElement, ElevatorFilledLogoProps>(
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
      <path d="M18 3a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2zm-7.293 10.293a1 1 0 1 0 -1.414 1.414l2 2a1 1 0 0 0 1.414 0l2 -2a1 1 0 0 0 0 -1.414l-.094 -.083a1 1 0 0 0 -1.32 .083l-1.294 1.292zm2 -6a1 1 0 0 0 -1.414 0l-2 2a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l1.293 -1.292l1.293 1.292a1 1 0 0 0 1.414 -1.414z" />
    </svg>
  )
);

ElevatorFilledLogo.displayName = "ElevatorFilledLogo";

export const ElevatorFilledLogoMetadata = {
  id: "elevator-filled",
  baseId: "elevator-filled",
  variant: "default",
  name: "Elevator Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ElevatorFilledLogo;
