/**
 * Auto-generated logo component: Jewish Star Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JewishStarFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JewishStarFilledLogo = React.forwardRef<SVGSVGElement, JewishStarFilledLogoProps>(
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
      <path d="M8.433 6h-5.433l-.114 .006a1 1 0 0 0 -.743 1.508l2.69 4.486l-2.69 4.486l-.054 .1a1 1 0 0 0 .911 1.414h5.434l2.709 4.514l.074 .108a1 1 0 0 0 1.64 -.108l2.708 -4.514h5.435l.114 -.006a1 1 0 0 0 .743 -1.508l-2.691 -4.486l2.691 -4.486l.054 -.1a1 1 0 0 0 -.911 -1.414h-5.434l-2.709 -4.514a1 1 0 0 0 -1.714 0l-2.71 4.514z" />
    </svg>
  )
);

JewishStarFilledLogo.displayName = "JewishStarFilledLogo";

export const JewishStarFilledLogoMetadata = {
  id: "jewish-star-filled",
  baseId: "jewish-star-filled",
  variant: "default",
  name: "Jewish Star Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JewishStarFilledLogo;
