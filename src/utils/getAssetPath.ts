const CDN_BASE = 'https://swdbyouthful.github.io/swdb';

export const getAssetPath = (path: string): string => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return process.env.NODE_ENV === 'production' ? `${CDN_BASE}${normalized}` : normalized;
};
