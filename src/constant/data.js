export const menuItems = [
  {
    isHeadr: true,
    title: 'งานทะเบียนธุรกิจนำเที่ยวและมัคคุเทศก์',
  },
  {
    title: 'Dashboard',
    isHide: true,
    icon: 'carbon:home',
    link: 'dashboard',
  },
  {
    isHeadr: true,
    title: 'MENU',
  },

/*   {
    title: 'ระบบบริการ',
    isHide: true,
    icon: 'ion:file-tray-outline',
    link: 'servicepage',
  }, */
  {
    title: 'ระบบบริการ',
    icon: 'ion:file-tray-outline',
    link: '#',
    isHide: true,
    child: [
      {
        childtitle: 'งานรับเรื่อง/บันทึกข้อมูล',
        childlink: 'servicepage',
      },
      {
        childtitle: 'งานตรวจสอบข้อกฎหมาย',
        childlink: 'servicelawpage',
      },
      {
        childtitle: 'นายทะเบียน',
        childlink: 'serviceregistrarpage',
      },
    ],
  },
  {
    title: 'งานการเงิน',
    isHide: true,
    icon: 'lucide:file-edit',
    link: 'financepage',
  },



  {
    title: 'งานพิมพ์ใบอนุญาต',
    icon: 'codicon:file',
    link: '#',
    isHide: true,
    child: [
      {
        childtitle: 'ธุรกิจนำเที่ยว',
        childlink: 'licenseprintpage',
      },
      {
        childtitle: 'มัคคุเทศก์',
        childlink: 'revocationpage',
      },
      {
        childtitle: 'ผู้นำเที่ยว',
        childlink: 'regulatoryoffencepage',
      },
    ],
  },


  {
    title: 'ทะเบียนใบอนุญาต',
    icon: 'formkit:file',
    link: '#',
    isHide: true,
    child: [
      {
        childtitle: 'ธุรกิจนำเที่ยว',
        childlink: 'tourbusiness',
      },
      {
        childtitle: 'มัคคุเทศก์',
        childlink: 'guide',
      },
      {
        childtitle: 'ผู้นำเที่ยว',
        childlink: 'tourleader',
      },
    ],
  },
  {
    title: 'งานรับเรื่องร้องเรียนกลาง',
    isHide: true,
    icon: 'mingcute:service-line',
    link: 'central-office-complain',
  },
  {
    title: 'งานรับเรื่องร้องเรียนสาขา',
    isHide: true,
    icon: 'mingcute:service-line',
    link: 'branch-office-complain',
  },
  {
    title: 'งานรับเรื่องร้องเรียนนิติกร',
    isHide: true,
    icon: 'mingcute:service-line',
    link: 'lawyer-complain',
  },

  
  {
    title: "การพักใช้เพิกถอนใบอนุญาต",
    icon: "material-symbols:file-copy-outline",
    link: "#",
    child: [
     
      {
        childtitle: "พักใช้ใบอนุญาต",
       
        multi_menu: [
          {
            multiTitle: "ธุรกิจนำเที่ยว",
            multiLink: "tourbusiness-suspensionpage",
          },
          {
            multiTitle: "มัคคุเทศก์",
            multiLink: "guide-suspensionpage",
          },
          {
            multiTitle: "ผู้นำเที่ยว",
            multiLink: "tourleader-suspensionpage",
          },
        ],
      },
      {
        childtitle: "เพิกถอนใบอนุญาต",
    
        multi_menu: [
          {
            multiTitle: "ธุรกิจนำเที่ยว",
            multiLink: "tourbusiness-revocationpage",
          },
          {
            multiTitle: "มัคคุเทศก์",
            multiLink: "guide-revocationpage",
          },
          {
            multiTitle: "ผู้นำเที่ยว",
            multiLink: "tourleader-revocationpage",
          },
        ],
      },
      {
        childtitle: 'ความผิดทางพินัย',
        childlink: 'regulatoryoffencepage',
      },
    ],
  },


  {
    title: 'รายงานสถิติ',
    icon: 'carbon:analytics',
    isHide: true,
    link: '#',
    child: [
      {
        childtitle: 'การอนุมัติใบอนุญาต',
        childlink: 'statistics-license',
      },
      {
        childtitle: 'การพักใช้เพิกถอนใบอนุญาต',
        childlink: 'statistics-suspension-revocation',
      },
      {
        childtitle: 'การรับเรื่องร้องเรียน',
        childlink: 'statistics-complain',
      },
      {
        childtitle: 'ข้อมูลความสามารถด้านภาษา',
        childlink: 'statistics-language',
      },
      {
        childtitle: 'จำนวนผู้ประกอบธุรกิจนำเที่ยว มัคคุเทศก์ และผู้นำเที่ยว',
        childlink: 'statistics-entrepreneur',
      },
    ],
  },
  {
    title: 'รายงานการเงิน',
    icon: 'material-symbols-light:finance-rounded',
    isHide: true,
    link: '#',
    child: [
      {
        childtitle: 'การชำระค่าธรรมเนียม',
        childlink: 'finance-statistics-charge',
      },
      {
        childtitle: 'การวางหลักประกัน',
        childlink: 'finance-statistics-guarantee',
      },
    ],
  },
  {
    title: 'นำเข้าข้อมูล',
    isHide: true,
    icon: 'heroicons:arrow-down-on-square',
    link: 'importdatapage',
  },
  {
    title: 'กำหนดปฏิทิน',
    isHide: true,
    icon: 'heroicons-outline:calendar',
    link: 'set-calendar',
  },

  {
    title: 'กำหนดค่าธรรมเนียม',
    isHide: true,
    icon: 'heroicons:pencil-square',
    link: 'set-charge',
  },
  {
    title: 'กำหนดหลักประกัน',
    isHide: true,
    icon: 'heroicons:pencil-square',
    link: 'set-guarantee',
  },
  {
    title: 'จัดการผู้ใช้งาน',
    isHide: true,
    icon: 'heroicons:users',
    link: 'usermanagement',
  },


  {
    title: 'จัดการสำนักงานสาขา',
    isHide: true,
    icon: 'arcticons:office-reader',
    link: 'branchmanagement',
  },

/*   {
    title: 'Home',
    isHide: true,
    icon: 'arcticons:office-reader',
    link: 'home',
  }, */
 /*  {
    title: 'Profile',
    isHide: true,
    icon: 'arcticons:office-reader',
    link: 'profile',
  }, */
 
   {
    isHeadr: true,
    title: 'Pages ประชาชน',
  },
  {
    title: 'ธุรกิจนำเที่ยว',
    isHide: true,

    icon: 'heroicons-outline:document',
    link: '#',
    child: [
      {
        childtitle: 'บุคคลธรรมดา',

        multi_menu: [
          {
            multiTitle: 'บริการยื่นคำขอใบอนุญาตประกอบธุรกิจนำเที่ยว',
            multiLink: 'individual-request-form',
          },
          {
            multiTitle: 'บริการยื่นคำขอต่ออายุใบอนุญาตประกอบธุรกิจนำเที่ยว',
            multiLink: 'individual-renewal-form',
          },
          {
            multiTitle: 'บริการยื่นคำขอใบแทนใบอนุญาตประกอบธุรกิจนำเที่ยว',
            multiLink: 'individual-replacing-form',
          },
          {
            multiTitle:
              'บริการยื่นคำขอเปลี่ยนแปลงรายการเกี่ยวกับการประกอบธุรกิจนำเที่ยว',
            multiLink: 'individual-list-change-form',
          },
          {
            multiTitle:
              'บริการยื่นคำขอยกเลิกการประกอบกิจการและขอรับหลักประกันคืน',
            multiLink: 'individual-business-cencel-form',
          },
          {
            multiTitle: 'บริการเปลี่ยนแปลงหลักประกันที่วางไว้ต่อนายทะเบียน',
            multiLink: 'individual-guarantee-change-form',
          },
          {
            multiTitle:
              'บริการขอเพิ่มหรือขอรับคืนหลักประกันที่วางไว้ต่อนายทะเบียน ตามกฎกระทรวงปี 2563',
            multiLink: 'individual-guarantee-increase-decrease-form',
          },
        ],
      },
      {
        childtitle: 'นิติบุคคล',
        isHide: true,
        multi_menu: [
          {
            multiTitle: 'บริการยื่นคำขอใบอนุญาตประกอบธุรกิจนำเที่ยว',
            multiLink: 'juristic-request-form',
          },
          {
            multiTitle: 'บริการยื่นคำขอต่ออายุใบอนุญาตประกอบธุรกิจนำเที่ยว',
            multiLink: 'juristic-renewal-form',
          },
          {
            multiTitle: 'บริการยื่นคำขอใบแทนใบอนุญาตประกอบธุรกิจนำเที่ยว',
            multiLink: 'juristic-replacing-form',
          },
          {
            multiTitle:
              'บริการยื่นคำขอเปลี่ยนแปลงรายการเกี่ยวกับการประกอบธุรกิจนำเที่ยว',
            multiLink: 'juristic-list-change-form',
          },
          {
            multiTitle:
              'บริการยื่นคำขอยกเลิกการประกอบกิจการและขอรับหลักประกันคืน',
            multiLink: 'juristic-business-cencel-form',
          },
          {
            multiTitle: 'บริการเปลี่ยนแปลงหลักประกันที่วางไว้ต่อนายทะเบียน',
            multiLink: 'juristic-guarantee-change-form',
          },
          {
            multiTitle:
              'บริการขอเพิ่มหรือขอรับคืนหลักประกันที่วางไว้ต่อนายทะเบียน ตามกฎกระทรวงปี 2563',
            multiLink: 'juristic-guarantee-increase-decrease-form',
          },
        ],
      },
    ],
  }, 
  /* 
  {
    title: 'มัคคุเทศก์',
    isHide: true,
    icon: 'heroicons-outline:document',
    link: '#',
    child: [
      {
        childtitle: 'บริการยื่นคำขอใบอนุญาตเป็นมัคคุเทศก์',
        childlink: 'form-request',
      },
      {
        childtitle: 'บริการยื่นคำขอต่ออายุใบอนุญาตเป็นมัคคุเทศก์',
        childlink: 'form-renewal',
      },
      {
        childtitle: 'บริการยื่นคำขอใบแทนใบอนุญาตเป็นมัคคุเทศก์',
        childlink: 'form-replacing',
      },
      {
        childtitle:
          'บริการยื่นคำขอเปลี่ยนแปลงรายการสถานะหรือเปลี่ยนแปลงประวัติอื่นใด',
        childlink: 'form-list-change',
      },
    ],
  },  */
  /* {
    title: 'ผู้นำเที่ยว',
    isHide: true,
    icon: 'heroicons-outline:document',
    link: '#',
    child: [
      {
        childtitle: 'บริการยื่นคำขอขึ้นทะเบียนเป็นผู้นำเที่ยว',
        childlink: 'request-form',
      },
      {
        childtitle:
          'บริการยื่นคำขอออกบัตรประจำตัวผู้นำเที่ยวใหม่ เนื่องจากสูญหาย ถูกทำลายหรือชำรุดในสาระสำคัญ หรือเนื่องจากเปลี่ยนชื่อตัวหรือชื่อสกุล',
        childlink: 'list-change-form',
      },
    ],
  }, */
/*  {
    title: 'รับเรื่องร้องเรียน',
    isHide: true,
    icon: 'heroicons-outline:document',
    link: '#',
    child: [
      {
        childtitle: 'แจ้งเรื่องร้องเรียน',
        childlink: 'write-complaint',
      },
      {
        childtitle: ' ติดตามสถานะการร้องเรียน',
        childlink: 'track-status',
      },
    ],
  },
 */
  /* {
    isHeadr: true,
    title: 'Elements',
  }, */
 {
    title: 'Authentication',
    icon: 'heroicons-outline:lock-closed',
    link: '#',
    child: [
      {
        childtitle: 'Signin One',
        childlink: '/',
      },
      {
        childtitle: 'Signin Two',
        childlink: '/login2',
      },
      {
        childtitle: 'Signin Three',
        childlink: '/login3',
      },
      {
        childtitle: 'Signup One',
        childlink: '/reg',
      },

      {
        childtitle: 'Forget Password',
        childlink: '/forgot-password3',
      },
    ],
  }, 
];



/* export const products = [
  
];
 */