/**
 * Auto-generated logo component: Typescript
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TypescriptLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TypescriptLogo = React.forwardRef<SVGSVGElement, TypescriptLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="2" fill="#3178C6"/><text x="12" y="18" font-size="14" font-weight="bold" fill="white" text-anchor="middle">TS</text>
    </svg>
  )
);

TypescriptLogo.displayName = "TypescriptLogo";

export const TypescriptLogoMetadata = {
  id: "typescript",
  name: "Typescript",
  category: "frontend",
  tags: ["sjhbdvk"],
  viewBox: "0 0 24 24",
} as const;

export default TypescriptLogo;
