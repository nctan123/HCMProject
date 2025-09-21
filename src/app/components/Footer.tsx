import {Award, BookOpen, Heart, Star} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative mt-20">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-orange-500/20">
                <div className="container mx-auto px-6 py-12">
                    <div className="text-center space-y-6">
                        <div className="flex items-center justify-center space-x-4">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                                <BookOpen className="h-6 w-6 text-white"/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Tư Tưởng Hồ Chí Minh</h3>
                            </div>
                        </div>

                        <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                            <span>© 2025 By Group 1❤️</span>
                        </div>

                        <div className="flex items-center justify-center space-x-6">
                            {[Star, Heart, Award].map((Icon, index) => (
                                <div key={index}
                                     className="p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full">
                                    <Icon className="h-4 w-4 text-orange-400"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


