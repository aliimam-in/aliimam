/**
 * Auto-generated logo component: Cassette Tape (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CassetteTapeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CassetteTapeLogo = React.forwardRef<SVGSVGElement, CassetteTapeLogoProps>(
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <circle cx="8" cy="10" r="2" />
  <path d="M8 12h8" />
  <circle cx="16" cy="10" r="2" />
  <path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" />
    </svg>
  )
);

CassetteTapeLogo.displayName = "CassetteTapeLogo";

export const CassetteTapeLogoMetadata = {
  id: "cassette-tape",
  baseId: "cassette-tape",
  variant: "default",
  name: "Cassette Tape",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CassetteTapeLogo;
