export const dieases = [
    {
        id: 1,
        name: 'asthma bronchiale',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885681/Asthma_Bronchiale_ta6emq.png',
        definisi:
            'Asthma bronkial adalah penyakit pernapasan kronis yang ditandai dengan peradangan dan penyempitan saluran napas, yang menyebabkan kesulitan bernapas, batuk, dan mengi. Kondisi ini dapat bervariasi dalam tingkat keparahan dan frekuensi serangan, memerlukan pengelolaan yang tepat untuk menjaga kualitas hidup penderita. Asma sering kali dipicu oleh berbagai faktor lingkungan dan genetik.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Sesak Napas: Kesulitan bernapas saat beraktivitas atau di malam hari, dengan perasaan tekanan di dada.',
                    'Batuk: Batuk kronis yang memburuk di malam hari atau saat berolahraga, bisa kering atau berdahak.',
                    'Wheezing: Suara mengi saat bernapas, terutama saat mengeluarkan napas, akibat penyempitan saluran napas',
                    'Nyeri Dada: Ketidaknyamanan di dada akibat ketegangan otot pernapasan saat bernapas dalam-dalam.',
                    'Kelelahan: Kelelahan akibat usaha ekstra untuk bernapas, sering terjadi setelah serangan.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Nyeri dada: Rasa nyeri atau tekanan di dada yang dapat diperparah oleh batuk atau napas dalam.',
                    'Kelelahan: Rasa lelah yang berlebihan, bahkan setelah beristirahat.',
                    'Gejala yang muncul saat terpapar pemicu (alergen, iritan): Perburukan gejala asma setelah terpapar alergen seperti serbuk sari, bulu hewan, atau iritan seperti asap rokok dan polusi udara.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'ringan',
                list: 'Gejala muncul sesekali, seperti batuk ringan.',
            },
            {
                name: 'sedang',
                list: 'Gejala lebih sering muncul, termasuk wheezing.',
            },
            {
                name: 'parah',
                list: 'Gejala menjadi lebih intens, dengan serangan asma yang sering terjadi.',
            },
        ],
        penyebab: [
            'Alergen (debu, serbuk sari, bulu hewan)',
            'Iritan (asap rokok, polusi udara, bahan kimia)',
            'Infeksi saluran pernapasan',
            'Aktivitas fisik (terutama di lingkungan dingin)',
            'Stres emosional',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Inhaler bronkodilator untuk meredakan gejala', 'Obat anti-inflamasi (kortikosteroid) untuk mengurangi peradangan'],
            },
            {
                name: 'mandiri',
                list: ['Menghindari pemicu asma.', 'Menggunakan obat pencegahan sesuai anjuran dokter.'],
            },
            {
                name: 'alternatif',
                list: ['Terapi pernapasan', 'Akupunktur'],
            },
        ],
        durasi: 'Pengobatan asma bersifat jangka panjang dan memerlukan pemantauan rutin untuk menyesuaikan pengobatan sesuai kebutuhan.',
        pencegahan: [
            'Menghindari alergen dan iritan yang diketahui.',
            'Menggunakan masker saat beraktivitas di lingkungan berdebu atau berpolusi.',
            'Melakukan pemeriksaan rutin untuk memantau kondisi.',
        ],
        komplikasi:
            'Jika tidak dikelola dengan baik, asma bronkial dapat menyebabkan serangan parah yang mengancam jiwa. Selain itu, penderita berisiko mengalami perubahan permanen pada saluran napas, yang dapat mengurangi fungsi paru-paru dan kualitas hidup. ',
    },
    {
        id: 2,
        name: 'bronchitis acuta',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885681/Bronchitis_Acuta_tg2trd.png',
        definisi:
            'Bronchitis acuta adalah peradangan pada saluran bronkus, biasanya disebabkan oleh infeksi virus. Kondisi ini menyebabkan batuk dan produksi lendir, dan umumnya bersifat sementara. Dengan perawatan yang tepat, bronchitis acuta biasanya sembuh dalam beberapa minggu.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Batuk: Batuk berdahak yang bisa berlangsung selama beberapa minggu. Dahaknya bisa berwarna putih, kuning, atau hijau.\n',
                    'Sesak Napas: Kesulitan bernapas, terutama saat beraktivitas fisik. Ini terjadi karena pembengkakan dan penyempitan saluran udara di paru-paru.\n',
                    'Nyeri Dada: Rasa nyeri atau ketidaknyamanan di dada, seringkali diperparah saat batuk. Nyeri ini biasanya terasa di belakang tulang dada.\n',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Demam: Demam ringan hingga sedang, biasanya tidak terlalu tinggi.\n',
                    'Kelelahan: Rasa lelah yang berlebihan, bahkan setelah beristirahat. Ini disebabkan oleh infeksi dan usaha tubuh untuk melawannya.\n',
                    'Bersin/Pilek: Gejala-gejala ini sering menyertai bronchitis acuta, menunjukkan adanya infeksi saluran pernapasan atas.\n',
                ],
            },
        ],
        tahpan: [
            {
                name: 'ringan',
                list: 'Dimulai dengan gejala ringan seperti batuk kering dan gejala mirip flu (hidung tersumbat, sakit kepala, nyeri otot).',
            },
            {
                name: 'sedang',
                list: 'Batuk menjadi lebih produktif (berdahak), disertai sesak napas ringan.',
            },
            {
                name: 'parah',
                list: 'Sesak napas yang signifikan, nyeri dada yang intens, dan mungkin demam tinggi. Membutuhkan perawatan medis segera.\n',
            },
        ],
        penyebab: [
            'Infeksi Virus: Virus influenza dan virus pernapasan lainnya adalah penyebab paling umum.\n',
            'Iritasi Lingkungan: Paparan terhadap asap rokok, polusi udara, atau iritan lainnya dapat memicu atau memperburuk bronchitis.\n',
            'Infeksi Bakteri: Meskipun lebih jarang, infeksi bakteri juga dapat menyebabkan bronchitis acuta.',
            'Alergi: Reaksi alergi terhadap zat tertentu dapat memicu peradangan pada saluran bronkus.\n',
            'Kondisi Kesehatan Lain: Kondisi seperti asma atau PPOK (Penyakit Paru Obstruktif Kronik) dapat meningkatkan risiko dan keparahan bronchitis.\n',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: [
                    'Obat batuk ekspektoran (untuk membantu mengeluarkan dahak), dekongestan (untuk meredakan hidung tersumbat), dan pereda nyeri/penurun demam (seperti parasetamol). Antibiotik hanya diberikan jika infeksi bakteri terkonfirmasi.',
                ],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup, minum banyak cairan (air putih, jus), dan makan makanan bergizi. Hindari asap rokok dan iritan lainnya.\n'],
            },
            {
                name: 'alternatif',
                list: [' Inhalasi uap hangat dengan sedikit minyak kayu putih atau eucalyptus dapat membantu meredakan saluran napas yang tersumbat. Namun, ini bukan pengganti pengobatan medis.\n'],
            },
        ],
        durasi: 'Biasanya berlangsung 1-3 minggu, tetapi bisa lebih lama tergantung pada keparahan dan respons terhadap pengobatan.\n',
        pencegahan: [
            'Hindari Merokok: Merokok merupakan faktor risiko utama bronchitis acuta. Hindari paparan asap rokok.',
            'Vaksinasi: Vaksin influenza tahunan dapat membantu mengurangi risiko infeksi virus.\n',
            'Cuci Tangan: Mencuci tangan secara teratur dengan sabun dan air dapat membantu mencegah penyebaran infeksi.\n',
        ],
        komplikasi:
            'Bronchitis acuta yang tidak diobati dengan baik dapat menyebabkan komplikasi seperti pneumonia (infeksi paru-paru) atau perburukan kondisi paru-paru yang sudah ada sebelumnya, seperti asma atau PPOK. Pada kasus yang jarang, bronchitis acuta dapat menyebabkan gagal napas',
    },
    {
        id: 3,
        name: 'cholera',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885682/Cholera_yly8wt.png',
        definisi:
            'Cholera adalah infeksi usus akut yang disebabkan oleh bakteri Vibrio cholerae, yang ditularkan melalui air atau makanan yang terkontaminasi. Penyakit ini dapat menyebabkan diare parah dan dehidrasi, yang jika tidak diobati dapat berakibat fatal.\n',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Diare Cair: Diare yang sangat encer, sering kali disebut "diare beras air."\n',
                    'Muntah: Muntah yang dapat menyertai diare.\n',
                    'Dehidrasi: Tanda-tanda dehidrasi seperti mulut kering, haus berlebihan, dan penurunan turgor kulit.\n',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Kram Perut: Nyeri atau kram di perut.\n',
                    'Kelemahan: Rasa lemah yang signifikan akibat kehilangan cairan.\n',
                    'Peningkatan Detak Jantung: Detak jantung yang cepat sebagai respons terhadap dehidrasi.\n',
                ],
            },
        ],
        tahpan: [
            {
                name: 'ringan',
                list: 'Gejala ringan seperti diare dan muntah mulai muncul.',
            },
            {
                name: 'sedang',
                list: 'Gejala memburuk dengan diare yang lebih parah dan tanda-tanda dehidrasi.\n',
            },
            {
                name: 'parah',
                list: 'Komplikasi serius dapat terjadi, termasuk syok hipovolemik dan kematian jika tidak diobati.\n',
            },
        ],
        penyebab: [
            'Infeksi oleh bakteri Vibrio cholerae.\n',
            'Penularan melalui air atau makanan yang terkontaminasi, terutama di daerah dengan sanitasi yang buruk',
            'Konsumsi makanan laut mentah atau setengah matang yang terkontaminasi.\n',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Rehidrasi oral atau intravena untuk menggantikan cairan dan elektrolit yang hilang.\n'],
            },
            {
                name: 'mandiri',
                list: ['Mengonsumsi larutan rehidrasi oral (ORS) untuk mengatasi dehidrasi.\n'],
            },
            {
                name: 'alternatif',
                list: ['Antibiotik untuk mengurangi durasi diare (dengan konsultasi dokter).\n'],
            },
        ],
        durasi: 'Perawatan untuk dehidrasi biasanya berlangsung selama beberapa hari, tergantung pada keparahan kondisi.',
        pencegahan: [
            'Memastikan akses ke air bersih dan sanitasi yang baik.\n',
            'Vaksinasi untuk mencegah infeksi di daerah endemik.\n',
            'Menghindari konsumsi makanan dan minuman yang tidak terjamin kebersihannya.\n',
        ],
        komplikasi:
            'Cholera dapat menyebabkan komplikasi serius, termasuk dehidrasi berat, syok hipovolemik, dan kematian jika tidak diobati. Tingkat kematian dapat tinggi, terutama di daerah dengan akses terbatas ke perawatan medis.\n\n',
    },
    {
        id: 4,
        name: 'diphtheria',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885682/Diphtheria_dhewea.png',
        definisi:
            'Diphtheria adalah infeksi bakteri yang disebabkan oleh Corynebacterium diphtheriae, yang dapat mempengaruhi saluran pernapasan dan menyebabkan pembentukan selaput di tenggorokan. Penyakit ini dapat berakibat fatal jika tidak diobati, terutama pada anak-anak.\n',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Sakit Tenggorokan: Rasa sakit yang parah di tenggorokan, sering disertai kesulitan menelan.\n',
                    'Demam: Suhu tubuh yang meningkat, biasanya ringan hingga sedang.\n',
                    'Pembengkakan Kelenjar Getah Bening: Kelenjar di leher dapat membesar dan nyeri.\n',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Selaput di Tenggorokan: Pembentukan selaput berwarna abu-abu yang dapat menghalangi saluran napas.\n',
                    'Kesulitan Bernapas: Napas yang terdengar serak atau sulit, terutama jika selaput menghalangi saluran pernapasan.\n',
                    'Kelemahan Umum: Rasa lelah dan lemah yang tidak biasa.\n',
                ],
            },
        ],
        tahpan: [
            {
                name: 'ringan',
                list: 'Gejala mirip flu seperti sakit tenggorokan dan demam ringan.\n',
            },
            {
                name: 'sedang',
                list: 'Pembentukan selaput di tenggorokan dan pembengkakan kelenjar getah bening.\n',
            },
            {
                name: 'parah',
                list: ' Kesulitan bernapas dan komplikasi serius jika tidak diobati.\n',
            },
        ],
        penyebab: ['Infeksi oleh Corynebacterium diphtheriae.\n', 'Penularan melalui percikan udara dari batuk atau bersin.', 'Kontak langsung dengan luka atau benda yang terkontaminasi.\n'],
        pengobatan: [
            {
                name: 'medis',
                list: ['Pemberian antitoksin dan antibiotik untuk mengatasi infeksi.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup dan menjaga hidrasi.\n'],
            },
            {
                name: 'alternatif',
                list: ['Tidak ada pengobatan alternatif yang terbukti efektif; vaksinasi adalah pencegahan utama.\n'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama 10-14 hari, tergantung pada keparahan infeksi.\n',
        pencegahan: [
            'Vaksinasi dengan vaksin DTP (Diphtheria, Tetanus, Pertussis).\n',
            'Menghindari kontak dengan orang yang terinfeksi.\n',
            'Menerapkan kebersihan yang baik, seperti mencuci tangan secara teratur.\n',
        ],
        komplikasi:
            'Diphtheria dapat menyebabkan komplikasi serius, termasuk kerusakan jantung, kerusakan saraf, dan kesulitan bernapas yang dapat mengancam jiwa. Jika tidak diobati, infeksi ini dapat berakibat fatal.\n',
    },
    {
        id: 5,
        name: 'epilepsia',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885682/Epilepsia_i0kb1q.png',
        definisi:
            'Epilepsia adalah gangguan neurologis kronis yang ditandai oleh serangan kejang berulang akibat aktivitas listrik abnormal di otak. Kondisi ini dapat mempengaruhi berbagai fungsi tubuh dan mental, tergantung pada jenis kejang yang dialami.\n',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Kejang: Episode kejang yang dapat bervariasi dalam durasi dan intensitas.\n',
                    'Kehilangan Kesadaran: Penderita mungkin kehilangan kesadaran selama serangan.\n',
                    'Kebingungan: Perasaan bingung atau disorientasi setelah serangan.\n',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Gerakan Tidak Terkendali: Gerakan tubuh yang tidak dapat dikendalikan, seperti kejang otot.',
                    'Aura: Sensasi aneh atau perasaan yang dialami sebelum kejang, seperti bau atau rasa tertentu.\n',
                    'Perubahan Emosional: Perubahan suasana hati yang tiba-tiba, seperti kecemasan atau depresi.\n',
                ],
            },
        ],
        tahpan: [
            {
                name: 'aura',
                list: 'Sensasi atau perasaan aneh yang dialami sebelum kejang.\n',
            },
            {
                name: 'kejang',
                list: 'Episode kejang yang berlangsung dari beberapa detik hingga beberapa menit.\n',
            },
            {
                name: 'pasca-kejang',
                list: 'Periode pemulihan setelah kejang, di mana penderita mungkin merasa bingung atau lelah.\n',
            },
        ],
        penyebab: [
            'Genetik atau riwayat keluarga dengan epilepsia.\n',
            'Cedera kepala atau trauma otak.\n',
            'Infeksi otak, seperti meningitis.\n',
            'Tumor otak atau kelainan struktural.\n',
            'Penyakit neurodegeneratif.\n',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Pemberian obat antiepilepsi untuk mengontrol kejang.\n'],
            },
            {
                name: 'mandiri',
                list: ['Menghindari pemicu kejang, seperti stres atau kurang tidur.'],
            },
            {
                name: 'alternatif',
                list: ['Terapi diet ketogenik atau stimulasi saraf vagus (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Pengobatan biasanya bersifat jangka panjang dan memerlukan pemantauan rutin.\n',
        pencegahan: ['Menghindari faktor pemicu yang diketahui.\n', 'Mengelola stres dan menjaga pola tidur yang baik.', 'Menghindari alkohol dan obat-obatan terlarang.'],
        komplikasi:
            'Epilepsia dapat menyebabkan komplikasi serius, termasuk cedera akibat kejang, gangguan mental, dan dampak sosial yang signifikan. Penderita juga berisiko mengalami status epileptikus, yaitu serangan kejang yang berlangsung lebih dari 5 menit atau serangan berulang tanpa pemulihan di antara serangan.\n',
    },
    {
        id: 6,
        name: 'fibromialgia',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885682/fibromialgia_zgqwqz.png',
        definisi:
            'Fibromialgia adalah gangguan kronis yang ditandai oleh nyeri muskuloskeletal yang meluas, disertai kelelahan, gangguan tidur, dan masalah memori. Kondisi ini sering kali mempengaruhi kualitas hidup dan aktivitas sehari-hari.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Nyeri Meluas: Nyeri yang dirasakan di seluruh tubuh, sering digambarkan sebagai nyeri tumpul yang konstan.',
                    'Kelelahan: Rasa lelah yang tidak hilang meskipun sudah cukup istirahat.',
                    'Gangguan Tidur: Kesulitan tidur nyenyak atau gangguan tidur lainnya.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Kekakuan Pagi Hari: Rasa kaku di tubuh saat bangun tidur.',
                    'Sakit Kepala: Sakit kepala tegang atau migrain yang sering terjadi.',
                    'Masalah Kognitif: Kesulitan berkonsentrasi atau fibro fog.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Nyeri dan kelelahan ringan yang mungkin tidak mengganggu aktivitas.',
            },
            {
                name: 'menengah',
                list: 'Gejala mulai memburuk, dengan gangguan tidur dan masalah kognitif.',
            },
            {
                name: 'lanjut',
                list: 'Nyeri dan kelelahan yang signifikan, mempengaruhi kualitas hidup.',
            },
        ],
        penyebab: ['Faktor genetik atau riwayat keluarga.', 'Infeksi atau penyakit sebelumnya.', 'Trauma fisik atau emosional.', 'Ketidakseimbangan kimia otak.', 'Gangguan tidur.'],
        pengobatan: [
            {
                name: 'medis',
                list: ['Obat pereda nyeri dan antidepresan untuk mengelola gejala.'],
            },
            {
                name: 'mandiri',
                list: ['Latihan fisik ringan, teknik relaksasi, dan terapi panas.'],
            },
            {
                name: 'alternatif',
                list: ['Akupunktur, yoga, atau terapi pijat (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Pengelolaan fibromialgia bersifat jangka panjang dan memerlukan pendekatan multidisiplin.',
        pencegahan: ['Mengelola stres dengan baik.', 'Menjaga pola tidur yang sehat.', 'Melakukan aktivitas fisik secara teratur.'],
        komplikasi:
            'Fibromialgia dapat menyebabkan penurunan kualitas hidup, gangguan emosional seperti depresi dan kecemasan, serta kesulitan dalam menjalani aktivitas sehari-hari. Kondisi ini juga dapat mempengaruhi hubungan sosial dan pekerjaan.',
    },
    {
        id: 7,
        name: 'Arthritis Urica (Gout)',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885681/Arthritis_Urica_Gout_glwruo.png',
        definisi:
            'Arthritis urica, atau gout, adalah jenis arthritis yang disebabkan oleh penumpukan kristal asam urat di sendi, yang mengakibatkan peradangan dan nyeri hebat. Kondisi ini sering kali terjadi secara tiba-tiba dan dapat mempengaruhi kualitas hidup.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Nyeri Sendi: Nyeri yang sangat parah, biasanya terjadi pada sendi jari kaki, tetapi juga dapat mempengaruhi sendi lainnya.',
                    'Pembengkakan: Sendi yang terkena menjadi bengkak dan merah.',
                    'Keterbatasan Gerak: Kesulitan dalam menggerakkan sendi yang terkena.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Serangan Mendadak: Nyeri yang muncul tiba-tiba, sering kali di malam hari.',
                    'Kemerahan dan Panas: Kulit di sekitar sendi yang terkena menjadi merah dan terasa hangat.',
                    'Bonggol Asam Urat: Pembentukan benjolan di bawah kulit akibat penumpukan kristal asam urat.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Serangan nyeri mendadak yang berlangsung selama beberapa hari.',
            },
            {
                name: 'menengah',
                list: 'Periode tanpa gejala, tetapi risiko serangan berikutnya tetap ada.',
            },
            {
                name: 'lanjut',
                list: 'Serangan yang lebih sering dan berkepanjangan jika tidak diobati.',
            },
        ],
        penyebab: [
            'Kadar asam urat yang tinggi dalam darah.',
            'Diet tinggi purin (daging merah, makanan laut, dan alkohol).',
            'Dehidrasi atau kurangnya cairan.',
            'Riwayat keluarga dengan gout.',
            'Penyakit ginjal yang mempengaruhi pengeluaran asam urat.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Obat anti-inflamasi non-steroid (NSAID) dan kolkisin untuk mengurangi nyeri dan peradangan.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat dan mengompres sendi yang terkena dengan es.'],
            },
            {
                name: 'alternatif',
                list: [' Suplemen herbal dan perubahan pola makan (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Pengobatan untuk serangan akut biasanya berlangsung beberapa hari, tetapi pengelolaan jangka panjang diperlukan untuk mencegah serangan berikutnya.',
        pencegahan: ['Menghindari makanan tinggi purin.', 'Menjaga hidrasi yang baik dengan banyak minum air.', 'Mengelola berat badan yang sehat.'],
        komplikasi:
            'Jika tidak diobati, gout dapat menyebabkan kerusakan permanen pada sendi dan ginjal, serta meningkatkan risiko penyakit jantung. Serangan berulang dapat mengakibatkan penurunan kualitas hidup dan keterbatasan aktivitas.',
    },
    {
        id: 8,
        name: 'Hypertensio Arterialis',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885682/Hypertensio_Arterialis_lriviy.png',
        definisi:
            'Hypertensio arterialis, atau hipertensi, adalah kondisi medis di mana tekanan darah dalam arteri meningkat secara kronis. Jika tidak dikelola, hipertensi dapat menyebabkan komplikasi serius, termasuk penyakit jantung dan stroke.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Sakit Kepala: Sakit kepala yang sering terjadi, terutama di bagian belakang kepala.',
                    'Pusing: Perasaan pusing atau tidak seimbang.',
                    'Kelelahan: Rasa lelah yang tidak biasa tanpa sebab yang jelas.',
                ],
            },
            {
                name: 'spesifik',
                list: ['Penglihatan Kabur: Kesulitan melihat dengan jelas.', 'Nyeri Dada: Rasa nyeri atau ketidaknyamanan di dada.', 'Kesulitan Bernapas: Napas yang terasa berat atau sulit.'],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: ' Sering kali tidak menunjukkan gejala, tetapi tekanan darah sudah tinggi.',
            },
            {
                name: 'menengah',
                list: 'Gejala mulai muncul, seperti sakit kepala dan pusing.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, seperti serangan jantung atau stroke.',
            },
        ],
        penyebab: ['Faktor genetik atau riwayat keluarga.', 'Pola makan tinggi garam dan lemak.', 'Kurangnya aktivitas fisik.', 'Stres kronis.', 'Penyakit ginjal atau gangguan hormonal.'],
        pengobatan: [
            {
                name: 'medis',
                list: ['Obat antihipertensi untuk menurunkan tekanan darah.'],
            },
            {
                name: 'mandiri',
                list: ['   Mengatur pola makan sehat dan rutin berolahraga.'],
            },
            {
                name: 'alternatif',
                list: [' Terapi relaksasi dan pengelolaan stres (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Pengelolaan hipertensi adalah proses jangka panjang yang memerlukan pemantauan rutin.',
        pencegahan: ['  Menjaga berat badan yang sehat.', '   Mengurangi asupan garam dan lemak jenuh.', '     Melakukan aktivitas fisik secara teratur.'],
        komplikasi:
            'Hipertensi dapat menyebabkan berbagai komplikasi serius, termasuk penyakit jantung, stroke, dan kerusakan ginjal. Jika tidak dikelola dengan baik, kondisi ini dapat mengancam jiwa.',
    },
    {
        id: 9,
        name: 'Influenza',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885683/Influenza_uicl0s.png',
        definisi:
            'Influenza, atau flu, adalah infeksi virus yang menyerang saluran pernapasan, termasuk hidung, tenggorokan, dan paru-paru. Penyakit ini sangat menular dan dapat menyebabkan gejala yang bervariasi dari ringan hingga berat.',
        gejala: [
            {
                name: 'umum',
                list: [
                    '  Demam: Suhu tubuh yang meningkat, sering disertai menggigil.',
                    'Batuk Kering: Batuk yang tidak menghasilkan lendir.',
                    '  Kelelahan: Rasa lelah yang signifikan dan tidak biasa.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    '  Sakit Tenggorokan: Rasa sakit atau ketidaknyamanan di tenggorokan.',
                    '  Nyeri Otot: Rasa nyeri di seluruh tubuh, terutama di punggung dan kaki.',
                    ' Kepala Pusing: Sakit kepala yang dapat mengganggu aktivitas sehari-hari.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: ' Gejala mirip flu seperti demam dan kelelahan muncul secara tiba-tiba.',
            },
            {
                name: 'menengah',
                list: 'Gejala mulai memburuk dengan batuk dan nyeri otot.',
            },
            {
                name: 'lanjut',
                list: 'Gejala dapat bertahan selama beberapa minggu, dengan risiko komplikasi seperti pneumonia.',
            },
        ],
        penyebab: ['Infeksi oleh virus influenza tipe A, B, atau C.', 'Penularan melalui percikan udara dari batuk atau bersin.', 'Kontak langsung dengan permukaan yang terkontaminasi.'],
        pengobatan: [
            {
                name: 'medis',
                list: [' Antiviral untuk mengurangi durasi dan keparahan gejala.'],
            },
            {
                name: 'mandiri',
                list: ['  Istirahat yang cukup, banyak minum cairan, dan menggunakan obat pereda nyeri.'],
            },
            {
                name: 'alternatif',
                list: ['Suplemen vitamin C dan herbal untuk mendukung sistem imun (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama 5-7 hari, tetapi gejala dapat bertahan lebih lama.',
        pencegahan: ['Vaksinasi tahunan untuk influenza.', 'Mencuci tangan secara teratur dan menjaga kebersihan.', ' Menghindari kontak dengan orang yang terinfeksi.'],
        komplikasi:
            'Influenza dapat menyebabkan komplikasi serius, termasuk pneumonia, bronkitis, dan infeksi telinga. Pada individu dengan sistem imun yang lemah, risiko komplikasi meningkat secara signifikan.',
    },
    {
        id: 10,
        name: 'Japanese Encephalitis',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885683/Japanese_Encephalitis_oy4fsn.png',
        definisi:
            'Japanese encephalitis adalah infeksi virus yang disebabkan oleh virus Japanese encephalitis (JEV), yang ditularkan melalui gigitan nyamuk. Penyakit ini dapat menyebabkan peradangan otak dan berpotensi mengancam jiwa, terutama di daerah pedesaan Asia dan Pasifik.',
        gejala: [
            {
                name: 'umum',
                list: ['Demam Tinggi: Suhu tubuh yang meningkat secara mendadak.', ' Sakit Kepala: Rasa sakit yang parah di kepala.', 'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.'],
            },
            {
                name: 'spesifik',
                list: [
                    'Kejang: Serangan kejang yang dapat terjadi pada beberapa pasien.',
                    'Kebingungan: Perubahan kesadaran dan kebingungan mental.',
                    'Gejala Neurologis: Masalah koordinasi, kesulitan berbicara, atau kelemahan otot.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala mirip flu seperti demam dan sakit kepala muncul.',
            },
            {
                name: 'menengah',
                list: 'Gejala neurologis mulai muncul, seperti kebingungan dan kejang.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk kerusakan otak permanen.',
            },
        ],
        penyebab: ['Infeksi oleh virus Japanese encephalitis (JEV).', ' Penularan melalui gigitan nyamuk, terutama nyamuk Culex.', 'Tinggal atau bepergian ke daerah endemik tanpa perlindungan.'],
        pengobatan: [
            {
                name: 'medis',
                list: ['Tidak ada pengobatan spesifik untuk infeksi JEV; perawatan bersifat suportif untuk mengelola gejala.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup dan menjaga hidrasi.'],
            },
            {
                name: 'alternatif',
                list: ['Terapi rehabilitasi untuk pemulihan setelah gejala mereda (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Perawatan biasanya berlangsung selama beberapa minggu, tergantung pada keparahan gejala.',
        pencegahan: [
            ' Vaksinasi untuk mencegah infeksi JEV, terutama bagi   mereka yang tinggal atau bepergian ke daerah endemik.',
            'Menghindari gigitan nyamuk dengan menggunakan obat nyamuk   dan mengenakan pakaian pelindung.',
            'Mengurangi tempat berkembang biak nyamuk di sekitar   lingkungan.',
        ],
        komplikasi:
            'Japanese encephalitis dapat menyebabkan komplikasi serius, termasuk kerusakan otak permanen, gangguan neurologis, dan kematian. Tingkat kematian dan kecacatan bervariasi tergantung pada usia dan kesehatan individu.',
    },
    {
        id: 11,
        name: 'Keratitis',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885683/Keratitis_gch1wn.png',
        definisi:
            'Keratitis adalah peradangan pada kornea, lapisan transparan di depan mata, yang dapat disebabkan oleh infeksi, cedera, atau kondisi lainnya. Jika tidak diobati, keratitis dapat menyebabkan kerusakan permanen pada penglihatan.',
        gejala: [
            {
                name: 'umum',
                list: ['Nyeri Mata: Rasa sakit atau ketidaknyamanan di mata.', ' Penglihatan Kabur: Kesulitan melihat dengan jelas.', 'Kemerahan: Mata yang tampak merah atau meradang.'],
            },
            {
                name: 'spesifik',
                list: [
                    'Sensitivitas Terhadap Cahaya: Ketidaknyamanan atau rasa sakit saat terkena cahaya terang.',
                    'Air Mata Berlebihan: Produksi air mata yang meningkat.',
                    'Keluarnya Lendir atau Nanah: Keluarnya cairan dari mata, yang bisa berwarna jernih atau keruh.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala ringan seperti kemerahan dan nyeri mata.',
            },
            {
                name: 'menengah',
                list: 'Gejala memburuk dengan penglihatan kabur dan sensitivitas terhadap cahaya.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk kerusakan kornea dan kehilangan penglihatan.',
            },
        ],
        penyebab: [
            'Infeksi virus (seperti herpes simpleks) atau bakteri.',
            'Cedera pada mata, termasuk goresan atau luka.',
            'Penggunaan lensa kontak yang tidak higienis.',
            'Paparan bahan kimia atau iritan.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Antibiotik atau antivirus untuk mengatasi infeksi.'],
            },
            {
                name: 'mandiri',
                list: ['Menghindari penggunaan lensa kontak hingga sembuh dan menjaga kebersihan mata.'],
            },
            {
                name: 'alternatif',
                list: ['Obat tetes mata untuk mengurangi peradangan (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama beberapa hari hingga beberapa minggu, tergantung pada penyebab dan keparahan.',
        pencegahan: [
            'Menghindari penggunaan lensa kontak yang tidak higienis.',
            'Melindungi mata dari cedera dan iritan.',
            'Menggunakan pelindung mata saat bekerja dengan bahan kimia atau di lingkungan berbahaya.',
        ],
        komplikasi:
            'Keratitis dapat menyebabkan komplikasi serius, termasuk kerusakan permanen pada kornea, infeksi yang menyebar, dan kehilangan penglihatan. Penanganan yang cepat dan tepat sangat penting untuk mencegah kerusakan lebih lanjut.',
    },
    {
        id: 12,
        name: 'Leptospirosis',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885683/Leptospirosis_ygq88r.png',
        definisi:
            'Leptospirosis adalah infeksi bakteri yang disebabkan oleh bakteri Leptospira, yang biasanya ditularkan melalui kontak dengan air, tanah, atau makanan yang terkontaminasi dengan urin hewan yang terinfeksi. Penyakit ini dapat menyebabkan gejala ringan hingga berat dan dapat berakibat fatal jika tidak diobati.',
        gejala: [
            {
                name: 'umum',
                list: ['Demam Tinggi: Suhu tubuh yang meningkat secara mendadak.', 'Sakit Kepala: Rasa sakit yang parah di kepala.', 'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.'],
            },
            {
                name: 'spesifik',
                list: [' Nyeri Otot: Nyeri di otot dan sendi.', 'Muntah: Muntah yang dapat menyertai gejala lainnya.', 'Rash: Ruam kulit yang mungkin muncul pada beberapa pasien.'],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala mirip flu seperti demam, sakit kepala, dan nyeri otot muncul.',
            },
            {
                name: 'menengah',
                list: 'Gejala dapat memburuk dengan munculnya jaundice (kuning pada kulit dan mata) dan gangguan pernapasan.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk kerusakan organ, seperti ginjal dan hati.',
            },
        ],
        penyebab: [
            'Infeksi oleh bakteri Leptospira.',
            'Kontak dengan air atau tanah yang terkontaminasi urin',
            'hewan, seperti tikus, anjing, dan hewan ternak.',
            'Paparan pekerjaan atau aktivitas yang berisiko, seperti peternakan, pertanian, atau olahraga air.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Antibiotik seperti doksisiklin atau penicillin untuk mengatasi infeksi.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup dan menjaga hidrasi.'],
            },
            {
                name: 'alternatif',
                list: ['Tidak ada pengobatan alternatif yang terbukti efektif; pengobatan medis adalah yang utama.'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama 7-14 hari, tergantung pada keparahan infeksi.',
        pencegahan: [
            'Menghindari kontak dengan air atau tanah yang terkontaminasi.',
            'Menggunakan pelindung, seperti sepatu bot, saat bekerja di lingkungan berisiko.',
            'Vaksinasi untuk hewan peliharaan dan ternak untuk mencegah penularan.',
        ],
        komplikasi: 'Leptospirosis dapat menyebabkan komplikasi serius, termasuk penyakit ginjal, kerusakan hati, dan gangguan pernapasan. Jika tidak diobati, infeksi ini dapat berakibat fatal.',
    },
    {
        id: 13,
        name: 'Malaria',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885683/Malaria_e7wrwf.png',
        definisi:
            'Malaria adalah infeksi parasit yang disebabkan oleh Plasmodium, yang ditularkan melalui gigitan nyamuk Anopheles. Penyakit ini dapat menyebabkan gejala yang parah dan berpotensi mengancam jiwa jika tidak diobati.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Demam Tinggi: Suhu tubuh yang meningkat secara mendadak, sering kali disertai menggigil.',
                    'Sakit Kepala: Rasa sakit yang parah di kepala.',
                    'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Nyeri Otot: Nyeri di seluruh tubuh, terutama di punggung dan kaki.',
                    ' Muntah: Muntah yang dapat menyertai gejala lainnya.',
                    'Keringat Berlebihan: Berkeringat berlebihan, terutama saat demam menurun.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala mirip flu seperti demam, sakit kepala, dan nyeri otot muncul.',
            },
            {
                name: 'menengah',
                list: 'Gejala dapat memburuk dengan munculnya anemia dan gangguan pernapasan.',
            },
            {
                name: 'lanjut',
                list: ' Komplikasi serius dapat terjadi, termasuk gagal ginjal, kejang, dan kematian jika tidak diobati.',
            },
        ],
        penyebab: [
            'Infeksi oleh parasit Plasmodium, yang terdiri dari beberapa spesies, termasuk Plasmodium falciparum, Plasmodium vivax, Plasmodium ovale, dan Plasmodium malariae.',
            'Penularan melalui gigitan nyamuk Anopheles yang terinfeksi.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Obat antimalaria seperti artemisinin, klorokuin, atau lumefantrin untuk mengatasi infeksi'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup dan menjaga hidrasi.'],
            },
            {
                name: 'alternatif',
                list: ['Tidak ada pengobatan alternatif yang terbukti efektif; pengobatan medis adalah yang utama.'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama 3-7 hari, tergantung pada jenis malaria dan keparahan infeksi.',
        pencegahan: [
            'Menghindari gigitan nyamuk dengan menggunakan obat nyamuk dan mengenakan pakaian pelindung.',
            'Tidur di bawah kelambu yang dirawat dengan insektisida.',
            'Vaksinasi dan penggunaan obat profilaksis untuk individu yang berisiko tinggi.',
        ],
        komplikasi:
            'Malaria dapat menyebabkan komplikasi serius, termasuk anemia berat, gagal ginjal, gangguan pernapasan, dan kematian. Plasmodium falciparum adalah spesies yang paling berbahaya dan dapat menyebabkan kematian dalam waktu singkat jika tidak diobati.',
    },
    {
        id: 14,
        name: 'Nephritis',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885683/Nephritis_pfcya2.png',
        definisi:
            'Nephritis adalah peradangan pada ginjal yang dapat mempengaruhi fungsi ginjal. Penyakit ini dapat disebabkan oleh infeksi, penyakit autoimun, atau reaksi terhadap obat-obatan. Nephritis dapat menyebabkan kerusakan ginjal yang serius jika tidak diobati.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Nyeri Punggung: Rasa sakit di area punggung bawah, di mana ginjal berada.',
                    'Pembengkakan: Pembengkakan pada wajah, tangan, atau kaki akibat retensi cairan.',
                    'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Perubahan Urin: Urin yang berwarna gelap, berbusa, atau mengandung darah.',
                    'Tekanan Darah Tinggi: Kenaikan tekanan darah yang dapat terjadi akibat gangguan fungsi ginjal.',
                    'Demam: Suhu tubuh yang meningkat, terutama jika disebabkan oleh infeksi.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala ringan seperti nyeri punggung dan kelelahan.',
            },
            {
                name: 'menengah',
                list: 'Gejala memburuk dengan munculnya pembengkakan dan perubahan urin.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk gagal ginjal jika tidak diobati.',
            },
        ],
        penyebab: [
            'Infeksi ginjal (pielonefritis).',
            'Penyakit autoimun, seperti lupus atau glomerulonefritis.',
            'Reaksi terhadap obat-obatan atau racun.',
            'Diabetes dan hipertensi yang tidak terkelola.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Antibiotik untuk infeksi, obat antiinflamasi, dan obat untuk mengontrol tekanan darah.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup dan menjaga hidrasi.'],
            },
            {
                name: 'alternatif',
                list: ['Terapi diet untuk mengurangi beban pada ginjal (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama beberapa minggu, tergantung pada penyebab dan keparahan.',
        pencegahan: [
            'Mengelola kondisi medis yang mendasari, seperti diabetes dan hipertensi.',
            'Menghindari penggunaan obat-obatan yang dapat merusak ginjal tanpa pengawasan medis.',
            'Menjaga pola makan sehat dan hidrasi yang baik.',
        ],
        komplikasi:
            'Nephritis dapat menyebabkan komplikasi serius, termasuk gagal ginjal, hipertensi, dan kerusakan permanen pada ginjal. Penanganan yang cepat dan tepat sangat penting untuk mencegah kerusakan lebih lanjut.',
    },
    {
        id: 15,
        name: 'Osteoporosis',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885683/Osteoporosis_sdpvjz.png',
        definisi:
            'Osteoporosis adalah kondisi medis yang ditandai oleh penurunan kepadatan tulang, yang membuat tulang menjadi lemah dan lebih rentan terhadap patah. Penyakit ini sering kali tidak menunjukkan gejala hingga terjadi patah tulang.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Patah Tulang: Patah tulang yang terjadi akibat cedera ringan atau tanpa sebab yang jelas.',
                    'Kehilangan Tinggi Badan: Penurunan tinggi badan yang signifikan seiring bertambahnya usia.',
                    'Nyeri Punggung: Rasa sakit di punggung akibat patah tulang belakang.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Postur Membungkuk: Perubahan postur tubuh menjadi membungkuk atau hunchback.',
                    'Kelemahan Otot: Rasa lemah pada otot yang dapat mempengaruhi keseimbangan.',
                    'Keterbatasan Gerak: Kesulitan dalam melakukan aktivitas sehari-hari akibat nyeri atau patah tulang.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Tidak ada gejala yang jelas, tetapi kepadatan tulang mulai menurun.',
            },
            {
                name: 'menengah',
                list: 'Gejala mulai muncul dengan patah tulang yang lebih sering.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk patah tulang yang berulang dan penurunan kualitas hidup.',
            },
        ],
        penyebab: [
            'Penurunan hormon estrogen pada wanita setelah menopause.',
            'Kekurangan kalsium dan vitamin D.',
            'Gaya hidup tidak aktif dan kurangnya aktivitas fisik.',
            'Riwayat keluarga dengan osteoporosis.',
            'Penggunaan obat-obatan tertentu, seperti kortikosteroid.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Obat bisfosfonat untuk meningkatkan kepadatan tulang dan mengurangi risiko patah.'],
            },
            {
                name: 'mandiri',
                list: ['Mengatur pola makan yang kaya kalsium dan vitamin D, serta melakukan latihan beban.'],
            },
            {
                name: 'alternatif',
                list: ['Suplemen kalsium dan vitamin D (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Pengobatan biasanya bersifat jangka panjang dan memerlukan pemantauan rutin.',
        pencegahan: [
            'Menjaga pola makan yang sehat dengan asupan kalsium dan vitamin D yang cukup.',
            'Melakukan aktivitas fisik secara teratur, terutama latihan beban.',
            'Menghindari merokok dan konsumsi alkohol berlebihan.',
        ],
        komplikasi:
            'Osteoporosis dapat menyebabkan patah tulang yang serius, terutama pada pinggul, pergelangan tangan, dan tulang belakang. Patah tulang ini dapat mengakibatkan komplikasi lebih lanjut, termasuk kecacatan dan penurunan kualitas hidup.',
    },
    {
        id: 16,
        name: 'Pneumonia',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885683/Pneumonia_upslxh.png',
        definisi:
            'Pneumonia adalah infeksi yang menginflamasi kantung udara di satu atau kedua paru-paru, yang dapat diisi dengan cairan atau nanah. Penyakit ini dapat disebabkan oleh berbagai mikroorganisme, termasuk bakteri, virus, dan jamur.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Demam Tinggi: Suhu tubuh yang meningkat, sering disertai menggigil.',
                    'Batuk: Batuk yang dapat menghasilkan lendir atau nanah.',
                    'Sesak Napas: Kesulitan bernapas atau napas yang cepat.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Nyeri Dada: Rasa sakit atau ketidaknyamanan di dada, terutama saat bernapas dalam-dalam atau batuk.',
                    'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.',
                    'Keringat Berlebihan: Berkeringat, terutama saat malam hari.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala mirip flu seperti demam, batuk, dan kelelahan muncul.',
            },
            {
                name: 'menengah',
                list: 'Gejala memburuk dengan peningkatan sesak napas dan nyeri dada.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk gagal napas atau sepsis jika tidak diobati.',
            },
        ],
        penyebab: [
            'Infeksi bakteri (seperti Streptococcus pneumoniae).',
            'Infeksi virus (seperti virus influenza atau COVID-19).',
            'Infeksi jamur, terutama pada individu dengan sistem imun yang lemah.',
            'Aspirasi makanan atau cairan ke dalam paru-paru.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: [' Antibiotik untuk pneumonia bakteri, antiviral untuk pneumonia virus, dan obat antijamur jika diperlukan.'],
            },
            {
                name: 'mandiri',
                list: ['stirahat yang cukup dan menjaga hidrasi.'],
            },
            {
                name: 'alternatif',
                list: ['Terapi oksigen untuk membantu pernapasan (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama 5-14 hari, tergantung pada penyebab dan keparahan.',
        pencegahan: [
            'Vaksinasi untuk mencegah pneumonia, seperti vaksin pneumokokus dan vaksin influenza.',
            'Menghindari merokok dan paparan asap rokok.',
            'Menjaga kebersihan tangan dan menghindari kontak dengan orang yang sakit.',
        ],
        komplikasi:
            'Pneumonia dapat menyebabkan komplikasi serius, termasuk gagal napas, abses paru, dan sepsis. Pada individu dengan kondisi kesehatan yang sudah ada sebelumnya, risiko komplikasi meningkat secara signifikan.',
    },
    {
        id: 17,
        name: 'Q-fever',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885682/Febris_Dengue_wiyaja.png',
        definisi:
            'Q-fever adalah infeksi bakteri yang disebabkan oleh Coxiella burnetii, yang biasanya ditularkan dari hewan, terutama domba, kambing, dan sapi, kepada manusia. Penyakit ini dapat menyebabkan gejala flu ringan hingga infeksi paru-paru yang lebih serius.',
        gejala: [
            {
                name: 'umum',
                list: ['Demam Tinggi: Suhu tubuh yang meningkat secara mendadak.', 'Sakit Kepala: Rasa sakit yang parah di kepala.', 'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.'],
            },
            {
                name: 'spesifik',
                list: ['Nyeri Otot: Rasa nyeri di seluruh tubuh.', 'Batuk Kering: Batuk yang tidak menghasilkan lendir.', 'Keringat Malam: Berkeringat berlebihan saat tidur.'],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala mirip flu seperti demam, sakit kepala, dan kelelahan muncul.',
            },
            {
                name: 'menengah',
                list: 'Gejala dapat memburuk dengan munculnya batuk dan nyeri dada.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk pneumonia atau infeksi hati.',
            },
        ],
        penyebab: [
            'Infeksi oleh bakteri Coxiella burnetii.',
            'Penularan melalui inhalasi partikel yang terkontaminasi dari urin, feses, atau plasenta hewan yang terinfeksi.',
            'Kontak langsung dengan hewan yang terinfeksi atau produk hewan.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Antibiotik seperti doksisiklin untuk mengatasi infeksi.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup dan menjaga hidrasi.'],
            },
            {
                name: 'alternatif',
                list: [' Tidak ada pengobatan alternatif yang terbukti efektif; pengobatan medis adalah yang utama.'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama 5-14 hari, tergantung pada keparahan infeksi.',
        pencegahan: [
            'Menghindari kontak dengan hewan yang terinfeksi.',
            'Menggunakan pelindung saat bekerja dengan hewan atau produk hewan.',
            'Vaksinasi untuk individu yang berisiko tinggi, seperti peternak.',
        ],
        komplikasi:
            'Q-fever dapat menyebabkan komplikasi serius, termasuk pneumonia, hepatitis, dan endokarditis (infeksi pada lapisan jantung). Jika tidak diobati, infeksi ini dapat berakibat fatal.',
    },
    {
        id: 17,
        name: 'Q-fever',
        img: '',
        definisi:
            'Q-fever adalah infeksi bakteri yang disebabkan oleh Coxiella burnetii, yang biasanya ditularkan dari hewan, terutama domba, kambing, dan sapi, kepada manusia. Penyakit ini dapat menyebabkan gejala flu ringan hingga infeksi paru-paru yang lebih serius.',
        gejala: [
            {
                name: 'umum',
                list: ['Demam Tinggi: Suhu tubuh yang meningkat secara mendadak.', 'Sakit Kepala: Rasa sakit yang parah di kepala.', 'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.'],
            },
            {
                name: 'spesifik',
                list: ['Nyeri Otot: Rasa nyeri di seluruh tubuh.', 'Batuk Kering: Batuk yang tidak menghasilkan lendir.', 'Keringat Malam: Berkeringat berlebihan saat tidur.'],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala mirip flu seperti demam, sakit kepala, dan kelelahan muncul.',
            },
            {
                name: 'menengah',
                list: 'Gejala dapat memburuk dengan munculnya batuk dan nyeri dada.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk pneumonia atau infeksi hati.',
            },
        ],
        penyebab: [
            'Infeksi oleh bakteri Coxiella burnetii.',
            'Penularan melalui inhalasi partikel yang terkontaminasi dari urin, feses, atau plasenta hewan yang terinfeksi.',
            'Kontak langsung dengan hewan yang terinfeksi atau produk hewan.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Antibiotik seperti doksisiklin untuk mengatasi infeksi.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup dan menjaga hidrasi.'],
            },
            {
                name: 'alternatif',
                list: [' Tidak ada pengobatan alternatif yang terbukti efektif; pengobatan medis adalah yang utama.'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama 5-14 hari, tergantung pada keparahan infeksi.',
        pencegahan: [
            'Menghindari kontak dengan hewan yang terinfeksi.',
            'Menggunakan pelindung saat bekerja dengan hewan atau produk hewan.',
            'Vaksinasi untuk individu yang berisiko tinggi, seperti peternak.',
        ],
        komplikasi:
            'Q-fever dapat menyebabkan komplikasi serius, termasuk pneumonia, hepatitis, dan endokarditis (infeksi pada lapisan jantung). Jika tidak diobati, infeksi ini dapat berakibat fatal.',
    },
    {
        id: 18,
        name: 'Rubella',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885683/rubella_e7jqqu.png',
        definisi:
            'Rubella, juga dikenal sebagai campak Jerman, adalah infeksi virus yang disebabkan oleh virus rubella. Penyakit ini biasanya ringan pada anak-anak, tetapi dapat menyebabkan komplikasi serius jika terjadi pada wanita hamil, termasuk cacat lahir pada janin.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Demam Ringan: Suhu tubuh yang sedikit meningkat.',
                    'Ruam: Ruam merah yang muncul di wajah dan menyebar ke seluruh tubuh.',
                    'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Nyeri Sendi: Rasa nyeri atau ketidaknyamanan pada sendi, terutama pada orang dewasa.',
                    'Pembengkakan Kelenjar Getah Bening: Kelenjar di belakang telinga dan leher dapat membengkak.',
                    'Gejala Flu Ringan: Batuk, pilek, dan sakit tenggorokan.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: ' Gejala mirip flu seperti demam dan kelelahan muncul.',
            },
            {
                name: 'menengah',
                list: 'Ruam mulai muncul, biasanya dalam 1-2 minggu setelah terpapar.',
            },
            {
                name: 'lanjut',
                list: 'Gejala dapat memburuk dengan nyeri sendi dan pembengkakan kelenjar getah bening.',
            },
        ],
        penyebab: ['Infeksi oleh virus rubella, yang menyebar melalui percikan udara dari batuk atau bersin.', 'Penularan melalui kontak langsung dengan cairan tubuh dari individu yang terinfeksi.'],
        pengobatan: [
            {
                name: 'medis',
                list: ['Tidak ada pengobatan spesifik untuk rubella; perawatan bersifat suportif untuk mengelola gejala.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup, banyak minum cairan, dan menggunakan obat pereda nyeri untuk demam.'],
            },
            {
                name: 'alternatif',
                list: [' Tidak ada pengobatan alternatif yang terbukti efektif; pengobatan medis adalah yang utama.'],
            },
        ],
        durasi: 'Gejala biasanya berlangsung selama 1-3 minggu.',
        pencegahan: ['Vaksinasi dengan vaksin MMR (Measles, Mumps, Rubella) untuk mencegah infeksi.', ' Menghindari kontak dengan individu yang terinfeksi, terutama bagi wanita hamil.'],
        komplikasi:
            'Rubella dapat menyebabkan komplikasi serius, terutama pada wanita hamil, termasuk sindrom rubella kongenital, yang dapat menyebabkan cacat lahir, kelahiran prematur, dan keguguran. Pada orang dewasa, dapat menyebabkan nyeri sendi dan komplikasi lainnya, meskipun jarang.',
    },

    {
        id: 19,
        name: 'Syphilis',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885683/Syphilis_pdz27j.png',
        definisi:
            'Syphilis adalah infeksi menular seksual (IMS) yang disebabkan oleh bakteri Treponema pallidum. Penyakit ini dapat berkembang melalui beberapa tahap dan dapat menyebabkan komplikasi serius jika tidak diobati.',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Luka atau Lesi: Munculnya luka tanpa rasa sakit (chancre) di area genital, rektum, atau mulut.',
                    'Demam: Suhu tubuh yang meningkat, sering disertai gejala lainnya.',
                    'Kelelahan: Rasa lelah yang signifikan dan tidak biasa',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    'Ruam Kulit: Ruam yang dapat muncul di seluruh tubuh, termasuk telapak tangan dan telapak kaki.',
                    'Pembengkakan Kelenjar Getah Bening: Kelenjar di leher, ketiak, atau pangkal paha dapat membesar.',
                    'Nyeri Otot: Rasa nyeri di seluruh tubuh.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'Primer',
                list: ' Munculnya luka (chancre) di tempat infeksi, biasanya dalam waktu 3 minggu setelah terpapar.',
            },
            {
                name: 'Sekunder',
                list: 'Ruam kulit, demam, dan gejala sistemik lainnya muncul beberapa minggu setelah luka sembuh.',
            },
            {
                name: 'tahap Laten',
                list: 'Tidak ada gejala yang terlihat, tetapi infeksi tetap ada dalam tubuh.',
            },
            {
                name: 'tahap Tersier',
                list: ' Dapat terjadi bertahun-tahun setelah infeksi awal, dengan komplikasi serius seperti kerusakan jantung, otak, dan sistem saraf.',
            },
        ],
        penyebab: ['Infeksi oleh bakteri Treponema pallidum.', 'Penularan melalui kontak langsung dengan luka atau lesi pada orang yang terinfeksi, biasanya melalui hubungan seksual.'],
        pengobatan: [
            {
                name: 'medis',
                list: ['Antibiotik, biasanya penisilin, untuk mengatasi infeksi.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup dan menjaga kesehatan secara umum.'],
            },
            {
                name: 'alternatif',
                list: ['Tidak ada pengobatan alternatif yang terbukti efektif; pengobatan medis adalah yang utama.'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama satu kali dosis untuk tahap primer dan sekunder, tetapi mungkin memerlukan perawatan lebih lanjut untuk lanjut.',
        pencegahan: [
            'Menggunakan kondom saat berhubungan seksual untuk mengurangi risiko penularan.',
            'Melakukan tes secara rutin untuk IMS, terutama jika memiliki banyak pasangan seksual.',
            'Menghindari kontak seksual dengan orang yang diketahui terinfeksi.',
        ],
        komplikasi:
            'Syphilis dapat menyebabkan komplikasi serius jika tidak diobati, termasuk kerusakan permanen pada jantung, otak, dan sistem saraf, serta masalah kesehatan lainnya. Pada wanita hamil, infeksi dapat menyebabkan cacat lahir atau kematian janin.',
    },
    {
        id: 20,
        name: 'Tuberculosis',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885684/Tuberculosis_cmb1g9.png',
        definisi:
            'Tuberculosis (TB) adalah infeksi bakteri yang disebabkan oleh Mycobacterium tuberculosis, yang biasanya menyerang paru-paru tetapi juga dapat mempengaruhi bagian tubuh lainnya. Penyakit ini menular melalui udara ketika seseorang yang terinfeksi batuk atau bersin.z',
        gejala: [
            {
                name: 'umum',
                list: [
                    'Batuk Berkepanjangan: Batuk yang berlangsung lebih dari tiga minggu, sering disertai dengan dahak.',
                    'Demam: Suhu tubuh yang meningkat, sering kali disertai keringat malam.',
                    'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    ' Nyeri Dada: Rasa sakit atau ketidaknyamanan di dada saat bernapas atau batuk.',
                    'Penurunan Berat Badan: Penurunan berat badan yang tidak dapat dijelaskan.',
                    'Kehilangan Nafsu Makan: Penurunan nafsu makan yang signifikan.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala ringan seperti batuk dan kelelahan muncul.',
            },
            {
                name: 'menengah',
                list: 'Gejala memburuk dengan peningkatan batuk, nyeri dada, dan demam.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk kerusakan paru-paru dan penyebaran infeksi ke bagian tubuh lainnya.',
            },
        ],
        penyebab: ['Infeksi oleh bakteri Mycobacterium tuberculosis.', 'Penularan melalui udara dari individu yang terinfeksi.'],
        pengobatan: [
            {
                name: 'medis',
                list: ['Regimen antibiotik yang terdiri dari beberapa obat, seperti isoniazid, rifampisin, etambutol, dan pirazinamid, biasanya selama 6-9 bulan.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup dan menjaga nutrisi yang baik.'],
            },
            {
                name: 'alternatif',
                list: ['Tidak ada pengobatan alternatif yang terbukti efektif; pengobatan medis adalah yang utama.'],
            },
        ],
        durasi: 'Pengobatan biasanya berlangsung selama 6-12 bulan, tergantung pada jenis TB dan respons terhadap pengobatan.',
        pencegahan: [
            ' Vaksinasi dengan BCG (Bacillus Calmette-Guérin) untuk mencegah TB, terutama pada anak-anak.',
            'Menghindari kontak dekat dengan individu yang terinfeksi.',
            'Menggunakan masker dan menjaga ventilasi yang baik di area yang berisiko.',
        ],
        komplikasi:
            'Tuberculosis dapat menyebabkan komplikasi serius, termasuk kerusakan paru-paru permanen, penyebaran infeksi ke organ lain (seperti ginjal, tulang, dan otak), dan kematian jika tidak diobati. TB yang resisten terhadap obat juga menjadi tantangan besar dalam pengobatan.',
    },
    {
        id: 21,
        name: 'Varicella',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885684/Varicella_mekblx.png',
        definisi:
            'Varicella, atau cacar air, adalah infeksi virus yang disebabkan oleh virus varicella-zoster (VZV). Penyakit ini sangat menular dan ditandai dengan munculnya ruam kulit yang gatal dan bercak-bercak berisi cairan.',
        gejala: [
            {
                name: 'umum',
                list: ['Demam Ringan: Suhu tubuh yang sedikit meningkat.', 'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.', 'Sakit Kepala: Rasa sakit yang dapat menyertai gejala lainnya.'],
            },
            {
                name: 'spesifik',
                list: [
                    'Ruam Gatal: Munculnya bercak merah yang berkembang menjadi lepuh berisi cairan, yang kemudian mengering dan membentuk keropeng.',
                    'Gatal: Rasa gatal yang hebat pada area yang terkena ruam.',
                    'Nyeri Otot: Rasa nyeri di seluruh tubuh.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala mirip flu seperti demam dan kelelahan muncul 1-2 hari sebelum ruam.',
            },
            {
                name: 'ruam',
                list: 'Ruam mulai muncul, biasanya dimulai dari wajah dan kemudian menyebar ke seluruh tubuh.',
            },
            {
                name: 'pemulihan',
                list: 'Ruam mengering dan membentuk keropeng, biasanya dalam waktu 1-2 minggu.',
            },
        ],
        penyebab: ['Infeksi oleh virus varicella-zoster (VZV).', 'Penularan melalui percikan udara dari batuk atau bersin, serta kontak langsung dengan lepuh.'],
        pengobatan: [
            {
                name: 'medis',
                list: ['Antiviral seperti asiklovir untuk mengurangi keparahan dan durasi gejala, terutama pada individu dengan risiko tinggi.'],
            },
            {
                name: 'mandiri',
                list: ['Menggunakan obat antihistamin untuk mengurangi gatal dan menjaga kebersihan kulit.'],
            },
            {
                name: 'alternatif',
                list: ['Tidak ada pengobatan alternatif yang terbukti efektif; pengobatan medis adalah yang utama.'],
            },
        ],
        durasi: 'Gejala biasanya berlangsung selama 5-7 hari, tetapi dapat bervariasi.',
        pencegahan: [
            ' Vaksinasi dengan vaksin varicella untuk mencegah infeksi.',
            'Menghindari kontak dengan individu yang terinfeksi, terutama bagi wanita hamil dan individu dengan sistem imun yang lemah.',
        ],
        komplikasi:
            'Varicella dapat menyebabkan komplikasi serius, terutama pada orang dewasa dan individu dengan sistem imun yang lemah, termasuk pneumonia, infeksi kulit, dan sindrom Reye. Pada wanita hamil, infeksi dapat menyebabkan cacat lahir pada janin.',
    },
    {
        id: 22,
        name: 'Febris Dengue',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885682/Febris_Dengue_wiyaja.png',
        definisi:
            'Febris dengue, atau demam dengue, adalah infeksi virus yang disebabkan oleh virus dengue, yang ditularkan melalui gigitan nyamuk Aedes, terutama Aedes aegypti. Penyakit ini dapat menyebabkan gejala ringan hingga berat dan berpotensi mengancam jiwa.',
        gejala: [
            {
                name: 'umum',
                list: [
                    ' Demam Tinggi: Suhu tubuh yang meningkat secara mendadak, sering kali mencapai 39-40°C.',
                    'Sakit Kepala: Rasa sakit yang parah di kepala, sering kali di belakang mata.',
                    'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    '  Nyeri Otot dan Sendi: Rasa nyeri di otot dan sendi, sering disebut breakbone fever.',
                    'Ruam Kulit: Munculnya ruam yang dapat terjadi beberapa hari setelah demam mulai.',
                    ' Muntah: Muntah yang dapat menyertai gejala lainnya.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala mirip flu seperti demam, sakit kepala, dan nyeri otot muncul.',
            },
            {
                name: 'menengah',
                list: 'Gejala dapat memburuk dengan munculnya ruam dan nyeri perut.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk demam dengue berat atau dengue hemorrhagic fever, yang dapat menyebabkan perdarahan dan syok.',
            },
        ],
        penyebab: ['Infeksi oleh virus dengue, yang terdiri dari empat serotipe (DEN-1, DEN-2, DEN-3, DEN-4).', 'Penularan melalui gigitan nyamuk Aedes yang terinfeksi.'],
        pengobatan: [
            {
                name: 'medis',
                list: ['Tidak ada pengobatan spesifik untuk demam dengue; perawatan bersifat suportif untuk mengelola gejala.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup, banyak minum cairan, dan menggunakan obat pereda nyeri seperti parasetamol.'],
            },
            {
                name: 'alternatif',
                list: ['Tidak ada pengobatan alternatif yang terbukti efektif; pengobatan medis adalah yang utama.'],
            },
        ],
        durasi: 'Gejala biasanya berlangsung selama 5-7 hari, tetapi pemantauan diperlukan untuk mencegah komplikasi.',
        pencegahan: [
            ' Menghindari gigitan nyamuk dengan menggunakan obat nyamuk dan mengenakan pakaian pelindung.',
            'Mengurangi tempat berkembang biak nyamuk di sekitar lingkungan, seperti genangan air.',
            'Vaksinasi untuk individu yang berisiko tinggi, terutama di daerah endemik.',
        ],
        komplikasi:
            'Febris dengue dapat menyebabkan komplikasi serius, termasuk demam dengue berat, dengue hemorrhagic fever, dan sindrom syok dengue, yang dapat mengancam jiwa. Penanganan yang cepat dan tepat sangat penting untuk mencegah kerusakan lebih lanjut.',
    },
    {
        id: 23,
        name: 'Xeroderma',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885684/Xeroderma_aymhdm.png',
        definisi:
            'Xeroderma adalah kondisi kulit yang ditandai oleh kekeringan, pengelupasan, dan kerutan pada kulit. Penyakit ini dapat disebabkan oleh berbagai faktor, termasuk paparan sinar matahari, dehidrasi, dan kondisi medis tertentu.    ',
        gejala: [
            {
                name: 'umum',
                list: ['Kulit Kering: Kulit yang terasa kering dan kasar.', 'Pengelupasan: Kulit yang mengelupas atau bersisik.', 'Gatal: Rasa gatal yang dapat menyertai kekeringan kulit.'],
            },
            {
                name: 'spesifik',
                list: [
                    ' Retakan pada Kulit: Retakan kecil yang dapat muncul pada area kulit yang sangat kering.',
                    ' Kemerahan: Kulit yang tampak merah atau meradang.',
                    'Kehilangan Elastisitas: Kulit yang kehilangan kelembapan dan elastisitasnya.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Kulit mulai terasa kering dan kasar.',
            },
            {
                name: 'menengah',
                list: 'Pengelupasan dan kemerahan mulai muncul.',
            },
            {
                name: 'lanjut',
                list: 'Retakan pada kulit dan rasa gatal yang signifikan.',
            },
        ],
        penyebab: [
            '  Paparan sinar matahari yang berlebihan.',
            'Dehidrasi atau kurangnya asupan cairan.',
            'Penggunaan sabun atau produk perawatan kulit yang keras.',
            'Kondisi medis seperti dermatitis atau psoriasis.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Krim atau salep pelembap untuk mengatasi kekeringan.'],
            },
            {
                name: 'mandiri',
                list: ['Menggunakan pelembap secara teratur dan menjaga hidrasi'],
            },
            {
                name: 'alternatif',
                list: ['Minyak alami seperti minyak kelapa atau minyak zaitun untuk melembapkan kulit (dengan konsultasi dokter).'],
            },
        ],
        durasi: 'Pengobatan biasanya bersifat jangka panjang, tergantung pada penyebab dan keparahan.',
        pencegahan: [
            'Menghindari paparan sinar matahari yang berlebihan dengan menggunakan tabir surya.',
            'Memastikan asupan cairan yang cukup.',
            'Menggunakan produk perawatan kulit yang lembut dan bebas dari bahan kimia keras.',
        ],
        komplikasi:
            'Xeroderma dapat menyebabkan komplikasi seperti infeksi kulit akibat retakan yang terbuka dan rasa tidak nyaman yang signifikan. Jika tidak diobati, kondisi ini dapat mempengaruhi kualitas hidup.',
    },
    {
        id: 24,
        name: 'Yellow Fever',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885684/Yellow_Fever_Febris_Flava_tdstpx.png',
        definisi:
            'Yellow fever adalah infeksi virus yang disebabkan oleh virus yellow fever, yang ditularkan melalui gigitan nyamuk Aedes atau Haemagogus. Penyakit ini dapat menyebabkan gejala yang bervariasi dari ringan hingga berat dan dapat berakibat fatal.',
        gejala: [
            {
                name: 'umum',
                list: [
                    ' Demam Tinggi: Suhu tubuh yang meningkat secara mendadak, sering disertai menggigil.',
                    'Sakit Kepala: Rasa sakit yang parah di kepala.',
                    'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.',
                ],
            },
            {
                name: 'spesifik',
                list: [
                    '  Nyeri Otot: Rasa nyeri di seluruh tubuh, terutama di punggung dan kaki.',
                    'Muntah: Muntah yang dapat menyertai gejala lainnya, sering kali berwarna hitam (hematemesis).',
                    'Kuning pada Kulit dan Mata: Jaundice yang muncul akibat kerusakan hati.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala mirip flu seperti demam, sakit kepala, dan nyeri otot muncul dalam ',
            },
            {
                name: 'menengah',
                list: 'Beberapa pasien mungkin merasa lebih baik setelah fase awal, tetapi dapat kembali dengan gejala yang lebih parah.',
            },
            {
                name: 'lanjut',
                list: 'Komplikasi serius dapat terjadi, termasuk kerusakan hati, ginjal, dan sistem peredaran darah.',
            },
        ],
        penyebab: [
            ' Infeksi oleh virus yellow fever, yang ditularkan melalui gigitan nyamuk yang terinfeksi.',
            'Penularan terjadi terutama di daerah tropis dan subtropis, di mana nyamuk Aedes dan Haemagogus banyak ditemukan.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: ['Tidak ada pengobatan spesifik untuk yellow fever; perawatan bersifat suportif untuk mengelola gejala.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup, banyak minum cairan, dan menggunakan obat pereda nyeri untuk demam.'],
            },
            {
                name: 'alternatif',
                list: ['idak ada pengobatan alternatif yang terbukti efektif; pengobatan medis'],
            },
        ],
        durasi: 'Gejala biasanya berlangsung selama 5-10 hari, tetapi dapat berlanjut lebih lama pada kasus yang parah.',
        pencegahan: [
            'Vaksinasi dengan vaksin yellow fever untuk mencegah infeksi, terutama bagi mereka yang bepergian ke daerah endemik.',
            'Menghindari gigitan nyamuk dengan menggunakan obat nyamuk dan mengenakan pakaian pelindung.',
            'Mengurangi tempat berkembang biak nyamuk di sekitar lingkungan.',
        ],
        komplikasi:
            'Yellow fever dapat menyebabkan komplikasi serius, termasuk gagal hati, perdarahan internal, dan kematian. Tingkat kematian dapat tinggi, terutama pada individu yang tidak divaksinasi.',
    },
    {
        id: 25,
        name: ' Zika Virus',
        img: 'https://res.cloudinary.com/dektxbmmb/image/upload/v1775885684/Zika_Virus_mytyak.png',
        definisi:
            'Zika virus adalah infeksi yang disebabkan oleh virus Zika, yang ditularkan melalui gigitan nyamuk Aedes, terutama Aedes aegypti. Penyakit ini sering kali ringan, tetapi dapat menyebabkan komplikasi serius, terutama pada wanita hamil.',
        gejala: [
            {
                name: 'umum',
                list: ['  Demam Ringan: Suhu tubuh yang sedikit meningkat.', 'Rash: Ruam kulit yang dapat muncul di seluruh tubuh.', 'Kelelahan: Rasa lelah yang signifikan dan tidak biasa.'],
            },
            {
                name: 'spesifik',
                list: [
                    'Nyeri Sendi: Rasa nyeri atau ketidaknyamanan pada sendi.',
                    'Sakit Kepala: Rasa sakit yang dapat bervariasi dalam intensitas.',
                    'Konjungtivitis: Peradangan pada mata yang dapat menyebabkan kemerahan dan ketidaknyamanan.',
                ],
            },
        ],
        tahpan: [
            {
                name: 'awal',
                list: 'Gejala mirip flu seperti demam, rash, dan nyeri sendi muncul, biasanya dalam waktu 2-7 hari setelah terpapar.',
            },
            {
                name: 'menengah',
                list: 'Gejala dapat berlangsung selama beberapa hari hingga satu minggu.',
            },
            {
                name: 'lanjut',
                list: 'Sebagian besar pasien pulih sepenuhnya, tetapi ada risiko komplikasi, terutama pada wanita hamil.',
            },
        ],
        penyebab: [
            'Infeksi oleh virus Zika, yang ditularkan melalui gigitan nyamuk yang terinfeksi.',
            ' Penularan juga dapat terjadi melalui hubungan seksual, transfusi darah, dan dari ibu ke janin selama kehamilan.',
        ],
        pengobatan: [
            {
                name: 'medis',
                list: [' Tidak ada pengobatan spesifik untuk infeksi Zika; perawatan bersifat suportif untuk mengelola gejala.'],
            },
            {
                name: 'mandiri',
                list: ['Istirahat yang cukup, banyak minum cairan, dan menggunakan obat pereda nyeri untuk demam dan nyeri.'],
            },
            {
                name: 'alternatif',
                list: ['Tidak ada pengobatan alternatif yang terbukti efektif; pengobatan medis adalah yang utama.'],
            },
        ],
        durasi: 'Gejala biasanya berlangsung selama 1-2 minggu.',
        pencegahan: [
            'Menghindari gigitan nyamuk dengan menggunakan obat nyamuk dan mengenakan pakaian pelindung.',
            ' Menghindari perjalanan ke daerah endemik jika hamil atau merencanakan kehamilan.',
            'Menggunakan kondom untuk mencegah penularan melalui hubungan seksual.',
        ],
        komplikasi:
            'Zika virus dapat menyebabkan komplikasi serius, termasuk sindrom Guillain-Barré, dan dapat menyebabkan cacat lahir seperti mikrocefali pada bayi yang terinfeksi dalam kandungan. Oleh karena itu, pencegahan sangat penting, terutama bagi wanita hamil.',
    },
];
