/**
 * Auto-generated logo component: External Link (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixExternalLinkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixExternalLinkLogo = React.forwardRef<SVGSVGElement, MixExternalLinkLogoProps>(
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
      <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
);

MixExternalLinkLogo.displayName = "MixExternalLinkLogo";

export const MixExternalLinkLogoMetadata = {
  id: "external-link",
  baseId: "external-link",
  variant: "default",
  name: "External Link",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixExternalLinkLogo;
