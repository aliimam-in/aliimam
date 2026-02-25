/**
 * Auto-generated logo component: Eye Dotted Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeDottedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeDottedOutlineLogo = React.forwardRef<SVGSVGElement, EyeDottedOutlineLogoProps>(
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
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M21 12h.01" />
  <path d="M3 12h.01" />
  <path d="M5 15h.01" />
  <path d="M5 9h.01" />
  <path d="M19 15h.01" />
  <path d="M12 18h.01" />
  <path d="M12 6h.01" />
  <path d="M8 17h.01" />
  <path d="M8 7h.01" />
  <path d="M16 17h.01" />
  <path d="M16 7h.01" />
  <path d="M19 9h.01" />
    </svg>
  )
);

EyeDottedOutlineLogo.displayName = "EyeDottedOutlineLogo";

export const EyeDottedOutlineLogoMetadata = {
  id: "eye-dotted-outline",
  baseId: "eye-dotted-outline",
  variant: "default",
  name: "Eye Dotted Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeDottedOutlineLogo;
