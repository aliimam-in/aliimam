/**
 * Auto-generated logo component: Pen Tool (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PenToolLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PenToolLogo = React.forwardRef<SVGSVGElement, PenToolLogoProps>(
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
      <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
    </svg>
  )
);

PenToolLogo.displayName = "PenToolLogo";

export const PenToolLogoMetadata = {
  id: "pen-tool",
  baseId: "pen-tool",
  variant: "default",
  name: "Pen Tool",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PenToolLogo;
