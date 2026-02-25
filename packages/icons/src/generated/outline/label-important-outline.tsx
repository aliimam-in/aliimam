/**
 * Auto-generated logo component: Label Important Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LabelImportantOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LabelImportantOutlineLogo = React.forwardRef<SVGSVGElement, LabelImportantOutlineLogoProps>(
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
      <path d="M16.52 7h-12.52l4 5l-4 5h12.52a1 1 0 0 0 .78 -.375l3.7 -4.625l-3.7 -4.625a1 1 0 0 0 -.78 -.375" />
    </svg>
  )
);

LabelImportantOutlineLogo.displayName = "LabelImportantOutlineLogo";

export const LabelImportantOutlineLogoMetadata = {
  id: "label-important-outline",
  baseId: "label-important-outline",
  variant: "default",
  name: "Label Important Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LabelImportantOutlineLogo;
