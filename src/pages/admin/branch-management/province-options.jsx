// ตัวอย่างข้อมูล options
const OPTIONS = [
{
  id: '1',
  label: 'กรุงเทพมหานคร',
  value: 'Bangkok',
 },
{
  id: '2',
  label: 'สมุทรปราการ',
  value: 'Samut Prakan',
},
{
  id: '3',
  label: 'นนทบุรี',
  value: 'Nonthaburi',
 },
{
  id: '4',
  label: 'ปทุมธานี',
  value: 'Pathum Thani',
},
{
  id: '5',
  label: 'พระนครศรีอยุธยา',
  value: 'Phra Nakhon Si Ayutthaya',
},
{
  id: '6',
  label: 'อ่างทอง',
  value: 'Ang Thong',
},
{
  id: '7',
  label: 'ลพบุรี',
  value: 'Loburi',
},
{
  id: '8',
  label: 'สิงห์บุรี',
  value: 'Sing Buri',
},
{
  id: '9',
  label: 'ชัยนาท',
  value: 'Chai Nat',
},
{
  id: '10',
  label: 'สระบุรี',
  value: 'Saraburi',
},
{
  id: '11',
  label: 'ชลบุรี',
  value: 'Chon Buri',
},
{
  id: '12',
  label: 'ระยอง',
  value: 'Rayong',
},
{
  id: '13',
  label: 'จันทบุรี',
  value: 'Chanthaburi',
},
{
  id: '14',
  label: 'ตราด',
  value: 'Trat',
},
{
  id: '15',
  label: 'ฉะเชิงเทรา',
  value: 'Chachoengsao',
},
{
  id: '16',
  label: 'ปราจีนบุรี',
  value: 'Prachin Buri',
},
{
  id: '17',
  label: 'นครนายก',
  value: 'Nakhon Nayok',
},
{
  id: '18',
  label: 'สระแก้ว',
  value: 'Sa Kaeo',
},
{
  id: '19',
  label: 'นครราชสีมา',
  value: 'Nakhon Ratchasima',
},
{
  id: '20',
  label: 'บุรีรัมย์',
  value: 'Buri Ram',
},
{
  id: '21',
  label: 'สุรินทร์',
  value: 'Surin',
},
{
  id: '22',
  label: 'ศรีสะเกษ',
  value: 'Si Sa Ket',
},
{
  id: '23',
  label: 'อุบลราชธานี',
  value: 'Ubon Ratchathani',
},
{
  id: '24',
  label: 'ยโสธร',
  value: 'Yasothon',
},
{
  id: '25',
  label: 'ชัยภูมิ',
  value: 'Chaiyaphum',
},
{
  id: '26',
  label: 'อำนาจเจริญ',
  value: 'Amnat Charoen',
},
{
  id: '27',
  label: 'หนองบัวลำภู',
  value: 'Nong Bua Lam Phu',
},
{
  id: '28',
  label: 'ขอนแก่น',
  value: 'Khon Kaen',
},
{
  id: '29',
  label: 'อุดรธานี',
  value: 'Udon Thani',
},
{
  id: '30',
  label: 'เลย',
  value: 'Loei',
},
{
  id: '31',
  label: 'หนองคาย',
  value: 'Nong Khai',
},
{
  id: '32',
  label: 'มหาสารคาม',
  value: 'Maha Sarakham',
},
{
  id: '33',
  label: 'ร้อยเอ็ด',
  value: 'Roi Et',
},
{
  id: '34',
  label: 'กาฬสินธุ์',
  value: 'Kalasin',
},
{
  id: '35',
  label: 'สกลนคร',
  value: 'Sakon Nakhon',
},
{
  id: '36',
  label: 'นครพนม',
  value: 'Nakhon Phanom',
},
{
  id: '37',
  label: 'มุกดาหาร',
  value: 'Mukdahan',
},
{
  id: '38',
  label: 'เชียงใหม่',
  value: 'Chiang Mai',
},
{
  id: '39',
  label: 'ลำพูน',
  value: 'Lamphun',
},
{
  id: '40',
  label: 'ลำปาง',
  value: 'Lampang',
},
{
  id: '41',
  label: 'อุตรดิตถ์',
  value: 'Uttaradit',
},
{
  id: '42',
  label: 'แพร่',
  value: 'Phrae',
},
{
  id: '43',
  label: 'น่าน',
  value: 'Nan',
},
{
  id: '44',
  label: 'พะเยา',
  value: 'Phayao',
},
{
  id: '45',
  label: 'เชียงราย',
  value: 'Chiang Rai',
},
{
  id: '46',
  label: 'แม่ฮ่องสอน',
  value: 'Mae Hong Son',
},
{
  id: '47',
  label: 'นครสวรรค์',
  value: 'Nakhon Sawan',
},
{
  id: '48',
  label: 'อุทัยธานี',
  value: 'Uthai Thani',
},
{
  id: '49',
  label: 'กำแพงเพชร',
  value: 'Kamphaeng Phet',
},
{
  id: '50',
  label: 'ตาก',
  value: 'Tak',
},
{
  id: '51',
  label: 'สุโขทัย',
  value: 'Sukhothai',
},
{
  id: '52',
  label: 'พิษณุโลก',
  value: 'Phitsanulok',
},
{
  id: '53',
  label: 'พิจิตร',
  value: 'Phichit',
},
{
  id: '54',
  label: 'เพชรบูรณ์',
  value: 'Phetchabun',
},
{
  id: '55',
  label: 'ราชบุรี',
  value: 'Ratchaburi',
},
{
  id: '56',
  label: 'กาญจนบุรี',
  value: 'Kanchanaburi',
},
{
  id: '57',
  label: 'สุพรรณบุรี',
  value: 'Suphan Buri',
},
{
  id: '58',
  label: 'นครปฐม',
  value: 'Nakhon Pathom',
},
{
  id: '59',
  label: 'สมุทรสาคร',
  value: 'Samut Sakhon',
},
{
  id: '60',
  label: 'สมุทรสงคราม',
  value: 'Samut Songkhram',
},
{
  id: '61',
  label: 'เพชรบุรี',
  value: 'Phetchaburi',
},
{
  id: '62',
  label: 'ประจวบคีรีขันธ์',
  value: 'Prachuap Khiri Khan',
},
{
  id: '63',
  label: 'นครศรีธรรมราช',
  value: 'Nakhon Si Thammarat',
},
{
  id: '64',
  label: 'กระบี่',
  value: 'Krabi',
},
{
  id: '65',
  label: 'พังงา',
  value: 'Phangnga',
},
{
  id: '66',
  label: 'ภูเก็ต',
  value: 'Phuket',
},
{
  id: '67',
  label: 'สุราษฎร์ธานี',
  value: 'Surat Thani',
},
{
  id: '68',
  label: 'ระนอง',
  value: 'Ranong',
},
{
  id: '69',
  label: 'ชุมพร',
  value: 'Chumphon',
},
{
  id: '70',
  label: 'สงขลา',
  value: 'Songkhla',
},
{
  id: '71',
  label: 'สตูล',
  value: 'Satun',
},
{
  id: '72',
  label: 'ตรัง',
  value: 'Trang',
},
{
  id: '73',
  label: 'พัทลุง',
  value: 'Phatthalung',
},
{
  id: '74',
  label: 'ปัตตานี',
  value: 'Pattani',
},
{
  id: '75',
  label: 'ยะลา',
  value: 'Yala',
},
{
  id: '76',
  label: 'นราธิวาส',
  value: 'Narathiwat',
},
{
  id: '77',
  label: 'บึงกาฬ',
  value: 'buogkan',
},


];

export default OPTIONS;
