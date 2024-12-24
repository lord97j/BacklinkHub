/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'next-intl' {
  export function useTranslations(namespace?: string): (key: string) => string;
} 