/**
 * Auto-generated logo component: File Settings Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FileSettingsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FileSettingsOutlineLogo = React.forwardRef<SVGSVGElement, FileSettingsOutlineLogoProps>(
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
      <path d="M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 10.5v1.5" />
  <path d="M12 16v1.5" />
  <path d="M15.031 12.25l-1.299 .75" />
  <path d="M10.268 15l-1.3 .75" />
  <path d="M15 15.803l-1.285 -.773" />
  <path d="M10.285 12.97l-1.285 -.773" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
    </svg>
  )
);

FileSettingsOutlineLogo.displayName = "FileSettingsOutlineLogo";

export const FileSettingsOutlineLogoMetadata = {
  id: "file-settings-outline",
  baseId: "file-settings-outline",
  variant: "default",
  name: "File Settings Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FileSettingsOutlineLogo;
