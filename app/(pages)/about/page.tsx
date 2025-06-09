// This page is statically generated and revalidated every 24 hours
export const revalidate = 86400;

/**
 * Renders the About page with information about the OpenBook application and a link to return to the home page.
 *
 * Displays a centered layout with a heading, subtitle, and a styled navigation link.
 */
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">OpenBook</h1>
                <p className="mb-6">Your smart Notebook. Coming soon.</p>
                <a href="/" className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                    Back to Home
                </a>
            </div>
        </div>
    );
}
