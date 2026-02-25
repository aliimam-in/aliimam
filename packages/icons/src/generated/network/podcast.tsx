/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PodcastProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Podcast = React.forwardRef<SVGSVGElement, PodcastProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z" fill="currentColor" />
  <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
  <path d="M8 14a5 5 0 1 1 8 0" />
  <circle cx="12" cy="11" r="1" fill="currentColor" />
    </svg>
  )
);
Podcast.displayName = "Podcast";
export const PodcastMetadata = { id: "podcast", baseId: "podcast", variant: "default", name: "Podcast", category: "network", tags: [], viewBox: "0 0 24 24" } as const;
export default Podcast;
