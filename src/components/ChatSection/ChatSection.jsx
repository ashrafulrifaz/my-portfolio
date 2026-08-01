"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const INITIAL_MESSAGE = {
  role: "assistant",
  content: "Want to work Together? Or have any questions? Just send me a text.",
};

const ChatSection = () => {
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        const container = scrollRef.current?.parentElement;
        if (container) {
            container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
        }
    }, [messages, isLoading]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user", content: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });
            const data = await res.json();
            setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Something went wrong. Try again?" },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="border border-[#d2d2d2] rounded-3xl p-5 pt-3">
            <div className="max-h-[420px] overflow-y-auto space-y-5 pr-1">
                {messages.map((msg, i) =>
                    msg.role === "assistant" ? (
                        <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-3"
                        >
                        <div className="pt-2">
                            <Image src={"/assets/mine.png"} alt="my image" width={50} height={50} />
                        </div>
                        <div>
                            <div className="bg-[#eaeaea] px-4 py-3.5 mt-1.5 rounded-4xl max-w-[70%]">
                            <p>{msg.content}</p>
                            </div>
                        </div>
                        </motion.div>
                    ) : (
                    <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-end"
                    >
                    <div className="bg-[#eaeaea] px-4 py-3.5 mt-1.5 rounded-4xl max-w-[70%]">
                        <p>{msg.content}</p>
                    </div>
                    </motion.div>
                )
                )}

                {isLoading && (
                <div className="flex gap-3">
                    <div className="pt-7">
                    <Image src={"/assets/mine.png"} alt="my image" width={50} height={50} />
                    </div>
                    <div className="bg-[#eaeaea] px-4 py-4 mt-1.5 rounded-4xl flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                        <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#8f8f8f]"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                    ))}
                    </div>
                </div>
                )}
                <div ref={scrollRef} />
            </div>

            <form onSubmit={sendMessage} className="w-full relative mt-7">
                <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="say hello"
                className="bg-[#f1f1f1] border border-[#dedede] w-full rounded-full py-2 px-3 focus:outline-0"
                />
                <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#dadada] rounded-full p-[6px] absolute top-[5px] right-[7px] cursor-pointer disabled:opacity-40"
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#141b34" fill="none" stroke="#141b34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.87038 6.13264L14.7327 4.19538C18.033 3.10476 19.6831 2.55945 20.5579 3.43426C21.4327 4.30907 20.8874 5.95922 19.7968 9.25953L17.8595 15.1218C16.6236 18.8619 16.0056 20.7319 14.8796 20.9603C14.6411 21.0087 14.3955 21.0129 14.1549 20.9727C13.019 20.7832 12.3132 18.9359 10.9016 15.2413C10.6328 14.5376 10.4983 14.1858 10.2574 13.9127C10.2018 13.8497 10.1424 13.7903 10.0795 13.7348C9.80638 13.4938 9.45455 13.3594 8.75089 13.0906C5.05627 11.679 3.20896 10.9732 3.01945 9.83727C2.97931 9.59669 2.98353 9.35108 3.03189 9.11259C3.26025 7.98657 5.13029 7.36859 8.87038 6.13264Z"></path>
                    <path d="M12.8008 11.1865L15.498 8.48926"></path>
                </svg>
                </button>
            </form>
        </div>
    );
};

export default ChatSection;