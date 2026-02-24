/**
 * Auto-generated logo component: Speaker (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixSpeakerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixSpeakerLogo = React.forwardRef<SVGSVGElement, MixSpeakerLogoProps>(
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

MixSpeakerLogo.displayName = "MixSpeakerLogo";

export const MixSpeakerLogoMetadata = {
  id: "speaker",
  baseId: "speaker",
  variant: "default",
  name: "Speaker",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixSpeakerLogo;
