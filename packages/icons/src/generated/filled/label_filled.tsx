/**
 * Auto-generated logo component: Label (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LabelFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LabelFilledLogo = React.forwardRef<SVGSVGElement, LabelFilledLogoProps>(
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
      <path d="M16.52 6a2 2 0 0 1 1.561 .75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624a2 2 0 0 1 -1.561 .751h-10.52a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

LabelFilledLogo.displayName = "LabelFilledLogo";

export const LabelFilledLogoMetadata = {
  id: "label_filled",
  baseId: "label",
  variant: "filled",
  name: "Label",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LabelFilledLogo;
