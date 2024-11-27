'use client';
import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import "./tariffing.css";

// Типизация для одного элемента контента
interface ContentItem {
    title: string;
    link: string;
}

// Типизация для пропсов компонента HorizontalScrollButtons
interface HorizontalScrollButtonsProps {
    content: ContentItem[];
}

const HorizontalScrollButtons: React.FC<HorizontalScrollButtonsProps> = ({ content }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Скорость прокрутки
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleMouseLeave = () => setIsDragging(false);

    return (
        <Box
            ref={containerRef}
            sx={{
                display: "flex",
                overflowX: "auto",
                whiteSpace: "nowrap",
                width: '80%',
                gap: 2,
                padding: 2,
                scrollbarWidth: "none",
                cursor: isDragging ? "grabbing" : "grab",
                "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            {content.map((item, index) => (
                <Box
                    key={index}
                    className="button-tag-software"
                    sx={{
                        cursor: "pointer",
                        "&:hover": {
                            backgroundColor: '#54fafa',
                        },
                    }}
                >
                    <Link href={item.link} target="_blank" underline="none">
                        <span className="button-tag-software_span">
                            {item.title}
                        </span>
                    </Link>
                </Box>
            ))}
        </Box>
    );
};

export default HorizontalScrollButtons;
