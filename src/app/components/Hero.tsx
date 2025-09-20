"use client";
import {useEffect, useState} from "react";
import {BookOpen, Star} from "lucide-react";

type StarPosition = {
    left: number;
    top: number;
    animationDelay: number;
    animationDuration: number;
};

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const [stars, setStars] = useState<StarPosition[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isClient) {
            // Generate star positions only on client side
            const newStars = [...Array(20)].map(() => ({
                left: Math.random() * 100,
                top: Math.random() * 100,
                animationDelay: Math.random() * 2,
                animationDuration: 2 + Math.random() * 2,
            }));
            setStars(newStars);
        }
    }, [isClient]);

    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-red-600/90 to-pink-600/90"
                style={{transform: `translateY(${scrollY * 0.5}px)`}}
            ></div>

            <div className="absolute inset-0">
                {isClient && stars.map((star, i) => (
                    <div
                        key={i}
                        className="absolute animate-bounce"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            animationDelay: `${star.animationDelay}s`,
                            animationDuration: `${star.animationDuration}s`,
                        }}
                    >
                        <Star className="h-4 w-4 text-yellow-300/30"/>
                    </div>
                ))}
            </div>

            <div className="relative z-10 text-center text-white px-6 max-w-6xl">
                <div className="mb-8 animate-fade-in">
                    <div
                        className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-6">
                        <BookOpen className="h-8 w-8 text-yellow-300"/>
                        <span className="text-xl font-semibold">Tư Tưởng Hồ Chí Minh</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                        CLO2
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        Phân tích nội dung chi tiết
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        Khám phá hành trình hình thành tư tưởng vĩ đại của Chủ tịch Hồ Chí Minh
                        và sự vận dụng sáng tạo trong cách mạng Việt Nam
                    </p>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}


