/**
 * Auto-generated logo component: Artboard Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArtboardFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArtboardFilledLogo = React.forwardRef<SVGSVGElement, ArtboardFilledLogoProps>(
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
      <path d="M15 7h-6a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-6a2 2 0 0 0 -2 -2z" />
  <path d="M4 7a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
  <path d="M4 15a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
  <path d="M8 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
  <path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
  <path d="M21 7a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
  <path d="M21 15a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
  <path d="M8 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
  <path d="M16 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
    </svg>
  )
);

ArtboardFilledLogo.displayName = "ArtboardFilledLogo";

export const ArtboardFilledLogoMetadata = {
  id: "artboard-filled",
  baseId: "artboard-filled",
  variant: "default",
  name: "Artboard Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArtboardFilledLogo;
