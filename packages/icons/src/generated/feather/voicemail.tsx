/**
 * Auto-generated logo component: Voicemail (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VoicemailLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VoicemailLogo = React.forwardRef<SVGSVGElement, VoicemailLogoProps>(
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
      <circle cx="5.5" cy="11.5" r="4.5"/><circle cx="18.5" cy="11.5" r="4.5"/><line x1="5.5" y1="16" x2="18.5" y2="16"/>
    </svg>
  )
);

VoicemailLogo.displayName = "VoicemailLogo";

export const VoicemailLogoMetadata = {
  id: "voicemail",
  baseId: "voicemail",
  variant: "default",
  name: "Voicemail",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VoicemailLogo;
