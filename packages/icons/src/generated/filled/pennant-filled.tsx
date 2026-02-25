/**
 * Auto-generated logo component: Pennant Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PennantFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PennantFilledLogo = React.forwardRef<SVGSVGElement, PennantFilledLogoProps>(
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
      <path d="M10 2a1 1 0 0 1 .993 .883l.007 .117v.35l8.406 3.736c.752 .335 .79 1.365 .113 1.77l-.113 .058l-8.406 3.735v7.351h1a1 1 0 0 1 .117 1.993l-.117 .007h-4a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-17a1 1 0 0 1 1 -1z" />
    </svg>
  )
);

PennantFilledLogo.displayName = "PennantFilledLogo";

export const PennantFilledLogoMetadata = {
  id: "pennant-filled",
  baseId: "pennant-filled",
  variant: "default",
  name: "Pennant Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PennantFilledLogo;
