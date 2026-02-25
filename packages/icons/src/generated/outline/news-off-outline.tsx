/**
 * Auto-generated logo component: News Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NewsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NewsOffOutlineLogo = React.forwardRef<SVGSVGElement, NewsOffOutlineLogoProps>(
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
      <path d="M16 6h3a1 1 0 0 1 1 1v9m-.606 3.435a2 2 0 0 1 -3.394 -1.435v-2m0 -4v-7a1 1 0 0 0 -1 -1h-7m-3.735 .321a1 1 0 0 0 -.265 .679v12a3 3 0 0 0 3 3h11" />
  <path d="M8 12h4" />
  <path d="M8 16h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

NewsOffOutlineLogo.displayName = "NewsOffOutlineLogo";

export const NewsOffOutlineLogoMetadata = {
  id: "news-off-outline",
  baseId: "news-off-outline",
  variant: "default",
  name: "News Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NewsOffOutlineLogo;
