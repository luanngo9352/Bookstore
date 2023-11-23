const products = [
  {
    bookName: 'BlueLock - Tập 15',
    category: 'Truyện tranh',
    author: 'Muneyuki Kaneshiro, Yusuke Nomura',
    bookPrice: 55000,
    bookDetail: 'Hiệp 1 trận quyết đấu đặt cược sự tồn vong của dự án BLUELOCK với tuyển U-20 đã khép lại việc BLUELOCK 11 vươn lên dẫn trước nhờ cú sút lật ngược tình thế của Itoshi Rin! Kế hoạch bị mật mà tuyển U-20 sẽ dùng để chống lại những cái tôi hừng hực khí thế khiến cả thế giới phải sửng sốt là gì!? Mắt của Shido Ryusei, người được Itoshi Sae tìm ra, sáng lên một cách bất thường! Trong trận chiến quyết định đang không ngừng nóng lên ấy, hãy ghi bàn đi, Isagi Yoichi!!',
    bookImage: '/images/bluelock-tap-15.jpg',
    bookQuaranty: 10
  },
  {
    bookName: 'Cây Cam Ngọt Của Tôi',
    category: 'Tiểu thuyết',
    author: 'José Mauro de Vasconcelos',
    bookPrice: 68000,
    bookDetail: 'Hãy làm quen với Zezé, cậu bé tinh nghịch siêu hạng đồng thời cũng đáng yêu bậc nhất, với ước mơ lớn lên trở thành nhà thơ cổ thắt nơ bướm. Chẳng phải ai cũng công nhận khoản “đáng yêu” kia đâu nhé. Bởi vì, ở cái xóm ngoại ô nghèo ấy, nỗi khắc khổ bủa vây đã che mờ mắt người ta trước trái tim thiện lương cùng trí tưởng tượng tuyệt vời của cậu bé con năm tuổi.Có hề gì đâu bao nhiêu là hắt hủi, đánh mắng, vì Zezé đã có một người bạn đặc biệt để trút nỗi lòng: cây cam ngọt nơi vườn sau. Và cả một người bạn nữa, bằng xương bằng thịt, một ngày kia xuất hiện, cho cậu bé nhạy cảm khôn sớm biết thế nào là trìu mến, thế nào là nỗi đau, và mãi mãi thay đổi cuộc đời cậu.Mở đầu bằng những thanh âm trong sáng và kết thúc lắng lại trong những nốt trầm hoài niệm, Cây cam ngọt của tôi khiến ta nhận ra vẻ đẹp thực sự của cuộc sống đến từ những điều giản dị như bông hoa trắng của cái cây sau nhà, và rằng cuộc đời thật khốn khổ nếu thiếu đi lòng yêu thương và niềm trắc ẩn. Cuốn sách kinh điển này bởi thế không ngừng khiến trái tim người đọc khắp thế giới thổn thức, kể từ khi ra mắt lần đầu năm 1968 tại Brazil.',
    bookImage: '/images/cay-cam-ngot-cua-toi.jpg',
    bookQuaranty: 12
  },
  {
    bookName: 'Chiến Binh Cầu Vồng',
    category: 'Tiểu thuyết',
    author: 'Andrea Hirata',
    bookPrice: 75000,
    bookDetail: 'Trong ngày khai giảng, nhờ sự xuất hiện vào phút chót của cậu bé thiểu năng trí tuệ Harun, trường Muhammadiyah may mắn thoát khỏi nguy cơ đóng cửa. Nhưng ước mơ dạy và học trong ngôi trường Hồi giáo ấy liệu sẽ đi về đâu, khi ngôi trường xập xệ dường như sẵn sàng sụp xuống bất cứ lúc nào, khi lời đe dọa đóng cửa từ viên thanh tra giáo dục luôn lơ lửng trên đầu, khi những cỗ máy xúc hung dữ đang chực chờ xới tung ngôi trường để dò mạch thiếc…? Và liệu niềm đam mê học tập của những Chiến binh Cầu vồng đó có đủ sức chinh phục quãng đường ngày ngày đạp xe bốn mươi cây số, rồi đầm cá sấu lúc nhúc bọn ăn thịt người, chưa kể sự mê hoặc từ những chuyến phiêu lưu chết người theo tiếng gọi của ngài pháp sư bí ẩn trên đảo Hải Tặc, cùng sức cám dỗ khôn cưỡng từ những đồng tiền còm kiếm được nhờ công việc cu li toàn thời gian ...?Chiến binh Cầu vồng có cả tình yêu trong sáng tuổi học trò lẫn những trò đùa tinh quái, cả nước mắt lẫn tiếng cười – một bức tranh chân thực về hố sâu ngăn cách giàu nghèo, một tác phẩm văn học cảm động truyền tải sâu sắc nhất ý nghĩa đích thực của việc làm thầy, việc làm trò và việc học.',
    bookImage: '/images/chien-binh-cau-vong.jpg',
    bookQuaranty: 8
  },
  {
    bookName: 'Chuyện Con Mèo Dạy Hải Âu Bay',
    category: 'Hư cấu',
    author: 'Luis Sepúlveda',
    bookPrice: 72000,
    bookDetail: 'Cô hải âu Kengah bị nhấn chìm trong váng dầu thứ chất thải nguy hiểm mà những con người xấu xa bí mật đổ ra đại dương. Với nỗ lực đầy tuyệt vọng, cô bay vào bến cảng Hamburg và rơi xuống ban công của con mèo mun, to đùng, mập ú Zorba. Trong phút cuối cuộc đời, cô sinh ra một quả trứng và con mèo mun hứa với cô sẽ thực hiện ba lời hứa chừng như không tưởng với loài mèo.Lời hứa của một con mèo cũng là trách nhiệm của toàn bộ mèo trên bến cảng, bởi vậy bè bạn của Zorba bao gồm ngài mèo Đại Tá đầy uy tín, mèo Secretario nhanh nhảu, mèo Einstein uyên bác, mèo Bốn Biển đầy kinh nghiệm đã chung sức giúp nó hoàn thành trách nhiệm. Tuy nhiên, việc chăm sóc, dạy dỗ một con hải âu đâu phải chuyện đùa, sẽ có hàng trăm rắc rối nảy sinh và cần có những kế hoạch đầy linh hoạt được bàn bạc kỹ càng… Tác phẩm không chỉ là một câu chuyện ấm áp, trong sáng, dễ thương về loài vật mà còn chuyển tải thông điệp về trách nhiệm với môi trường, về sự sẻ chia và yêu thương cũng như ý nghĩa của những nỗ lực – “Chỉ những kẻ dám mới có thể bay”.Cuốn sách mở đầu cho mùa hè với minh họa dễ thương, hài hước là món quà dành cho mọi trẻ em và người lớn.',
    bookImage: '/images/con-meo-day-hai-au-bay.jpg',
    bookQuaranty: 15
  },
  {
    bookName: 'Doraemon Movie Story Màu - Nobita Và Vùng Đất Lý Tưởng Trên Bầu Trời',
    category: 'Truyện tranh',
    author: 'Fujiko F Fujio',
    bookPrice: 61000,
    bookDetail: 'Câu chuyện bắt đầu khi Nobita tìm thấy một hòn đảo hình lưỡi liềm trên trời mây. Ở nơi đó, tất cả đều hoàn hảo… đến mức cậu nhóc mê ngủ ngày như Nobita cũng có thể trở thành một thần đồng toán học, một siêu sao thể thao! Doraemon và nhóm bạn đã cùng sử dụng một món bảo bối độc đáo chưa từng xuất hiện trước đây để đến với vương quốc tuyệt vời này. Cùng với những người bạn ở đây, đặc biệt là chàng robot mèo Sonya, cả hội đã có chuyến hành trình tới vương quốc trên mây tuyệt vời… cho đến khi những bí mật đằng sau vùng đất lý tưởng này được hé lộ!',
    bookImage: '/images/doraemon_nobita-va-vung-dat-ly',
    bookQuaranty: 20
  },
  {
    bookName: 'Em Vốn Thích Cô Độc, Cho Đến Khi Có Anh',
    category: 'Ngôn tình',
    author: 'Diệp Lạc Vô Tâm',
    bookPrice: 58000,
    bookDetail: 'Một hôm, tôi đi làm lại quên mang điện thoại. Tôi muốn về nhà lấy, nhưng lại bận không dứt ra được, đang lúc băn khoăn thì nhìn thấy Kẻ phiền phức bước thẳng vào phòng, điềm đạm đặt chiếc di động mà tôi đang cần lên bàn.“Yêu anh quá đi!” Tôi vội vàng thì thầm vào tai hắn, rồi lập tức lấy điện thoại xem. “Rốt cuộc thì có chuyện gì em mới không quên đây hả?” Kẻ phiền phức chán nản nói.Tôi lặng lẽ liếc nhìn hắn một cái, nói nhỏ: “… Yêu anh!”Mặt hắn đang hầm hầm bỗng trở nên rạng rỡ. Lúc rời khỏi văn phòng tôi, khóe mắt hắn còn mang ý cười.',
    bookImage: '/images/em-von-thich-doc-than.jpg',
    bookQuaranty: 18
  },
  {
    bookName: 'Fire Force - Tập 17',
    category: 'Truyện tranh',
    author: 'Atsushi Ohkubo',
    bookPrice: 70000,
    bookDetail: 'Truyện lấy bối cảnh thế giới khi con người đối mặt với hiện tượng “nhân thể bộc hỏa”, tức con người tự bốc cháy. Câu chuyện nói về những con người có năng lực và quyết tâm kết hợp với nhau lập thành các Biệt đội cứu hỏa để bảo vệ con người trước “Diệm nhân”. Shinra Kusakabe là một chàng trai trẻ bị gắn biệt danh là “Dấu chân ác quỷ”, vì chân của cậu ấy có thể bốc cháy theo ý muốn. Sau khi cậu gia nhập Biệt đội cứu hỏa số 8, cậu đã cùng những đồng đội trong đội ngũ chiến đấu chống lại các Diệm nhân và theo đuổi lý tưởng anh hùng của mình. Trong hành trình bảo vệ nhân loại, Shinra dần phát hiện ra sự thật bất ngờ về nguyên nhân gây ra vụ hỏa hoạn dẫn tới cái chết đau đớn của gia đình cậu 12 năm về trước và quyết định cùng Biệt đội cứu hỏa số 8 tìm ra ngọn nguồn sự thật…',
    bookImage: '/images/fire-fore-tap-17.jpg',
    bookQuaranty: 12
  },
  {
    bookName: 'Ghi Chép Của Tôi Người Nhìn Thấy Em Sẽ Biến Mất Vào Ngày Mai',
    category: 'Tiểu thuyết',
    author: 'Kuji Furumiya',
    bookPrice: 62000,
    bookDetail: 'Điều duy nhất khiến một đứa con trai tầm thường như tôi trở nên khác biệt với mọi người, đó là tôi có năng lực nhìn thấy trước viễn cảnh một ai đó qua đời. Từ nhỏ, tôi đã có mong muốn sẽ dùng đôi mắt đặc biệt của mình để cứu người. Thế nhưng, không một ai chịu tin vào lời cảnh báo của tôi cả. Thái độ của họ khi đó đều sẽ là nỗi kinh ngạc đi kèm với sợ hãi, cùng ánh mắt chất chứa sự căm ghét và hắt hủi dành cho tôi. Và rồi, tôi đã gặp được cô ấy, người con gái duy nhất tin tưởng và khích lệ tinh thần tôi, giúp tôi dần có động lực bước ra khỏi những tháng ngày tăm tối của cuộc đời và tiến về phía trước. Song, chính cô ấy cũng sẽ phải đối diện với cái chết trong tương lai không xa…',
    bookImage: '/images/ghi-chep-cua-toi.jpg',
    bookQuaranty: 22
  },
  {
    bookName: 'Hai Vạn Dặm Dưới Biển',
    category: 'Hư cấu',
    author: 'Jules Verne',
    bookPrice: 72000,
    bookDetail: 'Giáo sư Aronnax, một nhà tự nhiên học và chuyên gia về sinh vật biển nổi tiếng người Pháp, đang trên đường trở về quê hương sau một chuyến thám hiểm dài, thì biết được thông tin về một sinh vật biển đầy bí ẩn đang tấn công các con tàu trên đại dương. Ông nhanh chóng quyết định tham gia vào chuyến tìm kiếm và tiêu diệt con quái vật. Sau đó, chính sinh vật khổng lồ huyền bí đã tấn công con thuyền mà ông đang đi, ông trôi lênh đênh trên biển cùng với người hầu của mình và một thợ săn cá voi người Canada. Hóa ra con “quái vật” đó lại là một chiếc tàu ngầm khổng lồ! Được chỉ huy bởi vị thuyền trưởng Nemo thông minh nhưng có ý chống đối xã hội một cách gay gắt – Nautilus – chiếc tàu ngầm đầu tiên trên thế giới, đã đi khắp các đại dương, đưa Aronnax và những người bạn của ông đi vòng quanh thế giới bằng lối đi dưới đáy biển. Nhưng Nemo đang che giấu những bí mật của riêng mình... và Nemo cũng không hề có ý định để Aronnax cùng những người bạn của ông trở lại đất liền.',
    bookImage: '/images/hai-van-dam-duoi-day-bien.jpg',
    bookQuaranty: 15
  },
  {
    bookName: 'Hành Tinh Của Một Kẻ Nghĩ Nhiều',
    category: 'Tâm lý',
    author: 'Nguyễn Đoàn Minh Thư',
    bookPrice: 65000,
    bookDetail: '“Đó là mùa hè năm 2020, mùa hè của COVID-19 và một ngàn vạn khủng hoảng tuổi đôi mươi. Đó là mùa hè mình bắt chuyến bay sớm nhất có thể vào ngày 20 tháng 3 để chạy khỏi nước Anh đang bùng dịch, bị kẹt lại sân bay Bangkok trong 24 giờ đồng hồ vì chuyến bay quá cảnh về Sài Gòn bị huỷ.. Đó là mỗi đêm mùa hè nằm trên giường stress chuyện deadline luận văn, stress chuyện thất nghiệp không kiếm ra tiền, stress chuyện bỏ lỡ cơ hội thực tập giúp ích cho sự nghiệp của mình, stress chuyện học hành dở dang - không biết bao giờ mới có thể quay lại Anh và hoàn thành tấm bằng đại học, stress chuyện tồn tại một cách mơ hồ, không biết mình là ai.” Hành tinh của một kẻ nghĩ nhiều là hành trình khám phá thế giới nội tâm của một người trẻ. Đó là một hành tinh đầy hỗn loạn của những suy nghĩ trăn trở, những dằn vặt, những cuộc chiến nội tâm, những cảm xúc vừa phức tạp cũng vừa rất đỗi con người. Một thế giới quen thuộc với tất cả chúng ta.',
    bookImage: '/images/hanh-tinh-cua-ke-nghi-nhieu.jpg',
    bookQuaranty: 18
  },
  {
    bookName: 'Hoàng Tử Bé',
    category: 'Ngụ ngôn',
    author: 'Antoine de Saint-Exupéry',
    bookPrice: 55000,
    bookDetail: 'Hoàng Tử Bé kể về một cậu hoàng tử sống trên tiểu tinh cầu B612. Một ngày nọ cậu đã rời hành tinh của mình mà đi xem những phần còn lại của vũ trụ. Và ở những tinh cầu khác cậu đã gặp được toàn những điều kỳ quặc. Cậu bắt đầu khám phá chúng và nhận ra nhiều điều.',
    bookImage: '/images/hoang-tu-be.jpg',
    bookQuaranty: 13
  },
  {
    bookName: 'Khéo Ăn Nói Sẽ Có Được Thiên Hạ',
    category: 'Sách kỹ năng',
    author: 'Trác Nhã',
    bookPrice: 64000,
    bookDetail: 'Trong xã hội thông tin hiện đại, sự im lặng không còn là vàng nữa, nếu không biết cách giao tiếp thì dù là vàng cũng sẽ bị chôn vùi. Trong cuộc đời một con người, từ xin việc đến thăng tiến, từ tình yêu đến hôn nhân, từ tiếp thị cho đến đàm phán, từ xã giao đến làm việc… không thể không cần đến kĩ năng và khả năng giao tiếp. Khéo ăn khéo nói thì đi đâu, làm gì cũng gặp thuận lợi. Không khéo ăn nói, bốn bề đều là trở ngại khó khăn. Đã bao giờ đánh mất một công việc, bạn bỏ lỡ một mối quan hệ tuyệt vời, hay đơn giản là bạn cảm thấy khó nói chuyện với mọi người. Bạn có bao giờ nghĩ là do kĩ năng nói chuyện của mình chưa tốt, chưa thuyết phục được mọi người. Bạn đổ lỗi cho số phận và vận may của mình chưa đến. Hãy dừng việc than thân trách phận và hành động để thay đòi chính mình. Vậy làm thế nào để cải thiện và tránh gặp phải những tình huống như trên? Làm thế nào để ăn nói khéo léo? Có phương pháp và quy luật nào được áp dụng khi giao tiếp không? Có nguyên tắc và bí quyết nào cho các cuộc nói chuyện không? Trong những tình huống khác nhau, với những người khác nhau thì phải nói chuyện như thế nào, và làm sao để trình bày những điều khó nói? Cuốn sách Khéo ăn nói sẽ có được thiên hạ của Trác Nhã sẽ giải đáp cho bạn đọc những câu hỏi đó. Cuốn sách với ngôn từ rõ ràng, gần gũi với cuộc sống sẽ mang đến những kĩ năng và phương pháp giao tiếp thực dụng, chắc chắn sẽ giúp ích được cho bạn đọc.',
    bookImage: '/images/kheo-an-kheo-noi.jpg',
    bookQuaranty: 17
  },
  {
    bookName: 'Không Gia Đình',
    category: 'Tiểu thuyết',
    author: 'Hector Malot',
    bookPrice: 59000,
    bookDetail: 'Thở xa lắm, giữa lòng nước Pháp thế kỷ XIX, có một câu chuyện... Câu chuyện về cậu bé bất hạnh Rémi lang bạt trên dặm trường thiên lý, dấn thân giữa tất cả những bần cùng đói khổ và những xa hoa lộng lẫy. Cậu thiếu niên nhỏ tuổi đã đi qua biết bao miền quê, thấy biết bao cảnh đời, mỗi bước chân đều in dấu ấn của những câu chuyện kỳ lạ, có lúc hoan hỉ mừng vui, có khi thê lương đau đớn nhưng luôn lấp lánh tình người. Cuộc hành trình của Rémi với đoàn xiếc khỉ, chó, với những người thợ mỏ, với cậu bé hát rong người Ý đưa người đọc trải nghiệm mọi cung bậc cảm xúc: thích thú, bất ngờ, hồi hộp, thương tâm, thậm chí cả tuyệt vọng và dạy cho ta - những người chưa, đang, hay đã trưởng thành - những bài học thấm thía về ý chí, nghị lực và lao động chân chính...',
    bookImage: '/images/khong-gia-dinh.jpg',
    bookQuaranty: 12
  },
  {
    bookName: 'Không Phải Sói Nhưng Cũng Đừng Là Cừu',
    category: 'Kỹ năng sống ',
    author: 'Lê Bảo Ngọc',
    bookPrice: 70000,
    bookDetail: 'SÓI VÀ CỪU - BẠN KHÔNG TỐT NHƯ BẠN NGHĨ ĐÂU! Làn ranh của việc ngây thơ hay xấu xa đôi khi mỏng manh hơn bạn nghĩ. Bạn làm một việc mà mình cho là đúng, kết quả lại bị mọi người khiển trách. Bạn ủng hộ một quan điểm của ai đó, và số đông khác lại ủng hộ một quan điểm trái chiều. Rốt cuộc thì bạn sai hay họ sai? Cuốn sách “Không phải sói nhưng cũng đừng là cừu” đến từ tác giả Lê Bảo Ngọc sẽ giúp bạn hiểu rõ hơn những khía cạnh sắc sảo phía sau những nhận định đúng, sai đơn thuần của mỗi người. Những câu hỏi đầy tính tranh cãi như “Cứu người hay cứu chó?”, “Một kẻ thô lỗ trong lớp vỏ “thẳng tính” khác với người EQ thấp như thế nào?”, “Vì sao một bộ phận nữ giới lại victim blaming đối với nạn nhân bị xâm hại?”,... được tác giả đưa ra trong “Không phải sói nhưng cũng đừng là cừu”. Bằng từng chương sách của mình, tác giả vạch rõ cho bạn rằng “thật sự thế nào mới là người tốt”, ngây thơ và xấu xa có ranh giới rõ ràng như thế không, rốt cuộc bạn có là người tốt như mình vẫn luôn nghĩ? Trong thời đại mà mọi thứ đều rất chóng vánh này, ranh giới giữa tốt và xấu, đúng và sai đôi lúc là không tồn tại. Cái tốt mà chúng ta nghĩ, hóa ra lại là xấu trong mắt kẻ khác. Cái đúng ở thời điểm này, đến một thời điểm khác lại trở thành sai. Tốt đẹp hay xấu xa, thật khó phân định.',
    bookImage: '/images/khong-phai-soi-nhung-cung-dung-la-cuu.jpg',
    bookQuaranty: 15
  },
  {
    bookName: 'Kiếm Tiền Từ Tiktok Bẳng Cách Nào',
    category: 'Kinh tế',
    author: 'Henry Mentor',
    bookPrice: 75000,
    bookDetail: 'Henry Mentor: "Sau hơn 5 năm sống và học tập ở nhiều quốc gia trên thế giới, tôi hiện đang là một nhà đào tạo và cố vấn khởi nghiệp cho hàng nghìn bạn trẻ ở Việt Nam. Bằng cách cầm tay chỉ việc từ cơ bản đến chuyên sâu, tôi đã giúp cho rất nhiều bạn lên ý tưởng kinh doanh và hiện thực hóa ý tưởng đó. Cuốn sách này như một quà tặng dành cho các học viên của tôi và mong muốn giúp được nhiều hơn nữa những bạn trẻ khác có tinh thần đón nhận và sẵn sàng học hỏi, sẵn sàng ứng dụng. Chúng ta đang ở một kỷ nguyên mới và đối mặt với một làn sóng khủng khiếp chưa từng có, hãy đón nhận và đi ở Top đầu, thay vì bỏ qua và tụt hậu."',
    bookImage: '/images/kiem-tiem-tu-tik-tok.jpg',
    bookQuaranty: 20
  },
  {
    bookName: 'Lớp Học Mật Ngữ - Tập 1',
    category: 'Truyện tranh',
    author: 'B R O Group',
    bookPrice: 69000,
    bookDetail: 'Mời bạn đến với truyện tranh mới Hiệp hội viêm màng túi. Đang buồn vì bị bố mẹ cắt giảm tiền tiêu vặt, ấy vậy mà Song Tử nam còn vào lớp thông báo rằng “Ngân Hà luxury rồi”, giờ cái gì cũng lên giá, cũng đắt hết trơn... Biết bao giờ mới đủ tiền mua truyện, đồ chơi đây? Trong khi cả lớp “lan toả năng lượng” u ám thì Kim Ngưu nam vẫn bình thản ăn đùi gà chiên nước mắm. Các bạn đánh giá món này bây giờ rất đắt! Sao Kim Ngưu có tiền mua ăn sáng? Thế là mọi người nhờ vả Kim Ngưu chia sẻ bí quyết giàu sang, giúp các bạn vượt qua cuộc “khủng hoảng kinh tế” này...',
    bookImage: '/images/lop-hoc-mat-ngu-tap-1.jpg',
    bookQuaranty: 14
  },
  {
    bookName: 'Nghĩ Giàu & Làm Giàu',
    category: 'Kinh tế',
    author: 'Napoleon Hill',
    bookPrice: 80000,
    bookDetail: 'Think and Grow Rich - Nghĩ giàu và làm giàu là một trong những cuốn sách bán chạy nhất mọi thời đại. Đã hơn 60 triệu bản được phát hành với gần trăm ngôn ngữ trên toàn thế giới và được công nhận là cuốn sách tạo ra nhiều triệu phú, một cuốn sách truyền cảm hứng thành công nhiều hơn bất cứ cuốn sách kinh doanh nào trong lịch sử. Tác phẩm này đã giúp tác giả của nó, Napoleon Hill, được tôn vinh bằng danh hiệu “người tạo ra những nhà triệu phú”. Đây cũng là cuốn sách hiếm hoi được đứng trong top của rất nhiều bình chọn theo nhiều tiêu chí khác nhau - bình chọn của độc giả, của giới chuyên môn, của báo chí. Lý do để Think and Grow Rich - Nghĩ giàu và làm giàu có được vinh quang này thật hiển nhiên và dễ hiểu: Bằng việc đọc và áp dụng những phương pháp đơn giản, cô đọng này vào đời sống của mỗi cá nhân mà đã có hàng ngàn người trên thế giới trở thành triệu phú và thành công bền vững. Điều thú vị nhất là các bí quyết này có thể được hiểu và áp dụng bởi bất kỳ một người bình thường nào, hoạt động trong bất cứ lĩnh vực nào. Qua hơn 70 năm tồn tại, những đúc kết về thành công của Napoleon Hill đến nay vẫn không hề bị lỗi thời, ngược lại, thời gian chính là minh chứng sống động cho tính đúng đắn của những bí quyết mà ông chia sẻ. Sinh ra trong một gia đình nghèo vùng Tây Virginia, con đường thành công của Napoleon Hill cũng trải qua nhiều thăng trầm. Khởi đầu bằng chân cộng tác viên cho một tờ báo địa phương lúc 15 tuổi, đến năm 19 tuổi Hill trở thành nhà quản lý mỏ than trẻ tuổi nhất, sau đó bỏ ngang để theo đuổi ngành luật. Napoleon Hill còn kinh qua nhiều nghề như kinh doanh gỗ, xe hơi, viết báo về kinh doanh…Đó là những công việc ông từng nếm trải trước khi 25 tuổi! Song khác với những người thành đạt khác, ông cẩn thận phân tích từng sự kiện trọng đại trong đời mình, rút ra những bài học, rồi tiếp tục rút gọn chúng thành các nguyên tắc căn bản, tổ chức các nguyên tắc ấy thành triết lý sống và rèn luyện... Cơ hội đặc biệt đã đến với Hill trong một lần phỏng vấn để viết về chân dung Andrew Carnegie - ông “vua thép',
    bookImage: '/images/nghi-giau-lam-giau.jpg',
    bookQuaranty: 10
  },
  {
    bookName: 'Ông Già Và Biển Cả',
    category: 'Kinh điển',
    author: 'Ernest Hemingway',
    bookPrice: 62000,
    bookDetail: 'Ông Già Và Biển Cả là một trong những tác phẩm nổi tiếng nhất của Hemingway, sử dụng nguyên lý “tảng băng trôi” khi kể về một cuộc săn đuổi con cá kiếm khổng lồ của ông lão đánh cá Santiago, người đã cố gắng chiến đấu trong ba ngày đêm vật lộn trên biển vùng Giếng Lớn khi ông câu được nó. Sang đến ngày thứ ba, ông dùng lao đâm chết được con cá, buộc nó vào mạn thuyền và lôi về nhưng đàn cá mập đánh hơi thấy đã lăn xả tới, ông lại đem hết sức tàn chống chọi với lũ cá mập, phóng lao, thậm chí cả mái chèo để đánh. Ông giết được nhiều con, đuổi được chúng đi, nhưng cuối cùng khi nhìn đến con cá kiếm của mình thì nó đã bị rỉa hết thịt chỉ còn trơ lại một bộ xương khổng lồ. Tác phẩm là bản anh hùng ca ca ngợi sức lao động và khát vọng của con người.',
    bookImage: '/images/ong-gia-va-bien-ca.jpg',
    bookQuaranty: 19
  },
  {
    bookName: 'Thiên Thần Diệt Thế - Tập 27',
    category: 'Truyện tranh',
    author: 'Takaya Kagami',
    bookPrice: 56000,
    bookDetail: 'Trong lúc di chuyển, để xác minh kế hoạch của Guren, Yuichiro hỏi “Anh đã giết gia đình tôi, đúng không?” khiến Guren nghẹn lời. Yuichiro đòi anh một câu trả lời dứt khoát, sau đó dẫn tới việc đấu đá nhau. Guren cảm nhận được sự trưởng thành trong Yuichiro, còn cậu cảm nhận được sức mạnh của anh ta. Kết quả của cuộc chiến này sẽ ra sao!?',
    bookImage: '/images/seraph-thien-than-diet-the-tap-27.jpg',
    bookQuaranty: 22
  },
  {
    bookName: 'Tớ Sẽ Mãi Mãi Không Quên Cậu, Người Từng Sống Trong Khoảnh Khắc',
    category: 'Tiểu thuyết',
    author: 'Yozora Fuyuno',
    bookPrice: 61000,
    bookDetail: '“Tớ bổ nhiệm cậu trở thành nhiếp ảnh gia độc quyền của tớ!” Câu nói của Kaori, cô nàng nổi tiếng của lớp đã chính thức đặt dấu chấm hết cho chuỗi ngày bình lặng của Teruhiko. Tinh thần tự do, lạc quan của Kaori đã ảnh hưởng đến suy nghĩ và cuộc sống của Teruhiko rất nhiều. Nhưng rồi bỗng một ngày, cậu biết được một sự thật, rằng phía sau nụ cười rạng rỡ của Kaori là những ngày tháng phải mạnh mẽ chiến đấu với căn bệnh hiểm nghèo của cô ấy…Hai tháng ngắn ngủi ở bên Kaori tuy tràn ngập khổ đau, nhưng cũng là hai tháng rực rỡ nhất trong cuộc đời cậu.',
    bookImage: '/images/toi-se-mai-khong-quen-cau.jpg',
    bookQuaranty: 17
  },
  {
    bookName: 'Tư Duy Chiến Lược - Lý Thuyết Trò Chơi Thực Hành',
    category: 'Kinh tế',
    author: 'Avinash K. Dixit',
    bookPrice: 25000,
    bookDetail: 'Tư duy chiến lược là nghệ thuật vượt qua đối thủ cạnh tranh, với nhận thức rằng họ cũng đang cố gắng vượt qua mình. Mỗi chúng ta đều phải áp dụng tư duy chiến lược, theo cách này hay cách khác, tại nơi làm việc và ngay cả ở nhà. Thương gia và các doanh nghiệp sử dụng các chiến lược cạnh tranh phù hợp để tồn tại. Những huấn luyện viên bóng đá vạch ra các kế hoạch chiến lược để các cầu thủ tiến hành trên sân bóng. Các bậc cha mẹ muốn giáo dục con cái cũng phải trở thành những nhà chiến lược nghiệp dư. Tư duy chiến lược đúng đắn trong nhiều hoàn cảnh khác nhau vẫn luôn là một nghệ thuật. Nhưng nền tảng của nó được xây dựng trên một số nguyên tắc cơ bản – một khoa học về chiến lược. Sau khi đọc cuốn sách này, người đọc từ các lĩnh vực nghề nghiệp khác nhau có thể trở thành những nhà chiến lược giỏi hơn nếu họ biết được những nguyên tắc này. Tư duy chiến lược đã mang đến cho nhiều người một cách nhìn mới về mọi sự kiện, hiện tượng trong xã hội, kể từ văn học, phim ảnh và thể thao cho đến các sự kiện chính trị, lịch sử.',
    bookImage: '/images/tu-duy-chien-luoc.jpg',
    bookQuaranty: 10
  },
  {
    bookName: 'Và Rồi, Tháng 9 Không Có Cậu Đã Tới',
    category: 'Tiểu thuyết',
    author: 'Natsuki Amasawa',
    bookPrice: 28000,
    bookDetail: 'Tiểu thuyết thanh xuân bí ẩn xoay quanh những suy nghĩ bị giấu kín. Vào mùa hè năm ấy, Keita đã qua đời. Chưa vượt qua khỏi cú sốc đó, Miho, Taiki, Shun, Rino – những người bạn luôn bên cạnh Keita – đã trải qua một mùa hè đầy bất ngờ. Một ngày nọ, Kei – một thiếu niên giống hệt Keita đã mất – xuất hiện trước mặt Miho.“Mình có việc muốn nhờ các cậu. Xin hãy đến nơi mà mình đã chết.” Dù cảm thấy bối rối, nhưng nhóm Miho vẫn bắt đầu cuộc hành trình đi theo dấu chân của Keita. Trong suốt chuyến đi này, những lời nói dối, sự ganh tị, hối hận cùng tình cảm hướng đến Keita dần được hé lộ. Và rồi, kết cục ngoài dự đoán cũng xuất hiện ở phía cuối hành trình.',
    bookImage: '/images/va-roi-thang-9-khong-co-cau.jpg',
    bookQuaranty: 12
  }
];

export default products;
