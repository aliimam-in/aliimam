/**
 * Auto-generated logo component: Link Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LinkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LinkOutlineLogo = React.forwardRef<SVGSVGElement, LinkOutlineLogoProps>(
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
      <path d="M9 15l6 -6" />
  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
    </svg>
  )
);

LinkOutlineLogo.displayName = "LinkOutlineLogo";

export const LinkOutlineLogoMetadata = {
  id: "link-outline",
  baseId: "link-outline",
  variant: "default",
  name: "Link Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LinkOutlineLogo;
