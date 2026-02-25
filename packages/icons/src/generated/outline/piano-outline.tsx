/**
 * Auto-generated logo component: Piano Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PianoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PianoOutlineLogo = React.forwardRef<SVGSVGElement, PianoOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M9 19v-6" />
  <path d="M8 5v8h2v-8" />
  <path d="M15 19v-6" />
  <path d="M14 5v8h2v-8" />
    </svg>
  )
);

PianoOutlineLogo.displayName = "PianoOutlineLogo";

export const PianoOutlineLogoMetadata = {
  id: "piano-outline",
  baseId: "piano-outline",
  variant: "default",
  name: "Piano Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PianoOutlineLogo;
