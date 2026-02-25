/**
 * Auto-generated logo component: Link Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LinkMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LinkMinusOutlineLogo = React.forwardRef<SVGSVGElement, LinkMinusOutlineLogoProps>(
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
  <path d="M11 6l.463 -.536a5 5 0 1 1 7.071 7.072l-.534 .464" />
  <path d="M12.603 18.534a5.07 5.07 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
  <path d="M16 19h6" />
    </svg>
  )
);

LinkMinusOutlineLogo.displayName = "LinkMinusOutlineLogo";

export const LinkMinusOutlineLogoMetadata = {
  id: "link-minus-outline",
  baseId: "link-minus-outline",
  variant: "default",
  name: "Link Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LinkMinusOutlineLogo;
