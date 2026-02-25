/**
 * Auto-generated logo component: External Link Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExternalLinkOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExternalLinkOffOutlineLogo = React.forwardRef<SVGSVGElement, ExternalLinkOffOutlineLogoProps>(
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
      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
  <path d="M10 14l2 -2m2.007 -2.007l6 -6" />
  <path d="M15 4h5v5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ExternalLinkOffOutlineLogo.displayName = "ExternalLinkOffOutlineLogo";

export const ExternalLinkOffOutlineLogoMetadata = {
  id: "external-link-off-outline",
  baseId: "external-link-off-outline",
  variant: "default",
  name: "External Link Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExternalLinkOffOutlineLogo;
