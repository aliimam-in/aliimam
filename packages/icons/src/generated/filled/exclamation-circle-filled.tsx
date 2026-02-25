/**
 * Auto-generated logo component: Exclamation Circle Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExclamationCircleFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExclamationCircleFilledLogo = React.forwardRef<SVGSVGElement, ExclamationCircleFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

ExclamationCircleFilledLogo.displayName = "ExclamationCircleFilledLogo";

export const ExclamationCircleFilledLogoMetadata = {
  id: "exclamation-circle-filled",
  baseId: "exclamation-circle-filled",
  variant: "default",
  name: "Exclamation Circle Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExclamationCircleFilledLogo;
