/**
 * Auto-generated logo component: Pen Line (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PenLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PenLineLogo = React.forwardRef<SVGSVGElement, PenLineLogoProps>(
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
      <path d="M13 21h8" />
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </svg>
  )
);

PenLineLogo.displayName = "PenLineLogo";

export const PenLineLogoMetadata = {
  id: "pen-line",
  baseId: "pen-line",
  variant: "default",
  name: "Pen Line",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PenLineLogo;
