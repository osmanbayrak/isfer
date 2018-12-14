"use strict";


angular.module('myApp')
.constant('i18n', {
   en: {
       'search': 'Search',
       'en': 'EN',
       'tr': 'TR',
       'products': 'Products',
       'about': 'About',
       'home': 'Home',
       'corporate': 'Corporate',
       'activities': 'Activities',
       'applications': 'Applications',
       'flat_products': 'Flat Products',
       'long_products': 'Long Products',
       'profiles': 'Profiles',
       'decorative_irons': 'Decorative İrons',
       'my_cart': 'My Cart',
       'tech_info': 'Technical Informations',
       'weight_cal': 'Weight Calculation',
       'quality_certificates': 'Quality Certificates',
       'contact': 'Contact',
       'product_groups': 'Product Groups',
       'bottom_menu_content1': 'Sıcak Hadde Rulo, Sıcak Hadde Levha, Soğuk Hadde Rulo, Soğuk Hadde Levha ve Paket,' +
           ' Galvanizli Levha Sac, Boyalı Levha Sac, Galcanizli Rulo Sac, Boyalı Rulo Sac, Baklavalı Sac, Gözyaşı Desenli Sac',
           'bottom_menu_content2': 'Filmaşin, Nervürlü Çelik, Çelik Hasır, Köşebent, Lama, Sıcak Çekme Kare Demir, Soğuk ' +
           'Çekme Kare Demir, Putrel Demirler, Dikdörtgen Profil, Yuvarlak Profil, T Profil, IPN, UPN IPE, UPE HEA, HEB',
       'bottom_menu_content3': 'Geniş Çaplı Borular, Su Boruları, Doğal Gaz Boruları, Dikişli Sanayi Boruları, Hassas' +
           ' Borular, Çelik Çekme Borular, Galvanizli Borular, Spiral Kaynaklı Borular, Konstrüksiyon Boruları, Kazan Boruları',
           'bottom_menu_content4': 'Motifler, Panolar, Cumbalar, Boğumlu Demirler, Halkalar, Rozetler, Mızraklar, Topuzlar,' +
           ' Yapraklar, Yapraklı Parça Motifler,Küpeşteler ve Kelepçeler, Kapı Kilit Sacı ve Kapı Kilit Kolları',
       'shr': 'Sıcak Haddelenmiş Rulo',
       'shl': 'Sıcak Haddelenmiş Levha Sac',
       'dkp': 'Soğuk Haddelenmiş(DKP) Rulo',
       'hr': 'HRP Rulo',
       'gr': 'Galvanizli Rulo',
       'bs': 'Boyalı Sac',
       'bgd': 'Baklavalı / Gözyaşı Desenli Sac',
       'tos': 'Trapez / Oluklu Sac',
       'shr_desc': 'at an elevated temperature above 1700 F and above, which is above the recrystallization temperature of the steel. When the steel is above its recrystallization temperature, it can be shaped and sized. Hot rolled sheet (steel) is generally cheaper than cold rolled steel since there is no pause and no re-heating during production. When the steel is cooled, it shrinks to a certain extent and thus controls the size and shape of the final product less than the cold rolled product.',
       'shr_usage': 'Hot Rolled Sheets are mainly used in various fields such as ship building, power transmission lines, pipe and profile production, construction, highway barriers and plates, container and machinery manufacturing industry.',
       'shl_desc': 'at an elevated temperature above 1700 F and above, which is above the recrystallization temperature of the steel. When the steel is above its recrystallization temperature, it can be shaped and sized. Hot rolled sheet (steel) is generally cheaper than cold rolled steel since there is no pause and no re-heating during production. When the steel is cooled, it shrinks to a certain extent and thus controls the size and shape of the final product less than the cold rolled product.',
       'shl_usage': 'Hot Rolled Sheets are mainly used in various fields such as ship building, power transmission lines, pipe and profile production, construction, highway barriers and plates, container and machinery manufacturing industry.',
       'dkp_desc': 'at an elevated temperature above 1700 F and above, which is above the recrystallization temperature of the steel. When the steel is above its recrystallization temperature, it can be shaped and sized. Hot rolled sheet (steel) is generally cheaper than cold rolled steel since there is no pause and no re-heating during production. When the steel is cooled, it shrinks to a certain extent and thus controls the size and shape of the final product less than the cold rolled product.',
       'dkp_usage': 'Hot Rolled Sheets are mainly used in various fields such as ship building, power transmission lines, pipe and profile production, construction, highway barriers and plates, container and machinery manufacturing industry.',
       'hr_desc': 'at an elevated temperature above 1700 F and above, which is above the recrystallization temperature of the steel. When the steel is above its recrystallization temperature, it can be shaped and sized. Hot rolled sheet (steel) is generally cheaper than cold rolled steel since there is no pause and no re-heating during production. When the steel is cooled, it shrinks to a certain extent and thus controls the size and shape of the final product less than the cold rolled product.',
       'hr_usage': 'Hot Rolled Sheets are mainly used in various fields such as ship building, power transmission lines, pipe and profile production, construction, highway barriers and plates, container and machinery manufacturing industry.',
       'gr_desc': 'at an elevated temperature above 1700 F and above, which is above the recrystallization temperature of the steel. When the steel is above its recrystallization temperature, it can be shaped and sized. Hot rolled sheet (steel) is generally cheaper than cold rolled steel since there is no pause and no re-heating during production. When the steel is cooled, it shrinks to a certain extent and thus controls the size and shape of the final product less than the cold rolled product.',
       'gr_usage': 'Hot Rolled Sheets are mainly used in various fields such as ship building, power transmission lines, pipe and profile production, construction, highway barriers and plates, container and machinery manufacturing industry.',
       'bs_desc': 'at an elevated temperature above 1700 F and above, which is above the recrystallization temperature of the steel. When the steel is above its recrystallization temperature, it can be shaped and sized. Hot rolled sheet (steel) is generally cheaper than cold rolled steel since there is no pause and no re-heating during production. When the steel is cooled, it shrinks to a certain extent and thus controls the size and shape of the final product less than the cold rolled product.',
       'bs_usage': 'Hot Rolled Sheets are mainly used in various fields such as ship building, power transmission lines, pipe and profile production, construction, highway barriers and plates, container and machinery manufacturing industry.',
       'bgd_desc': 'at an elevated temperature above 1700 F and above, which is above the recrystallization temperature of the steel. When the steel is above its recrystallization temperature, it can be shaped and sized. Hot rolled sheet (steel) is generally cheaper than cold rolled steel since there is no pause and no re-heating during production. When the steel is cooled, it shrinks to a certain extent and thus controls the size and shape of the final product less than the cold rolled product.',
       'bgd_usage': 'Hot Rolled Sheets are mainly used in various fields such as ship building, power transmission lines, pipe and profile production, construction, highway barriers and plates, container and machinery manufacturing industry.',
       'tos_desc': 'at an elevated temperature above 1700 F and above, which is above the recrystallization temperature of the steel. When the steel is above its recrystallization temperature, it can be shaped and sized. Hot rolled sheet (steel) is generally cheaper than cold rolled steel since there is no pause and no re-heating during production. When the steel is cooled, it shrinks to a certain extent and thus controls the size and shape of the final product less than the cold rolled product.',
       'tos_usage': 'Hot Rolled Sheets are mainly used in various fields such as ship building, power transmission lines, pipe and profile production, construction, highway barriers and plates, container and machinery manufacturing industry.',
       'about_content': 'Ulusal ve uluslararası mevzuat ve standartlara uygun, kaliteli ürünleri müşterilerimize sunmayı,\n' +
           'Müşterilerimizin ihtiyaç ve beklentilerini standart bir kalite anlayışıyla karşılamayı,\n' +
           'Müşteri memnuniyetinin sürekliliğini sağlamak ve memnuniyeti arttırmayı,\n' +
           'Süreçlerimizin tamamında sürekli iyileştirmelerle müşteri odaklı çalışmayı şirket politikası olarak kabul etmek, tüm prosesleri Kalite Yönetim Sistemi ve İSG uygulamalarının etkinliğinin sürekli iyileştirilmesini sağlamayı,\n' +
           'Dış tedarikçilerimize ve müşterilerimize olan taahhütlerimizi yerine eksiksiz getirerek ilişkilerimizde güven vermeyi,\n' +
           'Çalışanlarımızın memnuniyetini her zaman ön planda tutarak onların her türlü sosyal haklarını desteklemek, yasal mevzuat gereği haklarını vermek ve  onların sağlığını gözeten güvenli bir çalışma ortamı sunmak, takım ruhu ile çalışanlarına büyük bir markanın bireyi olduğunu hissettirmeyi,\n' +
           'Firmamız uygulamış olduğu tüm prosesleri Risk Temelli Düşünceyi esas alarak yönetmek.\n' +
           'Sürdürülebilir büyüme için hedef pazarlardaki müşteri beklentilerini ve gelecekteki pazar ihtiyaçlarını takip ederek müşteri memnuniyetini sağlamayı,\n' +
           'Fark ve değer yaratan büyük bir marka olmayı,\n' +
           'Belirlenen hedeflere ulaşılması için tedarikçilerimize gereken desteği sağlamayı,\n' +
           'TÜM MÜŞTERİLERİNE,ÇALIŞANLARINA VE TEDARİKÇİLERİNE TAAAHHÜT EDER.',
       'activities_content': 'Tüm uzun / yassı / boru profil çelik ürünlerinin iç ve dış ticareti. 1-25x2000mm' +
           ' Boy kesme ve 1-6x1650mm dilme hatlarına sahip Çelik Servis Merkezi, Siyah, DKP, Galvanizli sacdan boru / ' +
           'profil üretimi (0,8-3mm et kalınlığında 18-76 mm boru, 15x15mm-60x60mm kare / 10x20-40x80mm dikdörtgen kutu profil)'

   },
    tr: {
        'search': 'Site içi arama',
        'tr': 'TR',
        'en': 'EN',
        'products': 'Ürünler',
        'about': 'Hakkımızda',
        'home': 'Anasayfa',
        'corporate': 'Kurumsal',
        'activities': 'Faaliyetler',
        'applications': 'Uygulamalar',
        'flat_products': 'Yassı Mamüller',
        'long_products': 'Uzun Mamüller',
        'profiles': 'Profiller',
        'decorative_irons': 'Dekoratif Demirler',
        'my_cart': 'Sepetim',
        'tech_info': 'Teknik Bilgiler',
        'weight_cal': 'Ağırlık Hesaplama',
        'quality_certificates': 'Kalite Belgeleri',
        'contact': 'İletişim',
        'product_groups': 'Ürün Grupları',
        'bottom_menu_content1': 'Sıcak Hadde Rulo, Sıcak Hadde Levha, Soğuk Hadde Rulo, Soğuk Hadde Levha ve Paket,' +
            ' Galvanizli Levha Sac, Boyalı Levha Sac, Galcanizli Rulo Sac, Boyalı Rulo Sac, Baklavalı Sac, Gözyaşı Desenli Sac',
            'bottom_menu_content2': 'Filmaşin, Nervürlü Çelik, Çelik Hasır, Köşebent, Lama, Sıcak Çekme Kare Demir, Soğuk ' +
            'Çekme Kare Demir, Putrel Demirler, Dikdörtgen Profil, Yuvarlak Profil, T Profil, IPN, UPN IPE, UPE HEA, HEB',
        'bottom_menu_content3': 'Geniş Çaplı Borular, Su Boruları, Doğal Gaz Boruları, Dikişli Sanayi Boruları, Hassas' +
            ' Borular, Çelik Çekme Borular, Galvanizli Borular, Spiral Kaynaklı Borular, Konstrüksiyon Boruları, Kazan Boruları',
            'bottom_menu_content4': 'Motifler, Panolar, Cumbalar, Boğumlu Demirler, Halkalar, Rozetler, Mızraklar, Topuzlar,' +
            ' Yapraklar, Yapraklı Parça Motifler,Küpeşteler ve Kelepçeler, Kapı Kilit Sacı ve Kapı Kilit Kolları',

        // Product Names**********************
        'shr': 'Sıcak Haddelenmiş Rulo',
        'shl': 'Sıcak Haddelenmiş Levha Sac',
        'dkp': 'Soğuk Haddelenmiş(DKP) Rulo',
        'hr': 'HRP Rulo',
        'gr': 'Galvanizli Rulo',
        'bs': 'Boyalı Sac',
        'bgd': 'Baklavalı / Gözyaşı Desenli Sac',
        'tos': 'Trapez / Oluklu Sac',

        // Descriptions and Usage **************************
        'shr_desc': 'çeliğin yeniden kristalleşme sıcaklığının üstünde olan yüksek bir sıcaklıkta (1700 F ve üzeri) ' +
            'haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme sıcaklığının üzerinde olduğunda, ' +
            'şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik) genellikle üretim esnasında herhangi' +
            ' bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş çeliğe göre daha ucuzdur. ' +
            'Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve şeklini soğuk haddelenmiş' +
            ' ürüne göre daha az kontrol eder.',
        'shr_usage': 'Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, ' +
            'inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır.',
        'shl_desc': 'çeliğin yeniden kristalleşme sıcaklığının üstünde olan yüksek bir sıcaklıkta (1700 F ve üzeri) ' +
            'haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme sıcaklığının üzerinde olduğunda, ' +
            'şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik) genellikle üretim esnasında herhangi' +
            ' bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş çeliğe göre daha ucuzdur. ' +
            'Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve şeklini soğuk haddelenmiş' +
            ' ürüne göre daha az kontrol eder.',
        'shl_usage': 'Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, ' +
            'inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır.',
        'dkp_desc': 'çeliğin yeniden kristalleşme sıcaklığının üstünde olan yüksek bir sıcaklıkta (1700 F ve üzeri) ' +
            'haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme sıcaklığının üzerinde olduğunda, ' +
            'şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik) genellikle üretim esnasında herhangi' +
            ' bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş çeliğe göre daha ucuzdur. ' +
            'Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve şeklini soğuk haddelenmiş' +
            ' ürüne göre daha az kontrol eder.',
        'dkp_usage': 'Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, ' +
            'inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır.',
        'hr_desc': 'çeliğin yeniden kristalleşme sıcaklığının üstünde olan yüksek bir sıcaklıkta (1700 F ve üzeri) ' +
            'haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme sıcaklığının üzerinde olduğunda, ' +
            'şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik) genellikle üretim esnasında herhangi' +
            ' bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş çeliğe göre daha ucuzdur. ' +
            'Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve şeklini soğuk haddelenmiş' +
            ' ürüne göre daha az kontrol eder.',
        'hr_usage': 'Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, ' +
            'inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır.',
        'gr_desc': 'çeliğin yeniden kristalleşme sıcaklığının üstünde olan yüksek bir sıcaklıkta (1700 F ve üzeri) ' +
            'haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme sıcaklığının üzerinde olduğunda, ' +
            'şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik) genellikle üretim esnasında herhangi' +
            ' bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş çeliğe göre daha ucuzdur. ' +
            'Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve şeklini soğuk haddelenmiş' +
            ' ürüne göre daha az kontrol eder.',
        'gr_usage': 'Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, ' +
            'inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır.',
        'bs_desc': 'çeliğin yeniden kristalleşme sıcaklığının üstünde olan yüksek bir sıcaklıkta (1700 F ve üzeri) ' +
            'haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme sıcaklığının üzerinde olduğunda, ' +
            'şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik) genellikle üretim esnasında herhangi' +
            ' bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş çeliğe göre daha ucuzdur. ' +
            'Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve şeklini soğuk haddelenmiş' +
            ' ürüne göre daha az kontrol eder.',
        'bs_usage': 'Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, ' +
            'inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır.',
        'bgd_desc': 'çeliğin yeniden kristalleşme sıcaklığının üstünde olan yüksek bir sıcaklıkta (1700 F ve üzeri) ' +
            'haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme sıcaklığının üzerinde olduğunda, ' +
            'şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik) genellikle üretim esnasında herhangi' +
            ' bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş çeliğe göre daha ucuzdur. ' +
            'Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve şeklini soğuk haddelenmiş' +
            ' ürüne göre daha az kontrol eder.',
        'bgd_usage': 'Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, ' +
            'inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır.',
        'tos_desc': 'çeliğin yeniden kristalleşme sıcaklığının üstünde olan yüksek bir sıcaklıkta (1700 F ve üzeri) ' +
            'haddeleme işlemi sonucu elde edilir. Çelik, yeniden kristalleşme sıcaklığının üzerinde olduğunda, ' +
            'şekillendirilebilir ve ebatlandırılabilir. Sıcak haddelenmiş sac (çelik) genellikle üretim esnasında herhangi' +
            ' bir duraksama yaşanmadığı ve yeniden ısıtılmadığı için soğuk haddelenmiş çeliğe göre daha ucuzdur. ' +
            'Çelik soğutulduğunda belli bir oranda küçülür ve böylece nihai ürünün boyutunu ve şeklini soğuk haddelenmiş' +
            ' ürüne göre daha az kontrol eder.',
        'tos_usage': 'Sıcak Haddellenmiş Saclar ağırlıklı olarak gemi inşa, enerji nakil hatları, boru ve profil üretimi, ' +
            'inşaat, otoyol bariyer ve levhaları, konteyner ve makina imalat sanayi gibi çeşitli alanlarda kullanılmaktadır.',

        // Corporate ***************
        'about_content': 'Ulusal ve uluslararası mevzuat ve standartlara uygun, kaliteli ürünleri müşterilerimize sunmayı,\n' +
            'Müşterilerimizin ihtiyaç ve beklentilerini standart bir kalite anlayışıyla karşılamayı,\n' +
            'Müşteri memnuniyetinin sürekliliğini sağlamak ve memnuniyeti arttırmayı,\n' +
            'Süreçlerimizin tamamında sürekli iyileştirmelerle müşteri odaklı çalışmayı şirket politikası olarak kabul etmek, tüm prosesleri Kalite Yönetim Sistemi ve İSG uygulamalarının etkinliğinin sürekli iyileştirilmesini sağlamayı,\n' +
            'Dış tedarikçilerimize ve müşterilerimize olan taahhütlerimizi yerine eksiksiz getirerek ilişkilerimizde güven vermeyi,\n' +
            'Çalışanlarımızın memnuniyetini her zaman ön planda tutarak onların her türlü sosyal haklarını desteklemek, yasal mevzuat gereği haklarını vermek ve  onların sağlığını gözeten güvenli bir çalışma ortamı sunmak, takım ruhu ile çalışanlarına büyük bir markanın bireyi olduğunu hissettirmeyi,\n' +
            'Firmamız uygulamış olduğu tüm prosesleri Risk Temelli Düşünceyi esas alarak yönetmek.\n' +
            'Sürdürülebilir büyüme için hedef pazarlardaki müşteri beklentilerini ve gelecekteki pazar ihtiyaçlarını takip ederek müşteri memnuniyetini sağlamayı,\n' +
            'Fark ve değer yaratan büyük bir marka olmayı,\n' +
            'Belirlenen hedeflere ulaşılması için tedarikçilerimize gereken desteği sağlamayı,\n' +
            'TÜM MÜŞTERİLERİNE,ÇALIŞANLARINA VE TEDARİKÇİLERİNE TAAAHHÜT EDER. ',
        'activities_content': 'Tüm uzun / yassı / boru profil çelik ürünlerinin iç ve dış ticareti. 1-25x2000mm' +
            ' Boy kesme ve 1-6x1650mm dilme hatlarına sahip Çelik Servis Merkezi, Siyah, DKP, Galvanizli sacdan boru / ' +
            'profil üretimi (0,8-3mm et kalınlığında 18-76 mm boru, 15x15mm-60x60mm kare / 10x20-40x80mm dikdörtgen' +
            ' kutu profil), Yassı demir rulolar ile' +
            'boru ve hasır üretimi. Dökme demir kalıplar ile ferforje dekoratif demir üretimi. Bahçe kapıları, ev, daire,' +
            ' bina kapıları, korkuluklar, merdiven kolçakları, topuzlar ve her tipte ferforje üretimi.'

    }
});