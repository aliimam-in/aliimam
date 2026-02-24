/**
 * Auto-generated logo component: Voicemail (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixVoicemailLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixVoicemailLogo = React.forwardRef<SVGSVGElement, MixVoicemailLogoProps>(
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
      <circle cx="6" cy="12" r="4" />
  <circle cx="18" cy="12" r="4" />
  <line x1="6" x2="18" y1="16" y2="16" />
    </svg>
  )
);

MixVoicemailLogo.displayName = "MixVoicemailLogo";

export const MixVoicemailLogoMetadata = {
  id: "voicemail",
  baseId: "voicemail",
  variant: "default",
  name: "Voicemail",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixVoicemailLogo;
