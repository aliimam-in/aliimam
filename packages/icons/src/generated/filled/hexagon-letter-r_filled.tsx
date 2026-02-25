/**
 * Auto-generated logo component: Hexagon Letter R (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonLetterRFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonLetterRFilledLogo = React.forwardRef<SVGSVGElement, HexagonLetterRFilledLogoProps>(
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
      <path d="M13.666 1.429l6.75 3.98l.096 .063l.093 .078l.106 .074a3.22 3.22 0 0 1 1.284 2.39l.005 .204v7.284c0 1.175 -.643 2.256 -1.623 2.793l-6.804 4.302c-.98 .538 -2.166 .538 -3.2 -.032l-6.695 -4.237a3.23 3.23 0 0 1 -1.678 -2.826v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098c1 -.552 2.214 -.552 3.24 .015m-1.666 5.571h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-2.332l2.2 2.932a1 1 0 0 0 1.4 .2l.096 -.081a1 1 0 0 0 .104 -1.319l-1.903 -2.538l.115 -.037a3.001 3.001 0 0 0 -1.012 -5.825m0 2a1 1 0 0 1 0 2h-1v-2z" />
    </svg>
  )
);

HexagonLetterRFilledLogo.displayName = "HexagonLetterRFilledLogo";

export const HexagonLetterRFilledLogoMetadata = {
  id: "hexagon-letter-r_filled",
  baseId: "hexagon-letter-r",
  variant: "filled",
  name: "Hexagon Letter R",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonLetterRFilledLogo;
