/**
 * Auto-generated logo component: Hand Sanitizer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HandSanitizerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HandSanitizerOutlineLogo = React.forwardRef<SVGSVGElement, HandSanitizerOutlineLogoProps>(
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
      <path d="M7 21h10v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10" />
  <path d="M15 3h-6a2 2 0 0 0 -2 2" />
  <path d="M12 3v5" />
  <path d="M12 11v4" />
  <path d="M10 13h4" />
    </svg>
  )
);

HandSanitizerOutlineLogo.displayName = "HandSanitizerOutlineLogo";

export const HandSanitizerOutlineLogoMetadata = {
  id: "hand-sanitizer-outline",
  baseId: "hand-sanitizer-outline",
  variant: "default",
  name: "Hand Sanitizer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HandSanitizerOutlineLogo;
