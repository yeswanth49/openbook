import { redirect } from 'next/navigation';

/**
 * Redirects immediately to the root path ('/').
 *
 * This server component does not render any UI or perform additional logic.
 */
export default async function NewPage() {
    redirect('/');
}
