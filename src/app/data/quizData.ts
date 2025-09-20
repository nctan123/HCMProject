export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
    {
        id: '1',
        question: 'Đảng Cộng sản Việt Nam được thành lập vào ngày nào?',
        options: [
            '3/2/1930',
            '2/3/1930',
            '3/2/1931',
            '2/3/1931'
        ],
        correctAnswer: 0,
        explanation: 'Đảng Cộng sản Việt Nam được thành lập ngày 3/2/1930 tại Hồng Kông.',
        category: 'Lịch sử',
        difficulty: 'easy'
    },
    {
        id: '2',
        question: 'Ai là người sáng lập Đảng Cộng sản Việt Nam?',
        options: [
            'Hồ Chí Minh',
            'Nguyễn Ái Quốc',
            'Cả hai đều đúng',
            'Không ai trong số trên'
        ],
        correctAnswer: 2,
        explanation: 'Hồ Chí Minh và Nguyễn Ái Quốc là cùng một người - Chủ tịch Hồ Chí Minh.',
        category: 'Lịch sử',
        difficulty: 'easy'
    },
    {
        id: '3',
        question: 'Cách mạng Tháng Tám năm 1945 diễn ra ở đâu đầu tiên?',
        options: [
            'Hà Nội',
            'Huế',
            'Sài Gòn',
            'Nghệ An'
        ],
        correctAnswer: 0,
        explanation: 'Cách mạng Tháng Tám bắt đầu từ Hà Nội ngày 19/8/1945.',
        category: 'Lịch sử',
        difficulty: 'medium'
    },
    {
        id: '4',
        question: 'Chiến thắng Điện Biên Phủ diễn ra vào năm nào?',
        options: [
            '1953',
            '1954',
            '1955',
            '1956'
        ],
        correctAnswer: 1,
        explanation: 'Chiến thắng Điện Biên Phủ diễn ra năm 1954, kết thúc cuộc kháng chiến chống Pháp.',
        category: 'Lịch sử',
        difficulty: 'easy'
    },
    {
        id: '5',
        question: 'Đại hội đại biểu toàn quốc lần thứ I của Đảng diễn ra ở đâu?',
        options: [
            'Hà Nội',
            'Huế',
            'Sài Gòn',
            'Ma Cao'
        ],
        correctAnswer: 3,
        explanation: 'Đại hội đại biểu toàn quốc lần thứ I diễn ra tại Ma Cao (Trung Quốc) năm 1935.',
        category: 'Lịch sử',
        difficulty: 'hard'
    },
    {
        id: '6',
        question: 'Nghị quyết Trung ương 2 (khóa VIII) về công nghiệp hóa, hiện đại hóa được thông qua năm nào?',
        options: [
            '1995',
            '1996',
            '1997',
            '1998'
        ],
        correctAnswer: 1,
        explanation: 'Nghị quyết Trung ương 2 (khóa VIII) về công nghiệp hóa, hiện đại hóa được thông qua năm 1996.',
        category: 'Chính sách',
        difficulty: 'hard'
    },
    {
        id: '7',
        question: 'Chủ tịch Hồ Chí Minh qua đời vào ngày nào?',
        options: [
            '2/9/1969',
            '3/9/1969',
            '2/9/1970',
            '3/9/1970'
        ],
        correctAnswer: 0,
        explanation: 'Chủ tịch Hồ Chí Minh qua đời ngày 2/9/1969.',
        category: 'Lịch sử',
        difficulty: 'easy'
    },
    {
        id: '8',
        question: 'Đại hội đại biểu toàn quốc lần thứ XIII của Đảng diễn ra năm nào?',
        options: [
            '2020',
            '2021',
            '2022',
            '2023'
        ],
        correctAnswer: 1,
        explanation: 'Đại hội đại biểu toàn quốc lần thứ XIII của Đảng diễn ra năm 2021.',
        category: 'Hiện tại',
        difficulty: 'easy'
    },
    {
        id: '9',
        question: 'Nghị quyết số 26-NQ/TW về nông nghiệp, nông dân, nông thôn được thông qua năm nào?',
        options: [
            '2007',
            '2008',
            '2009',
            '2010'
        ],
        correctAnswer: 1,
        explanation: 'Nghị quyết số 26-NQ/TW về nông nghiệp, nông dân, nông thôn được thông qua năm 2008.',
        category: 'Chính sách',
        difficulty: 'hard'
    },
    {
        id: '10',
        question: 'Chiến dịch Hồ Chí Minh kết thúc vào ngày nào?',
        options: [
            '29/4/1975',
            '30/4/1975',
            '1/5/1975',
            '2/5/1975'
        ],
        correctAnswer: 1,
        explanation: 'Chiến dịch Hồ Chí Minh kết thúc ngày 30/4/1975, giải phóng hoàn toàn miền Nam.',
        category: 'Lịch sử',
        difficulty: 'easy'
    }
];

export const quizCategories = [
    'Tất cả',
    'Lịch sử',
    'Chính sách',
    'Hiện tại'
];

export const difficultyLevels = [
    {value: 'all', label: 'Tất cả'},
    {value: 'easy', label: 'Dễ'},
    {value: 'medium', label: 'Trung bình'},
    {value: 'hard', label: 'Khó'}
];
