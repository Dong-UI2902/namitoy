import React from "react";

export const PRODUCT = {
  brand: "",
  createdAt: undefined,
  description: "",
  gender: "nam",
  image: [],
  isHot: false,
  material: "",
  price: "0",
  sale: "0",
  soldOld: false,
  title: "",
  type: {
    name: "",
  },
  user: undefined,
};

const fixImageDrive = (id: string) => {
  return "https://lh3.googleusercontent.com/d/" + id;
};

const isImageDrive = (image: string) => {
  const found = image.match(/\/file\/d\/([^/]+)/);
  if (found) {
    return found[1];
  }

  return false;
};

const fixImage = (image: string) => {
  const imageDrive = isImageDrive(image);
  if (imageDrive) {
    return fixImageDrive(imageDrive);
  }

  return image;
};

const FormatMoney = (props: any) => {
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  if (isNaN(props.price) && props.price !== undefined) {
    return (
      <>
        {formatter.format(props.price.substring(0, props.price.indexOf("-"))) +
          "-" +
          formatter.format(
            props.price.substring(
              props.price.indexOf("-") + 1,
              props.price.length
            )
          )}
      </>
    );
  }
  return <>{formatter.format(props.price)}</>;
};

const GetPercent = (prop: any) => {
  if (prop.sale) {
    const a = (Number(prop.price) / Number(prop.sale)) * 100 - 100;
    return <>{Math.round(a)}%</>;
  }

  return <></>;
};

export { fixImage, FormatMoney, GetPercent };

export const DATA = [
  {
    image: [
      "https://drive.google.com/file/d/1pr7o33Eas4JsWk21k16GGQ93fjJWGcOD/view?usp=share_link",
    ],
    title: "NƯỚC HOA KINKY PERFUME PEROPERO QUẦN LÓT",
    brand: "PeroPero",
    description:
      "<p>Các sản phẩm nước hoa kinky perfume được sản xuất dành riêng cho các fan mùi cơ thể ~ Bạn có thể xịt thẳng lên cổ tay, sau đấy đợi 15 giây cho bay hết cồn đi, sẽ để lại mùi hương thật sự của chai nước hoa kinky đầy dâm dục. Hoặc có thể xịt thẳng lên quần lót, sextoy tùy theo sở thích</p><p>Peropero panties scent là một sự kết hợp kỳ lạ thực sự nắm bắt được điều gì đó gợi tình mơ hồ, đầy nhục dục xen kẻ với mùi hương hơi “hắc” một chút do mùi pussy, nhưng lại thơm một chút tùy theo trí tưởng tượng của bạn. Là một sản phẩm tôn sùng mùi hương, Namitoys muốn nói rằng sản phẩm này gần như là một sản phẩm hấp dẫn. Nó có thể đánh lừa não của bạn rằng bạn đang ngửi thấy mùi cô bé của một nàng 18 tuổi tươi ngon.&nbsp;</p><p>Dung tích: 10ml</p>",
    soldOld: false,
    price: "400000",
    sale: "",
    isHot: false,
    material: "",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1b7Rk62aiND89y7yw2rukbG7Fzf4jWcOH/view?usp=share_link",
    ],
    title: "NƯỚC HOA KINKY PERFUME MỒ HÔI NỮ SINH",
    brand: "PeroPero",
    description:
      "<p>Các sản phẩm nước hoa kinky perfume được sản xuất dành riêng cho các fan mùi cơ thể ~ Bạn có thể xịt thẳng lên cổ tay, sau đấy đợi 15 giây cho bay hết cồn đi, sẽ để lại mùi hương thật sự của chai nước hoa kinky đầy dâm dục. Hoặc có thể xịt thẳng lên quần lót, sextoy tùy theo sở thích</p><p>Peropero highschool’s girl sweat là sản phẩm có mùi hơi “chua” vì là sản phẩm thiên về mùi mồ hôi. Hòa mình vào tưởng tượng tình dục lớn gợi tình đó trong giây lát, và chỉ cần tưởng tượng.. một bé nữ sinh cấp 3 đang đổ mồ hôi đứng gần bạn sẽ có mùi hương như thế nào? Cô bé hất mái tóc ra khỏi lưng, mùi hương bắt đầu lan tỏa ra. Chai nước&nbsp;hoa có mùi hương như mùi cam vỏ xanh này chắc chắn sẽ làm bạn thích thú</p><p>Dung tích: 10ml</p>",
    soldOld: false,
    price: "400000",
    sale: "",
    isHot: false,
    material: "",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1RSi4yrvYgTAJJAIFGRDO-mkv_n-cfk-j/view?usp=share_link",
    ],
    title: "NƯỚC HOA KINKY PERFUME RU! SWEET BATH SCENT",
    brand: "PeroPero",
    description:
      "<p>Các sản phẩm nước hoa kinky perfume được sản xuất dành riêng cho các fan mùi cơ thể ~ Bạn có thể xịt thẳng lên cổ tay, sau đấy đợi 15 giây cho bay hết cồn đi, sẽ để lại mùi hương thật sự của chai nước hoa kinky đầy dâm dục. Hoặc có thể xịt thẳng lên quần lót, sextoy tùy theo sở thích</p><p>Peropero Ru! Sweet bath scent là một chai nước hoa mô phỏng khi bạn cùng tắm với bé Ru, bất chợt trái tim bạn đập thình thịch khi nhìn bé Ru quấn mình trong cái khăn tấm mỏng manh đó. Cùng hòa mình vào trí tưởng tượng.. một mùi hương như hương táo, hơi nồng ạ. Nhưng sau 15 giây mùi sẽ dịu đi, để lại cho bạn 1 mùi hương táo dịu nhẹ. Rất kích thích&nbsp;</p><p>Dung tích: 10ml</p>",
    soldOld: false,
    price: "400000",
    sale: "",
    isHot: false,
    material: "",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1Zwm4zP3uDkzw77zq7sitSm9xUJOpOpND/view?usp=share_link",
    ],
    title: "NƯỚC HOA KINKY PERFUME NUKI'S BATHROBE SCENT",
    brand: "PeroPero",
    description:
      "<p>Các sản phẩm nước hoa kinky perfume được sản xuất dành riêng cho các fan mùi cơ thể ~ Bạn có thể xịt thẳng lên cổ tay, sau đấy đợi 15 giây cho bay hết cồn đi, sẽ để lại mùi hương thật sự của chai nước hoa kinky đầy dâm dục. Hoặc có thể xịt thẳng lên quần lót, sextoy tùy theo sở thích</p><p>Peropero Nuki – sexy adult bath robe scent là một chai nước hoa có mùi hương phức tạp kỳ lạ. Lúc đầu, đó là một cảm giác cực kỳ sắc nét, gần như hơi hot khi nó xuyên qua lỗ mũi của bạn giống như bạn đang cố khịt một đống kẹo dẻo hương trái cây vậy. Một mùi hương 'dirty' thực sự có thể phù hợp với tưởng tượng một cách độc đáo.</p><p>Dung tích: 10ml</p>",
    soldOld: false,
    price: "400000",
    sale: "",
    isHot: false,
    material: "",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1BLUeokRiEiD1qiuDk6izI-vfIeele_Tr/view?usp=share_link",
      "https://drive.google.com/file/d/1n0IKD1Uu8Nb4h4cbQ7kD9suOeFXDB_5s/view?usp=share_link",
      "https://drive.google.com/file/d/1_I7f3uaiSxwnDJ-M_8kZb1TGAqLzY2tk/view?usp=share_link",
      "https://drive.google.com/file/d/11qOiKdVC_zpfzCP8_ZChpLC-tUNgKcjK/view?usp=share_link",
    ],
    title: "ÂM ĐẠO GIẢ BODY OOUMAI VIRGO",
    brand: "ooumai",
    description: "<p>Updating..</p>",
    soldOld: false,
    price: "850000",
    sale: "",
    isHot: false,
    material: "TPE sillicon",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1QdX5mHID1Zhg1n3vXiUqbdXMBQON7Ovy/view?usp=drive_link",
      "https://drive.google.com/file/d/19ZETNdVTS_ak_52MlOsJf-6WzHrSCqJJ/view?usp=drive_link",
      "https://drive.google.com/file/d/19IX3hWerxkQ5vVoVB_THAnyVhXU6EpAQ/view?usp=drive_link",
      "https://drive.google.com/file/d/1Tyh1LJNJl05pZ-K9fRHG3YlSdDb5GPwC/view?usp=drive_link",
    ],
    title: "ÂM ĐẠO GIẢ DOUBLE MEDICINE",
    brand: "A-ONE",
    description:
      "<p>Hãng AONE lần này sản xuất ra sextoy ngụy trang dạng viên thuốc trong năm 2022. Gồm 2 oneechan cực kỳ mãnh liệt sẽ đưa anh em tới chân trời mới. Viên màu vàng Nako và viên màu hồng là Zaki có kết cấu mềm mại, co giãn. Chạm vào thì như da người thật vậy, rất mịn và mềm mại.&nbsp;</p><p>Bên trong Nako là vô số các viên tròn nổi, nâng cấp trải nghiệm từ các mẫu mini. Những nếp gấp xúc tu sẽ đan kẻ với các mụn nổi và 9 thớ gân chéo đen kẻ, sẽ làm cho anh em tan chảy với mỗi cú thụt. Còn Zaki có kết cấu lưới xoáy, hứa hẹn sẽ “xoắn thủng” cậu nhỏ của anh em cực phê. Từ các nếp gấp dọc thắt chặt, đến các gân đan kẻ vào nhau như hình ổ khóa tròn đảm bảo sẽ cho anh em một trải nghiệm cực kỳ tuyệt vời.&nbsp;</p><p>Kích thước: 15cm x 6cm&nbsp;</p><p>Trọng lượng: 600gr</p>",
    soldOld: false,
    price: "900000",
    sale: "",
    isHot: false,
    material: "TPE sillicon",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1EpM3dYVZOTcN-rCrIg5ofFnBlCUpQxnB/view?usp=drive_link",
      "https://drive.google.com/file/d/1v8GSU5XQlXJjXHLJ1e9mdhXsZ69VYuCf/view?usp=drive_link",
    ],
    title: "CÂY RUNG ANAL BEAD ",
    brand: "",
    description:
      "<p>Kích thích “cửa sau” cho cả nam và nữ cực đã, giúp đạt đến sự thăng hoa trong tình dục, có thể làm chủ bản thân khi “lâm trận” ở mỗi cuộc yêu. Lý tưởng đặc biệt hơn khi các đôi đồng tình cùng sử dụng, việc mát xa kích thích cho nhau giúp cả 2 cùng đạt thỏa mãn và cùng lên đỉnh trong viên mãn.</p><p>Được thiết kế hoàn toàn từ silicone cao cấp, có độ mềm mịn cao an toàn và lành tính. Kiểu chuỗi hạt truyền thống đặc biệt dành riêng cho kích thích hậu môn thật sự quá lý tưởng bởi những khúc thắt là điểm gắn kết những rung động khoái cảm nhiều nhất cho hậu môn cũng như điểm G, thiết kế có tay cầm xỏ ngón vô cùng thoải mái, kích thước nhỏ gọn để phù hợp hơn với “cửa sau” người chơi. Kiểu dáng đẹp, nhiều màu sắc bắt mắt dễ dàng cho người dùng cảm giác thân thiện và gần gũi.</p><p>– Chất liệu: Silicone ABS an toàn và lành tính<br>– Chiều dài sản phẩm:&nbsp;&nbsp;&nbsp;&nbsp;17.5cm<br>– Chiều dài sử dụng:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12,5cm<br>– Đường kính lần lượt:&nbsp;&nbsp;&nbsp;&nbsp;1,6cm x 2,1cm x 3cm<br>– Rung:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Có rung 1 chế độ<br>– Pin:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3pin LR41<br>– Màu sắc:&nbsp;xanh dương, đen</p>",
    soldOld: false,
    price: "220000",
    sale: "",
    isHot: false,
    material: "",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1t_QSRB5uOnjF1BfVoi_v6UA0CGbU699g/view?usp=drive_link",
      "https://drive.google.com/file/d/1LoWP48ZhxPDzWnAeTXpT3GYE-Zd6-dD9/view?usp=drive_link",
      "https://drive.google.com/file/d/1sQoHEJlcS_o7kQtcYRtHvIq3vLM9_cqB/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ak3-VRBdeaj3U4IBSns2WrdbSq6d-0xV/view?usp=drive_link",
    ],
    title: "BUTTPLUG FM SIZE M/L CHUẨN NHẬT BẢN",
    brand: "",
    description:
      "<p>Sản phẩm phù hợp dành cho những người mới bắt đầu.&nbsp;</p><p>Chất liệu full TPE Sillicon, hàng chuẩn Nhật Bản thương hiệu FM ♥</p>",
    soldOld: false,
    price: "220000",
    sale: "",
    isHot: false,
    material: "TPE sillicon",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1zOu0HwYW9n2zLBAPEmoXhiS0bQwCIDiq/view?usp=drive_link",
    ],
    title: "VÚ NGUYÊN KHỐI COC KIZU",
    brand: "COC",
    description:
      "<p>Trong năm 2023, COC đã ra thêm sản phẩm khuôn ngực mới dành riêng cho anh em mê ngực, được đánh giá tạo hình giống y như thật tới từng chi tiết nhỏ nhất, mềm mại có độ đàn hồi như da thật,trọng lượng như thật an toàn, cho các trải nghiệm đa dạng hóa khi gồm vếu để bóp giải tỏa căng thẳng</p><p>Updating..</p>",
    soldOld: false,
    price: "1100000",
    sale: "",
    isHot: false,
    material: "TPE sillicon",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1w0Nivf4OlxPJRFfzci_16Vpl4fBS8G_0/view?usp=drive_link",
    ],
    title: "MÔNG GIẢ KẸP ÂM ĐẠO EIMI FUKADA",
    brand: "Ingtoys",
    description:
      "<p>Mông giả kẹp âm đạo Eimi Fukada do hãng Ingtoys Nhật Bản sản xuất&nbsp;</p><p>Mông cao: 32cm&nbsp;</p><p>&nbsp;</p>",
    soldOld: false,
    price: "200000",
    sale: "",
    isHot: false,
    material: "Nhựa dẻo polymer",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1gmGN932zUVYX5oFDjzwiOhEs24DfPmh1/view?usp=drive_link",
      "https://drive.google.com/file/d/1kdm-paeBFfmpdiiO7hycABJaaB5BhaGv/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ld629Kio5nyWTS06NQChA-tCNV1NspT3/view?usp=drive_link",
      "https://drive.google.com/file/d/1ymiMLyoaEGnmIFvhZhgzh-8h4QILKtzo/view?usp=drive_link",
      "https://drive.google.com/file/d/1WQphy3OpYxDE0nUKp8CUEBemKcVwO0J5/view?usp=drive_link",
    ],
    title: "MÔNG NGUYÊN KHỐI MANTO 2.1KG",
    brand: "Ingtoys",
    description:
      "<p>Namitoys xin giới thiệu đến các bạn một mẫu mông nguyên khối nhỏ chất lượng cao với tạo hình đúc như mông thật với công nghệ đặc quyền của hãng Ingtoys</p><p>Tuy nhỏ nhưng đẹp mềm mại khắc họa đầy đủ các chi tiết nhỏ nhất như trên cơ thể người thật từ màu sắc đến độ sần trên da, các nếp nhăn ở phần âm hộ bên ngoài và khoang âm đạo bên trong.</p><p>Được làm từ chất liệu TPE cùng đội ngũ kĩ sư trẻ tuổi và kĩ thuật cao đang dần khẳng định thương hiệu mới của mình tại thị trường Nhật Bản</p><p>Được thiết kế lấy nguyên mẫu từ phần mông qua phần hông kéo dài gần đến khớp gối lấy những phần hấp dẫn và nẩy nở với kiểu dáng này bạn có thể tạo rất nhiều kiểu dáng tư thế quan hệ kiểu truyền thống, kiểu truyền giáo hay kiểu doggy la hán đẩy xe bò</p><p>Kích thước:&nbsp;</p><p>Trọng lượng:&nbsp;</p>",
    soldOld: false,
    price: "1150000",
    sale: "",
    isHot: false,
    material: "TPE sillicon",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1nKYg7NTF5Wx6psrv_QVkMaAQu5JMCU1c/view?usp=drive_link",
      "https://drive.google.com/file/d/1bxl8HD-647VV5HMxiv73Ntk8HNHuJ6so/view?usp=drive_link",
    ],
    title: "ÂM ĐẠO GIẢ SHIINA SORA HỘP LỚN",
    brand: "Ingtoys",
    description:
      '<p><span style="color:black;"><strong>Âm đạo giả thủ dâm Shiina Sora&nbsp;</strong>được thiết kế với khả năng làm tình thượng hạng từ âm đạo thật của nàng Shiina Sora idol JAV cực kỳ hấp dẫn, hiện thực hóa giấc mơ được cảm nhận sự sung sướng chân thật nhất từ nàng Shiina mang lại trong tình dục.</span></p><p><span style="color:black;">Hãng sản xuất đã làm việc cùng phong cách “cưỡi ngựa” cực phê của nàng để tích hợp lên một chiếc âm đạo giả siêu đỉnh cao dành cho nam giới trên toàn cầu, đặc biệt là dành tặng cho các fan của nàng, </span><span style="background-color:white;color:black;">thời gian sử dụng bền bỉ, lâu dài với thời gian</span><span style="color:black;"> với silicon TPE cực kỳ an toàn cho da.&nbsp;</span></p><p><span style="background-color:white;color:black;">Trọng lượng: 425gr</span></p><p><span style="background-color:white;color:black;">Kích thước: 18cm x 7cm&nbsp;</span></p><p><span style="color:black;"><i><strong>Thiết kế nhiều gai bi tạo cảm giác cực phê khi ma sát với dương vật mang lại sự sung sướng đỉnh cao chưa từng có.&nbsp;</strong></i></span></p><p><span style="color:black;"><i><strong>Âm đạo được đổ khuôn từ “bướm” thật của nàng Shiina Sora, vì vậy âm đạo bạn thấy chính là hình dáng “cô bé” của nàng đấy ạ. Rất đẹp mắt và cực kích thích với môi âm đạo chúm chím, gây ra sức hấp dẫn khó cưỡng. Ngoài ra, sản phẩm còn có chữ ký của diễn viên các bạn hâm mộ, còn chần chờ gì nữa mà không sắm ngay 1 em !&nbsp;</strong></i></span></p>',
    soldOld: false,
    price: "750000",
    sale: "",
    isHot: false,
    material: "TPE sillicon",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1F06YJOm0e8TUMnYnzuSCyllLPLQF-VrA/view?usp=drive_link",
    ],
    title: "ÂM ĐẠO GIẢ YU ASAKURA HỘP LỚN",
    brand: "Ingtoys",
    description:
      '<p><span style="background-color:white;color:black;"><i><strong>Âm đạo giả Yu Asakura&nbsp;</strong></i>lấy cảm hứng thiết kế từ chính cô nàng JAV Idol trong trẻo thuần khiết, màu sắc sản phẩm vô cùng hồng hào, mũm mĩm siêu thật mang lại cảm giác trải nghiệm giống như bạn đang quan hệ với idol mình hâm mộ. Sản phẩm được cô nàng kí hợp đồng và đúc trực tiếp với hãng Ingtoys</span></p><p><span style="background-color:white;color:black;">Bạn có thể nhìn thấy được tạo hình bên ngoài âm đạo với màu sắc hồng hào, môi bé, môi lớn với đường cong tuyệt vời mang lại sức hấp dẫn, ấn tượng ngay trong lần đầu tiên.</span></p><p><span style="background-color:white;color:black;">Trọng lượng: 430gr</span></p><p><span style="background-color:white;color:black;">Kích thước: 18cm x 7cm&nbsp;</span></p><p><span style="color:black;"><i><strong>Độ mềm mại và đàn hồi cực tốt cho cảm giác ma sát được chân thật nhất. Bên trong ruột âm đạo được thiết kế nhiều gai, bi nhằm chăm chọc “cậu nhỏ” của bạn được sung sướng hơn.&nbsp;</strong></i></span></p>',
    soldOld: false,
    price: "750000",
    sale: "",
    isHot: false,
    material: "TPE sillicon",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1X6kJbOcITg95VNZefSH5HsokQ7UFxEUX/view?usp=drive_link",
      "https://drive.google.com/file/d/1c0fqdR2gd9_BM7ea8Q8W75lpn7ownLCS/view?usp=drive_link",
      "https://drive.google.com/file/d/1v30p0-R9eQbckm_sCBu6OfMfdpcOU0E1/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZywLOrWBvsYFi6Vqd3nr_VTFu922tWCr/view?usp=drive_link",
    ],
    title: "KHUÔN MÔNG EIMI FUKADA NPG ",
    brand: "NPG",
    description:
      "<p>Đây là sản phẩm mông nguyên khối nhỏ gọn có giá thành rẻ chính hãng NPG được idol Eimi Fukada kí hợp đồng dành cho các bạn mới làm quen và sử dụng mông giả để thủ dâm tự sướng với việc mô phỏng hình ảnh Eimi bé nhỏ đang ép 2 đùi mình vào thành mông để bạn nam hành sự, đây quả thật là tư thế vô cùng khiêu khích và tạo hứng thú cao cho người sử dụng dể thủ dâm tự sướng.</p><p>Mông giả nguyên khối Eimi Fukada nhỏ xinh khép chân được làm bằng chất liệu TPE mềm mại thân thiện với da và môi trường , chất liệu này cho sản phẩm màu sắc giống da thật hồng hào không giả trân.</p><p>Với lỗ âm đạo và phần âm đạo đầy đủ gân gai các khoang như âm đạo thật,bóp khít đầy gai li ti bọt biển cho bạn cảm giác bót khít và cọ liên tục vào cậu bé dễ dàng lên đỉnh và đạt cực khoái,&nbsp;lấy nguyên mẫu từ chiếc mông mẩy tròn căng mọng đang ẩn hiện được lột ra của Eimi thật quyến rũ và khiêu khích, sản phẩm mô phòng tư thế chổng mông của nàng bạn có thể dễ dàng đưa 2 tay để thực hiện tư thế doggy một cách dễ dàng. Mềm mại trơn tru giá rẻ chính là các ưu điểm của sản phẩm.</p><p>Kích thước: 18cm x 7,5cm&nbsp;</p><p>Trọng lượng: 450g</p>",
    soldOld: false,
    price: "950000",
    sale: "",
    isHot: false,
    material: "TPE sillicon",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1KA-sGfrjLSuObOVn6bjcbN7M0qmYyweV/view?usp=drive_link",
    ],
    title: "MIỆNG GIẢ YUI HATANO INGTOYS",
    brand: "Ingtoys",
    description:
      "<p>Miệng giả JAV Idol Yui Hatano là một sản phẩm đặc biệt như thế một chiếc lưỡi dạng nguyên khối mềm mại được đúc nguyên mẫu từ Idol Nhật Bản với kích thước các bộ phận bên trong được giữ nguyên ngay cả phần lưỡi và phần cuống họng cho cảm giác như bộ phận người thật.</p><p>Điều đặc biệt ở đây là chiếc miệng Bj tạo trải nghiệm sung sướng cho nam giới không những mềm mịn đàn hôi như miệng thật mà phần lưỡi của nó có thể ngoáy tạo cảm giác như Idol đang mút liếm cho bạn, quả là thiết kế độc nhất vô nhị có một không hai.&nbsp;</p><p>Kích thước: 17,5cm x 10,5cm</p><p>Trọng lượng: 800gr</p>",
    soldOld: false,
    price: "900000",
    sale: "",
    isHot: false,
    material: "",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1fQ3M4QkQI25ZZZMAviGfEgSRokUDB1BD/view?usp=drive_link",
      "https://drive.google.com/file/d/1VUwCaoj4dV0umwtlzufY-LaxObIhpz8E/view?usp=drive_link",
      "https://drive.google.com/file/d/1nnKYWkdhMrZbk1d8-leJ5KtYq3CbQPzR/view?usp=drive_link",
      "https://drive.google.com/file/d/17HmYboYJuXj-icxfCxNyPNXI0P3kix53/view?usp=drive_link",
    ],
    title: "ÂM ĐẠO GIẢ JAV IDOL IYAZOI NPG",
    brand: "NPG",
    description:
      "<p>Đây là một trong những sản phẩm âm đạo giả Idol nổi tiếng Nhật Bản mới năm 2022 của hãng NPG một món đồ chơi tình dục có một không hai khi copy lại nguyên mẫu của một idol Nhật Bản nổi tiếng , đơn giản là không có cái thứ 2 khi người đẹp đã kí hợp đồng độc quyền, bạn có thể tưởng tượng từng thớ thịt đầy đặn từ trong ra ngoài của cô gái này&nbsp;</p><p>Tổng thể sản phẩm chắc chắn. Chất liệu đẹp và mềm, bạn cảm nhận được tất cả các đường gờ và vết lồi lõm khi bạn đẩy và nó dễ dàng lúc “hành sự”, với các thiết kế lõi âm đạo đặc biệt đem lại 3 trải nghiệm khác nhau sẽ khiến các bạn nam giới dễ dàng lên đỉnh.</p><p>Làm sạch rất đơn giản.</p><p>Kích thước: 18cmx8cmx7cm</p><p>Trọng lượng: 450g</p>",
    soldOld: false,
    price: "900000",
    sale: "",
    isHot: false,
    material: "TPE sillicon",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
  {
    image: [
      "https://drive.google.com/file/d/1rL0lXtLZNEj6fh5BHE6q0WOD1HPuCuYS/view?usp=drive_link",
      "https://drive.google.com/file/d/16i2h0XHsCAWLg9nqDLQnNJcItK8Gdl-1/view?usp=drive_link",
      "https://drive.google.com/file/d/1rsJHlfES1pIgZuTtSnjaqGlw4EHPC-08/view?usp=drive_link",
      "https://drive.google.com/file/d/1An6LRCN1jzBK9kYSSWN9Ev-5fLkdpQBd/view?usp=drive_link",
      "https://drive.google.com/file/d/1QBZggAK7D_Xx2bY_lDiuY0hmqfDkC1sc/view?usp=drive_link",
    ],
    title: "ÂM ĐẠO GIẢ JAV IDOL NANASAWA MIA ",
    brand: "NPG",
    description:
      "<p>Đây là một trong những sản phẩm âm đạo giả Idol nổi tiếng Nhật Bản mới năm 2022 của hãng NPG một món đồ chơi tình dục có một không hai khi copy lại nguyên mẫu của một idol Nhật Bản nổi tiếng , đơn giản là không có cái thứ 2 khi người đẹp đã kí hợp đồng độc quyền, bạn có thể tưởng tượng từng thớ thịt đầy đặn từ trong ra ngoài của cô gái này&nbsp;</p><p>Bên trong gồm các nếp gấp mỏng đan xen với các viên bi nổi siêu dày đặc , công nghệ Uchi nổi tiếng của hãng NPG sẽ đưa bạn từ thiên đường này đến thiên đường khác khi tái tạo giống đến 99% của em Nanasawa Mia.&nbsp;</p><p>Lối vào là nơi các nếp gấp mỏng liên tục “chà sát” trên đầu kiu và ôm sát vào thân dương vật của anh em, chưa kể lối vào và khu vực của bi nổi dày đặc, bảo đảm kích thích vô cùng. Vào sâu 1 tí, các viên bi nổi sẽ bao quanh dương vật của anh em từ tứ phía, từ đầu đến cuối đều phê không tưởng.&nbsp;</p><p>Thiết kế mái vòm và các nếp gấp xoay tròn sẽ vặn chặt siêu phê khi anh em đút hết dương vật vào trong.</p><p>Kích thước: 15cm x 7,5cm</p><p>Trọng lượng: 450g</p><p>&nbsp;</p>",
    soldOld: false,
    price: "950000",
    sale: "",
    isHot: false,
    material: "TPE sillicon",
    gender: "Nam",
    type: {
      _id: "64607f556375d21ab96f6467",
      name: "Âm đạo giả",
    },
  },
];
