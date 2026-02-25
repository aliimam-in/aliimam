/**
 * Auto-generated logo component: Vocabulary Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VocabularyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VocabularyOutlineLogo = React.forwardRef<SVGSVGElement, VocabularyOutlineLogoProps>(
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
      <path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2" />
  <path d="M12 5v16" />
  <path d="M7 7h1" />
  <path d="M7 11h1" />
  <path d="M16 7h1" />
  <path d="M16 11h1" />
  <path d="M16 15h1" />
    </svg>
  )
);

VocabularyOutlineLogo.displayName = "VocabularyOutlineLogo";

export const VocabularyOutlineLogoMetadata = {
  id: "vocabulary-outline",
  baseId: "vocabulary-outline",
  variant: "default",
  name: "Vocabulary Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VocabularyOutlineLogo;
