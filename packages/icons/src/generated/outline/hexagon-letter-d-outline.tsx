/**
 * Auto-generated logo component: Hexagon Letter D Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonLetterDOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonLetterDOutlineLogo = React.forwardRef<SVGSVGElement, HexagonLetterDOutlineLogoProps>(
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
      <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033" />
  <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2" />
    </svg>
  )
);

HexagonLetterDOutlineLogo.displayName = "HexagonLetterDOutlineLogo";

export const HexagonLetterDOutlineLogoMetadata = {
  id: "hexagon-letter-d-outline",
  baseId: "hexagon-letter-d-outline",
  variant: "default",
  name: "Hexagon Letter D Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonLetterDOutlineLogo;
