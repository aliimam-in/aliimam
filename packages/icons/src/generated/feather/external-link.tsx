/**
 * Auto-generated logo component: External Link (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExternalLinkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExternalLinkLogo = React.forwardRef<SVGSVGElement, ExternalLinkLogoProps>(
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
);

ExternalLinkLogo.displayName = "ExternalLinkLogo";

export const ExternalLinkLogoMetadata = {
  id: "external-link",
  baseId: "external-link",
  variant: "default",
  name: "External Link",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExternalLinkLogo;
