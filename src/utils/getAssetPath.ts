import { SITE_URL } from '@/constants/event';

export const getAssetPath = (path: string): string => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return process.env.NODE_ENV === 'production' ? `${SITE_URL}${normalized}` : normalized;
};
