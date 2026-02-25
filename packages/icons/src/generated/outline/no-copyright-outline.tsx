/**
 * Auto-generated logo component: No Copyright Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NoCopyrightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NoCopyrightOutlineLogo = React.forwardRef<SVGSVGElement, NoCopyrightOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
  <path d="M6 6l1.5 1.5" />
  <path d="M16.5 16.5l1.5 1.5" />
    </svg>
  )
);

NoCopyrightOutlineLogo.displayName = "NoCopyrightOutlineLogo";

export const NoCopyrightOutlineLogoMetadata = {
  id: "no-copyright-outline",
  baseId: "no-copyright-outline",
  variant: "default",
  name: "No Copyright Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NoCopyrightOutlineLogo;
