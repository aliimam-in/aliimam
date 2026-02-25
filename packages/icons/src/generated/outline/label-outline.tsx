/**
 * Auto-generated logo component: Label Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LabelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LabelOutlineLogo = React.forwardRef<SVGSVGElement, LabelOutlineLogoProps>(
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
      <path d="M16.52 7h-10.52a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h10.52a1 1 0 0 0 .78 -.375l3.7 -4.625l-3.7 -4.625a1 1 0 0 0 -.78 -.375" />
    </svg>
  )
);

LabelOutlineLogo.displayName = "LabelOutlineLogo";

export const LabelOutlineLogoMetadata = {
  id: "label-outline",
  baseId: "label-outline",
  variant: "default",
  name: "Label Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LabelOutlineLogo;
