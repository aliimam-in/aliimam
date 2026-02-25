/**
 * Auto-generated logo component: News Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NewsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NewsOutlineLogo = React.forwardRef<SVGSVGElement, NewsOutlineLogoProps>(
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
      <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
  <path d="M8 8l4 0" />
  <path d="M8 12l4 0" />
  <path d="M8 16l4 0" />
    </svg>
  )
);

NewsOutlineLogo.displayName = "NewsOutlineLogo";

export const NewsOutlineLogoMetadata = {
  id: "news-outline",
  baseId: "news-outline",
  variant: "default",
  name: "News Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NewsOutlineLogo;
