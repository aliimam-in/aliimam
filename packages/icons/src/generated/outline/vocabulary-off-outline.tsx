/**
 * Auto-generated logo component: Vocabulary Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VocabularyOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VocabularyOffOutlineLogo = React.forwardRef<SVGSVGElement, VocabularyOffOutlineLogoProps>(
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
      <path d="M7 3h3a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v13m-2 2h-5a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2h-6a1 1 0 0 1 -1 -1v-14c0 -.279 .114 -.53 .298 -.712" />
  <path d="M12 5v3m0 4v9" />
  <path d="M7 11h1" />
  <path d="M16 7h1" />
  <path d="M16 11h1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

VocabularyOffOutlineLogo.displayName = "VocabularyOffOutlineLogo";

export const VocabularyOffOutlineLogoMetadata = {
  id: "vocabulary-off-outline",
  baseId: "vocabulary-off-outline",
  variant: "default",
  name: "Vocabulary Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VocabularyOffOutlineLogo;
