/**
 * Auto-generated logo component: Speakerphone Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpeakerphoneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpeakerphoneOutlineLogo = React.forwardRef<SVGSVGElement, SpeakerphoneOutlineLogoProps>(
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
      <path d="M18 8a3 3 0 0 1 0 6" />
  <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
  <path d="M12 8l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
    </svg>
  )
);

SpeakerphoneOutlineLogo.displayName = "SpeakerphoneOutlineLogo";

export const SpeakerphoneOutlineLogoMetadata = {
  id: "speakerphone-outline",
  baseId: "speakerphone-outline",
  variant: "default",
  name: "Speakerphone Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpeakerphoneOutlineLogo;
