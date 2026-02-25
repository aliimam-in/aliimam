/**
 * Auto-generated logo component: Japanese Yen (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JapaneseYenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JapaneseYenLogo = React.forwardRef<SVGSVGElement, JapaneseYenLogoProps>(
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
      <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
  <path d="M6 15h12" />
  <path d="M6 11h12" />
    </svg>
  )
);

JapaneseYenLogo.displayName = "JapaneseYenLogo";

export const JapaneseYenLogoMetadata = {
  id: "japanese-yen",
  baseId: "japanese-yen",
  variant: "default",
  name: "Japanese Yen",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JapaneseYenLogo;
