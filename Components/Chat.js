// components/Chatbox.js
'use client';
import React, { useState } from 'react';
import Markdown from './Markdown'; // Import komponen Markdown

export default function Chatbox() {
    const [isChatboxOpen, setIsChatboxOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
        if (!isChatboxOpen && messages.length === 0) {
            // Tambahkan sapaan pertama dari AI saat chatbox pertama kali dibuka
            setMessages([{ text: 'Ada yang bisa dibantu oleh ITHO AI?', sender: 'bot' }]);
        }
    };

    const handleSend = async () => {
        if (userInput.trim() !== '') {
            const newMessages = [...messages, { text: userInput, sender: 'user' }];
            setMessages(newMessages);
            setUserInput('');

            // const response = await fetch('http://localhost:3333/stream-openai', { // Sesuaikan URL dengan endpoint API Anda
            const response = await fetch('http://localhost:5000/ask', { // Sesuaikan URL dengan endpoint API Anda
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ prompt: userInput }),
                body: JSON.stringify({ query: userInput }),
            });
            const data = await response.json();
            // const botResponse = data.choices[0].message.content;
            const botResponse = data.response;
            // const formattedResponse = parseMessageContent(botResponse);
            console.log(data)

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: botResponse, sender: 'bot' },
            ]);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };



    return (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 z-30">
            <button
                id="open-chat"
                onClick={toggleChatbox}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
                Chat with ITHO AI
            </button>

            {isChatboxOpen && (
                <div id="chat-container" className="fixed bottom-16 right-4 w-96 z-30">
                    <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                        <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
                            <p className="text-lg font-semibold">ITHO AI</p>
                            <button
                                id="close-chat"
                                onClick={toggleChatbox}
                                className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* 
                        <div id="chatbox" className="p-4 h-80 overflow-y-auto">
                            {messages.map((msg, index) => (
                                <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                                    <div
                                        className={`${msg.sender === 'user'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-700'
                                            } rounded-lg py-2 px-4 inline-block max-w-full overflow-x-auto`}
                                    >
                                        {msg.sender === 'bot' ? (
                                            <div dangerouslySetInnerHTML={parseMessageContent(msg.text)} />
                                        ) : (
                                            <span>{msg.text}</span> // Untuk pesan dari user, tidak menggunakan HTML
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        <div id="chatbox" className="p-4 h-80 overflow-y-auto">
                            {messages.map((msg, index) => (
                                <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                                    <div
                                        className={`${msg.sender === 'user'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-700'
                                            } rounded-lg py-2 px-4 inline-block max-w-full overflow-x-auto`}
                                    >
                                        <Markdown content={msg.text} />
                                        {/* {msg.text} Menggunakan komponen Markdown */}
                                        {/* {msg.sender === 'bot' ? (
                                            <div dangerouslySetInnerHTML={parseMessageContent} />
                                        ) : (
                                            <span>{msg.text}</span> // Untuk pesan dari user, tidak menggunakan HTML
                                        )} */}
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="p-4 border-t flex">
                            <input
                                id="user-input"
                                type="text"
                                placeholder="Type a message"
                                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button
                                id="send-button"
                                onClick={handleSend}
                                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
