/**
 * Auto-generated logo component: Versions Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VersionsFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VersionsFilledLogo = React.forwardRef<SVGSVGElement, VersionsFilledLogoProps>(
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
      <path d="M18 4h-6a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
  <path d="M7 6a1 1 0 0 1 .993 .883l.007 .117v10a1 1 0 0 1 -1.993 .117l-.007 -.117v-10a1 1 0 0 1 1 -1z" />
  <path d="M4 7a1 1 0 0 1 .993 .883l.007 .117v8a1 1 0 0 1 -1.993 .117l-.007 -.117v-8a1 1 0 0 1 1 -1z" />
    </svg>
  )
);

VersionsFilledLogo.displayName = "VersionsFilledLogo";

export const VersionsFilledLogoMetadata = {
  id: "versions-filled",
  baseId: "versions-filled",
  variant: "default",
  name: "Versions Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VersionsFilledLogo;
