/**
 * Auto-generated logo component: Suno (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SunoLogo = React.forwardRef<SVGSVGElement, SunoLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 122 122"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" fillRule="evenodd" d="M1.773 8.882C0 12.362 0 16.916 0 26.027v69.946c0 9.111 0 13.666 1.773 17.145a16.27 16.27 0 0 0 7.109 7.109C12.362 122 16.916 122 26.027 122h69.946c9.111 0 13.666 0 17.145-1.773a16.27 16.27 0 0 0 7.109-7.109C122 109.639 122 105.084 122 95.973V26.027c0-9.11 0-13.666-1.773-17.145a16.27 16.27 0 0 0-7.109-7.109C109.639 0 105.084 0 95.973 0H26.027C16.917 0 12.36 0 8.882 1.773a16.27 16.27 0 0 0-7.109 7.109M105.733 61c0-24.705-12.517-44.733-27.958-44.733S49.817 36.295 49.817 61h-33.55c0 24.706 12.517 44.733 27.958 44.733S72.183 85.705 72.183 61z" clipRule="evenodd" />
    </svg>
  )
);

SunoLogo.displayName = "SunoLogo";

export const SunoLogoMetadata = {
  id: "suno",
  baseId: "suno",
  variant: "default",
  name: "Suno",
  category: "mix",
  tags: [],
  viewBox: "0 0 122 122",
} as const;

export default SunoLogo;
