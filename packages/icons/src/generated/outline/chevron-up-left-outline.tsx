/**
 * Auto-generated logo component: Chevron Up Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronUpLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronUpLeftOutlineLogo = React.forwardRef<SVGSVGElement, ChevronUpLeftOutlineLogoProps>(
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
      <path d="M8 16v-8h8" />
    </svg>
  )
);

ChevronUpLeftOutlineLogo.displayName = "ChevronUpLeftOutlineLogo";

export const ChevronUpLeftOutlineLogoMetadata = {
  id: "chevron-up-left-outline",
  baseId: "chevron-up-left-outline",
  variant: "default",
  name: "Chevron Up Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronUpLeftOutlineLogo;
