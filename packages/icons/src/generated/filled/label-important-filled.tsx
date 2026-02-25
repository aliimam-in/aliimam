/**
 * Auto-generated logo component: Label Important Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LabelImportantFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LabelImportantFilledLogo = React.forwardRef<SVGSVGElement, LabelImportantFilledLogoProps>(
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
      <path d="M16.52 6a2 2 0 0 1 1.561 .75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624a2 2 0 0 1 -1.561 .751h-12.52a1 1 0 0 1 -.78 -1.625l3.5 -4.375l-3.5 -4.375a1 1 0 0 1 .668 -1.62l.112 -.005z" />
    </svg>
  )
);

LabelImportantFilledLogo.displayName = "LabelImportantFilledLogo";

export const LabelImportantFilledLogoMetadata = {
  id: "label-important-filled",
  baseId: "label-important-filled",
  variant: "default",
  name: "Label Important Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LabelImportantFilledLogo;
