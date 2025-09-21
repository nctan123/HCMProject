export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "1",
    question: 'Theo HCM, "độc lập, tự do" của dân tộc là',
    options: [
      "mục tiêu ưu tiên, có thể hoãn vì ổn định tạm thời.",
      "giá trị chính trị, tách riêng lĩnh vực kinh tế–xã hội.",
      "phạm trù đối ngoại, linh hoạt theo thế cân bằng khu vực.",
      "quyền thiêng liêng, không đánh đổi bằng lệ thuộc gián tiếp.",
    ],
    correctAnswer: 3,
    explanation:
      "Theo HCM, độc lập tự do là quyền thiêng liêng, không thể đánh đổi bằng bất kỳ hình thức lệ thuộc nào.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "2",
    question: '"Độc lập gắn cơm no, áo ấm, hạnh phúc" nhấn mạnh',
    options: [
      "độc lập chính trị đủ, phúc lợi tính sau theo khả năng.",
      "trước hết giữ chủ quyền, còn chất lượng sống tùy thời.",
      "độc lập phải đo bằng đời sống và quyền làm chủ dân.",
      "phát triển kinh tế nhanh, an sinh tất yếu đến sau đó.",
    ],
    correctAnswer: 2,
    explanation:
      "HCM nhấn mạnh độc lập thật sự phải được đo lường bằng đời sống hạnh phúc và quyền làm chủ của nhân dân.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "3",
    question: '"Độc lập thật sự, hoàn toàn, triệt để" loại trừ khả năng',
    options: [
      "chủ quyền hình thức, vẫn phụ thuộc nguồn lực bên ngoài.",
      "quyết sách tự chủ, không bị ràng buộc áp đặt kinh tế.",
      "độc lập thực chất, gắn hạnh phúc và tự do của dân.",
      "tự chủ đối nội–đối ngoại, bảo đảm quyền lợi nhân dân.",
    ],
    correctAnswer: 0,
    explanation:
      "Độc lập hoàn toàn triệt để loại trừ khả năng chỉ có chủ quyền hình thức mà vẫn phụ thuộc nguồn lực bên ngoài.",
    category: "Tư tưởng HCM",
    difficulty: "hard",
  },
  {
    id: "4",
    question: '"Độc lập gắn thống nhất, toàn vẹn lãnh thổ" có nghĩa',
    options: [
      "toàn vẹn là tiêu chí phụ, có thể xử lý sau đối thoại.",
      "thống nhất quốc gia là bộ phận hữu cơ của độc lập.",
      "chia cắt lâu dài chấp nhận được nếu đổi lấy hòa bình.",
      "toàn vẹn lãnh thổ chủ yếu là vấn đề ngoại giao.",
    ],
    correctAnswer: 1,
    explanation:
      "Theo HCM, thống nhất quốc gia là bộ phận hữu cơ, không thể tách rời của độc lập dân tộc.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "5",
    question:
      "Con đường thắng lợi của Cách mạng giải phóng dân tộc theo HCM là",
    options: [
      "cách mạng tư sản kiểu mới theo mô hình dân chủ phương Tây.",
      "cải lương nghị trường kết hợp thỏa hiệp với thế lực cai trị.",
      "khởi nghĩa tự phát của nông dân khi mâu thuẫn dâng cao.",
      "cách mạng vô sản dưới ánh sáng Mác–Lênin và thời đại.",
    ],
    correctAnswer: 3,
    explanation:
      "HCM đã tìm thấy con đường cách mạng vô sản dưới ánh sáng chủ nghĩa Mác-Lênin là con đường đúng đắn.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "6",
    question: "Điều kiện lãnh đạo bảo đảm thắng lợi trong điều kiện VN",
    options: [
      "trí thức lãnh đạo, ưu thế tri thức giúp tổ chức hiệu quả.",
      "tư sản dân tộc lãnh đạo, nền tảng tài chính tạo sức bật.",
      "Đảng Cộng sản lãnh đạo, đường lối cách mạng vô sản đúng.",
      "mặt trận tự phát lãnh đạo, tập hợp rộng là yếu tố quyết.",
    ],
    correctAnswer: 2,
    explanation:
      "Đảng Cộng sản với đường lối cách mạng vô sản đúng đắn là điều kiện lãnh đạo bảo đảm thắng lợi.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "7",
    question: "Về lực lượng, tư tưởng HCM khẳng định",
    options: [
      "công nhân là tất cả, các tầng lớp khác chỉ hỗ trợ phụ.",
      "toàn dân tham gia, nền tảng là liên minh công–nông bền chặt.",
      "nông dân quyết định, các giai cấp còn lại không chi phối.",
      "tư sản dân tộc trung tâm, nông dân và trí thức bổ trợ.",
    ],
    correctAnswer: 1,
    explanation:
      "HCM khẳng định toàn dân tham gia cách mạng, với nền tảng là liên minh công-nông bền chặt.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "8",
    question: "Về phương pháp, Cách mạng giải phóng dân tộc theo HCM cần",
    options: [
      "bạo lực cách mạng quần chúng, chính trị–quân sự gắn kết.",
      "thương lượng lâu dài, hạn chế mọi va chạm đối kháng.",
      "chờ cách mạng chính quốc, rồi phối hợp từng bước sau.",
      "sử dụng quân sự thuần túy, bỏ qua đấu tranh chính trị.",
    ],
    correctAnswer: 0,
    explanation:
      "HCM chủ trương bạo lực cách mạng quần chúng, kết hợp chặt chẽ giữa đấu tranh chính trị và quân sự.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "9",
    question: "Quan niệm cốt lõi của HCM về CNXH nhấn mạnh",
    options: [
      "kế hoạch hóa tuyệt đối, điều khiển toàn bộ sản xuất.",
      "tăng GDP nhanh, còn công bằng điều chỉnh dần dần.",
      "ưu tiên công nghiệp nặng, phúc lợi là hệ quả tất yếu.",
      "nhân dân làm chủ, phát triển con người, ấm no hạnh phúc.",
    ],
    correctAnswer: 3,
    explanation:
      "Quan niệm cốt lõi của HCM về CNXH là nhân dân làm chủ, phát triển con người, đảm bảo cuộc sống ấm no hạnh phúc.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "10",
    question: '"Tiến lên CNXH là tất yếu khách quan" vì',
    options: [
      "nhu cầu đối ngoại yêu cầu đồng dạng thể chế khu vực.",
      "ý chí lãnh đạo có thể rút ngắn mọi giai đoạn phát triển.",
      "quy luật lịch sử đòi hỏi giải phóng triệt để con người.",
      "lợi thế tài nguyên cho phép chuyển thẳng sang mô hình.",
    ],
    correctAnswer: 2,
    explanation:
      "Tiến lên CNXH là tất yếu khách quan vì quy luật lịch sử đòi hỏi sự giải phóng triệt để con người.",
    category: "Tư tưởng HCM",
    difficulty: "hard",
  },
  {
    id: "11",
    question: "Một đặc trưng bản chất của xã hội XHCN là",
    options: [
      "tư hữu TLSX chi phối, cạnh tranh tối đa hóa hiệu quả.",
      "nhân dân lao động làm chủ, mở rộng công bằng và bình đẳng.",
      "thị trường tự điều tiết, nhà nước thu hẹp can thiệp.",
      "tăng trưởng bằng mọi giá, chấp nhận chênh lệch kéo dài.",
    ],
    correctAnswer: 1,
    explanation:
      "Đặc trưng bản chất của xã hội XHCN là nhân dân lao động làm chủ, mở rộng công bằng và bình đẳng xã hội.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "12",
    question: "Mục tiêu CNXH ở Việt Nam theo HCM hướng tới",
    options: [
      "dân giàu nước mạnh, công bằng dân chủ, đời sống hạnh phúc.",
      "công nghiệp nặng trước, phúc lợi xã hội tính sau ổn định.",
      "xuất khẩu tối đa, an sinh phụ thuộc ngân sách còn lại.",
      "đô thị hóa nhanh, văn hóa–con người ưu tiên giai đoạn sau.",
    ],
    correctAnswer: 0,
    explanation:
      "Mục tiêu CNXH theo HCM là xây dựng đất nước dân giàu nước mạnh, xã hội công bằng dân chủ, đời sống nhân dân hạnh phúc.",
    category: "Tư tưởng HCM",
    difficulty: "easy",
  },
  {
    id: "13",
    question: '"Động lực của CNXH" theo HCM bao gồm chủ yếu',
    options: [
      "tài nguyên thiên nhiên dồi dào, kết hợp ưu đãi thuế quan.",
      "thuế gián thu cao, tái phân phối mạnh qua ngân sách.",
      "con người, đại đoàn kết toàn dân, liên minh công–nông–trí.",
      "vốn ngoại làm trụ cột, nội lực xã hội là bổ sung phụ.",
    ],
    correctAnswer: 2,
    explanation:
      "Động lực của CNXH theo HCM chủ yếu là con người, đại đoàn kết toàn dân và liên minh công-nông-trí.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "14",
    question: "Tính chất thời kỳ quá độ lên CNXH được HCM xác định",
    options: [
      "ngắn gọn, tuyến tính, ít mâu thuẫn, ít yêu cầu điều chỉnh.",
      "tự động xảy ra khi đạt ngưỡng thu nhập bình quân nhất định.",
      "chủ yếu là cải cách hành chính và điều tiết vĩ mô đơn thuần.",
      "dài lâu, phức tạp, đan xen xây–chống, có bước trung gian.",
    ],
    correctAnswer: 3,
    explanation:
      "HCM xác định thời kỳ quá độ lên CNXH là quá trình dài lâu, phức tạp, đan xen giữa xây dựng và đấu tranh, có nhiều bước trung gian.",
    category: "Tư tưởng HCM",
    difficulty: "hard",
  },
  {
    id: "15",
    question: "Nhiệm vụ cơ bản thời kỳ quá độ theo HCM bao gồm",
    options: [
      "chỉ cải tạo quan hệ sản xuất, chờ lực lượng sản xuất phát triển.",
      "giữ nguyên cơ cấu cũ, ưu tiên ổn định trên tất cả mục tiêu.",
      "chú trọng quân sự, các lĩnh vực dân sinh thực hiện sau đó.",
      "đồng thời cải tạo cũ, xây dựng mới, phát triển LLSX–văn hóa–con người.",
    ],
    correctAnswer: 3,
    explanation:
      "HCM chủ trương đồng thời cải tạo cái cũ và xây dựng cái mới, phát triển lực lượng sản xuất, văn hóa và con người.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "16",
    question: "Một nguyên tắc xây dựng CNXH trong thời kỳ quá độ là",
    options: [
      "đặt đối ngoại lên trên đối nội, điều chỉnh theo lợi ích tức thời.",
      "tăng trưởng tối đa, công bằng và phúc lợi tính sau giai đoạn.",
      "thu hẹp vai trò quần chúng, tập trung hóa quyết định dài hạn.",
      "kết hợp sức mạnh dân tộc với sức mạnh thời đại, phát huy dân chủ.",
    ],
    correctAnswer: 3,
    explanation:
      "Nguyên tắc cơ bản là kết hợp sức mạnh dân tộc với sức mạnh thời đại và phát huy dân chủ trong xây dựng CNXH.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "17",
    question: "Vị trí của độc lập dân tộc đối với CNXH theo HCM là",
    options: [
      "mục tiêu riêng rẽ, triển khai song song không ràng buộc.",
      "giai đoạn tùy chọn, có thể bỏ qua khi hội nhập sâu.",
      "cơ sở và tiền đề, tạo nền cho quá trình đi lên bền vững.",
      "yếu tố đối ngoại, ảnh hưởng ít đến cấu trúc xã hội.",
    ],
    correctAnswer: 2,
    explanation:
      "Theo HCM, độc lập dân tộc là cơ sở và tiền đề tạo nền cho quá trình xây dựng CNXH bền vững.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "18",
    question: "CNXH bảo đảm vững chắc nền độc lập dân tộc vì",
    options: [
      "tập trung quyền lực cao, giảm xung đột lợi ích đa dạng.",
      "ưu tiên quân sự hóa, bù đắp mọi hạn chế của kinh tế.",
      "loại trừ hoàn toàn quan hệ quốc tế, tránh tác động bên ngoài.",
      "bảo đảm quyền làm chủ, công bằng, hạnh phúc, củng cố nội lực xã hội.",
    ],
    correctAnswer: 3,
    explanation:
      "CNXH bảo đảm độc lập vững chắc bằng cách tạo ra quyền làm chủ thật sự của nhân dân, công bằng xã hội và hạnh phúc, từ đó củng cố nội lực.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "19",
    question: 'Điều kiện bảo đảm "độc lập gắn liền với CNXH" gồm',
    options: [
      "tăng trưởng nhanh, chấp nhận phân hóa, hiệu quả là thước đo duy nhất.",
      "phụ thuộc ngoại lực, đổi lấy tiếp cận công nghệ và thị trường.",
      "nhà nước nắm trọn sản xuất, giảm vai trò sáng kiến xã hội.",
      "nội lực con người, đại đoàn kết, Đảng lãnh đạo, kết hợp sức mạnh thời đại.",
    ],
    correctAnswer: 3,
    explanation:
      "Điều kiện bảo đảm độc lập gắn với CNXH là phát huy nội lực con người, đại đoàn kết dân tộc, sự lãnh đạo của Đảng và kết hợp sức mạnh thời đại.",
    category: "Tư tưởng HCM",
    difficulty: "hard",
  },
  {
    id: "20",
    question: "Cách hiểu đúng về quan hệ ĐLDT–CNXH theo HCM là",
    options: [
      "hai mục tiêu độc lập: có mục tiêu nào trước cũng tương đương.",
      "độc lập đủ hình thức, CNXH sẽ tự đến theo chu kỳ phát triển.",
      "CNXH thay thế độc lập, tách khỏi yêu cầu thống nhất lãnh thổ.",
      "thống nhất hữu cơ: có độc lập thực chất để tiến lên CNXH; CNXH củng cố độc lập bền vững.",
    ],
    correctAnswer: 3,
    explanation:
      "Theo HCM, quan hệ độc lập dân tộc và CNXH là thống nhất hữu cơ: có độc lập thực chất để tiến lên CNXH, và CNXH củng cố độc lập bền vững.",
    category: "Tư tưởng HCM",
    difficulty: "hard",
  },
  {
    id: "21",
    question:
      "Bối cảnh quốc tế – trong nước nào đã tạo tiền đề trực tiếp cho tư tưởng HCM về vấn đề dân tộc và cách mạng giải phóng dân tộc?",
    options: [
      "Công nghiệp hóa phương Tây; chủ nghĩa tự do kinh tế; hòa bình bền vững sau Thế chiến I.",
      "Chủ nghĩa đế quốc mở rộng thuộc địa; Cách mạng Tháng Mười 1917; làn sóng giải phóng dân tộc trỗi dậy.",
      "Trật tự Versailles bảo đảm quyền dân tộc; kinh tế thuộc địa phát triển hài hòa; phong trào yêu nước suy yếu.",
      "Toàn cầu hóa đầu thế kỷ XX; hợp tác đế quốc–thuộc địa bình đẳng; khủng hoảng giải quyết bằng cải lương.",
    ],
    correctAnswer: 1,
    explanation:
      "Bối cảnh chủ nghĩa đế quốc mở rộng thuộc địa, thành công của Cách mạng Tháng Mười 1917 và làn sóng giải phóng dân tộc đã tạo tiền đề cho tư tưởng HCM.",
    category: "Tư tưởng HCM",
    difficulty: "hard",
  },
  {
    id: "22",
    question:
      'Nhóm "cơ sở hình thành" tư tưởng HCM về độc lập dân tộc được nhận diện đầy đủ nhất ở phương án nào dưới đây?',
    options: [
      "Truyền thống yêu nước; tinh hoa văn hóa nhân loại; chủ nghĩa Mác–Lênin; thực tiễn hoạt động cách mạng.",
      "Văn hóa phương Đông; chủ nghĩa tự do phương Tây; thương mại thuộc địa; cải lương nghị trường.",
      "Tài nguyên thiên nhiên; vốn ngoại; công nghệ hiện đại; chủ nghĩa dân tộc hẹp hòi.",
      "Tư tưởng Nho học; tư tưởng Phật giáo; kinh nghiệm ngoại giao; chủ nghĩa thực dụng.",
    ],
    correctAnswer: 0,
    explanation:
      "Cơ sở hình thành tư tưởng HCM về độc lập dân tộc gồm truyền thống yêu nước, tinh hoa văn hóa nhân loại, chủ nghĩa Mác-Lênin và thực tiễn cách mạng.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "23",
    question:
      "Mốc đánh dấu bước chuyển từ chủ nghĩa yêu nước đến lập trường Mác–Lênin trong tư tưởng HCM là:",
    options: [
      "1911: ra đi tìm đường cứu nước, tiếp cận phong trào công nhân Anh–Pháp.",
      '1919: gửi "Yêu sách của nhân dân An Nam" tại Hội nghị Versailles.',
      '1920: đọc "Sơ thảo lần thứ nhất luận cương về vấn đề dân tộc và thuộc địa" của Lênin, gia nhập Quốc tế Cộng sản.',
      "1923: sang Liên Xô dự Đại hội Quốc tế Nông dân, nghiên cứu thêm về XHCN.",
    ],
    correctAnswer: 2,
    explanation:
      "Năm 1920, khi đọc luận cương của Lênin về vấn đề dân tộc và thuộc địa, HCM đã chuyển sang lập trường Mác-Lênin và gia nhập Quốc tế Cộng sản.",
    category: "Tư tưởng HCM",
    difficulty: "hard",
  },
  {
    id: "24",
    question:
      "Luận điểm vì sao cách mạng giải phóng dân tộc ở Việt Nam phải do Đảng Cộng sản lãnh đạo được thể hiện đúng nhất ở lựa chọn nào?",
    options: [
      "Vì trí thức là lực lượng đông đảo nhất nên tổ chức lãnh đạo sẽ hiệu quả và linh hoạt.",
      "Vì tư sản dân tộc có tiềm lực tài chính mạnh nên bảo đảm được đường lối cứu nước bền vững.",
      "Vì Đảng của giai cấp công nhân mới có đường lối cách mạng vô sản, tổ chức kỷ luật, mục tiêu giải phóng triệt để dân tộc–giai cấp–con người.",
      "Vì phong trào yêu nước tự phát đã đủ mạnh, không cần hạt nhân chính trị tập trung lãnh đạo.",
    ],
    correctAnswer: 2,
    explanation:
      "Đảng Cộng sản là đại diện cho giai cấp công nhân, có đường lối cách mạng vô sản đúng đắn, tổ chức kỷ luật và mục tiêu giải phóng triệt để.",
    category: "Tư tưởng HCM",
    difficulty: "medium",
  },
  {
    id: "25",
    question:
      "Trật tự các mốc chính phản ánh quá trình hình thành và phát triển tư tưởng HCM về cách mạng giải phóng dân tộc là:",
    options: [
      "1920 → 1911 → 1930 → 1945 → 1941.",
      "1911 → 1920 → 1930 → 1941 → 1945.",
      "1919 → 1911 → 1930 → 1945 → 1941.",
      "1923 → 1919 → 1930 → 1941 → 1945.",
    ],
    correctAnswer: 1,
    explanation:
      "Trật tự đúng: 1911 (ra đi tìm đường), 1920 (chuyển sang Mác-Lênin), 1930 (thành lập Đảng), 1941 (Việt Minh), 1945 (Cách mạng Tháng Tám).",
    category: "Tư tưởng HCM",
    difficulty: "hard",
  },
  {
    id: "26",
    question:
      'Vận dụng "độc lập dân tộc gắn CNXH" hiện nay, chủ trương nhất quán là:',
    options: [
      "Chỉ mở rộng dân chủ cơ sở, tạm gác mục tiêu lớn.",
      "Tăng trưởng bằng mọi giá, điều chỉnh mục tiêu xã hội sau.",
      "Từ bỏ định hướng CNXH để linh hoạt quản trị.",
      "Kiên định mục tiêu độc lập dân tộc gắn CNXH trong đổi mới.",
    ],
    correctAnswer: 3,
    explanation:
      "Việt Nam kiên định chủ trương độc lập dân tộc gắn liền với CNXH trong quá trình đổi mới, không từ bỏ định hướng CNXH.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "27",
    question: "Để củng cố đại đoàn kết dân tộc, phương châm cốt lõi là:",
    options: [
      "Nhất thể hóa tập quán để dễ quản lý.",
      "Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển.",
      "Không can thiệp phong tục, để thị trường tự điều chỉnh.",
      "Ưu tiên vài dân tộc lớn làm đầu tàu.",
    ],
    correctAnswer: 1,
    explanation:
      "Phương châm đại đoàn kết dân tộc là bình đẳng, đoàn kết, tôn trọng và giúp đỡ nhau cùng phát triển giữa các dân tộc.",
    category: "Vận dụng",
    difficulty: "easy",
  },
  {
    id: "28",
    question: '"Tự lực tự cường, đồng thời tranh thủ ngoại lực" được hiểu là:',
    options: [
      "Làm chủ công nghệ lõi và thu hút FDI kèm chuyển giao.",
      "Nội địa hóa kín, hạn chế liên kết để tránh phụ thuộc.",
      "Mở cửa mạnh, chấp nhận lệ thuộc chuỗi cung ứng.",
      "Tăng xuất thô tài nguyên để tích lũy vốn nhanh.",
    ],
    correctAnswer: 0,
    explanation:
      "Tự lực tự cường kết hợp tranh thủ ngoại lực có nghĩa là làm chủ công nghệ cốt lõi đồng thời thu hút FDI có chuyển giao công nghệ.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "29",
    question: 'Nguyên tắc "thêm bạn bớt thù" thể hiện qua:',
    options: [
      "Thu hẹp quan hệ đa phương để linh hoạt đối ngoại.",
      "Tránh tham gia tổ chức quốc tế có ràng buộc.",
      "Đa phương hóa, đa dạng hóa; là bạn, là đối tác tin cậy.",
      "Chọn một cực duy nhất để tối ưu lợi ích ngắn hạn.",
    ],
    correctAnswer: 2,
    explanation:
      "Nguyên tắc 'thêm bạn bớt thù' thể hiện qua chính sách đa phương hóa, đa dạng hóa quan hệ quốc tế, là bạn và đối tác tin cậy.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "30",
    question: "Phát huy sức mạnh dân tộc trong chuyển đổi số cần:",
    options: [
      "Giảm chi giáo dục, ưu tiên hạ tầng phần cứng.",
      "Ưu tiên phần mềm ngoại, chưa cần chuẩn dữ liệu chung.",
      "Tập trung mua sắm thiết bị, kỹ năng đào tạo tính sau.",
      "Phát triển nhân lực số, văn hóa số, dữ liệu mở cân bằng bản sắc.",
    ],
    correctAnswer: 3,
    explanation:
      "Chuyển đổi số cần phát triển nhân lực số, văn hóa số và dữ liệu mở, đồng thời cân bằng với việc bảo tồn bản sắc dân tộc.",
    category: "Vận dụng",
    difficulty: "hard",
  },
  {
    id: "31",
    question:
      "Vai trò của Mặt trận Tổ quốc và các tổ chức chính trị–xã hội là:",
    options: [
      "Huy động nhân dân, giám sát, phản biện; gắn kết khối đoàn kết.",
      "Thay thế cơ quan nhà nước trong điều hành chính sách.",
      "Tham gia nghi thức, hỗ trợ tuyên truyền là chủ yếu.",
      "Tập trung từ thiện, ít can dự phản biện.",
    ],
    correctAnswer: 0,
    explanation:
      "Mặt trận Tổ quốc có vai trò huy động nhân dân, giám sát và phản biện xã hội, gắn kết khối đại đoàn kết toàn dân tộc.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "32",
    question: "Phát triển vùng DTTS và miền núi theo tinh thần HCM cần:",
    options: [
      "Khai thác tài nguyên tối đa để tăng thu.",
      "Di dời dân quy mô lớn để dễ quy hoạch.",
      "Hạ tầng thiết yếu, giáo dục–y tế, sinh kế bền vững gắn văn hóa.",
      "Cắt giảm phúc lợi, dồn vốn cho đô thị trung tâm.",
    ],
    correctAnswer: 2,
    explanation:
      "Phát triển vùng DTTS cần đầu tư hạ tầng thiết yếu, giáo dục-y tế, tạo sinh kế bền vững gắn liền với bảo tồn văn hóa.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "33",
    question: '"Độc lập gắn hạnh phúc nhân dân" trong chính sách hiện nay là:',
    options: [
      "Chỉ tiêu GDP là thước đo chính.",
      "Ưu tiên doanh nghiệp lớn, hiệu ứng lan tỏa tự hình thành.",
      "Tăng thu ngân sách trước, an sinh điều chỉnh sau.",
      "Lấy người dân làm trung tâm; đo bằng chất lượng sống và mức độ hài lòng.",
    ],
    correctAnswer: 3,
    explanation:
      "Độc lập gắn hạnh phúc nhân dân có nghĩa lấy người dân làm trung tâm, đo lường bằng chất lượng sống và mức độ hài lòng của nhân dân.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "34",
    question: "Kết hợp sức mạnh dân tộc – thời đại trong kinh tế xanh gồm:",
    options: [
      "Liên minh chuyển dịch năng lượng và nâng nội lực công nghệ xanh.",
      "Trì hoãn cam kết khí hậu để bảo toàn ngành cũ.",
      "Cố định công nghệ hiện có để giảm chi phí học tập.",
      "Tăng xuất khẩu than đá nhằm tích lũy vốn.",
    ],
    correctAnswer: 0,
    explanation:
      "Kết hợp sức mạnh dân tộc-thời đại trong kinh tế xanh là tham gia liên minh chuyển dịch năng lượng đồng thời nâng cao nội lực công nghệ xanh.",
    category: "Vận dụng",
    difficulty: "hard",
  },
  {
    id: "35",
    question: "Bảo tồn văn hóa DTTS theo tinh thần HCM cần:",
    options: [
      "Tôn trọng đa dạng, chống kỳ thị; gắn bảo tồn với sinh kế công bằng.",
      "Xóa bỏ toàn bộ tập quán để tránh khác biệt.",
      'Thương mại hóa tối đa, chấp nhận "sân khấu hóa".',
      "Chuẩn hóa về một mẫu chung cho tiện quản lý.",
    ],
    correctAnswer: 0,
    explanation:
      "Bảo tồn văn hóa DTTS cần tôn trọng tính đa dạng, chống kỳ thị và gắn bảo tồn với việc tạo sinh kế công bằng.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "36",
    question: "Đối ngoại nhân dân vận dụng tư tưởng HCM bằng:",
    options: [
      "Thu hẹp kênh phi nhà nước để giảm rủi ro.",
      "Mở rộng giao lưu nhân dân, kiều bào; kết nối địa phương–địa phương.",
      "Hạn chế hoạt động NGO để đơn giản hóa quản lý.",
      "Giảm hội thảo, ưu tiên lễ tân cấp cao.",
    ],
    correctAnswer: 1,
    explanation:
      "Đối ngoại nhân dân vận dụng tư tưởng HCM thông qua việc mở rộng giao lưu nhân dân, liên kết với kiều bào và kết nối giữa các địa phương.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "37",
    question: '"Dựa vào dân, vì dân" trong QP–AN nhấn mạnh:',
    options: [
      "Xây dựng thế trận lòng dân; QPTD–ANND gắn phát triển vùng trọng yếu.",
      "Tư nhân hóa một phần quốc phòng để huy động nguồn lực.",
      "Phó mặc an ninh cho lực lượng chuyên trách.",
      "Tăng quân sự hóa đời sống để nâng cảnh giác.",
    ],
    correctAnswer: 0,
    explanation:
      '"Dựa vào dân, vì dân" trong quốc phòng-an ninh có nghĩa xây dựng thế trận lòng dân, gắn quốc phòng toàn dân với phát triển vùng trọng yếu.',
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "38",
    question: "Chống chia rẽ dân tộc trên không gian mạng cần:",
    options: [
      "Truyền thông đúng; đối thoại; giáo dục lịch sử–pháp luật–văn hóa; nâng kỹ năng số.",
      "Chặn toàn bộ internet khi có xung đột nhận thức.",
      'Bỏ qua thông tin sai để tránh "tạo sóng".',
      "Phản ứng cực đoan nhằm răn đe.",
    ],
    correctAnswer: 0,
    explanation:
      "Chống chia rẽ dân tộc trên mạng cần truyền thông đúng đắn, đối thoại, giáo dục lịch sử-pháp luật-văn hóa và nâng cao kỹ năng số.",
    category: "Vận dụng",
    difficulty: "hard",
  },
  {
    id: "39",
    question: "Phát triển DN/HTX vùng DTTS theo nguyên tắc:",
    options: [
      "Bao cấp toàn bộ để hạn chế rủi ro.",
      "Tự lực tự cường có hỗ trợ; liên kết chuỗi; tín dụng–kỹ thuật–thị trường.",
      "Để thị trường tự điều tiết, không cần cơ chế đặc thù.",
      "Hạn chế tiếp cận vốn để bảo đảm an toàn.",
    ],
    correctAnswer: 1,
    explanation:
      "Phát triển doanh nghiệp/HTX vùng DTTS theo nguyên tắc tự lực tự cường có hỗ trợ, liên kết chuỗi giá trị và hỗ trợ tín dụng-kỹ thuật-thị trường.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "40",
    question: "Gắn độc lập với toàn vẹn lãnh thổ trong thời bình đòi hỏi:",
    options: [
      "Kiên định luật pháp quốc tế; giải quyết tranh chấp hòa bình.",
      "Rút khỏi diễn đàn khu vực để tự do hành động.",
      "Bỏ qua thông lệ quốc tế khi cần bảo vệ lợi ích.",
      "Ưu tiên cưỡng chế để răn đe.",
    ],
    correctAnswer: 0,
    explanation:
      "Gắn độc lập với toàn vẹn lãnh thổ trong thời bình cần kiên định tuân thủ luật pháp quốc tế và giải quyết tranh chấp bằng biện pháp hòa bình.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "41",
    question: '"Không có độc lập thật sự nếu nhân dân không hạnh phúc" hàm ý:',
    options: [
      "Ưu tiên an sinh; giảm nghèo đa chiều; nâng dịch vụ cơ bản.",
      "Giảm chi y tế–giáo dục để cân đối ngân sách.",
      "Hạn chế chính sách xã hội, chuyển sang cơ chế tín dụng.",
      "Tập trung doanh nghiệp lớn tạo nguồn thu.",
    ],
    correctAnswer: 0,
    explanation:
      "Câu nói này hàm ý cần ưu tiên an sinh xã hội, giảm nghèo đa chiều và nâng cao chất lượng dịch vụ cơ bản cho nhân dân.",
    category: "Vận dụng",
    difficulty: "easy",
  },
  {
    id: "42",
    question: 'Tăng cường "đoàn kết tôn giáo – dân tộc" cần:',
    options: [
      "Kỳ thị tôn giáo để giữ trật tự.",
      "Tách tôn giáo khỏi đời sống công cộng.",
      "Quản lý cứng nhắc để giảm xung đột.",
      "Tôn trọng tự do tín ngưỡng theo pháp luật; đối thoại; đồng hành phát triển.",
    ],
    correctAnswer: 3,
    explanation:
      "Tăng cường đoàn kết tôn giáo-dân tộc cần tôn trọng tự do tín ngưỡng theo pháp luật, đối thoại và đồng hành trong phát triển.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "43",
    question: "Truyền thông đối ngoại về vấn đề dân tộc nên:",
    options: [
      "Tự tôn cực đoan để khẳng định bản sắc.",
      "Công kích để tạo sức ép dư luận.",
      'Tôn trọng, bình đẳng, trung thực; "thêm bạn bớt thù", hợp tác cùng có lợi.',
      "Phủ nhận khác biệt để tránh tranh luận.",
    ],
    correctAnswer: 2,
    explanation:
      'Truyền thông đối ngoại về vấn đề dân tộc cần tinh thần tôn trọng, bình đẳng, trung thực, "thêm bạn bớt thù" và hợp tác cùng có lợi.',
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "44",
    question: '"Liên minh công–nông–trí" thời kỳ mới gồm:',
    options: [
      "Dồn lực đô thị lớn, nông thôn lan tỏa sau.",
      "Hệ sinh thái đổi mới; nông thôn thông minh; tri thức hóa lực lượng lao động.",
      "Giảm vai trò trí thức để tránh hành chính hóa.",
      "Chỉ công nghiệp nặng, nông nghiệp tự thích ứng.",
    ],
    correctAnswer: 1,
    explanation:
      "Liên minh công-nông-trí thời kỳ mới bao gồm xây dựng hệ sinh thái đổi mới, nông thôn thông minh và tri thức hóa lực lượng lao động.",
    category: "Vận dụng",
    difficulty: "hard",
  },
  {
    id: "45",
    question: "Phòng, chống dân tộc hẹp hòi/kỳ thị hiệu quả là:",
    options: [
      "Đối đầu cứng trên mọi nền tảng.",
      "Bỏ mặc để tự phai khi kinh tế phát triển.",
      "Khoanh vùng, hạn chế giao lưu.",
      "Giáo dục, pháp luật, đối thoại văn hóa; khuyến khích tương tác tích cực.",
    ],
    correctAnswer: 3,
    explanation:
      "Phòng chống dân tộc hẹp hòi/kỳ thị hiệu quả thông qua giáo dục, pháp luật, đối thoại văn hóa và khuyến khích tương tác tích cực.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "46",
    question: '"Kết hợp sức mạnh thời đại" trong khoa học–công nghệ là:',
    options: [
      "Hợp tác quốc tế về AI/vi mạch kèm nội lực R&D; bảo hộ SHTT.",
      "Chỉ mua thiết bị, không đòi chuyển giao tri thức lõi.",
      "Tự phát nghiên cứu, không cần mạng lưới quốc tế.",
      "Đóng cửa nghiên cứu để giữ bí mật công nghệ.",
    ],
    correctAnswer: 0,
    explanation:
      "Kết hợp sức mạnh thời đại trong KH-CN là hợp tác quốc tế về AI/vi mạch kết hợp với phát triển nội lực R&D và bảo hộ sở hữu trí tuệ.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "47",
    question: "Chính sách ngôn ngữ – giáo dục với DTTS cần:",
    options: [
      "Chỉ dạy tiếng phổ thông để thống nhất.",
      "Không cần chương trình–học liệu riêng.",
      "Dạy–học song ngữ hợp lý; giữ tiếng nói–chữ viết DTTS; nâng tiếng Việt.",
      "Xóa hệ chữ DTTS để tránh phân tán.",
    ],
    correctAnswer: 2,
    explanation:
      "Chính sách ngôn ngữ-giáo dục với DTTS cần dạy-học song ngữ hợp lý, bảo tồn tiếng nói-chữ viết DTTS và nâng cao tiếng Việt.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "48",
    question: "Phát triển du lịch cộng đồng DTTS đúng hướng là:",
    options: [
      "Tập trung đại dự án, di dời dân bản địa.",
      "Chuỗi khép kín do doanh nghiệp điều hành.",
      'Thương mại hóa tối đa, "sân khấu hóa" tập quán.',
      "Bảo tồn và phát huy giá trị; tôn trọng chủ thể; chia sẻ lợi ích công bằng.",
    ],
    correctAnswer: 3,
    explanation:
      "Du lịch cộng đồng DTTS đúng hướng cần bảo tồn và phát huy giá trị văn hóa, tôn trọng chủ thể và chia sẻ lợi ích công bằng.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "49",
    question: "Thông tin – truyền thông vùng DTTS cần:",
    options: [
      "Giảm báo chí cơ sở để tiết kiệm chi phí công.",
      "Phủ sóng, chuyển đổi số cơ sở; nội dung chính xác, dễ tiếp cận; khuyến khích song ngữ.",
      "Không ưu tiên hạ tầng số vì mật độ thấp.",
      "Chỉ dùng mạng xã hội, không cần báo chí.",
    ],
    correctAnswer: 1,
    explanation:
      "Thông tin-truyền thông vùng DTTS cần phủ sóng, chuyển đổi số cơ sở với nội dung chính xác, dễ tiếp cận và khuyến khích song ngữ.",
    category: "Vận dụng",
    difficulty: "medium",
  },
  {
    id: "50",
    question: 'Cải cách thể chế theo "độc lập gắn CNXH" là:',
    options: [
      "Nới lỏng pháp luật để đẩy nhanh quyết định ngắn hạn.",
      "Giảm kỷ luật để khuyến khích sáng tạo.",
      "Nhà nước pháp quyền XHCN của dân–do dân–vì dân; thượng tôn pháp luật.",
      "Tập quyền tuyệt đối nhằm bảo đảm kỷ cương triệt để.",
    ],
    correctAnswer: 2,
    explanation:
      "Cải cách thể chế theo định hướng độc lập gắn CNXH là xây dựng nhà nước pháp quyền XHCN của dân-do dân-vì dân với nguyên tắc thượng tôn pháp luật.",
    category: "Vận dụng",
    difficulty: "medium",
  },
];

export const quizCategories = ["Tất cả", "Tư tưởng HCM", "Vận dụng"];

export const difficultyLevels = [
  { value: "all", label: "Tất cả" },
  { value: "easy", label: "Dễ" },
  { value: "medium", label: "Trung bình" },
  { value: "hard", label: "Khó" },
];
