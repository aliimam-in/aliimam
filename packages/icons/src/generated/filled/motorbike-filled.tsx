/**
 * Auto-generated logo component: Motorbike Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MotorbikeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MotorbikeFilledLogo = React.forwardRef<SVGSVGElement, MotorbikeFilledLogoProps>(
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
      <path d="M15 5a1 1 0 0 1 .894 .553l3.225 6.449l.08 .003a4 4 0 1 1 -4.199 3.995l.005 -.2a4 4 0 0 1 2.111 -3.33l-.557 -1.115l-3.352 3.352a1 1 0 0 1 -.707 .293h-3.626q .124 .481 .126 1a4 4 0 1 1 -8 0l.005 -.2a4 4 0 0 1 6.33 -3.049l1.749 -1.751h-3.084a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h9.381l-1 -2h-1.381a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1z" />
    </svg>
  )
);

MotorbikeFilledLogo.displayName = "MotorbikeFilledLogo";

export const MotorbikeFilledLogoMetadata = {
  id: "motorbike-filled",
  baseId: "motorbike-filled",
  variant: "default",
  name: "Motorbike Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MotorbikeFilledLogo;
