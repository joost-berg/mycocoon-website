/** Resolve a site-relative path for both local development and GitHub Pages. */
export function withBase(path: string): string {
    return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}
