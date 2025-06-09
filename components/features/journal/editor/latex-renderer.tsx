'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LaTeXRendererProps {
    formula: string;
    block?: boolean;
    errorColor?: string;
}

/**
 * Renders a LaTeX formula using KaTeX within a React component.
 *
 * Displays the rendered formula in either block or inline mode, and shows an error message in the specified color if rendering fails.
 *
 * @param formula - The LaTeX string to render.
 * @param block - Whether to render the formula in block mode (default: true).
 * @param errorColor - The color used for error messages (default: '#cc0000').
 *
 * @returns A div element containing the rendered formula or an error message.
 */
export default function LaTeXRenderer({ formula, block = true, errorColor = '#cc0000' }: LaTeXRendererProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        try {
            katex.render(formula, containerRef.current, {
                throwOnError: false,
                errorColor,
                displayMode: block,
                output: 'html',
            });
        } catch (error) {
            console.error('Failed to render LaTeX formula:', error);
            if (containerRef.current) {
                containerRef.current.textContent = `Error: Could not render LaTeX: ${formula}`;
                containerRef.current.style.color = errorColor;
            }
        }
    }, [formula, block, errorColor]);

    return <div className={`katex-container ${block ? 'block py-2' : 'inline-block'}`} ref={containerRef} />;
}
