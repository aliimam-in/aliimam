/**
 * Auto-generated logo component: Speech (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpeechLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpeechLogo = React.forwardRef<SVGSVGElement, SpeechLogoProps>(
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
      <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
  <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
  <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
    </svg>
  )
);

SpeechLogo.displayName = "SpeechLogo";

export const SpeechLogoMetadata = {
  id: "speech",
  baseId: "speech",
  variant: "default",
  name: "Speech",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpeechLogo;
