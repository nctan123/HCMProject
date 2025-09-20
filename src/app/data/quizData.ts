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
        question: 'Thực chất vấn đề dân tộc ở thuộc địa theo tư tưởng HCM là mâu thuẫn chủ yếu giữa:',
        options: [
            'Địa chủ – nông dân',
            'Tư sản – vô sản',
            'Dân tộc bị áp bức – chủ nghĩa đế quốc',
            'Trí thức – phong kiến'
        ],
        correctAnswer: 2,
        explanation: 'Theo Hồ Chí Minh, mâu thuẫn chủ yếu ở thuộc địa là giữa dân tộc bị áp bức với chủ nghĩa đế quốc.',
        category: 'Tư tưởng HCM',
        difficulty: 'medium'
    },
    {
        id: '2',
        question: 'Mục tiêu cao nhất của cách mạng giải phóng dân tộc theo HCM:',
        options: [
            'Dân chủ hóa xã hội',
            'Độc lập dân tộc gắn với CNXH',
            'Phát triển kinh tế thị trường',
            'Xây dựng nhà nước pháp quyền'
        ],
        correctAnswer: 1,
        explanation: 'Mục tiêu cao nhất là độc lập dân tộc gắn với chủ nghĩa xã hội.',
        category: 'Tư tưởng HCM',
        difficulty: 'medium'
    },
    {
        id: '3',
        question: 'Con đường cứu nước đúng đắn HCM tìm thấy sau khi đọc "Sơ thảo..." của Lênin (1920) là:',
        options: [
            'Cải lương',
            'Bạo động phong kiến',
            'Cách mạng tư sản',
            'Cách mạng vô sản'
        ],
        correctAnswer: 3,
        explanation: 'Sau khi đọc Luận cương của Lênin, Hồ Chí Minh đã tìm thấy con đường cách mạng vô sản.',
        category: 'Tư tưởng HCM',
        difficulty: 'easy'
    },
    {
        id: '4',
        question: 'Lực lượng lãnh đạo cách mạng giải phóng dân tộc theo HCM:',
        options: [
            'Tư sản dân tộc',
            'Giai cấp công nhân dưới sự lãnh đạo của Đảng',
            'Trí thức',
            'Nông dân'
        ],
        correctAnswer: 1,
        explanation: 'Giai cấp công nhân dưới sự lãnh đạo của Đảng là lực lượng lãnh đạo cách mạng.',
        category: 'Tư tưởng HCM',
        difficulty: 'medium'
    },
    {
        id: '5',
        question: 'Lực lượng cách mạng chủ yếu:',
        options: [
            'Công – nông và toàn dân tộc',
            'Chỉ công nhân',
            'Chỉ nông dân',
            'Quân đội'
        ],
    correctAnswer: 0,
        explanation: 'Lực lượng cách mạng chủ yếu là công – nông và toàn dân tộc.',
        category: 'Tư tưởng HCM',
        difficulty: 'easy'
    },
    {
        id: '6',
        question: 'Quan hệ dân tộc – giai cấp trong tư tưởng HCM:',
        options: [
            'Hoàn toàn tách rời',
            'Dân tộc phủ định giai cấp',
            'Gắn bó chặt chẽ',
            'Giai cấp quan trọng hơn'
        ],
        correctAnswer: 2,
        explanation: 'Trong tư tưởng Hồ Chí Minh, dân tộc và giai cấp gắn bó chặt chẽ với nhau.',
        category: 'Tư tưởng HCM',
        difficulty: 'hard'
    },
    {
        id: '7',
        question: '"Không có gì quý hơn độc lập, tự do" thể hiện tư tưởng:',
        options: [
            'Dân chủ',
            'Dân sinh',
            'Độc lập dân tộc',
            'Đại đoàn kết'
        ],
        correctAnswer: 2,
        explanation: 'Câu nói này thể hiện tư tưởng độc lập dân tộc của Hồ Chí Minh.',
        category: 'Tư tưởng HCM',
        difficulty: 'easy'
    },
    {
        id: '8',
        question: 'Độc lập dân tộc theo HCM phải là:',
        options: [
            'Tương đối',
            'Hoàn toàn, triệt để, gắn với tự do hạnh phúc của nhân dân',
            'Trên lĩnh vực quân sự',
            'Trên lĩnh vực ngoại giao'
        ],
        correctAnswer: 1,
        explanation: 'Độc lập dân tộc phải là hoàn toàn, triệt để, gắn với tự do hạnh phúc của nhân dân.',
        category: 'Tư tưởng HCM',
        difficulty: 'medium'
    },
    {
        id: '9',
        question: 'Đại đoàn kết dân tộc theo HCM lấy nền tảng:',
        options: [
            'Công – thương',
            'Công – nông – trí',
            'Trí – nông – thương',
            'Công – binh – nông'
        ],
        correctAnswer: 1,
        explanation: 'Đại đoàn kết dân tộc lấy nền tảng là công – nông – trí.',
        category: 'Tư tưởng HCM',
        difficulty: 'medium'
    },
    {
        id: '10',
        question: 'Phương châm đối ngoại có tính nguyên tắc rút từ tư tưởng HCM:',
        options: [
            'Đóng cửa, tự cấp tự túc',
            'Thêm bạn bớt thù, đa phương hóa, đa dạng hóa',
            'Liên minh độc nhất với một nước',
            'Trung lập tuyệt đối'
        ],
        correctAnswer: 1,
        explanation: 'Phương châm "thêm bạn bớt thù, đa phương hóa, đa dạng hóa" là nguyên tắc đối ngoại của Hồ Chí Minh.',
        category: 'Tư tưởng HCM',
        difficulty: 'medium'
    },
    {
        id: '11',
        question: 'Về phương pháp giành độc lập, HCM nhấn mạnh:',
        options: [
            'Trông chờ chính quốc',
            'Tự lực tự cường, tranh thủ quốc tế',
            'Nhờ cậy viện trợ là chính',
            'Bạo lực đơn thuần'
        ],
        correctAnswer: 1,
        explanation: 'Hồ Chí Minh nhấn mạnh phương pháp tự lực tự cường, tranh thủ quốc tế.',
        category: 'Tư tưởng HCM',
        difficulty: 'medium'
    },
    {
        id: '12',
        question: 'Bản chất "chủ nghĩa dân tộc chân chính" theo HCM là:',
        options: [
            'Đề cao dân tộc mình, hạ thấp dân tộc khác',
            'Độc lập dân tộc gắn hạnh phúc nhân dân, chống áp bức',
            'Bảo hộ mậu dịch',
            'Biệt lập văn hóa'
        ],
        correctAnswer: 1,
        explanation: 'Chủ nghĩa dân tộc chân chính là độc lập dân tộc gắn hạnh phúc nhân dân, chống áp bức.',
        category: 'Tư tưởng HCM',
        difficulty: 'hard'
    },
    {
        id: '13',
        question: 'Mặt trận Việt Minh (1941) là biểu hiện cụ thể của:',
        options: [
            'Liên minh quân sự khu vực',
            'Đại đoàn kết toàn dân tộc',
            'Liên minh tư sản – nông dân',
            'Hội trí thức yêu nước'
        ],
        correctAnswer: 1,
        explanation: 'Mặt trận Việt Minh là biểu hiện cụ thể của đại đoàn kết toàn dân tộc.',
        category: 'Tư tưởng HCM',
        difficulty: 'easy'
    },
    {
        id: '14',
        question: '"Kết hợp sức mạnh dân tộc với sức mạnh thời đại" được HCM vận dụng nhằm:',
        options: [
            'Lệ thuộc quốc tế',
            'Cô lập đối phương',
            'Tận dụng xu thế tiến bộ của thời đại phục vụ độc lập dân tộc',
            'Tách rời nội lực'
        ],
        correctAnswer: 2,
        explanation: 'Kết hợp sức mạnh dân tộc với sức mạnh thời đại nhằm tận dụng xu thế tiến bộ phục vụ độc lập dân tộc.',
        category: 'Tư tưởng HCM',
        difficulty: 'hard'
    },
    {
        id: '15',
        question: 'Tiêu chí kiểm nghiệm độc lập dân tộc theo HCM:',
        options: [
            'Có quốc kỳ riêng là đủ',
            'Có ngoại giao riêng là đủ',
            'Nhân dân thực sự có tự do, hạnh phúc',
            'Có quân đội riêng là đủ'
        ],
        correctAnswer: 2,
        explanation: 'Tiêu chí kiểm nghiệm độc lập dân tộc là nhân dân thực sự có tự do, hạnh phúc.',
        category: 'Tư tưởng HCM',
        difficulty: 'medium'
    },
    {
        id: '16',
        question: 'Vận dụng "độc lập dân tộc gắn CNXH" hiện nay, chủ trương nhất quán là:',
        options: [
            'Ưu tiên tăng trưởng bằng mọi giá',
            'Kiên định mục tiêu độc lập dân tộc và CNXH trong đổi mới',
            'Từ bỏ định hướng XHCN',
            'Chỉ tập trung dân chủ cơ sở'
        ],
        correctAnswer: 1,
        explanation: 'Chủ trương nhất quán là kiên định mục tiêu độc lập dân tộc và CNXH trong đổi mới.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '17',
        question: 'Để củng cố khối đại đoàn kết, chính sách dân tộc hiện nay quán triệt phương châm:',
        options: [
            'Đồng hóa văn hóa vùng DTTS',
            'Bình đẳng, đoàn kết, tôn trọng, giúp nhau phát triển',
            'Ưu tiên một vài dân tộc lớn',
            'Không can thiệp phong tục'
        ],
        correctAnswer: 1,
        explanation: 'Phương châm là bình đẳng, đoàn kết, tôn trọng, giúp nhau phát triển.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '18',
        question: '"Tự lực tự cường, đồng thời tranh thủ ngoại lực" được vận dụng trong hội nhập là:',
        options: [
            'Lệ thuộc chuỗi cung ứng',
            'Đóng cửa bảo hộ',
            'Làm chủ công nghệ lõi + thu hút FDI chất lượng',
            'Xuất thô tài nguyên'
        ],
        correctAnswer: 2,
        explanation: 'Vận dụng là làm chủ công nghệ lõi + thu hút FDI chất lượng.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '19',
        question: '"Thêm bạn bớt thù" hôm nay thể hiện qua:',
        options: [
            'Chỉ quan hệ song phương',
            'Đa phương hóa, là bạn và đối tác tin cậy của cộng đồng quốc tế',
            'Tránh các tổ chức quốc tế',
            'Theo một cực duy nhất'
        ],
        correctAnswer: 1,
        explanation: 'Thể hiện qua đa phương hóa, là bạn và đối tác tin cậy của cộng đồng quốc tế.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '20',
        question: 'Giải pháp căn cốt phát huy sức mạnh dân tộc theo HCM trong giai đoạn chuyển đổi số:',
        options: [
            'Coi nhẹ nguồn nhân lực số',
            'Phát triển nguồn nhân lực, văn hóa số, bảo toàn bản sắc',
            'Chỉ mua công nghệ ngoại',
            'Cắt giảm đầu tư giáo dục'
        ],
        correctAnswer: 1,
        explanation: 'Giải pháp căn cốt là phát triển nguồn nhân lực, văn hóa số, bảo toàn bản sắc.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '21',
        question: 'Vận dụng "đại đoàn kết toàn dân", vai trò của Mặt trận Tổ quốc và các tổ chức chính trị – xã hội là:',
        options: [
            'Tham gia hình thức',
            'Huy động, giám sát, phản biện xã hội, gắn kết khối đoàn kết',
            'Thay thế CQNN',
            'Chỉ làm từ thiện'
        ],
        correctAnswer: 1,
        explanation: 'Vai trò là huy động, giám sát, phản biện xã hội, gắn kết khối đoàn kết.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '22',
        question: 'Trong phát triển vùng DTTS & miền núi, tinh thần HCM yêu cầu ưu tiên:',
        options: [
            'Hạ tầng, giáo dục, y tế, sinh kế bền vững',
            'Khai thác tài nguyên bằng mọi giá',
            'Chuyển dân ồ ạt',
            'Cắt giảm đầu tư phúc lợi'
        ],
    correctAnswer: 0,
        explanation: 'Ưu tiên hạ tầng, giáo dục, y tế, sinh kế bền vững.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '23',
        question: 'Gắn "độc lập dân tộc với hạnh phúc nhân dân" hiện nay nghĩa là:',
        options: [
            'Chỉ tiêu GDP là đủ',
            'Lấy người dân làm trung tâm, đo lường bằng chất lượng sống',
            'Ưu tiên doanh nghiệp trước',
            'Tăng thu ngân sách là chính'
        ],
        correctAnswer: 1,
        explanation: 'Nghĩa là lấy người dân làm trung tâm, đo lường bằng chất lượng sống.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '24',
        question: 'Kết hợp sức mạnh dân tộc – thời đại trong kinh tế xanh:',
        options: [
            'Phụ thuộc công nghệ cũ',
            'Liên minh chuyển dịch năng lượng, tận dụng xu thế xanh toàn cầu',
            'Trì hoãn cam kết khí hậu',
            'Xuất khẩu than đá'
        ],
        correctAnswer: 1,
        explanation: 'Kết hợp qua liên minh chuyển dịch năng lượng, tận dụng xu thế xanh toàn cầu.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '25',
        question: 'Trong bảo tồn văn hóa DTTS theo tinh thần HCM:',
        options: [
            'Đồng hóa về một mẫu',
            'Tôn trọng đa dạng, chống kỳ thị, phát huy giá trị tốt đẹp',
            'Thương mại hóa tuyệt đối',
            'Xóa bỏ phong tục tất cả'
        ],
        correctAnswer: 1,
        explanation: 'Theo tinh thần HCM là tôn trọng đa dạng, chống kỳ thị, phát huy giá trị tốt đẹp.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '26',
        question: 'Đối ngoại nhân dân theo tư tưởng HCM được vận dụng bằng:',
        options: [
            'Chỉ kênh nhà nước',
            'Mở rộng giao lưu nhân dân, kiều bào, địa phương – địa phương',
            'Tránh NGO',
            'Đóng các hội thảo'
        ],
        correctAnswer: 1,
        explanation: 'Vận dụng bằng mở rộng giao lưu nhân dân, kiều bào, địa phương – địa phương.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '27',
        question: '"Dựa vào dân, vì dân" trong QP-AN hiện nay là:',
        options: [
            'Quân sự hóa xã hội',
            'Thế trận lòng dân, quốc phòng toàn dân – an ninh nhân dân',
            'Tư nhân hóa quốc phòng',
            'Phó mặc cho lực lượng chuyên trách'
        ],
        correctAnswer: 1,
        explanation: 'Là thế trận lòng dân, quốc phòng toàn dân – an ninh nhân dân.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '28',
        question: 'Chống chia rẽ dân tộc trên không gian mạng theo tinh thần HCM:',
        options: [
            'Bỏ qua',
            'Chủ động truyền thông đúng, đối thoại, giáo dục lịch sử – văn hóa',
            'Chặn toàn bộ internet',
            'Phản ứng cực đoan'
        ],
        correctAnswer: 1,
        explanation: 'Theo tinh thần HCM là chủ động truyền thông đúng, đối thoại, giáo dục lịch sử – văn hóa.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '29',
        question: 'Phát triển doanh nghiệp DTTS bền vững là vận dụng nguyên tắc:',
        options: [
            'Tự lực tự cường có hỗ trợ',
            'Bao cấp hoàn toàn',
            'Để thị trường tự lo',
            'Hạn chế tiếp cận vốn'
        ],
    correctAnswer: 0,
        explanation: 'Vận dụng nguyên tắc tự lực tự cường có hỗ trợ.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '30',
        question: 'Gắn độc lập với toàn vẹn lãnh thổ theo HCM trong thời bình:',
        options: [
            'Bỏ qua luật pháp quốc tế',
            'Kiên định nguyên tắc, giải quyết hòa bình, dựa trên luật pháp quốc tế',
            'Chỉ dùng biện pháp cưỡng chế',
            'Rút khỏi các diễn đàn khu vực'
        ],
        correctAnswer: 1,
        explanation: 'Theo HCM là kiên định nguyên tắc, giải quyết hòa bình, dựa trên luật pháp quốc tế.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '31',
        question: '"Không có độc lập thật sự nếu nhân dân không hạnh phúc" → vận dụng vào chính sách:',
        options: [
            'Ưu tiên an sinh, giảm nghèo đa chiều bền vững',
            'Tập trung doanh nghiệp lớn',
            'Giảm chi y tế',
            'Cắt giảm giáo dục'
        ],
    correctAnswer: 0,
        explanation: 'Vận dụng vào chính sách ưu tiên an sinh, giảm nghèo đa chiều bền vững.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '32',
        question: 'Tăng cường "đoàn kết tôn giáo – dân tộc" theo tinh thần HCM:',
        options: [
            'Kỳ thị tôn giáo',
            'Đối thoại, tôn trọng tự do tín ngưỡng theo pháp luật, đồng hành phát triển',
            'Quản lý cứng nhắc',
            'Tách rời tôn giáo khỏi đời sống'
        ],
        correctAnswer: 1,
        explanation: 'Theo tinh thần HCM là đối thoại, tôn trọng tự do tín ngưỡng theo pháp luật, đồng hành phát triển.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '33',
        question: 'Chuẩn tắc truyền thông đối ngoại về dân tộc theo HCM:',
        options: [
            'Tự tôn cực đoan',
            'Tôn trọng, bình đẳng, thật thà, thêm bạn bớt thù',
            'Phủ nhận khác biệt',
            'Công kích'
        ],
        correctAnswer: 1,
        explanation: 'Chuẩn tắc theo HCM là tôn trọng, bình đẳng, thật thà, thêm bạn bớt thù.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '34',
        question: '"Liên minh công – nông – trí" ngày nay cụ thể hóa:',
        options: [
            'Bớt vai trò trí thức',
            'Hệ sinh thái đổi mới sáng tạo, nông thôn mới thông minh, công nhân tri thức hóa',
            'Chỉ công nghiệp nặng',
            'Tập trung đô thị lớn'
        ],
        correctAnswer: 1,
        explanation: 'Cụ thể hóa qua hệ sinh thái đổi mới sáng tạo, nông thôn mới thông minh, công nhân tri thức hóa.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '35',
        question: 'Phòng, chống tư tưởng dân tộc hẹp hòi/ kỳ thị hiện nay theo HCM:',
        options: [
            'Bỏ mặc tự phát',
            'Giáo dục – pháp luật – đối thoại văn hóa',
            'Đối đầu cực đoan',
            'Khoanh vùng'
        ],
        correctAnswer: 1,
        explanation: 'Theo HCM là giáo dục – pháp luật – đối thoại văn hóa.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '36',
        question: 'Vận dụng "kết hợp sức mạnh thời đại" trong khoa học công nghệ:',
        options: [
            'Tự phát',
            'Hợp tác quốc tế về AI/semiconductor kèm nội lực R&D',
            'Chỉ mua thiết bị',
            'Đóng cửa'
        ],
        correctAnswer: 1,
        explanation: 'Vận dụng qua hợp tác quốc tế về AI/semiconductor kèm nội lực R&D.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '37',
        question: 'Chính sách ngôn ngữ – giáo dục với DTTS:',
        options: [
            'Xóa ngôn ngữ DTTS',
            'Dạy – học song ngữ hợp lý, giữ gìn tiếng nói, chữ viết DTTS',
            'Chỉ dạy tiếng phổ thông',
            'Không cần chuẩn hóa'
        ],
        correctAnswer: 1,
        explanation: 'Chính sách là dạy – học song ngữ hợp lý, giữ gìn tiếng nói, chữ viết DTTS.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '38',
        question: 'Phát triển du lịch cộng đồng DTTS theo tinh thần HCM:',
        options: [
            'Thương mại hóa bất chấp',
            'Bảo tồn – phát huy giá trị văn hóa, sinh kế bền vững, tôn trọng chủ thể',
            'Chuỗi giá trị đóng',
            'Tập trung đại dự án'
        ],
        correctAnswer: 1,
        explanation: 'Theo tinh thần HCM là bảo tồn – phát huy giá trị văn hóa, sinh kế bền vững, tôn trọng chủ thể.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '39',
        question: 'Chính sách thông tin – truyền thông vùng DTTS:',
        options: [
            'Không ưu tiên hạ tầng số',
            'Phủ sóng, chuyển đổi số cơ sở, nội dung chính xác, dễ tiếp cận song ngữ',
            'Chỉ dùng mạng xã hội',
            'Không cần báo chí'
        ],
        correctAnswer: 1,
        explanation: 'Chính sách là phủ sóng, chuyển đổi số cơ sở, nội dung chính xác, dễ tiếp cận song ngữ.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '40',
        question: 'Vận dụng "độc lập gắn CNXH" trong cải cách thể chế:',
        options: [
            'Lỏng lẻo kỷ luật',
            'Nhà nước pháp quyền XHCN "của dân, do dân, vì dân", thượng tôn pháp luật',
            'Nới lỏng pháp luật',
            'Tập quyền tuyệt đối'
        ],
        correctAnswer: 1,
        explanation: 'Vận dụng qua nhà nước pháp quyền XHCN "của dân, do dân, vì dân", thượng tôn pháp luật.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '41',
        question: 'Chính sách đối với kiều bào theo tinh thần đại đoàn kết:',
        options: [
            'Chỉ coi là nguồn kiều hối',
            'Cầu nối văn hóa – kinh tế – tri thức, đồng hành cùng Tổ quốc',
            'Không chú trọng',
            'Chỉ văn hóa'
        ],
        correctAnswer: 1,
        explanation: 'Theo tinh thần đại đoàn kết là cầu nối văn hóa – kinh tế – tri thức, đồng hành cùng Tổ quốc.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '42',
        question: 'Đấu tranh phản bác xuyên tạc về vấn đề dân tộc theo HCM:',
        options: [
            'Đối đầu cảm tính',
            'Dựa chứng cứ, đối thoại, luật pháp quốc tế, kể chuyện người thật – việc thật',
            'Bỏ qua',
            'Cấm thông tin'
        ],
        correctAnswer: 1,
        explanation: 'Theo HCM là dựa chứng cứ, đối thoại, luật pháp quốc tế, kể chuyện người thật – việc thật.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '43',
        question: 'Bảo đảm bình đẳng giới trong cộng đồng DTTS theo tinh thần nhân văn HCM:',
        options: [
            'Không cần thiết',
            'Chương trình giáo dục, sinh kế, pháp luật phòng chống bạo lực',
            'Chỉ tuyên truyền',
            'Không ưu tiên'
        ],
        correctAnswer: 1,
        explanation: 'Theo tinh thần nhân văn HCM là chương trình giáo dục, sinh kế, pháp luật phòng chống bạo lực.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '44',
        question: 'Xây dựng "biên giới hòa bình, hữu nghị" là vận dụng:',
        options: [
            'Biệt lập',
            'Đại đoàn kết dân tộc + thêm bạn bớt thù, hợp tác láng giềng',
            'Cứng rắn mọi mặt',
            'Phớt lờ ngoại giao nhân dân'
        ],
        correctAnswer: 1,
        explanation: 'Là vận dụng đại đoàn kết dân tộc + thêm bạn bớt thù, hợp tác láng giềng.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '45',
        question: 'Phát triển báo chí – xuất bản vùng DTTS theo tinh thần HCM:',
        options: [
            'Không cần',
            'Nâng cao dân trí, bảo tồn văn hóa, chống tin giả, cổ vũ đoàn kết',
            'Chỉ giải trí',
            'Tư nhân hóa hoàn toàn'
        ],
        correctAnswer: 1,
        explanation: 'Theo tinh thần HCM là nâng cao dân trí, bảo tồn văn hóa, chống tin giả, cổ vũ đoàn kết.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '46',
        question: 'Chính sách đất đai – sinh kế vùng DTTS theo HCM:',
        options: [
            'Thu hồi diện rộng',
            'Bảo đảm quyền lợi chính đáng, hỗ trợ sinh kế bền vững, tránh xung đột',
            'Ưu tiên nhà đầu tư',
            'Mặc cả thị trường'
        ],
        correctAnswer: 1,
        explanation: 'Theo HCM là bảo đảm quyền lợi chính đáng, hỗ trợ sinh kế bền vững, tránh xung đột.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '47',
        question: 'Phát triển nguồn cán bộ người DTTS là vận dụng nguyên tắc:',
        options: [
            'Bình đẳng hình thức',
            'Phát hiện – đào tạo – sử dụng, trọng dụng người có đức, có tài',
            'Chỉ theo niên hạn',
            'Ưu tiên tuyệt đối theo tỷ lệ'
        ],
        correctAnswer: 1,
        explanation: 'Vận dụng nguyên tắc phát hiện – đào tạo – sử dụng, trọng dụng người có đức, có tài.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '48',
        question: 'Bảo vệ, phát huy di sản HCM gắn giáo dục thế hệ trẻ vùng DTTS:',
        options: [
            'Chỉ treo khẩu hiệu',
            'Tích hợp giáo dục lịch sử – công dân, trải nghiệm, số hóa tư liệu',
            'Không cần thiết',
            'Giao khoán'
        ],
        correctAnswer: 1,
        explanation: 'Là tích hợp giáo dục lịch sử – công dân, trải nghiệm, số hóa tư liệu.',
        category: 'Vận dụng',
        difficulty: 'medium'
    },
    {
        id: '49',
        question: 'Kết nối DN – HTX – nông hộ DTTS theo tinh thần "đoàn kết, hợp tác":',
        options: [
            'Bán nguyên liệu thô',
            'Liên kết chuỗi giá trị, OCOP, truy xuất nguồn gốc, bảo hộ chỉ dẫn địa lý',
            'Tự phát',
            'Đứt gãy'
        ],
        correctAnswer: 1,
        explanation: 'Theo tinh thần "đoàn kết, hợp tác" là liên kết chuỗi giá trị, OCOP, truy xuất nguồn gốc, bảo hộ chỉ dẫn địa lý.',
        category: 'Vận dụng',
        difficulty: 'hard'
    },
    {
        id: '50',
        question: 'Thước đo cuối cùng của mọi chính sách vận dụng tư tưởng HCM về dân tộc:',
        options: [
            'Thu ngân sách',
            'Hài lòng người dân, thu hẹp chênh lệch, củng cố đoàn kết – niềm tin',
            'Kim ngạch xuất khẩu',
            'Số dự án FDI'
        ],
        correctAnswer: 1,
        explanation: 'Thước đo cuối cùng là hài lòng người dân, thu hẹp chênh lệch, củng cố đoàn kết – niềm tin.',
        category: 'Vận dụng',
        difficulty: 'medium'
    }
];

export const quizCategories = [
    'Tất cả',
    'Tư tưởng HCM',
    'Vận dụng'
];

export const difficultyLevels = [
    {value: 'all', label: 'Tất cả'},
    {value: 'easy', label: 'Dễ'},
    {value: 'medium', label: 'Trung bình'},
    {value: 'hard', label: 'Khó'}
];