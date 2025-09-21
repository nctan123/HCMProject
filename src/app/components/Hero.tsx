"use client";
import {useEffect, useState} from "react";
import {BookOpen, Star, Sparkles, ChevronDown, Play} from "lucide-react";

type StarPosition = {
    left: number;
    top: number;
    animationDelay: number;
    animationDuration: number;
    size: number;
    opacity: number;
};

type FloatingElement = {
    left: number;
    top: number;
    animationDelay: number;
    animationDuration: number;
    type: 'star' | 'sparkle';
    size: number;
    opacity: number;
};

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const [stars, setStars] = useState<StarPosition[]>([]);
    const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isClient) {
            // Generate star positions with more variety
            const newStars = [...Array(30)].map(() => ({
                left: Math.random() * 100,
                top: Math.random() * 100,
                animationDelay: Math.random() * 4,
                animationDuration: 4 + Math.random() * 6,
                size: 8 + Math.random() * 12,
                opacity: 0.3 + Math.random() * 0.7,
            }));
            setStars(newStars);

            // Generate floating elements with more variety
            const newFloatingElements = [...Array(20)].map(() => ({
                left: Math.random() * 100,
                top: Math.random() * 100,
                animationDelay: Math.random() * 5,
                animationDuration: 5 + Math.random() * 8,
                type: Math.random() > 0.7 ? 'sparkle' : 'star' as 'star' | 'sparkle',
                size: 12 + Math.random() * 16,
                opacity: 0.2 + Math.random() * 0.6,
            }));
            setFloatingElements(newFloatingElements);
        }
    }, [isClient]);

    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Enhanced Parallax */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "url('/ho-chi-minh-background.jpg')",
                    transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0005})`
                }}
            >
                {/* Lighter gradient overlays to preserve background image visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/60 via-orange-800/50 to-yellow-700/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-transparent to-pink-600/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40"></div>
            </div>

            {/* Animated Particles Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-yellow-500/5 animate-pulse"></div>
            </div>

            {/* Enhanced Animated Stars */}
            <div className="absolute inset-0 pointer-events-none">
                {isClient && stars.map((star, i) => (
                    <div
                        key={i}
                        className="absolute animate-twinkle"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            animationDelay: `${star.animationDelay}s`,
                            animationDuration: `${star.animationDuration}s`,
                            opacity: star.opacity,
                        }}
                    >
                        <Star 
                            className="text-yellow-200 drop-shadow-glow"
                            style={{ 
                                height: `${star.size}px`, 
                                width: `${star.size}px`,
                                filter: `drop-shadow(0 0 ${star.size/2}px rgba(255, 215, 0, 0.6))`
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {isClient && floatingElements.map((element, i) => (
                    <div
                        key={`floating-${i}`}
                        className="absolute animate-float"
                        style={{
                            left: `${element.left}%`,
                            top: `${element.top}%`,
                            animationDelay: `${element.animationDelay}s`,
                            animationDuration: `${element.animationDuration}s`,
                            opacity: element.opacity,
                        }}
                    >
                        {element.type === 'sparkle' ? (
                            <Sparkles 
                                className="text-yellow-300 drop-shadow-glow"
                                style={{ 
                                    height: `${element.size}px`, 
                                    width: `${element.size}px`,
                                    filter: `drop-shadow(0 0 ${element.size/2}px rgba(255, 193, 7, 0.8))`
                                }}
                            />
                        ) : (
                            <Star 
                                className="text-red-300 drop-shadow-glow"
                                style={{ 
                                    height: `${element.size}px`, 
                                    width: `${element.size}px`,
                                    filter: `drop-shadow(0 0 ${element.size/2}px rgba(220, 38, 38, 0.6))`
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-7xl">
                <div className="mb-12 opacity-0 animate-fade-in-up">
                    {/* Enhanced Logo/Brand Section */}
                    <div className="inline-flex items-center space-x-6 bg-white/20 backdrop-blur-lg rounded-full px-12 py-6 mb-10 border border-white/30 shadow-2xl hover:bg-white/25 hover:scale-105 transition-all duration-500 group">
                        <div className="p-2 bg-yellow-400/20 rounded-full group-hover:bg-yellow-400/30 transition-colors duration-300">
                            <BookOpen className="h-12 w-12 text-yellow-300 drop-shadow-lg group-hover:rotate-12 transition-transform duration-300"/>
                        </div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                            Tư Tưởng Hồ Chí Minh
                        </span>
                    </div>

                    {/* Enhanced Main Title with Vietnamese-friendly Font */}
                    <h1 className="text-7xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-black mb-12 leading-none tracking-tight font-serif">
                        <span className="block bg-gradient-to-r from-red-200 via-red-300 to-red-400 bg-clip-text text-transparent drop-shadow-2xl animate-title-glow">
                            Sợi chỉ
                        </span>
                        <span className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-2xl transform -mt-6 animate-title-glow" style={{animationDelay: '0.2s'}}>
                            đỏ
                        </span>
                    </h1>

                    {/* Enhanced Subtitle - Compact 2 lines */}
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-medium drop-shadow-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                            Khám phá hành trình hình thành tư tưởng vĩ đại của Chủ tịch Hồ Chí Minh
                        </p>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mt-2 font-light drop-shadow-md animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                            và sự vận dụng sáng tạo trong cách mạng Việt Nam
                        </p>
                    </div>
                </div>


                {/* Enhanced Scroll Indicator */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce opacity-80 group cursor-pointer">
                    <div className="w-10 h-16 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-md bg-white/15 group-hover:bg-white/25 transition-all duration-300">
                        <ChevronDown className="h-6 w-6 text-white/80 mt-2 animate-pulse group-hover:scale-110 transition-transform duration-300"/>
                    </div>
                    <p className="text-white/80 text-sm mt-4 font-medium group-hover:text-white transition-colors duration-300">Cuộn xuống để khám phá</p>
                </div>
            </div>

            <style jsx>{`
                .animate-fade-in-up {
                    animation: fadeInUp 1.2s ease-out forwards;
                }
                
                .animate-twinkle {
                    animation: twinkle 3s ease-in-out infinite;
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-title-glow {
                    animation: titleGlow 3s ease-in-out infinite;
                }
                
                .drop-shadow-glow {
                    filter: drop-shadow(0 0 12px currentColor);
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes twinkle {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.2);
                    }
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }
                
                @keyframes titleGlow {
                    0%, 100% {
                        text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
                    }
                    50% {
                        text-shadow: 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 215, 0, 0.4);
                    }
                }
                
                @media (max-width: 640px) {
                    h1 {
                        font-size: 4rem;
                    }
                }
                
                @media (max-width: 480px) {
                    h1 {
                        font-size: 3rem;
                    }
                }
            `}</style>
        </header>
    );
}