/**
 * Auto-generated logo component: Audio Waveform (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AudioWaveformLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AudioWaveformLogo = React.forwardRef<SVGSVGElement, AudioWaveformLogoProps>(
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
      <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" />
    </svg>
  )
);

AudioWaveformLogo.displayName = "AudioWaveformLogo";

export const AudioWaveformLogoMetadata = {
  id: "audio-waveform",
  baseId: "audio-waveform",
  variant: "default",
  name: "Audio Waveform",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AudioWaveformLogo;
