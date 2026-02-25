/**
 * Auto-generated logo component: Label Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LabelOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LabelOffOutlineLogo = React.forwardRef<SVGSVGElement, LabelOffOutlineLogoProps>(
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
      <path d="M7 7h-1a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h10.52a1 1 0 0 0 .394 -.081m1.86 -2.137l2.226 -2.782l-3.7 -4.625a1 1 0 0 0 -.78 -.375h-5.52" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LabelOffOutlineLogo.displayName = "LabelOffOutlineLogo";

export const LabelOffOutlineLogoMetadata = {
  id: "label-off-outline",
  baseId: "label-off-outline",
  variant: "default",
  name: "Label Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LabelOffOutlineLogo;
