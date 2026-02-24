/**
 * Auto-generated logo component: Ligature (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LigatureLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LigatureLogo = React.forwardRef<SVGSVGElement, LigatureLogoProps>(
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
      <path d="M14 12h2v8" />
  <path d="M14 20h4" />
  <path d="M6 12h4" />
  <path d="M6 20h4" />
  <path d="M8 20V8a4 4 0 0 1 7.464-2" />
    </svg>
  )
);

LigatureLogo.displayName = "LigatureLogo";

export const LigatureLogoMetadata = {
  id: "ligature",
  baseId: "ligature",
  variant: "default",
  name: "Ligature",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LigatureLogo;
