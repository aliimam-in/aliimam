/**
 * Auto-generated logo component: Microphone Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicrophoneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MicrophoneOutlineLogo = React.forwardRef<SVGSVGElement, MicrophoneOutlineLogoProps>(
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
      <path d="M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5" />
  <path d="M5 10a7 7 0 0 0 14 0" />
  <path d="M8 21l8 0" />
  <path d="M12 17l0 4" />
    </svg>
  )
);

MicrophoneOutlineLogo.displayName = "MicrophoneOutlineLogo";

export const MicrophoneOutlineLogoMetadata = {
  id: "microphone-outline",
  baseId: "microphone-outline",
  variant: "default",
  name: "Microphone Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicrophoneOutlineLogo;
