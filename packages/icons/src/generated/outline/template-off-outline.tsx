/**
 * Auto-generated logo component: Template Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemplateOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TemplateOffOutlineLogo = React.forwardRef<SVGSVGElement, TemplateOffOutlineLogoProps>(
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
      <path d="M8 4h11a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-7m-4 0h-3a1 1 0 0 1 -1 -1v-2c0 -.271 .108 -.517 .283 -.697" />
  <path d="M4 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" />
  <path d="M16 12h4" />
  <path d="M14 16h2" />
  <path d="M14 20h6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TemplateOffOutlineLogo.displayName = "TemplateOffOutlineLogo";

export const TemplateOffOutlineLogoMetadata = {
  id: "template-off-outline",
  baseId: "template-off-outline",
  variant: "default",
  name: "Template Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TemplateOffOutlineLogo;
