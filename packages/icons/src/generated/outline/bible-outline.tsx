/**
 * Auto-generated logo component: Bible Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BibleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BibleOutlineLogo = React.forwardRef<SVGSVGElement, BibleOutlineLogoProps>(
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
      <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12" />
  <path d="M19 16h-12a2 2 0 0 0 -2 2" />
  <path d="M12 7v6" />
  <path d="M10 9h4" />
    </svg>
  )
);

BibleOutlineLogo.displayName = "BibleOutlineLogo";

export const BibleOutlineLogoMetadata = {
  id: "bible-outline",
  baseId: "bible-outline",
  variant: "default",
  name: "Bible Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BibleOutlineLogo;
