/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PictureInPictureTopFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PictureInPictureTopFilled = React.forwardRef<SVGSVGElement, PictureInPictureTopFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 4a1 1 0 0 1 0 2h-6a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-4a1 1 0 0 1 2 0v4a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3z" />
  <path d="M20 4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2z" />
    </svg>
  )
);
PictureInPictureTopFilled.displayName = "PictureInPictureTopFilled";
export const PictureInPictureTopFilledMetadata = { id: "picture-in-picture-top_filled", baseId: "picture-in-picture-top", variant: "filled", name: "Picture In Picture Top", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default PictureInPictureTopFilled;
