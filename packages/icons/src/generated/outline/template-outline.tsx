/**
 * Auto-generated logo component: Template Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemplateOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TemplateOutlineLogo = React.forwardRef<SVGSVGElement, TemplateOutlineLogoProps>(
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
      <path d="M4 5a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M4 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6" />
  <path d="M14 12l6 0" />
  <path d="M14 16l6 0" />
  <path d="M14 20l6 0" />
    </svg>
  )
);

TemplateOutlineLogo.displayName = "TemplateOutlineLogo";

export const TemplateOutlineLogoMetadata = {
  id: "template-outline",
  baseId: "template-outline",
  variant: "default",
  name: "Template Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TemplateOutlineLogo;
