/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AudioLinesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AudioLines = React.forwardRef<SVGSVGElement, AudioLinesProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M2 10v3" />
  <path d="M6 6v11" />
  <path d="M10 3v18" />
  <path d="M14 8v7" />
  <path d="M18 5v13" />
  <path d="M22 10v3" />
    </svg>
  )
);
AudioLines.displayName = "AudioLines";
export const AudioLinesMetadata = { id: "audio-lines", baseId: "audio-lines", variant: "default", name: "Audio Lines", category: "multimedia", tags: [], viewBox: "0 0 24 24" } as const;
export default AudioLines;
