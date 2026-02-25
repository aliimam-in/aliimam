/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PictureInPictureFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PictureInPictureFilled = React.forwardRef<SVGSVGElement, PictureInPictureFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 4a3 3 0 0 1 3 3v4a1 1 0 0 1 -2 0v-4a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 1 0 2h-6a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3z" />
  <path d="M20 13a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2z" />
    </svg>
  )
);
PictureInPictureFilled.displayName = "PictureInPictureFilled";
export const PictureInPictureFilledMetadata = { id: "picture-in-picture_filled", baseId: "picture-in-picture", variant: "filled", name: "Picture In Picture", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default PictureInPictureFilled;
