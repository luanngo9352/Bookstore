const products = [
  {
    bookName: 'Bánh Mì Không Gian',
    categoryID: 1,
    authorID: 1,
    bookPrice: 55000,
    bookDetail: 'Bánh Mì Không Gian là cuốn sách khoa học viễn tưởng của tác giả A. T. Long về cuộc hành trình vào không gian.',
    bookImage: 'banh-mi-khong-gian.jpg',
    bookQuaranty: 10
  },
  {
    bookName: 'Người Hát Tình Ca',
    categoryID: 2,
    authorID: 2,
    bookPrice: 68000,
    bookDetail: 'Người Hát Tình Ca là một tác phẩm của nhà văn Hồ Biểu Chanh về tình yêu và âm nhạc.',
    bookImage: 'nguoi-hat-tinh-ca.jpg',
    bookQuaranty: 12
  },
  {
    bookName: 'Vượt Sóng',
    categoryID: 1,
    authorID: 3,
    bookPrice: 75000,
    bookDetail: 'Vượt Sóng là cuốn tiểu thuyết biển của tác giả Bùi Anh Tuấn, kể về cuộc phiêu lưu trên biển rộng.',
    bookImage: 'vuot-song.jpg',
    bookQuaranty: 8
  },
  {
    bookName: 'Hoa Cúc Xanh Trên Đường Mục Tích',
    categoryID: 2,
    authorID: 4,
    bookPrice: 72000,
    bookDetail: 'Hoa Cúc Xanh Trên Đường Mục Tích là một tiểu thuyết lịch sử của nhà văn Võ Thu Hương.',
    bookImage: 'hoa-cuc-xanh.jpg',
    bookQuaranty: 15
  },
  {
    bookName: 'Đất Rừng Phương Nam',
    categoryID: 3,
    authorID: 5,
    bookPrice: 61000,
    bookDetail: 'Đất Rừng Phương Nam là tác phẩm về miền Nam Việt Nam của nhà văn Dương Thu Hương.',
    bookImage: 'dat-rung-phuong-nam.jpg',
    bookQuaranty: 20
  },
  {
    bookName: 'Chiếc Lược Ngà',
    categoryID: 4,
    authorID: 6,
    bookPrice: 58000,
    bookDetail: 'Chiếc Lược Ngà là một câu chuyện cổ tích Việt Nam về tình yêu và lòng kiên nhẫn.',
    bookImage: 'chiec-luoc-nga.jpg',
    bookQuaranty: 18
  },
  {
    bookName: 'Số Đỏ',
    categoryID: 5,
    authorID: 7,
    bookPrice: 70000,
    bookDetail: 'Số Đỏ của nhà văn Nguyễn Huy Thiệp là một bức tranh về cuộc sống nông thôn Việt Nam.',
    bookImage: 'so-do.jpg',
    bookQuaranty: 12
  },
  {
    bookName: 'Nhà Giả Kim',
    categoryID: 6,
    authorID: 8,
    bookPrice: 62000,
    bookDetail: 'Nhà Giả Kim của nhà văn Paulo Coelho là một cuốn sách tâm linh và tìm kiếm ý nghĩa cuộc đời.',
    bookImage: 'nha-gia-kim.jpg',
    bookQuaranty: 22
  },
  {
    bookName: 'Dòng Sông Không Trở Lại',
    categoryID: 7,
    authorID: 9,
    bookPrice: 72000,
    bookDetail: 'Dòng Sông Không Trở Lại của tác giả Nguyễn Nhật Ánh là một tiểu thuyết dành cho thanh thiếu niên về tuổi trẻ và tình bạn.',
    bookImage: 'dong-song.jpg',
    bookQuaranty: 15
  },
  {
    bookName: 'Truyện Kiều',
    categoryID: 8,
    authorID: 10,
    bookPrice: 65000,
    bookDetail: 'Truyện Kiều của người hát tình ca cổ điển Việt Nam Nguyễn Du kể về tình yêu và tương lai.',
    bookImage: 'truyen-kieu.jpg',
    bookQuaranty: 18
  },
  {
    bookName: 'Mắt Biếc',
    categoryID: 1,
    authorID: 11,
    bookPrice: 55000,
    bookDetail: 'Mắt Biếc của nhà văn Nguyễn Nhật Ánh là câu chuyện tình yêu ngọt ngào trong tuổi thơ.',
    bookImage: 'mat-biec.jpg',
    bookQuaranty: 13
  },
  {
    bookName: 'Bố Già',
    categoryID: 2,
    authorID: 12,
    bookPrice: 64000,
    bookDetail: 'Bố Già của nhà văn Kim Lân là một cuốn tiểu thuyết kể về thế giới của xã hội đen.',
    bookImage: 'bo-gia.jpg',
    bookQuaranty: 17
  },
  {
    bookName: 'Dế Mèn Phiêu Lưu Ký',
    categoryID: 3,
    authorID: 13,
    bookPrice: 59000,
    bookDetail: 'Dế Mèn Phiêu Lưu Ký của tác giả Tô Hoài là một truyện dành cho thiếu nhi về cuộc phiêu lưu của Dế Mèn.',
    bookImage: 'de-men.jpg',
    bookQuaranty: 12
  },
  {
    bookName: 'Bên Rặn',
    categoryID: 4,
    authorID: 14,
    bookPrice: 70000,
    bookDetail: 'Bên Rặn của nhà văn Vũ Trọng Phụng là một cuốn tiểu thuyết nói về cuộc sống xã hội ở Hà Nội thời Pháp thuộc.',
    bookImage: 'ben-ran.jpg',
    bookQuaranty: 15
  },
  {
    bookName: 'Những Người Khốn Khổ',
    categoryID: 5,
    authorID: 15,
    bookPrice: 75000,
    bookDetail: 'Những Người Khốn Khổ của nhà văn Nguyễn Đình Chiểu là một bộ thơ nổi tiếng về lòng yêu nước và kháng chiến.',
    bookImage: 'nhung-nguoi-khon-kho.jpg',
    bookQuaranty: 20
  },
  {
    bookName: 'Lão Hạc',
    categoryID: 6,
    authorID: 1,
    bookPrice: 69000,
    bookDetail: 'Lão Hạc của nhà văn Nam Cao là một truyện ngắn nổi tiếng về cuộc sống nông thôn Việt Nam.',
    bookImage: 'lao-hac.jpg',
    bookQuaranty: 14
  },
  {
    bookName: 'Truyện Kiều',
    categoryID: 7,
    authorID: 2,
    bookPrice: 80000,
    bookDetail: 'Truyện Kiều của người hát tình ca cổ điển Việt Nam Nguyễn Du kể về tình yêu và tương lai.',
    bookImage: 'truyen-kieu.jpg',
    bookQuaranty: 10
  },
  {
    bookName: 'Bài Ca Đất Phương Nam',
    categoryID: 8,
    authorID: 3,
    bookPrice: 62000,
    bookDetail: 'Bài Ca Đất Phương Nam của tác giả Phan Khôi là một cuốn sách lịch sử Việt Nam.',
    bookImage: 'bai-ca-dat.jpg',
    bookQuaranty: 19
  },
  {
    bookName: 'Chí Phèo',
    categoryID: 1,
    authorID: 4,
    bookPrice: 56000,
    bookDetail: 'Chí Phèo của nhà văn Nam Cao là một tác phẩm nổi tiếng về cuộc sống nông thôn và nhân văn.',
    bookImage: 'chi-pheo.jpg',
    bookQuaranty: 22
  },
  {
    bookName: 'Hồn Trương Ba Da Hàng Thịt',
    categoryID: 2,
    authorID: 5,
    bookPrice: 61000,
    bookDetail: 'Hồn Trương Ba Da Hàng Thịt của nhà văn Vũ Trọng Phụng là một tiểu thuyết đặc sắc về xã hội đô thị.',
    bookImage: 'hon-truong-ba-da.jpg',
    bookQuaranty: 17
  },
  {
    bookName: 'The Great Gatsby',
    categoryID: 1,
    authorID: 16,
    bookPrice: 25000,
    bookDetail: 'The Great Gatsby is a classic novel by F. Scott Fitzgerald that explores the American Dream and the Jazz Age.',
    bookImage: 'great-gatsby.jpg',
    bookQuaranty: 10
  },
  {
    bookName: 'To Kill a Mockingbird',
    categoryID: 2,
    authorID: 17,
    bookPrice: 28000,
    bookDetail: 'To Kill a Mockingbird is a novel by Harper Lee that addresses issues of race and morality in the American South.',
    bookImage: 'mockingbird.jpg',
    bookQuaranty: 12
  },
  {
    bookName: 'Pride and Prejudice',
    categoryID: 3,
    authorID: 18,
    bookPrice: 30000,
    bookDetail: 'Pride and Prejudice is a classic novel by Jane Austen that explores themes of love, class, and society.',
    bookImage: 'pride-prejudice.jpg',
    bookQuaranty: 8
  },
  {
    bookName: '1984',
    categoryID: 4,
    authorID: 19,
    bookPrice: 32000,
    bookDetail: '1984 is a dystopian novel by George Orwell that explores totalitarianism and surveillance.',
    bookImage: '1984.jpg',
    bookQuaranty: 15
  },
  {
    bookName: 'The Catcher in the Rye',
    categoryID: 5,
    authorID: 20,
    bookPrice: 28000,
    bookDetail: 'The Catcher in the Rye is a coming-of-age novel by J.D. Salinger that explores teenage rebellion and alienation.',
    bookImage: 'catcher-rye.jpg',
    bookQuaranty: 20
  },
  {
    bookName: 'Moby-Dick',
    categoryID: 6,
    authorID: 21,
    bookPrice: 29000,
    bookDetail: 'Moby-Dick is a classic novel by Herman Melville that tells the story of Captain Ahab\'s quest for the white whale.',
    bookImage: 'moby-dick.jpg',
    bookQuaranty: 18
  },
  {
    bookName: 'The Hobbit',
    categoryID: 7,
    authorID: 22,
    bookPrice: 32000,
    bookDetail: 'The Hobbit is a fantasy novel by J.R.R. Tolkien that follows the adventures of Bilbo Baggins.',
    bookImage: 'hobbit.jpg',
    bookQuaranty: 12
  },
  {
    bookName: 'Brave New World',
    categoryID: 8,
    authorID: 23,
    bookPrice: 28000,
    bookDetail: 'Brave New World is a dystopian novel by Aldous Huxley that explores a futuristic society driven by technology and pleasure.',
    bookImage: 'brave-new-world.jpg',
    bookQuaranty: 17
  },
  {
    bookName: 'The Lord of the Rings',
    categoryID: 1,
    authorID: 24,
    bookPrice: 33000,
    bookDetail: 'The Lord of the Rings is an epic fantasy trilogy by J.R.R. Tolkien that follows the quest to destroy the One Ring.',
    bookImage: 'lord-of-the-rings.jpg',
    bookQuaranty: 12
  },
  {
    bookName: 'The Odyssey',
    categoryID: 2,
    authorID: 25,
    bookPrice: 30000,
    bookDetail: 'The Odyssey is an ancient Greek epic poem attributed to Homer that tells the story of Odysseus\'s journey home.',
    bookImage: 'odyssey.jpg',
    bookQuaranty: 15
  },
  {
    bookName: 'Frankenstein',
    categoryID: 3,
    authorID: 26,
    bookPrice: 27000,
    bookDetail: 'Frankenstein is a novel by Mary Shelley that explores themes of science and the consequences of playing God.',
    bookImage: 'frankenstein.jpg',
    bookQuaranty: 14
  },
  {
    bookName: 'War and Peace',
    categoryID: 4,
    authorID: 27,
    bookPrice: 35000,
    bookDetail: 'War and Peace is a classic novel by Leo Tolstoy that explores the lives of Russian aristocrats during the Napoleonic era.',
    bookImage: 'war-peace.jpg',
    bookQuaranty: 10
  },
  {
    bookName: 'The Great Gatsby',
    categoryID: 5,
    authorID: 28,
    bookPrice: 29000,
    bookDetail: 'The Great Gatsby is a classic novel by F. Scott Fitzgerald that explores the American Dream and the Jazz Age.',
    bookImage: 'great-gatsby.jpg',
    bookQuaranty: 16
  },
  {
    bookName: 'To Kill a Mockingbird',
    categoryID: 6,
    authorID: 29,
    bookPrice: 27000,
    bookDetail: 'To Kill a Mockingbird is a novel by Harper Lee that addresses issues of race and morality in the American South.',
    bookImage: 'mockingbird.jpg',
    bookQuaranty: 19
  },
  {
    bookName: 'Pride and Prejudice',
    categoryID: 7,
    authorID: 30,
    bookPrice: 31000,
    bookDetail: 'Pride and Prejudice is a classic novel by Jane Austen that explores themes of love, class, and society.',
    bookImage: 'pride-prejudice.jpg',
    bookQuaranty: 11
  },
  {
    bookName: '1984',
    categoryID: 8,
    authorID: 31,
    bookPrice: 28000,
    bookDetail: '1984 is a dystopian novel by George Orwell that explores totalitarianism and surveillance.',
    bookImage: '1984.jpg',
    bookQuaranty: 15
  },
  {
    bookName: 'The Catcher in the Rye',
    categoryID: 1,
    authorID: 32,
    bookPrice: 26000,
    bookDetail: 'The Catcher in the Rye is a coming-of-age novel by J.D. Salinger that explores teenage rebellion and alienation.',
    bookImage: 'catcher-rye.jpg',
    bookQuaranty: 14
  },
  {
    bookName: 'Moby-Dick',
    categoryID: 2,
    authorID: 33,
    bookPrice: 30000,
    bookDetail: 'Moby-Dick is a classic novel by Herman Melville that tells the story of Captain Ahab\'s quest for the white whale.',
    bookImage: 'moby-dick.jpg',
    bookQuaranty: 13
  },
  {
    bookName: 'The Hobbit',
    categoryID: 3,
    authorID: 34,
    bookPrice: 29000,
    bookDetail: 'The Hobbit is a fantasy novel by J.R.R. Tolkien that follows the adventures of Bilbo Baggins.',
    bookImage: 'hobbit.jpg',
    bookQuaranty: 12
  },
  {
    bookName: 'Brave New World',
    categoryID: 4,
    authorID: 35,
    bookPrice: 31000,
    bookDetail: 'Brave New World is a dystopian novel by Aldous Huxley that explores a futuristic society driven by technology and pleasure.',
    bookImage: 'brave-new-world.jpg',
    bookQuaranty: 16
  }
];

export default products;
