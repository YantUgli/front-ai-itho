// components/Markdown.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Markdown = ({ content }) => {
    return (
        <ReactMarkdown
            components={{
                code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    if (!inline && match) {
                        return (
                            <SyntaxHighlighter
                                style={tomorrow}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        );
                    } else {
                        return (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default Markdown;
