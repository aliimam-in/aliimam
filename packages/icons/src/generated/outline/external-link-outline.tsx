/**
 * Auto-generated logo component: External Link Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExternalLinkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExternalLinkOutlineLogo = React.forwardRef<SVGSVGElement, ExternalLinkOutlineLogoProps>(
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
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
  <path d="M11 13l9 -9" />
  <path d="M15 4h5v5" />
    </svg>
  )
);

ExternalLinkOutlineLogo.displayName = "ExternalLinkOutlineLogo";

export const ExternalLinkOutlineLogoMetadata = {
  id: "external-link-outline",
  baseId: "external-link-outline",
  variant: "default",
  name: "External Link Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExternalLinkOutlineLogo;
