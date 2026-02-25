/**
 * Auto-generated logo component: Dialpad (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DialpadFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DialpadFilledLogo = React.forwardRef<SVGSVGElement, DialpadFilledLogoProps>(
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
      <path d="M6 2h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" />
  <path d="M20 2h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" />
  <path d="M13 2h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" />
  <path d="M6 9h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" />
  <path d="M20 9h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" />
  <path d="M13 9h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" />
  <path d="M13 16h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z" />
    </svg>
  )
);

DialpadFilledLogo.displayName = "DialpadFilledLogo";

export const DialpadFilledLogoMetadata = {
  id: "dialpad_filled",
  baseId: "dialpad",
  variant: "filled",
  name: "Dialpad",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DialpadFilledLogo;
