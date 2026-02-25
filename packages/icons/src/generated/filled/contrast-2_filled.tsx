/**
 * Auto-generated logo component: Contrast 2 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Contrast2FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Contrast2FilledLogo = React.forwardRef<SVGSVGElement, Contrast2FilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm0 2h-14a1 1 0 0 0 -1 1v14a1 1 0 0 0 .769 .973c3.499 -.347 7.082 -4.127 7.226 -7.747l.005 -.226c0 -3.687 3.66 -7.619 7.232 -7.974a1 1 0 0 0 -.232 -.026" />
    </svg>
  )
);

Contrast2FilledLogo.displayName = "Contrast2FilledLogo";

export const Contrast2FilledLogoMetadata = {
  id: "contrast-2_filled",
  baseId: "contrast-2",
  variant: "filled",
  name: "Contrast 2",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Contrast2FilledLogo;
