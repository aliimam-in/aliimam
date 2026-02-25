/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VideoMinusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VideoMinusFilled = React.forwardRef<SVGSVGElement, VideoMinusFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13 5a3 3 0 0 1 3 3v.381l3.106 -1.552a2 2 0 0 1 2.894 1.789v6.765a2 2 0 0 1 -2.894 1.787l-3.106 -1.552v.382a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3zm-2 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2" />
    </svg>
  )
);
VideoMinusFilled.displayName = "VideoMinusFilled";
export const VideoMinusFilledMetadata = { id: "video-minus_filled", baseId: "video-minus", variant: "filled", name: "Video Minus", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default VideoMinusFilled;
