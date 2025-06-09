'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Table as TableIcon,
    Plus,
    X,
    AlignLeft,
    AlignCenter,
    AlignRight,
    ArrowDown,
    ArrowRight,
    Merge,
    Split,
    Trash2,
} from 'lucide-react';

interface TableMenuProps {
    onAddTable: (rows: number, cols: number) => void;
    onAddRowBefore?: () => void;
    onAddRowAfter?: () => void;
    onDeleteRow?: () => void;
    onAddColBefore?: () => void;
    onAddColAfter?: () => void;
    onDeleteCol?: () => void;
    onMergeCells?: () => void;
    onSplitCells?: () => void;
    onAlignLeft?: () => void;
    onAlignCenter?: () => void;
    onAlignRight?: () => void;
    onDeleteTable?: () => void;
    isTableSelected: boolean;
}

export default function TableMenu({
    onAddTable,
    onAddRowBefore,
    onAddRowAfter,
    onDeleteRow,
    onAddColBefore,
    onAddColAfter,
    onDeleteCol,
    onMergeCells,
    onSplitCells,
    onAlignLeft,
    onAlignCenter,
    onAlignRight,
    onDeleteTable,
    isTableSelected,
}: TableMenuProps) {
    const [showMenu, setShowMenu] = useState(false);
    const [tableSize, setTableSize] = useState({ rows: 3, cols: 3 });
    const [hoveredCell, setHoveredCell] = useState({ row: 0, col: 0 });

    const handleMouseEnter = (row: number, col: number) => {
        setHoveredCell({ row, col });
    };

    const handleCreateTable = () => {
        onAddTable(hoveredCell.row + 1, hoveredCell.col + 1);
        setShowMenu(false);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleMenu}
                className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                title="Table"
            >
                <TableIcon className="h-5 w-5" />
            </button>

            {showMenu && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute z-50 mt-2 p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-800"
                    style={{ minWidth: '200px' }}
                >
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-sm font-medium">Insert Table</h3>
                        <button onClick={() => setShowMenu(false)} className="text-neutral-500">
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-5 gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, rowIdx) =>
                            Array.from({ length: 5 }).map((_, colIdx) => (
                                <div
                                    key={`${rowIdx}-${colIdx}`}
                                    className={`
                    w-6 h-6 border border-neutral-300 dark:border-neutral-700 rounded-sm
                    ${
                        rowIdx <= hoveredCell.row && colIdx <= hoveredCell.col
                            ? 'bg-primary border-primary'
                            : 'bg-white dark:bg-neutral-800'
                    }
                    cursor-pointer transition-colors
                  `}
                                    onMouseEnter={() => handleMouseEnter(rowIdx, colIdx)}
                                    onClick={handleCreateTable}
                                />
                            )),
                        )}
                    </div>

                    <div className="text-xs text-neutral-500 dark:text-neutral-400 text-center mb-2">
                        {hoveredCell.row + 1} × {hoveredCell.col + 1} table
                    </div>

                    {isTableSelected && (
                        <>
                            <div className="border-t border-neutral-200 dark:border-neutral-800 my-2 pt-2">
                                <h4 className="text-xs font-medium text-neutral-500 mb-2">Table Options</h4>

                                <div className="grid grid-cols-3 gap-1 mb-2">
                                    {/* Row actions */}
                                    <button
                                        onClick={onAddRowBefore}
                                        className="p-1 text-xs rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col items-center"
                                        title="Add row before"
                                    >
                                        <ArrowDown className="h-3 w-3 mb-1" />
                                        <span>Row Before</span>
                                    </button>
                                    <button
                                        onClick={onAddRowAfter}
                                        className="p-1 text-xs rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col items-center"
                                        title="Add row after"
                                    >
                                        <ArrowDown className="h-3 w-3 mb-1" />
                                        <span>Row After</span>
                                    </button>
                                    <button
                                        onClick={onDeleteRow}
                                        className="p-1 text-xs rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col items-center text-red-500"
                                        title="Delete row"
                                    >
                                        <Trash2 className="h-3 w-3 mb-1" />
                                        <span>Delete Row</span>
                                    </button>

                                    {/* Column actions */}
                                    <button
                                        onClick={onAddColBefore}
                                        className="p-1 text-xs rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col items-center"
                                        title="Add column before"
                                    >
                                        <ArrowRight className="h-3 w-3 mb-1" />
                                        <span>Col Before</span>
                                    </button>
                                    <button
                                        onClick={onAddColAfter}
                                        className="p-1 text-xs rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col items-center"
                                        title="Add column after"
                                    >
                                        <ArrowRight className="h-3 w-3 mb-1" />
                                        <span>Col After</span>
                                    </button>
                                    <button
                                        onClick={onDeleteCol}
                                        className="p-1 text-xs rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex flex-col items-center text-red-500"
                                        title="Delete column"
                                    >
                                        <Trash2 className="h-3 w-3 mb-1" />
                                        <span>Delete Col</span>
                                    </button>
                                </div>

                                {/* Cell actions */}
                                <div className="flex justify-between mb-2">
                                    <button
                                        onClick={onMergeCells}
                                        className="p-1 text-xs rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center"
                                        title="Merge cells"
                                    >
                                        <Merge className="h-3 w-3 mr-1" />
                                        <span>Merge</span>
                                    </button>
                                    <button
                                        onClick={onSplitCells}
                                        className="p-1 text-xs rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center"
                                        title="Split cells"
                                    >
                                        <Split className="h-3 w-3 mr-1" />
                                        <span>Split</span>
                                    </button>
                                    <button
                                        onClick={onDeleteTable}
                                        className="p-1 text-xs rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center text-red-500"
                                        title="Delete table"
                                    >
                                        <Trash2 className="h-3 w-3 mr-1" />
                                        <span>Delete Table</span>
                                    </button>
                                </div>

                                {/* Alignment */}
                                <div className="flex justify-center space-x-2 mt-2">
                                    <button
                                        onClick={onAlignLeft}
                                        className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                        title="Align left"
                                    >
                                        <AlignLeft className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={onAlignCenter}
                                        className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                        title="Align center"
                                    >
                                        <AlignCenter className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={onAlignRight}
                                        className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                        title="Align right"
                                    >
                                        <AlignRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>
            )}
        </div>
    );
}
