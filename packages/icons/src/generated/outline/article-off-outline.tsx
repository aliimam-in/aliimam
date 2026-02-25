/**
 * Auto-generated logo component: Article Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArticleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArticleOffOutlineLogo = React.forwardRef<SVGSVGElement, ArticleOffOutlineLogoProps>(
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
      <path d="M8 4h11a2 2 0 0 1 2 2v11m-1.172 2.821a1.993 1.993 0 0 1 -.828 .179h-14a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.156 -1.814" />
  <path d="M7 8h1m4 0h5" />
  <path d="M7 12h5m4 0h1" />
  <path d="M7 16h9" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ArticleOffOutlineLogo.displayName = "ArticleOffOutlineLogo";

export const ArticleOffOutlineLogoMetadata = {
  id: "article-off-outline",
  baseId: "article-off-outline",
  variant: "default",
  name: "Article Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArticleOffOutlineLogo;
