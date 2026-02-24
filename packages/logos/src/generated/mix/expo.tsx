/**
 * Auto-generated logo component: Expo (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExpoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ExpoLogo = React.forwardRef<SVGSVGElement, ExpoLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 231"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M121 85c2-3 5-4 7-4 1 0 5 1 7 4 16 22 43 67 63 101l26 40c7 8 18 3 24-6s8-15 8-22c0-4-88-168-97-182-9-13-11-16-26-16h-11c-14 0-16 3-25 16C88 30 0 194 0 198c0 7 2 13 8 22s17 14 24 6l26-40c20-34 47-79 63-101Z" fill="#000020" />
    </svg>
  )
);

ExpoLogo.displayName = "ExpoLogo";

export const ExpoLogoMetadata = {
  id: "expo",
  baseId: "expo",
  variant: "default",
  name: "Expo",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 231",
} as const;

export default ExpoLogo;
