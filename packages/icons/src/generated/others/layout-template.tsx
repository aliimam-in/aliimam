/**
 * Auto-generated logo component: Layout Template (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutTemplateLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutTemplateLogo = React.forwardRef<SVGSVGElement, LayoutTemplateLogoProps>(
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
      <rect width="18" height="7" x="3" y="3" rx="1" />
  <rect width="9" height="7" x="3" y="14" rx="1" />
  <rect width="5" height="7" x="16" y="14" rx="1" />
    </svg>
  )
);

LayoutTemplateLogo.displayName = "LayoutTemplateLogo";

export const LayoutTemplateLogoMetadata = {
  id: "layout-template",
  baseId: "layout-template",
  variant: "default",
  name: "Layout Template",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutTemplateLogo;
