/**
 * Auto-generated logo component: Badge Japanese Yen (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeJapaneseYenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeJapaneseYenLogo = React.forwardRef<SVGSVGElement, BadgeJapaneseYenLogoProps>(
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
  <path d="m9 8 3 3v7" />
  <path d="m12 11 3-3" />
  <path d="M9 12h6" />
  <path d="M9 16h6" />
    </svg>
  )
);

BadgeJapaneseYenLogo.displayName = "BadgeJapaneseYenLogo";

export const BadgeJapaneseYenLogoMetadata = {
  id: "badge-japanese-yen",
  baseId: "badge-japanese-yen",
  variant: "default",
  name: "Badge Japanese Yen",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeJapaneseYenLogo;
