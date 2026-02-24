/**
 * Auto-generated logo component: Newspaper (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NewspaperLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NewspaperLogo = React.forwardRef<SVGSVGElement, NewspaperLogoProps>(
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
      <path d="M15 18h-5" />
  <path d="M18 14h-8" />
  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
  <rect width="8" height="4" x="10" y="6" rx="1" />
    </svg>
  )
);

NewspaperLogo.displayName = "NewspaperLogo";

export const NewspaperLogoMetadata = {
  id: "newspaper",
  baseId: "newspaper",
  variant: "default",
  name: "Newspaper",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NewspaperLogo;
