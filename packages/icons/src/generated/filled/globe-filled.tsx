/**
 * Auto-generated logo component: Globe Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlobeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlobeFilledLogo = React.forwardRef<SVGSVGElement, GlobeFilledLogoProps>(
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
      <path d="M11 4a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
  <path d="M14.133 1.502a1 1 0 0 1 1.365 -.369a9.015 9.015 0 1 1 -10.404 14.622a1 1 0 1 1 1.312 -1.51a7.015 7.015 0 1 0 8.096 -11.378a1 1 0 0 1 -.369 -1.365z" />
  <path d="M11 16a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4a1 1 0 0 1 1 -1z" />
  <path d="M15 20a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
    </svg>
  )
);

GlobeFilledLogo.displayName = "GlobeFilledLogo";

export const GlobeFilledLogoMetadata = {
  id: "globe-filled",
  baseId: "globe-filled",
  variant: "default",
  name: "Globe Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlobeFilledLogo;
