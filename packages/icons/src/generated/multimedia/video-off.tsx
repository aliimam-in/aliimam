/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VideoOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VideoOff = React.forwardRef<SVGSVGElement, VideoOffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" />
  <path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
  <path d="m2 2 20 20" />
    </svg>
  )
);
VideoOff.displayName = "VideoOff";
export const VideoOffMetadata = { id: "video-off", baseId: "video-off", variant: "default", name: "Video Off", category: "multimedia", tags: [], viewBox: "0 0 24 24" } as const;
export default VideoOff;
