/**
 * Auto-generated logo component: Tip Jar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TipJarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TipJarOutlineLogo = React.forwardRef<SVGSVGElement, TipJarOutlineLogoProps>(
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
      <path d="M14 10h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M12 9v1" />
  <path d="M12 16v1" />
  <path d="M17 4v1.882c0 .685 .387 1.312 1 1.618s1 .933 1 1.618v8.882a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8.882c0 -.685 .387 -1.312 1 -1.618s1 -.933 1 -1.618v-1.882" />
  <path d="M6 4h12l-12 0" />
    </svg>
  )
);

TipJarOutlineLogo.displayName = "TipJarOutlineLogo";

export const TipJarOutlineLogoMetadata = {
  id: "tip-jar-outline",
  baseId: "tip-jar-outline",
  variant: "default",
  name: "Tip Jar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TipJarOutlineLogo;
