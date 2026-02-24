/**
 * Auto-generated main index for all logos
 * Do not edit manually
 */

import { PaperLogo, PaperLogoMetadata } from './design/paper';
import { NextjsLogo, NextjsLogoMetadata } from './frontend/nextjs';
import { ReactLogo, ReactLogoMetadata } from './frontend/react';
import { TypescriptLogo, TypescriptLogoMetadata } from './frontend/typescript';
import { GithubLogo, GithubLogoMetadata } from './platforms/github';
import { VercelLogo, VercelLogoMetadata } from './platforms/vercel';
import { NodejsLogo, NodejsLogoMetadata } from './tools/nodejs';
import { NpmLogo, NpmLogoMetadata } from './tools/npm';
import { TailwindLogo, TailwindLogoMetadata } from './tools/tailwind';


export const allLogos = {
  design: {
    PaperLogo: { Component: PaperLogo, metadata: PaperLogoMetadata },
  },
  frontend: {
    NextjsLogo: { Component: NextjsLogo, metadata: NextjsLogoMetadata },
    ReactLogo: { Component: ReactLogo, metadata: ReactLogoMetadata },
    TypescriptLogo: { Component: TypescriptLogo, metadata: TypescriptLogoMetadata },
  },
  platforms: {
    GithubLogo: { Component: GithubLogo, metadata: GithubLogoMetadata },
    VercelLogo: { Component: VercelLogo, metadata: VercelLogoMetadata },
  },
  tools: {
    NodejsLogo: { Component: NodejsLogo, metadata: NodejsLogoMetadata },
    NpmLogo: { Component: NpmLogo, metadata: NpmLogoMetadata },
    TailwindLogo: { Component: TailwindLogo, metadata: TailwindLogoMetadata },
  },
} as const;

