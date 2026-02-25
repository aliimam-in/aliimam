/**
 * Auto-generated logo component: World Question Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldQuestionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldQuestionOutlineLogo = React.forwardRef<SVGSVGElement, WorldQuestionOutlineLogoProps>(
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
      <path d="M20.975 11.33a9 9 0 1 0 -5.673 9.043" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h9.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.988 16.988 0 0 1 2.57 9.518m-1.056 5.403a17 17 0 0 1 -1.514 3.079" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </svg>
  )
);

WorldQuestionOutlineLogo.displayName = "WorldQuestionOutlineLogo";

export const WorldQuestionOutlineLogoMetadata = {
  id: "world-question-outline",
  baseId: "world-question-outline",
  variant: "default",
  name: "World Question Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldQuestionOutlineLogo;
