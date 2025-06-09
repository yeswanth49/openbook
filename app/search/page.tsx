import { redirect } from 'next/navigation';

/**
 * Redirects immediately to the root path.
 *
 * @returns This function does not return; it triggers a redirect to '/'.
 */
export default async function NewPage() {
    redirect('/');
}
