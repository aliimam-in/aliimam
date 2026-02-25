/**
 * Auto-generated logo component: Circle Letter Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterYOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterYOutlineLogoProps>(
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
  <path d="M10 8l2 5l2 -5" />
  <path d="M12 16v-3" />
    </svg>
  )
);

CircleLetterYOutlineLogo.displayName = "CircleLetterYOutlineLogo";

export const CircleLetterYOutlineLogoMetadata = {
  id: "circle-letter-y-outline",
  baseId: "circle-letter-y-outline",
  variant: "default",
  name: "Circle Letter Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterYOutlineLogo;
