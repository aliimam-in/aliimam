/**
 * Auto-generated logo component: Alphabet Thai Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlphabetThaiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlphabetThaiOutlineLogo = React.forwardRef<SVGSVGElement, AlphabetThaiOutlineLogoProps>(
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
      <path d="M8 18v-3.444c0 -.49 .165 -.924 .494 -1.363c.326 -.449 1.009 -.76 1.506 -.934c.032 -.011 .035 -.079 .004 -.095c-.434 -.22 -1.294 -.52 -1.626 -1.032l-.014 -.021l-.083 -.125c-.281 -.42 -.281 -1.246 -.281 -1.246c0 -1.456 .849 -2.62 1.837 -3.199q .9 -.54 2.137 -.541q 1.077 0 1.995 .47c1.328 .647 2.031 2.202 2.031 3.976v7.554" />
    </svg>
  )
);

AlphabetThaiOutlineLogo.displayName = "AlphabetThaiOutlineLogo";

export const AlphabetThaiOutlineLogoMetadata = {
  id: "alphabet-thai-outline",
  baseId: "alphabet-thai-outline",
  variant: "default",
  name: "Alphabet Thai Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlphabetThaiOutlineLogo;
