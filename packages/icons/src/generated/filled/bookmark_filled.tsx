/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookmarkFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookmarkFilled = React.forwardRef<SVGSVGElement, BookmarkFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M14 2a5 5 0 0 1 5 5v14a1 1 0 0 1 -1.555 .832l-5.445 -3.63l-5.444 3.63a1 1 0 0 1 -1.55 -.72l-.006 -.112v-14a5 5 0 0 1 5 -5h4z" />
    </svg>
  )
);
BookmarkFilled.displayName = "BookmarkFilled";
export const BookmarkFilledMetadata = { id: "bookmark_filled", baseId: "bookmark", variant: "filled", name: "Bookmark", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default BookmarkFilled;
