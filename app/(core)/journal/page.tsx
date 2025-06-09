import Editor from '@/components/features/journal/editor/editor';

/**
 * Renders the main journal page layout with the embedded editor component.
 *
 * Serves as the default export for the journal page, displaying the {@link Editor} within a flex container that fills the viewport height.
 */
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Editor />
        </main>
    );
}
