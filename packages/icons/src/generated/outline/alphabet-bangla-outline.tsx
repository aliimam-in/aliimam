/**
 * Auto-generated logo component: Alphabet Bangla Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlphabetBanglaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlphabetBanglaOutlineLogo = React.forwardRef<SVGSVGElement, AlphabetBanglaOutlineLogoProps>(
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
      <path d="M14 12c.904 -.027 3 2 3 7" />
  <path d="M10 11c0 -.955 0 -2 .786 -2.677c1.262 -1.089 3.025 .55 3.2 2.06c.086 .741 -.215 3.109 -1.489 4.527c-.475 .53 -.904 .992 -1.711 1.074c-.75 .076 -1.364 -.122 -2.076 -.588c-1.138 -.743 -2.327 -1.997 -3.336 -3.73c-1.078 -1.849 -1.66 -3.113 -2.374 -5.666" />
  <path d="M7.37 7.072c.769 -.836 5.246 -4.094 8.4 -.202c.382 .472 .573 .708 .9 1.63c.326 .921 .326 1.562 .326 2.844v7.656" />
  <path d="M17 10c0 -1.989 1.5 -4 4 -4" />
    </svg>
  )
);

AlphabetBanglaOutlineLogo.displayName = "AlphabetBanglaOutlineLogo";

export const AlphabetBanglaOutlineLogoMetadata = {
  id: "alphabet-bangla-outline",
  baseId: "alphabet-bangla-outline",
  variant: "default",
  name: "Alphabet Bangla Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlphabetBanglaOutlineLogo;
