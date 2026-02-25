/**
 * Auto-generated logo component: Bandage (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BandageFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BandageFilledLogo = React.forwardRef<SVGSVGElement, BandageFilledLogoProps>(
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
      <path d="M20.207 3.793a5.95 5.95 0 0 1 .179 8.228l-.179 .186l-8 8a5.95 5.95 0 0 1 -8.593 -8.228l.179 -.186l8 -8a5.95 5.95 0 0 1 8.414 0zm-8.207 9.207a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm2 -2a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm2 -2a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);

BandageFilledLogo.displayName = "BandageFilledLogo";

export const BandageFilledLogoMetadata = {
  id: "bandage_filled",
  baseId: "bandage",
  variant: "filled",
  name: "Bandage",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BandageFilledLogo;
