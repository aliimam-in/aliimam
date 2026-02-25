/**
 * Auto-generated logo component: Speaker (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpeakerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpeakerLogo = React.forwardRef<SVGSVGElement, SpeakerLogoProps>(
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
      <rect width="16" height="20" x="4" y="2" rx="2" />
  <path d="M12 6h.01" />
  <circle cx="12" cy="14" r="4" />
  <path d="M12 14h.01" />
    </svg>
  )
);

SpeakerLogo.displayName = "SpeakerLogo";

export const SpeakerLogoMetadata = {
  id: "speaker",
  baseId: "speaker",
  variant: "default",
  name: "Speaker",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpeakerLogo;
