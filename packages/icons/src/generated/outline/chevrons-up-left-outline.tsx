/**
 * Auto-generated logo component: Chevrons Up Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsUpLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsUpLeftOutlineLogo = React.forwardRef<SVGSVGElement, ChevronsUpLeftOutlineLogoProps>(
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
      <path d="M7 15v-8h8" />
  <path d="M11 19v-8h8" />
    </svg>
  )
);

ChevronsUpLeftOutlineLogo.displayName = "ChevronsUpLeftOutlineLogo";

export const ChevronsUpLeftOutlineLogoMetadata = {
  id: "chevrons-up-left-outline",
  baseId: "chevrons-up-left-outline",
  variant: "default",
  name: "Chevrons Up Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsUpLeftOutlineLogo;
