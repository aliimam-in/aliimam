/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlaylistFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlaylistFilled = React.forwardRef<SVGSVGElement, PlaylistFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M21 3a1 1 0 0 1 0 2h-3v12a4 4 0 1 1 -2.001 -3.465l.001 -9.535a1 1 0 0 1 1 -1z" />
  <path d="M14 5a1 1 0 0 1 -1 1h-10a1 1 0 1 1 0 -2h10a1 1 0 0 1 1 1" />
  <path d="M14 9a1 1 0 0 1 -1 1h-10a1 1 0 1 1 0 -2h10a1 1 0 0 1 1 1" />
  <path d="M10 13a1 1 0 0 1 -1 1h-6a1 1 0 0 1 0 -2h6a1 1 0 0 1 1 1" />
    </svg>
  )
);
PlaylistFilled.displayName = "PlaylistFilled";
export const PlaylistFilledMetadata = { id: "playlist_filled", baseId: "playlist", variant: "filled", name: "Playlist", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default PlaylistFilled;
