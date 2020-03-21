var fadeInDelay = 1500;
var fadeOutDelay = 1500;
var readingDelay = 6000;
var reviews = [
  {
    review_owner: "Erdinç Aybatar",
    txt:
      "Sayın Afgan Hocam, Photoshopu bana sevdirdiğiniz için çok teşekkür ederim. Gerçekten eğitim verme konusunda çok başarılısınız. Sizden bir ricam daha var, bizim için web site tasarımı içinde kapsamlı bir eğitim verir misiniz? Çok Teşekkür ederim.Ekleme: Sayın Afgan hocama ne kadar soru sorduysam, sorularımın hepsine cevapladı, hatta videolu cevap bile gönderdi. Kendisini şiddetle tavsiye ederim bu kursu kaçırmayın. Tekrar teşekkür ederim hocam."
  },
  {
    review_owner: "Alparslan özhan",
    txt:
      "Oldukça detaylı ve öğretici bir kurs emekleriniz için teşekkürler .Kurs içeriği derli toplu ,alıştırmalarla öğrenilen hususların pekiştirilmesi sağlanmış. video sürelerini boğmayacak şekilde kısa tutmanız gerçekten her eğitmenin dikkat etmesi gereken bir husus. bunun için ayriyeten teşekkürler."
  },
  {
    review_owner: "Murat Osmanağaoğlu",
    txt:
      "Afgan beyi youtobe kanalından zaten takip ediyorum. Ben bir fotoğrafçı değilim, web tasarımları yapıyorum, youtobe kanalındaki eğitimleri bana yetiyor ve artıyor, ancak bu kurs bana çok daha fazlasını kattı. Ellerine ve ağzına sağlık."
  },
  {
    review_owner: "Şamil Yeşil",
    txt:
      "Fotoğraf çekmeyi çok seven bir insanım ama makinem olmadığı için telefonla çekmek zorunda kalıyorum. Etrafımdaki insanlar bana hep kendini dahada geliştir sende yetenek var derlerdi. Bir gün youtube da afgan abiye denk geldim ve Ps öğrenmeye karar verdim. Afgan abinin çok güzel bi konuşma biçimi var ve 12 yıllık eğitim hayatımda bana bu tarz bilgi öğretmeye çalışan öğretmenle karşılaşamadım. Ps ile kısıtlı kalmak istemedim Lr dersini de satın aldım. Güzel bir fotoğraf makinesi  alıp kendimi dahada geliştirmeye karar verdim. Afgan abimi burada sayfalarca anlatsam az kalır. Herkesin tanıması gereken bir insansın ve benim en iyi öğretmenimsin. Umarım hak ettiğin yerlere gelirsin abim. Kendine çok iyi bak."
  },
  {
    review_owner: "Murat Yıldiz",
    txt:
      "dersler cok zevkli , programın yarısını gectim ve en cok öğrenmek istediğim panellerdeki secim araclarını daha etkili kullanmakti, hocamız cok sade ve anlasılır bir bizimde anlatıyor, kaynak dosyaları ile beraber hocamızla senkronize bir bicimde calısmaktayım. Saygılarımla"
  },
  {
    review_owner: "Hüseyin",
    txt:
      "Photoshop programını öğrenmeye yeni başladım, youtube den Afgan Rasulovun videolarını izledim ve gerçekten memnun kaldım. Photoshop programını iyi seviyede öğrenmek için udemy eğitim videosunu satın aldım herkese tavsiye ederim kursa gitmek yerine udemy ile her an elinizin altındaki videoları izleyip öğrenebilirsiniz. Herkesin emeğine sağlık diyorum."
  },
  {
    review_owner: "Aykut İLTER",
    txt:
      "Bu kursun bana çok faydalı olacağına çok inanıyorum.Bu eğitimi de Afgan Rasulov eşliğinde ve temiz anlatımı sayesinde daha net anlayacağıma eminim."
  },
  {
    review_owner: "Bahadır Dündar",
    txt:
      "Afgan bey gayet profesyonel ve konuya çok hakim bir eğitmen, tavsiye ederim."
  },
  {
    review_owner: "Selma Aygörmez",
    txt:
      "Bu kursa katılmam ile birlikte fotoğraf düzenlemelerim ve kategorizasyonum level atladı ve kendime güvenim artmıştır . Afgan Rasulov Türkçeyi kullanımı ve açık anlatım tarzı ile photoshop derslerinde markadır"
  },
  {
    review_owner: "Faruk Dinc",
    txt:
      "Afgan Rasulov, profesyonel fotoğrafçı olduğu kadar Profesyonel de Eğitmen.. Daha önce bu kadar profesyonel hazırlanmış bir kurs ve anlatım görmedim..   Tek kelime ile Harika!"
  },
  {
    review_owner: "Ömer Yardımcı",
    txt:
      "Daha iyi olabilir ve daha fazla örnek olabilirdi. Yinede çok iyi anlatıyor yeni başlayanlar için ve en temel konuları öğrenmek isteyenler için iyi bir kaynak."
  },
  { review_owner: "Ismail Can", txt: "evet doğru bir eşleşme." },
  { review_owner: "Yaşar Bayındır", txt: "Gerçekten çok kaliteli bir eğitim." },
  { review_owner: "Savaş Daniş", txt: "Mükemmel anlatım mükemmel kurs." },
  {
    review_owner: "Enes sındıraç",
    txt: "Sağ olabi 2019 olmasada cs 6 da olan larla idare  ediyorum :)"
  },
  {
    review_owner: "Mehmet",
    txt:
      "Afgan hocam diksiyonu düzgün mikrofon için yaratılmış sesi ile çok güzel ve sade şekilde anlatıyor. Tebrikler."
  },
  {
    review_owner: "Muhammet Yıldız",
    txt:
      "Hocam çok teşekkür ederim. Güzel bilgiler öğrendim. Kurstan iyi bir şekilde istifade ettim. Kursa kaydolan ve kaydolacak olan arkadaşlara tavsiyem çok çok uygulama yapmanız. Teşekkürler"
  },
  {
    review_owner: "Ferad Bekir",
    txt:
      "HERKEZE RAHATLIKLAN ONERE BILECEGIM BIR EGITIM!!!! SAKIN, NET, ANLATIM, NORMAL BIR KURSATA PAUSE YOKTU. BURDA ISTEDIGIN KADAR DURDUR BEYNINE KAZI DENE VE TEKRAR DEDE. BASARILAR. :)"
  },
  {
    review_owner: "Yunus Polatgil",
    txt: "Hocamıza teşekkür ederim, sıkılmadan izlediğim eğitimlerden birisi"
  },
  {
    review_owner: "Hulusi̇ Erdal",
    txt:
      "Bir konu başlığı altındaki uygulamaları anlattıktan sonra konuyu bitirirken son olarak o konu başlığını çalıştırmayı  yinelersek, hatırda daha kalıcı olur ve burayı nasıl başlatmıştık  gibi (herkes için geçerli değil tabi ki) akılda bir soru işareti kalmadan ilgili videoyu daha hızlı tamamlamış oluruz diye düşünüyorum.Anlatımınız çok akıcı. Bu sebeple bir defada çok sayıda videoyu sıkılmadan saatlerce izleyebiliyorum.Emeğiniz ve paylaşımınız için çok teşekkürler."
  },
  {
    review_owner: "Onur Bıyık",
    txt:
      'Size sadece şunu diyorum: "Afgan Rasulov farkı!!"Eğer emin değilseniz YouTube üzerinden kendisinin videolarına bir göz atın derim ve bu kursu aldığınızda cidden sıfırdan güzel bir seviyeye geldiğinizi de göreceksiniz.'
  },
  {
    review_owner: "Fatih Bingül",
    txt: "kusursuz bir kurs Afgan Rasulov farkı"
  },
  {
    review_owner: "Volkan Şen",
    txt: "afgan bey gerçekten bu işin hakkını vererek yapıyor."
  },
  {
    review_owner: "Serhat KAV",
    txt:
      "Kursa yeni başladım ve daha önce youtubeden zaten Afgan hocamı dinliyordum ve photoshopa başlamamın  tek sebebi Afgan hocamdır. Şuanda  yavaş yavaş ilerliyorum ve daha iyilerini yapacağıma inanıyorum  şimdiden teşekkürler."
  },
  {
    review_owner: "Halil İbrahim Hazır",
    txt: "Gayet ayrıntılı anlatıyor. Muğlak bir nokta yok."
  },
  {
    review_owner: "Selçuk Keskin",
    txt:
      "Yeni başlayanlar için en ideal ve tek kurs. Afgan beyin öğretme metodu çok mükemmel. Başkalarından da kurs aldım ama Afgan beyle yeniden doğdum adeta. Hiç bir şey bilmiyormuşum.  Teşekkür ederim, Afgan bey."
  },
  {
    review_owner: "Hüseyin Yıldız",
    txt:
      "Afgan Rasulovun youtube üzerinde yayımladığı videoları takip eden biri olarak bu dersi çok büyük bir istekle aldım.Kesinlikle pişman olmayacağınız sonuna kadar sabırla izlenmesi ve uygulanması gereken bir ders.Teşekkürler."
  },
  {
    review_owner: "Çayan Gündoğdu",
    txt:
      "Muhteşem bir kurs ve akıcı anlatım.Orta düzeyde bilgim vardı şimdi ise daha yüksek bir düzeyde çalışıyorum.Teşekkürler."
  },
  { review_owner: "Mert Bolut", txt: "harika bir öğretici" },
  {
    review_owner: "Batuhan Altay",
    txt:
      "Anlatımı çok güzel ve sade. Bir şeyi yapmanın birden çok yolunu anlatıyor. Özet olarak gerizekalıya anlatsa anlar. İyi ki almışım"
  },
  {
    review_owner: "Servet Esat YILMAZ",
    txt: "anlaşılır tane tane iyi ya işte adsfasdfsad"
  },
  { review_owner: "Metin Özcan", txt: "gayet güzel sıkmadan detaylı anlatım" },
  {
    review_owner: "İbrahim KELEŞOĞLU",
    txt: "Gayet faydalı ve öğretici PhotoShop adına her şey var.Tavsiye ederim."
  },
  { review_owner: "Adil Karadağ", txt: "çok süper anlatım" },
  {
    review_owner: "İsmail Oflas",
    txt:
      "proğramı öğretmeyi boşver adam kendi arayüzünüzü kendi kısayollarınızı kullanmadığınız menüleri kaldırmayı sık kullanılan menüleri renklendirip görmeyi daha kolaylaştırmasıve ayriyetten liste üzerinden ve kısayollardan panellere rahatlıkla ulaşabilmeyi adam bildiğin proğram öğretmeyi boşver adam proğramı daha nasıl rahat kullanırız diye bir çaba içerisinde helal olsun böyle eğitimciler varmı hala ne diyryim"
  },
  { review_owner: "Yucuklu Sumurta", txt: "memkun kalma garantili" },
  {
    review_owner: "Emin kağan yürüden",
    txt: "çok güzel,kolay anlatım....TEŞEKKÜRLER"
  },
  { review_owner: "Can Tombul", txt: "EVET GERÇEKTEN HARİK" },
  {
    review_owner: "Bezat",
    txt:
      "Parasını sonuna kadar hak eden bir insan. Hatta bu kadar ucuza bu eğitimi aldığıma utanıyorum."
  },
  { review_owner: "Ferhat Yıldırım", txt: "basit anlaşılır" },
  { review_owner: "Arda Yılmaz", txt: "evet" },
  {
    review_owner: "Kadir Okan Morkoç",
    txt:
      "Afgan rasulovo tesekur ederim umarum youtube banner yapımınıda ogrenirim saolasın kral geri donus yaparsın umarum daha fazla video izlemedim hepsini izliyiceğim hepsini anlamaya calıosıcagım"
  },
  {
    review_owner: "Shadow",
    txt:
      "Daha önce farklı platformlarda da birçok eğitim videosu izledim, satın aldım fakat giriş seviyesinin biraz üzerinde photoshopu bilen birisi olarak bile kurstan muhteşem keyif aldım. Beni mest eden yanı açılan/gösterilen bir pencerenin içerisinde ne özellik varsa ne işe yaradığı anlatılmış ve nasıl uygulandığı da harika örneklerle anlatılmış. Bir kursun aslında en önemli yanı olan anlatımcının cümle kurması. Bu kursta eğitmen Türkçeye hakim diliyle o kadar harika anlatım sağlıyor ki kursun içerisinde akıp gidebiliyorsunuz ve soluksuz bir şekilde sona doğru geliyorsunuz. Kursa 3 akşam ayırdım ve %95ini bitirdim. Muhteşem şeyler öğrendiğimi düşünüyorum. Artık 2 şey benim açımdan kesin; Birincisi Photoshop benim için çocuk oyuncağı, ikincisi ise Afgan Rasulovun vereceği tüm kursları gözü kapalı satın alacağım (tabiki ilgi alanıma göre). After effects, Premier pro gibi diğer programlardan da bu şekilde Adan Zye bir kurs hazırlarsa bekliyor olacağım. Harika kurs için Teşekkürler Afgan Rasulov."
  },
  {
    review_owner: "Koray Şimsek",
    txt: "cok faydalı bir kurs herkese tavsiye ederim"
  },
  { review_owner: "Anıl Başer", txt: "Kişisel gelişim için güzel bir adım." },
  {
    review_owner: "Erkan KUZU",
    txt: "Harika bir anlatımdı, teşekkür ediyorum Afgan Rasulov..."
  },
  {
    review_owner: "Betül Gök",
    txt: "Bu kursun benim için çok faydalı olacağına inanıyorum."
  },
  {
    review_owner: "Gürkan Tosun",
    txt:
      "bu kadar net ve güzel bir anlatımı yorumsuz bırakmak mümkün olmaz. yıllardan beri kendisini youtube kanalından takip ediyorum. bana photoshop u sevdiren adamdır kendisi. herşey için teşekkür ederim."
  },
  {
    review_owner: "Betül Kırbağ",
    txt:
      "Anlatımı süper hiç sıkıcı değil bu eğitim 5 değil 10 yıldızı hak ediyor ?"
  },
  {
    review_owner: "Mehmet Akif ÖZTÜRK",
    txt:
      "Egzersizleri üç kez tekrar ederek pekiştiriyorum. Şimdiye kadar öğrendiklerime bile birçok şey yapabiliyorum. Afgan beyin diğer derslerini de bu yüzden hemen aldım. Çok güzel bol tekrarlı bol egzersizli ve egzersiz fotoğraflarının da paylaşılmış olmasıyla çok faydalı bir öğrenme süreci oluyor. Teşekkür ederim."
  },
  {
    review_owner: "Ahmet Yurtsever",
    txt: "Gayet güzel ve avantajlı bir eğitim. tevsiye ederim"
  },
  {
    review_owner: "Ağabala",
    txt: "fotoğrafçılıkta çok yardımı dokundu çok sağolun"
  },
  {
    review_owner: "Serhat ALTUN",
    txt: "Kurs içeriği kolay anlaşılır,sade ve  ses kalitesi oldukça iyi."
  },
  {
    review_owner: "Berkay Bektaş",
    txt: "evet ilerleyen zamanlarda da göreceğiz"
  },
  {
    review_owner: "Serkan Kalmaz",
    txt:
      "Kesinlikle Doğru ve mükemmel tercih. Detaylı anlatım , akıcı konuşmasıyla profesyonelliğe hızlı bir adım atıyorum."
  },
  {
    review_owner: "Muhammed Tüzün",
    txt: "Her şey açık ve net teşekkürler Afgan Rasulov."
  },
  { review_owner: "Ahmet Polat", txt: "güzel  iyi" },
  {
    review_owner: "Ümit Koşaner",
    txt:
      "Amatör bir fotoğrafçı olarak öğrenmek istediğim Photoshop programını çok detaylı bir şekilde Afgan bey’in eğitimiyle öğrendim..."
  },
  {
    review_owner: "Gökhan Sağlık",
    txt: "Son derece akıcı ve anlaşılır bir anlatım."
  },
  {
    review_owner: "Barış Bilgin",
    txt:
      "Şuan elimde aktif olarak kullandığım 2 adet kurs var fakat afgan beyi tebrik ederim"
  },
  {
    review_owner: "Bülent Demir",
    txt:
      "Şimdiye kadar oldukça başarılı bir anlatım ve sürükleyici bir işleyiş söz konusu"
  },
  { review_owner: "Adnan", txt: "Herkese tavsiye ediyorum." },
  { review_owner: "Abdukerim Abduselam", txt: "güzel eğitici" },
  {
    review_owner: "Rose_leslie",
    txt:
      "SON DERECE  ANLASILABILIR BIR IFADE ILE DETAYLI IFADE EDILEN BIR KURS OLMUS . TESEKKURLER"
  },
  {
    review_owner: "Mutlu Erdur",
    txt: "Gayet açıklayıcı eğitim olmuş. Teşekkürler"
  },
  { review_owner: "Bilal Salar", txt: "şimdilik güzel gidiyor" },
  {
    review_owner: "Murat Keles",
    txt:
      "Afgan Rasulov anlatımını çok beğeniyorum. Eğitimleri benim için çok verimli geçiyor."
  },
  { review_owner: "Hakan Pa.", txt: "Eğitim çok güzel." },
  {
    review_owner: "Ubeydullah Karabacak",
    txt:
      "çok iyi anlatıyor diğer anlatıcılar gibi sıkıcı ve baygın bir anlatım tarzı yok dikkat çeken bir anlatım ile çok zevk alarak derslerini izliyorum"
  },
  {
    review_owner: "Süleyman Altınkaya",
    txt: "Adan Zye cümlesi bu kurs için tamamen doğru"
  },
  {
    review_owner: "Murat Baloğlu",
    txt:
      "Afgan Beyin bilgi birikimi ve akıcı anlatımı, kursa merakla ve keyifle devam etmenizi sağlıyor. Youtube kanalındaki ücretsiz videolarını izlemiştim ve ondan sonra bu seti satın almaya karar verdim. İyi ki de satın almışım. Ödediğiniz paranın her kuruşunu hak eden bir anlatım-öğretim tarzı ve emeği var. After Effects ve Premiere için de full bir eğitim seti hazırlamasını dört gözle bekliyorum."
  },
  { review_owner: "Murat Sezgin", txt: "Kesinlikle :-)" },
  {
    review_owner: "Gökhan Fışıloğlu",
    txt:
      "Hiç photoshop ile ilgili bilgisi olmayan bir kişi için temelden başlanması açısından uygun. Fakat temel ve orta düzey açısından sıkıcı olma durumu doğuyor. Ama sonuç olarak herkesin öğrenmesi için yapılan bir eğitim olduğu için baştaki kısımlar mazur görülmeli."
  },
  {
    review_owner: "Ziya Kadir Şakak",
    txt: "İLK DEFA DUYDUM ANCAK ALMAYI DÜŞÜNÜYORUM SİZİN ANLATIMINIZDAN SONRA"
  },
  { review_owner: "Sefa Çam", txt: "iyiymiş" },
  {
    review_owner: "Mahmut Serdar Kaya",
    txt: "çok sade anlatım sayesinde herkes anlayabilir."
  },
  {
    review_owner: "Mustafa",
    txt:
      "hiç bilmeyen birinin 0 başlayarak yapabileceğime baya emin oldum photoshop ile alakalı tek bildiğim görüntü boyutu ayarlama"
  },
  {
    review_owner: "Sadettin Özer",
    txt:
      "Gayet güzel, anlaşılır ve adım adım uygulamalı. Harika. Tavsiye ederim."
  },
  { review_owner: "Oğuzhan AKTAŞ", txt: "SORUNUM VAR" },
  { review_owner: "Çiğdem Erkin", txt: "Çok memnun kaldım" },
  {
    review_owner: "Akin Pangal",
    txt: "Anlatım gayet açık ve anlaşılır şimdilik iyi gidiyor bakalım"
  },
  {
    review_owner: "Mehmet Altunçay",
    txt:
      "Photoshop programına ilk merak sardığım 2013 yılında youtube da denk gelmiştim  videolara bir kaç ay geçtikten sonra fark ettim ki ondan daha iyi içerikler sunan Türk yoktu ve şuan yıllar sonra halen grafikle ilgili bir sorun yaşadığımda onun kanalında buluyordum cevapları, Bu yıl photoshop üzerinde başarılı çalışmalar yaptım ve iş teklifi aldım ve kendimi daha fazla geliştirmek için yine aynı kişiye başvurdum . Teşekkürler Afgan Rasulov.."
  },
  { review_owner: "Hacibekir Yalçın", txt: "Afgan Rasulov=Kalite" },
  {
    review_owner: "Kaya Kologlu",
    txt: "Harika bir anlatım basit ama çok etkili ??"
  },
  { review_owner: "Oğulcan Kurtuluş", txt: "şimdiden çok şey ögrendim" },
  { review_owner: "Eda Nur Harputlu", txt: "evet teşekkür ederim." },
  {
    review_owner: "Akdayi81",
    txt:
      "Eğiticinin anlatımından dolayı afkan gerçekten çok güzel ders anlatıyor"
  },
  { review_owner: "Murat Karakuş", txt: "Şimdilik bir sorun yok kursa devam" },
  {
    review_owner: "Yetkin",
    txt:
      "Gerçekten harika bir eğitim, Afgan Beyin çok güzel bir anlatımı var bu kurs benim için çok yararlı oldu kendisine teşekkür ediyorum. Emeğinize sağlık."
  },
  {
    review_owner: "Hülya Hayta",
    txt: "Şimdiye kadar olan süreçte birçok faydalı bilgi edindim teşekkürler"
  },
  { review_owner: "Gökhan Dayıoğlu", txt: "evet" },
  { review_owner: "Ebutalha Camadan", txt: "Oldukça doğru bir eşleşmeydi." },
  { review_owner: "gürkan kızıldağ", txt: "Adam harika" },
  {
    review_owner: "Bahar Şamlı",
    txt: "Harika ve kesinlikle beklentilerimin üstündeydi."
  },
  { review_owner: "Sevgi Karakaş", txt: "çok yararlanıyorum." },
  {
    review_owner: "Bumin Kaan Yanık",
    txt: "kesinlikle benim için mükemmel bir deneyim oldu"
  },
  { review_owner: "Cem şahin", txt: "Güzelll" },
  { review_owner: "Cenan", txt: "ANLATIŞI SÜPERR=)" },
  {
    review_owner: "Volkan Usta",
    txt:
      "Gayet başarılı bir şekilde devam ediyor eğitimler.Anlatım tarzı gerçekten çok iyi sade ve yalın. Teşekkürler"
  },
  { review_owner: "Eminecimnoluyo", txt: "şimdlik iyi gidiyor" },
  { review_owner: "Mustafa ANLAYAN", txt: "HARİKA" },
  { review_owner: "Şevval Özer", txt: "kesinlikle!" },
  { review_owner: "Serhat Bozkurt", txt: "Çok eğlenceli içten bir kurs" },
  { review_owner: "Mert Ali Dalkır", txt: "güzeldi" },
  {
    review_owner: "Ahmet Yahya Özden",
    txt:
      "Afgan Hocam kesinlikle işinin ehli birisi. Güzel ve detaylı anlatımı insanda çok kalıcı ve güzel etkiler bırakıyor"
  },
  {
    review_owner: "Tuğba Kobal Yılmaz",
    txt: "tesekkür ederim size. inşallah öğreneceğim sayenizde :)"
  },
  { review_owner: "Abdullah Pehlivan", txt: "Yetkin anlatımı güzel" },
  {
    review_owner: "Atakan Barış",
    txt:
      "Sıfırdan başlayanlar için güzel bir eğitim seti olmuş. Gelişmiş özelliklerin kullanımı için hazırlanan videoları izleyince tekrar değerlendireceğim."
  },
  {
    review_owner: "Bülent Erol",
    txt:
      "Güzel Türkçesi ve anlaşılabilir anlatımıyla büyük fayda sağlıyor.Bana uygun bir uygulama.Başarılar dost selamlar..."
  },
  {
    review_owner: "Saliha Tülin Türk",
    txt: "Kesinlikle pişman olunmayacak kurs programı"
  },
  { review_owner: "Burak", txt: "teşekkürler" },
  {
    review_owner: "Murat unal",
    txt: "Anlatım dili güzel, sıkılmadan öğreniyorsunuz."
  },
  { review_owner: "Zet Ömer BOZKURT", txt: "iyi ilerliyor" },
  {
    review_owner: "Halil İbrahim sağman",
    txt:
      "Kursu yeni satın aldım, sonucunun başarılı olacağından şüphem yok, hocamın sayesinde inşallah güzel işler başaracağız.."
  },
  { review_owner: "İsmail", txt: "YouTubedan buraya kadar gelen süreç için." },
  { review_owner: "Ege Erol", txt: "EVET" },
  { review_owner: "mahmuthan orun", txt: "all good" },
  {
    review_owner: "Aksoy",
    txt: "Her detayiyla anlatilmasi harika gercekten cok tesekkur ederim :D"
  },
  {
    review_owner: "Nurullah Aydın",
    txt:
      "Tek kelime ile harika. Bilgi donanım ve anlatım tarzı yönünden çok iyi."
  },
  {
    review_owner: "Novruz Ahmadov",
    txt:
      "BELƏ GÖZƏL BİR TƏŞƏBBÜSÜN ÖZ HƏMVƏTƏNLİM TƏRƏFİNDƏN HƏYATA KEÇİRİLMƏSİ ÇOX GÖZƏLDİR."
  },
  {
    review_owner: "Metincan6161",
    txt:
      "Afgan Abi 2.Eğitimide Satın Aldım. Senin Sayende Youtubeda Artık Güzel Ve Kaliteli İçerikler Sunup Herkeze Sunabiliceğiz. Herşey İçin Teşekkür Ederim. https://www.youtube.com/channel/UCGkxXUkk1cQL6d5pdKO95IwKanalım Bu Afgan Abi İnşallah Güzel Yerlere Geliceğim. Sayende Tekrardan Teşekkür Ederim."
  },
  {
    review_owner: "Abdullah Pakoğlu",
    txt: "kolay bir şekilde ulaşabileceğim kaynak olacak"
  },
  {
    review_owner: "Arzu Seki̇n",
    txt:
      "Kendisinin emeğine sağlık. Zaten Youtube kanalından da takip ediyorum. İşini o kadar seviyor ki, bunu eğitimlerde de çok iyi hissettiriyor. Kurslara gittiğim halde sayesin de hem Photoshop programını hem de Premiere Pro programını buradan öğrendim. Anlatımı ve atış noktaları çok iyi.. Kısacası çok çok iyi. Devamını dilerim. Özellikle Premiere Pro detaylı anlatım eğitimi verirse çok sevinirim.tekrar tekrar teşekkür ederim.Arzu Sekin"
  },
  {
    review_owner: "İsmail Uslu",
    txt:
      "Deneyiminizi bizimle paylaştığınız için teşekkürler.Lütfen daha çok örnek çalışma yükleyin. Günlük çekilen bir fotoğraf üzerinde neler yapabiliriz , bu konu hakkındaki yaratıcılığınızı bizimle paylaşırsanız da sevinirim."
  },
  {
    review_owner: "Sinasi ARSLAN",
    txt:
      "Photoshop konusunda herzaman takip ettiğim bir eğitmen. Bu dersi de çok faydalı buldum. Genel tekrarı güzel bir uygulama ile de pekiştirmiş. Bir manzara fotoğrafını düzenlemekle ilgili de detaylı bir örnek çekerek derse eklemesini de umut ediyorum. Teşekkürler emeğine sağlık Afgan Hocam."
  },
  {
    review_owner: "Onur Baykan",
    txt:
      "Artık fotoğraf düzenlemek ve arşivlemek çok daha kolay hale geldi. Anlatımı sıkıcı değil ve eğitimin her anı dolu dolu geçiyor.Teşekkürler"
  },
  {
    review_owner: "İsrafi̇l Serdar Gültepe",
    txt:
      "İnce ayrıntıları öğrendim. Giriş seviyesinde bir öğrenciyken şuan orta seviyenin az daha ilerisinde bir öğrenciyim. Kendime hiçbir zaman da profesyonel demeyeceğim çünkü zaman ilerledikçe yenilikler olacaktır yeniliklere açık olup kendimize bu kadar yeterlidir demeden sürekli öğrenme çabası içerisinde olmalıyız düşüncesini aşıladım. Bu kurs ile ilgili önerim sadece şu olabilir bu kursu almış bir öğrenci olaraktan, ayrı bir bölüm daha koyulup kursun içeriğine bonus olarak bu bölümede egzersiz bölümü denerek egzersiz sayısı biraz daha arttırılabilir daha detaylı daha fazla örnekle kursun içerisindeki eğitimlere destek sağlanabilir görüşündeyim. Bunların dışında kurs gerek hobi gerekse fotoğrafçılığı meslek edinmek isteyenler için kaçırılmaz fırsat gerekli çoğu bilgiyi içinde barındırmaktadır."
  },
  {
    review_owner: "Yunus Sarıusta",
    txt:
      "Egzersizler biraz az; bununla birlikte çok zor teknikleri bile iyi anlatmış. Anlatım biraz tek düze ses tonuyla gitmiş ancak o kadar kusuru olur. Eninde sonunda bir online kurs bu. Nesif bir klavuz olduğunu düşünüyorum."
  },
  { review_owner: "Sefa Yurtsever", txt: "Kesinlikle" },
  {
    review_owner: "Zafer Payçu",
    txt:
      "Afgan Beyi youtubea ilk video yüklemesinden beridir (7yıldır) takip ediyorum. Kendisinin neredeyse tüm kurslarını satın aldım. Sayesinde bu mesleğe adım atıp, kariyerimde yükseliyorum. Kendisine ne kadar teşekkür etsem azdır. Birçok yararlı bilgiyi en sade, yalın anlatımıyla bizlere sunuyor. Kendisinin birebir kullandığı yöntemleri açık açık anlatıp, tüm sorulara en içtenlikle cevap veriyor. Bu kursta en çok profesyonel rötuş tekniğini beğendim. Acılar; biraz daha fazla uygulamalı ve ileri seviye kesime hitaben (Yeni başlayan ve orta seviyeye değil) içerikler yaparsanız çok daha mutlu oluruz. Herşey için teşekkürler, takipteyiz."
  },
  {
    review_owner: "Mustafa Kemal",
    txt:
      "Evet Doğru bir Karar verdiğime inanıyorumDers ilerledikce heycanla öğreniyorumtatlı bir yorgunlukla bitti eğitim,birşeyler katı bana"
  },
  { review_owner: "Remzi Yılmaz", txt: "harika bilgiler teşekkürler :)" },
  {
    review_owner: "Sevi̇n Çeti̇ntaş",
    txt:
      "Photoshop kullanır hale geldim. Daha profesyönel öğrenmek isterim. Bilen  değil yapabilen olmak istiyorum . Yüreğine sağlık hocam ."
  },
  {
    review_owner: "Sinan Koyuncu",
    txt:
      "Emeğinize sağlık. İlk başlarda aynı şeylerin çok fazla tekrar edildiğini düşünsem de ileriki dönemlerde bunun faydasını gördüm. Faydalı bir kurs, çok teşekkürler!"
  },
  {
    review_owner: "Güven ALTAY",
    txt:
      "Teşekkürler amatör olarak fotoğraf çekimi ve photoshop kullanıyorum eğitimleriniz sayesinde güzel bir hobi yakalamış oldum."
  },
  {
    review_owner: "Recai Sönmez",
    txt:
      "Anlatım çok güzel açıklayıcı birçok adobe alanındada güzel eğitimler istiyorum çok kısa zamanda  kolay bir şekilde kavrıyorum teşekkürler Afgan Bey."
  },
  {
    review_owner: "Aykut kaysı",
    txt:
      "afgan hocam harikasınız.istediğim tüm dersler neredeyse eğitim videolarınızda vardı.artık sizin sayenizde istediğim shopları yapabiliyorum :)"
  },
  {
    review_owner: "Enver Murat",
    txt:
      "bu kursta merak edipte öğrenilemeyecek hiçbir şey yokartık photoshopa karşı ön yargılarım tamamen yıkıldı diyebilirim, bu kurs bana disiplinli bir şekilde photoshopa yaklaşmayı öğretti, şu anda yapabildiklerim beni de şaşırtmaya başladı diyebilirim ama her işte olduğu gibi bununda ilacı pratik yapmaktan geçiyor, teşekkürler Afgan Rasulov."
  },
  {
    review_owner: "Mustafa dönmez",
    txt:
      "Benim için çok faydalı bir eğitim,photoshop ta eksik olan bilgilerimi tamamlıyor"
  },
  {
    review_owner: "Salih Bestami ÖĞRETİM",
    txt: "belirli saatlerde canlı soru cevap kısmı olsa daha iyi olabilir"
  },
  {
    review_owner: "Sedat",
    txt:
      "Hocamız Sağolsun Çok Güzel Anlatıyor.Faydalı Ve Akıcı Bir Anlatım Var."
  },
  {
    review_owner: "Nafibostanbas",
    txt: "Anlatımı olsun kullanımı olsun gayet güzel. Teşekkürler"
  },
  { review_owner: "SAMET BALCI", txt: "evet" },
  {
    review_owner: "Sezin Çobanoğlu",
    txt: "Emeğinize sağlık. Çok teşekkürler..."
  },
  {
    review_owner: "naci çağlar dalak",
    txt:
      "Bu eğitim seti gerçekten hiç bilmeyen ve sıfırdan öğrenmek isteyen kişilere yol göstermek ve iyi bir şekilde kavramalarını sağlamak için hazırlanmış bir eğitim seti. Tavsiyem, daha önce biraz photoshop ile haşır neşir olan kişilerin bu eğitimi almalarının bir faydası olmayacağıdır. Sıfırdan başlayanlara ise gerçekten faydalı ve iyi bir kılavuz olacaktır. Emeğiniz için teşekkürler."
  },
  {
    review_owner: "Yusuf Bolat",
    txt:
      "Çok harika bir eğitmen severek takip ediyorum,Youtubedan bile umarım hayatında iyi işler yapar.Eğitimi satın aldık çok iyi eğitmen."
  },
  { review_owner: "Elmaddin Karimov", txt: "So far so good" },
  {
    review_owner: "Bayram Özer",
    txt:
      "kursa yeni başladım. başlangıç olarak hem anlatım olsun hemde farklı teknik denemeleri  güzel yeni olduğum için burda kesin konuşmak erken ama tabi biz ne kadarını dinleriz o bize kalmış yapılan teknikler tekrar edilmezse ne kadar güzel anlatılırsa anlatılsın birşey öğrenemeyiz.TEKRAR ETMEK ÖNEMLİ"
  },
  { review_owner: "Sedat Polat", txt: "evet şuana kadar iyi buldum" },
  {
    review_owner: "Bilgehan Eroğlu",
    txt:
      "Kendisini uzun süredir youtube üzerinden de takip ediyordum ve Udemyde kurs verdiğini görür görmez tereddüt etmeden aldım,aldığıma da fazlasıyla mutluyum.Bu uğraşı olan dostlarıma kesinlikle öneririm,hem işinin ehli ve samimi bir insan hem de yaptığı işte çok iyi,açıklayıcı anlatımıyla beraber muazzam bir kurs olmuş çok beğendim iyi çalışmalar. :)"
  },
  { review_owner: "Birgül Ivecan", txt: "Teşekkürler" },
  { review_owner: "Ajlan Uçar", txt: "Teşekkür ederim" },
  {
    review_owner: "Ahmet Köse",
    txt:
      "Afgan rasülov  müthiş bir insan. Kendisine teşekkür ediyorum emeğine sağlık YouTube’dan takip ediyorum kösegraf TV ??"
  },
  {
    review_owner: "Emice A",
    txt:
      "Afgan Rasulovu youtube de takip ediyordum. Gayet güzel bir anlatımı var. Daha derli toplu bir eğitim gibi duruyor şimdilik."
  },
  { review_owner: "Sedat Aydogan", txt: "Detaylı ve açıklayıcı bir kurs" },
  { review_owner: "Abdulrahim Şahinler", txt: "gayet başarılı" },
  { review_owner: "Ibrahim Karaaslan", txt: "harika...." },
  { review_owner: "Mustafa", txt: "harika" },
  {
    review_owner: "İbrahim Efe Memişoğulları",
    txt:
      "sıkılmadan eğlenceli bir şekilde bu deneyimi yaşattığın için teşşekür ederiz."
  },
  {
    review_owner: "Uğur Sezer",
    txt:
      "Bu kursun çok faydalı olacağını düşünüyorum ve bu konuda hiç şüphem yok Afgan a güveniyorum. Ayrıca şu ana kadar açık ve anlaşılır konuşması çok hoşuma gitti. Kurs sonunu hevesle bekliyorum."
  },
  {
    review_owner: "Yüksel SARAÇ",
    txt:
      "Anlatım çok akıcı, düzgün bir Türkçe videoların devamını sabırsızlıkla izleyeceğim."
  },
  { review_owner: "Neriman Alpagut", txt: "Şimdiden çok beğendim." },
  {
    review_owner: "Volkan Şahinler",
    txt: "Harika....hoca cok detaylı anlatıyor..."
  },
  { review_owner: "Einsteinz", txt: "Eğitmenin çok sade güzel bir dili var." },
  {
    review_owner: "Özkan Özertekin",
    txt: "Başka kaynağa gerek yok en iyi kurs afgan hocanın kursu"
  },
  { review_owner: "Fatma Demir", txt: "sanırım" },
  { review_owner: "Gavur Hoca", txt: "crystal clear" },
  { review_owner: "S. Ender ÇUBUKÇU", txt: "Akıcı ve anlaşılır." },
  {
    review_owner: "Erhan SARISARAY",
    txt:
      "Afgan beyi youtubede tanımıyan yok gibi .Verdiği eğitim çok başarılı.Tereddüt etmeden bu eğitimi alabilirsiniz.Parasını sonuna kadar hak ediyor."
  },
  {
    review_owner: "Emirhan",
    txt:
      "Valla Çok Güzel Anlatımı Var. Bilmediğim Konularıda Öğrendim.Devamlarını Çok Merak Ediyorum.. :)"
  },
  {
    review_owner: "Yusuf Bahri YILMAZ",
    txt:
      "Daha yeni başladım ve gayet memnunum zaten Afgan abiyi youtubeden de takip ediyordum"
  },
  { review_owner: "Enes DEĞİRMENCİ", txt: "Güzel başlangıç" },
  {
    review_owner: "Kerim Tellioğlu",
    txt:
      "en çok öğrenmek istedğim programlardan biriydi ve galiba doğru karar vermişim."
  },
  { review_owner: "Mustafa Memiş", txt: "anlatim gayet seri ve açık" },
  {
    review_owner: "Yılmaz Tokatlı",
    txt: "Gayet akıcı ve net bir anlatım mevcut, tavsiye ederim. :)"
  },
  { review_owner: "Merih Salmaz", txt: "Anlatım sade,akıcı ve anlaşılır." },
  {
    review_owner: "Burhan",
    txt:
      "evet doğru adresteyim.afgan rasulovun youtube videolarıda harika.tşk ediyorum.faydalı bir eğitim olacağına inanıyorum"
  },
  {
    review_owner: "Dilek",
    txt: "Henüz derslere başlamadığımız için, yorum yapamayacağım"
  },
  { review_owner: "Ahmet Aslan", txt: "Çok verimli" },
  {
    review_owner: "Nurten Özan",
    txt:
      "Afgan Rasulov un pek çok eğitim videosunu daha önce izlemiştim, ve işime yarayan çok şey öğrendim. Şimdi ise elimin altında sürekli bulunacak olan ve unuttuğumda geriye dönüp bakabileceğim bir eğitim setim var. Teşekkürler Afgan Rasulov."
  },
  {
    review_owner: "Bülent Karagözcük",
    txt:
      "kurs içindeki bölümlere kolay ulaşılamıyor diğer yanları çok başarılı profesyonelce tebrikler"
  },
  {
    review_owner: "Ertuğrul Evli̇yaoğlu",
    txt:
      "Afgan Rasulov öncelikle insanlığından dolayı çok teşekkür ederim eğitimlerini alın almayın ne zaman birşeyler danışsanız çok hızlı bir şekilde yardımcı oluyor , ben birşeyler öğrenmek istedim hemen gerekli resimleri png formatında gönder  nasıl yapacağın hakkında video çekip eğitime ekliyeyim dedi .      Var mı böyle yardımcı olan Türkiye Cumhuriyetinde ? Afgan hocam sen Allahın bir lutfusun  .... Tekrar Tekrar çok teşekkür ediyorum eğitimlerini gözü kapalı alın şiddetle tavsiye ediyorum eğitimleri aldıktan sonra farkı göreceksiniz ve Adamın dibi bir hocayla tanışmış olacaksınız ."
  },
  { review_owner: "Huseyn Gurbanov", txt: "Çox bəyəndim." },
  { review_owner: "Özlem aydın", txt: "İyiydi" },
  { review_owner: "Şeydanur Işbilir", txt: "Oldukça iyi" },
  { review_owner: "Tahsin Barış", txt: "evet" },
  { review_owner: "Osman Furkan Esgidir", txt: "Çok memnunum..." },
  {
    review_owner: "Furkan S.",
    txt:
      "Afgan Hocadan birçok şey öğrendim Photoshop u açmayı dahi bilmiyordum. Öğrenmeye devam ediyorum iyiki varsınız."
  },
  { review_owner: "Bilal Gökçe", txt: "Afgan Rasulov bir markadır." },
  { review_owner: "İhsan Uğur Işık", txt: "kesinlikle" },
  {
    review_owner: "Barış Balcı",
    txt:
      "İnşallah bu eğitim seti sürekli güncel olur. Yeni videolar eğitimler yüklenmeye devam eder. Minimum 50 saatlik bir kurs olmasını beklerim. Yemekten , yoldan kısıp 25 lira para verdik. İnşallah faydalı olur."
  },
  { review_owner: "Kemal Uysal", txt: "evet" },
  {
    review_owner: "Rumeysa Keleş",
    txt: "Çok yalın net bir şekilde anlatılmış harika... emeğinize sağlık?"
  },
  { review_owner: "Fikrolog S", txt: "Şimdilik güzel gidiyor" },
  {
    review_owner: "Sümeyye Arslan",
    txt: "Herşey çok anlaşılır, ve çok zevkli. Teşekkürler.."
  },
  {
    review_owner: "Bülent ÇELİKDEMİR",
    txt:
      "Afgan Rasulov abimin eğitimlerini zaten takip ediyordum fakat şimdi daha profesyonel olarak almaya karar verdiğimden eğitime başladım ve gayet memnunum"
  },
  { review_owner: "Ali-Ruso Mamedov-Musayev", txt: "cox gozel kursdu" },
  {
    review_owner: "Niko",
    txt:
      "afqan abi sen harikasin ya senin sayende kanalim cok ama cok one gidicek. buna inaniyorum. ve ayrica bunuda soylemek isdiyorum ben asla ve asla pes etmem. bunun icin burdayim.hormetle niko aliyev"
  },
  {
    review_owner: "Ortak Hesap",
    txt:
      "benim işime yaradı sizinde yarayacağını düşünüyorum, eğitim seti işe yarar bilgiler içeriyor ve sıkıcı değil gayet canlı ve gülecen bir şekilde verilmiş :)"
  },
  {
    review_owner: "LogoS Tv Official",
    txt:
      "Bilmediğim şeyleri öğrenmemde bana katkısı oldu. Anlatılanların bazılarını uyguluyordum ama afgan rasulov un küçük ayrıntılara girmesi ince bir dokunuştu. Teşekkür ederim."
  },
  {
    review_owner: "Hakan Naşezo",
    txt:
      "Tekrar merhaba,İlk olarak körü körüne tercih ettiğim ve aynı zamanda da Youtube kanalını takip ettiğim ender samimiyet sahibi güzel insan Afgan Rasulaov'a teşekkür ediyorum. Bu detaylı youtube Seo Eğitim Setini paylaştığı için. gerçekten çok teşekkür ederim. * Yalnız belirtmem gerektiğini düşündüğüm şeyler de yok değil.* 2020 Youtube Algoritması ya da Youtube Güncellemeleriyle alakalı bir kaç içerik eklerseniz güzel kardeşim bütün öğrencileriniz adına iyi bir hediye veya güncelleme olabilir.İyi Yayınlar, Başarılar..."
  },
  {
    review_owner: "Esra Karagöz",
    txt:
      "Kesinlikle çok faydalı bir eğitim.. Henüz eğitimin başındayım, anlatımdaki detaylandırma ve hazırlanmış dökümanlar oldukça faydalı.."
  },
  {
    review_owner: "Kemal Demir",
    txt:
      "Ads. kısmında sona yaklaştım, harikaydı. Umarım dijital reklam modelleri, remarketing, affinity ve programatik reklam konularını da içine alan genel bir dijital pazarlama eğitimi yayınlarsınız. Sevgiler"
  },
  {
    review_owner: "Hüseyin Arslan",
    txt:
      "Kursun her aşamasında hocamızın konuya ne kadar hakim olduğunu görebiliyorsunuz. Çok beğendim, emeğine yüreğine sağlık."
  },
  {
    review_owner: "Ayşe Mutlu Genç",
    txt:
      "Merhaba. Bu eğitim seti için çok teşekkür ederim. bilmediğimiz ve yanlış yaptığımız o kadar çok şey varmış ki sayenizde daha da gelişeceğiz inşalah. Bir çocuk kanalı sahibi olarak coppa yasası sonrası izlememiz gereken yolda bize ışık tutarsanız çok sevinirim."
  },
  {
    review_owner: "Bayan Butik",
    txt:
      "merhaba ben canberk gül.Doktorum ben ve yaptığım tedavilerle ilgili bir youtube kanalı kurmaya karar verdim. Kanalı kurmadan önce birçok kaynaktan bilgi aldım.Youtube academydeki tüm videoları ve makaleleri okudum.Kendimce bir şeyler yapmaya çalışıyorum sonrasında Afgan Bey'in bu kursunu satın adım ve de iyiki almışım diyorum şu anda tüm samimiyetimle. Çünkü bazen bir konuyu ne kadar okusanız yada araştırsanız dahi yeterli olamayabiliyor.Tecrübeler daha önemli oluyor.Afgan bey çok açık,anlaşılır ve sade bir biçimde tecrübelerini aktarmış ve de 1000 sayfadan fazla yazı, 15 saat civarı video izleyen birisi olarak bazı bilgiler gerçekten hiçbir yerde bu kadar açıkça ifade edilmemiş. Kendisine çok teşekkür ederim.Hiç düşünmeden bu kursu satın alabilirsiniz kesinlikle"
  },
  {
    review_owner: "İsmail Kayacan",
    txt:
      "Youtube'a başlamak isteyenler ve yeni başlayanlar için güzel bir eğitim. Pratik kullanım düşünülerek hazırlanması ayrıca güzel."
  },
  {
    review_owner: "Mustafa Tunahan Tuna",
    txt:
      "Kursun izlemediğim sadece 1 bölümü kaldı. Afgan Beyin konuya hakim olduğu aşikar. Kullanılan metodları iyice özümseyerek ilerlerseniz başarısız olma şansınız çok çok düşük olacaktır. Yeni başlayacak arkadaşlardan ricam: 'Pes Etmeyin.' minimum 6 aylık bir süreç sizi bekliyor. Bunu sakın unutmayın, 'Sabreden derviş muradına ermiş' derler. Sabredin, istikrarlı olun, başarı zaten gelecektir."
  },
  {
    review_owner: "Taner ŞEN",
    txt:
      "Kursta harika blgiler edinebilirsiniz, Afgan Rasulov'un diğer kurslarını da satın alıcam, keşke soru sorabilme imkanım olsaydı diğer kurslar hakkında"
  },
  {
    review_owner: "Mustafa çet",
    txt:
      "Öncelikle dersini çok beğendim ve başarılı sunum yaptınız teşekkür ederim.Ben bir çocuk kanalı öğrencinizim. 2 Ay sonra öğrenciniz oldum düzenli youtube de düzenli video paylaşıyorum.Ekran goruntusu etıketler başlık kısımları hakkında olan kısım seo bolumu reklamda vermekde içinde 2.5 ay içinde 80 videoyla devam ediyoruz tek sorun önerilerimiz çok ve çok düşük bu durumda tabi üzülerek bekliyoruz.İnş bu dersden sonra hatalarımızı gördük düzeltme yolundayız hedeflerimize ulaşırız."
  },
  {
    review_owner: "Onur Oktay",
    txt:
      "Kursu tamamlayıp sertifikamı aldım. Afgan bey içten ve kaliteli anlatımıyla bilmemiz gerekenleri,  geçmiş derslerdeki önemli noktaları ve yapmamamız gereken hataları her derste ara ara  tekrar ederek bilgiyi adeta beynimize işleyen üslubuyla harikalar yaratmış. Kursu satın almayı düşünen arkadaşlara gönül rahatlığıyla tavsiye ederim. Asla pişman olmazsınız.Bilmediğimiz yada yanlış bildiğimiz o kadar çok şey varmış ki...Bu kurs bana çok şey kattı emeklerinize sağlık. Kanalım büyüdükten sonra nasip olursa sizinle çalışmayı çok isterim...Herşey için tekrar teşekkürler..."
  },
  {
    review_owner: "İbrahim Kaya",
    txt:
      "Ben Ruhi Çenetin A'dan Z' ye Youtube eğitim setini aldım ve izledim daha sonra Afgan Rasulov Eğitim setini aldım ve izliyorum ikiside konuya hakimler ve güzel anlatmışlar.Bu eğitim seti biraz daha kaliteli Kendi yapacağınız içerikler dışında buradaki öğretilenleri uygulayanların bir çoğu kanalını güzel yerlere getirebilir bundan eminim.Bir eleştiri olarak eğitim setiniz için şunu söyleyebilirim Youtube gelirleri hakkında eğitim vermemişsiniz .Örneğin Şu videoda şu kadar kazandım şunda ise şu kadar kazandım aylık kazanç vs bir şey anlatmamışsınız ."
  },
  {
    review_owner: "Çağatay Güleç",
    txt:
      "Anlatım çok iyi. Zaten çoğu şeyi biliyorum diyordum ama farkında olmadan çok sık yaptığım hatalar olduğunu anladım."
  },
  {
    review_owner: "Videodayız",
    txt:
      "Afgan hocam, daha ilk videodan onlarca şey öğrendik ve 'videodayız' adlı kanalımızı daha da şekillendiriyoruz. Size çok teşekkür ederiz."
  },
  {
    review_owner: "Farid Nasirov",
    txt:
      "Bu kurstaki bilgileri uygulayarak YouTube kanalımı büyütmeye çalışıyorum. Afgan bey'in anlatım şekli güzel, özellikle tekrar yapması muhteşem. Kursu bitirdim ve umarım edindiğim bilgiler kanalımın büyümesinde büyük rol oynayacaktır. NOT: Kanalım: Marvin'in Videoları. BHelki kanalın gelişimini izlemek isteyen olur."
  },
  {
    review_owner: "Alper Koseoglu",
    txt:
      "Faydalı Bir Eğtim gerçekten, youtube a başlamak isteyen herkese mutlaka bu eğitimi  öneririm."
  },
  {
    review_owner: "Kamil Gedikli",
    txt:
      "Hazırlamış olduğunuz videolar için çok teşekkür ederim. Emeğinize sağlık. Çok şey öğrendim sayenizde."
  },
  {
    review_owner: "Filiz Arslan",
    txt:
      "Yanlış yaptığım bir çok hatayı kendim gözlemledim.Umarım kanalım bu kurs sayesinde çok daha iyi yerlere gelsin.Çok anlaşılır bir dil anlatımı ve istikrarlı bir şekilde uygulayan BEN :)"
  },
  {
    review_owner: "Osman Nuri Şenel",
    txt:
      "öğretici ve bilgi dolu bir eğitim videosuydu. Teşekkür ederim ağzına sağlık"
  },
  {
    review_owner: "Burak",
    txt:
      "Çoğu bilgiye hakimdim ama sonuna kadar okudum dinledim kursu, bazı yerlerde vay be yada oooo dediğim yerler çok oldu :) Afgan hocamın emeğine sağlık, çok faydalı bir eğitim olmuş. En güzeli ne biliyor musunuz? Konuları sağa sola çekmeden direk anlatmış."
  },
  {
    review_owner: "Adanalı Nevzat",
    txt:
      "anlatılan bütün uygulamaları tek tek yaptım baştan sona seyrettim keyifli bir öğretim videosu olmuş elinize sağlık"
  },
  {
    review_owner: "Alper Eroğlu",
    txt:
      "Hem kendi kanalım hem de çalışmakta olduğum bir kanalın gelişimleri için bu kursu aldım. AfganRasulov abimizi de ilk zamanlarından beri takip ediyordum. İndirimdeyken alınabilecek bir kurs olduğunu düşünüyorum. İsteyenler için hızlandırılmış dersleri de mevcut, fakat ben sindirerek öğrenmeyi sevenlerdenim."
  },
  {
    review_owner: "Eren Caner",
    txt:
      "Güzeldi, hızlandırılmış eğitimi 1.5x hızıyla biraz daha hızlandırarak bitirdim. Sonuna kadar not alarak izledim. Tebrikler. Ana eğitimi de alıp finalize edeceğim."
  },
  {
    review_owner: "Vural ASLANTEPE",
    txt:
      "sevgili afkan videon çok hoşuma gitti basit yollardan kanal geliştirmeyi iyi anlattın tesekkür ederim"
  },
  {
    review_owner: "Tayfun Göl",
    txt:
      "Afgan’ın konuşması çok akıcı, verdiği bilgiler çok faydalı. Sıkılmadan izledim, bu ders serisinde anlatılanları uygulamaya çalışacağım, meyvelerini zamanla vereceğine inanıyorum."
  },
  {
    review_owner: "Fati̇h Akçay",
    txt:
      "ŞUAN İÇİN HERŞEY GÜZEL GİDİYOR. KURS BİTİMİNDE GENEL DEĞERLENDİRME YAPACAĞIM"
  },
  {
    review_owner: "Osman Demir",
    txt:
      "Gerçekten bunu bütün içtenliğimle söylüyorum afgan kardeşimin eğitim videoları anlatma becerisi ve insanın kafalarına yerletşirme yetenği çok yüksek bu tabi benim bakış açım kendisine teşekkürlerimi sunmak isterim."
  },
  {
    review_owner: "Emre Uzun",
    txt:
      "Araba hakkında kanalım için gerçekten güzel bir ivme kazandırdı bu eğitim. Çok teşekkür ederim hocam. Ancak şunu tavsiye edebilirim kursu alacak arkadaşlara bu kurstan önce Ruhi Çenet youtube kanal kurulum eğitimini almaları çok sağlıklı olacaktır. Daha sonrasında bu detaylı ayarlamalarla büyük ivme kazanacaklardır. Teşekkürler hocam."
  },
  { review_owner: "Mustafa Çeli̇k", txt: "Başarılı bir kurs tavsiye ederim" },
  {
    review_owner: "Kamran Shirvanov",
    txt:
      "Yeni şeyler öğrendim zaten daha önce az bilgiliydim, ama bazı şeyler netleşti devam ediyorum."
  },
  {
    review_owner: "Umutcan",
    txt:
      "RUHİ ÇENET ABİMİN EĞİTİMİNİ BİTİRDİM VE SONRASINDA AFGAN ABİMİN EĞİTİM SETİNİ ALDIM VE GAYET MEMNUN KALDIM VE BİTİRDİM. KANALIMA BUNDAN SONRA BU TAKTİKLERİ UYGULAYARTAK DEVAM EDECEĞİM."
  },
  {
    review_owner: "Yigitcan Aygül",
    txt:
      "Çok doğru bir eşleşmeydi iyi ki satın almışım diyorum şu ana kadar bir çok hatamı gördüm."
  },
  {
    review_owner: "Cenk Akdemir",
    txt:
      "Youtube ta olduğu gibi udemy de yakında takip ediyorum. verdiğin tüm bilgiler için teşekkürler. henüz hızlandırılmış eğiitimi bitirdim ancak herşey on numara."
  },
  {
    review_owner: "Halil Demir",
    txt:
      "farkında olmadığım birçok noktayı eğitim sayesinde öğrendim ve uyguladım. eğitimin devamında daha güzel şeyler olacağına inanıyorum.."
  },
  {
    review_owner: "Orhan Alper ULUSOY",
    txt:
      "Hızlı eğitim fena değil ama normal eğitimde uygulayarak gitmek daha kolay olacak. Bu hızlı eğitimde en azından bir alt yapı oluşmuş oldu kafamda."
  },
  { review_owner: "Yagiz Derolur", txt: "eğitim harika gidiyor teşekkürler" },
  {
    review_owner: "Kağan Kayak",
    txt:
      "Kurs çok iyi detaylı gerekli bilginin verildiğine kesinlikle inanıyorum. Anlatıcının tepkileri biraz abartılı ve yapmacık geliyor sadece. Abartılı tepkilerin konuyu hafiflettiğini ciddiyetini düşürdüğünü hissediyorum. Bu tabiki benim için geçerli bir konu büyük ihtimalle daha genç kişiler bunu sevimli veya şevk verici buluyor olabilir."
  },
  {
    review_owner: "Zeynel Soyaslan",
    txt:
      "Bilmediğim çok fazla ince detayı bu video ile öğrendim, bana çok faydalı olduğuna inanıyorum teşekkür ederim..."
  },
  {
    review_owner: "Emiravci",
    txt:
      "abi eline saglık 3 senedır senı takıp edıyorum ve severek ızlıyorum eğitimi az önce satın aldım ama izlemeden yapıyorum yorumu cunkı biliyorumki bu yorumumdan yanılmıcam cünki 3 senedir hiç yanıtlamadın bizi teşekürler ve başarılarının devamını isitiyorum ❤"
  },
  {
    review_owner: "Ilker Kerem Öksüz",
    txt: "Çok Başarılı! Faydalı bir çalışma olmuş..."
  },
  { review_owner: "Levent Eriş", txt: "Harika ve anlaşılabilir bir anlatım" },
  {
    review_owner: "Yılmaz Kaynak",
    txt:
      "bu kurstaki bilgilerle youtuber olmaya adayım saol afgan rasulov ancak ben biraz geç anlayan biri oldugumdan yavaş anlatımını tercih ediyorum"
  },
  {
    review_owner: "Ceren Alican",
    txt:
      "Youtube'da çok yeniyim ama şuana kadar izlediğim ve öğrendiğim taktikler sanırım şimdiden işe yaramaya başladı. İlk videomun 24 saatte ulaştığı izlenmeye ikinci videomda 3,5 saatte ulaştım. Setin sonunda kanaldaki değişim ne olacak çok merak ediyorum."
  },
  {
    review_owner: "Melihcan Şahin",
    txt:
      "Gerçekten youtube'de bir çok bilmediğim şeyleri sevgili Afgan Rasulov hocamdan öğrendim kendisine çok teşekkür ederim ve bu eğitim setini herkese tavsiye ederim"
  },
  {
    review_owner: "Ahmet Dalgic",
    txt:
      "Hala güncel bir eğitim. Çoook yararalı. Tavsiye ederim. Teşekkürler Afgan"
  },
  {
    review_owner: "Umut Cihan Kaygısız",
    txt: "kursun gerçekten çok faydası oldu ivme kazanmayı bekliyorum sadece"
  },
  {
    review_owner: "Ayaz Ünal",
    txt:
      "Bildiğim fakat eksiklerimin olduğu kısımları tamamlayan güzel bir anlatım ve açıklayıcı bir kurs olmuş eline emeğine sağlık bilgilerini insanlarla paylaşıp onları daha doğru yönlendirmeniz bence çok faydalı bir davranış kendimce oldukça faydalı buldum teşekkür ediyorum fakat kendi youtube kanalımı tam manasıyla hangi katagoriye koyup kimi rakip seçeceğimi bilemiyorum Türkiye'de açtığım kanal benzeri çok fazla kanal yok buda benim şanssızlığım sanırım tekrar bilgilerinizi paylaştığınız için teşekkür ediyorum .Bu arada yeni bebeğiniz olmuş Allah analı babalı büyümeyi nasip etsin uykusuz kaldım dediğinizde kendi çocuğumun ilk doğduğu anları hatırladım haftalarca uykusuz kaldığımız anlar geldi aklıma Allah yardımcınız olsun ama biraz büyüyüp konuşmaya başladığında inanılmaz bir mutluluk demek çocuk Allaha emanet olun"
  },
  { review_owner: "Si̇nan Öksüz", txt: "Gerçekten, harika bilgiler!" },
  {
    review_owner: "Mehmet ADIGÜZEL",
    txt:
      "gerçekten ruhi çenet in dediği kadar sağlıklı ve bir o kadar  da güzel sunum yapıyor çok faydalı püf noktaları verdi çok teşekkürler diline sağlık :)"
  },
  {
    review_owner: "Okşar Karaduman",
    txt: "Verdiğimiz ücret misli ile değdi teşekkürler Afgan Rasulov"
  },
  {
    review_owner: "Kerem",
    txt:
      "tüm kursun 1 saate sığdırılmış kısa bir özetini izlemek hem tüm kurs hakkında bilgi verdi hem de diğer videoları izlemem için motive etti. şimdiden teşekkürler"
  },
  {
    review_owner: "Tuncay Aydın",
    txt:
      "ÇOK TEŞEKKÜR EDERİM ÇOK GÜZEL DETAYLAR ÖĞRENDİM UYGULAMAYA BAŞLIYCAM ÖZEL SORULARIMI NEREDEN YAZABİLİRİM ACABA BİR OYUN KANALIYIMDA ÇÜNKÜ SORMAM GEREKEN 2 3 SORUM VAR"
  },
  {
    review_owner: "AykutSarmaz",
    txt:
      "Bilmediğimiz o kadar çok şey var ki, öğrenmek için buradayız. 'İlim Çinde bile olsa alınız' demiş Efendimiz."
  },
  {
    review_owner: "Hakan Şentürk",
    txt:
      "İlk izlediğim video için oldukça etkileyici ve sürükleyici bir anlatım vardı. Açıkçası bu kadarını beklemiyordum diğer izleyeceğim ders videoları için sabırsızlanıyorum. Teşekkürler.."
  },
  { review_owner: "Dilek Çetin", txt: "harika oldu çok fayda sağlıyorum" },
  {
    review_owner: "Ufuk Altıntaş",
    txt:
      "Yüzeysel bilgiler tüm bu eğitimi incelemek için teşvik edici oldu, kısaca notlar aldım. Daha detaylı anlatımlarda bu işin derinlerine inebileceğimden hiç şüphem yok. Teşekkürler"
  },
  {
    review_owner: "Halit Tepebaşı",
    txt:
      "tek kelimeyle harika afganı seviyorum değerli bilgileri paylaştığı için"
  },
  {
    review_owner: "Cemil Erdoğan",
    txt:
      "yeni bir kanal açacağım için bu hızlı eğitim fikir vermesi açısından çok güzel ve önemliydi bence. şimdi normal eğitimler ile uygulayarak neler yapabileceğimi az çok tahmin edebiliyorum. teşekkürler bu güzel eğitim seti için"
  },
  {
    review_owner: "Mehmet Özcan Akgün",
    txt: "Sayende ENTELEKTÜEL TV kanalımı tekrar elden geçirdim teşekkür ederim"
  },
  {
    review_owner: "İlker Taşcı",
    txt:
      "video süresi çok uzun olmasına rağmen sıkılmadan izledim. eğitimde bahsedilenleri videoyu durdurarak anlık olarak uyguladım. çok güzel bir anlatımdı faydalı oldu. teşekkürler afgan"
  },
  { review_owner: "Halil Hakan Kaşlı", txt: "fazlası ile" },
  {
    review_owner: "Barış Danacıoğlu",
    txt:
      "Faydalı bilgiler. Teşekkürler. Tavsiye: Video hızını X1.5 yaparsanız daha akıcı oluyor."
  },
  {
    review_owner: "Atilla Akbulut",
    txt:
      "Çok güzel ve faydalı bilgiler Afgan bey çok iyi bir hatipsiniz.Ayrıca çok sempatik ve insan canlısı bir havanız var Allah yolunuzu bahtınızı açık etsin"
  },
  {
    review_owner: "Onur Büyükdeğirmenci",
    txt:
      "Selamlar hocam çok şahane olmuş. Aldığınız parayı son kuruşuna kadar hakediyorsunuz  iyiki varsınız <3"
  },
  {
    review_owner: "Ali Bertan",
    txt: "Çok İyi, Kazandığı Her Kuruş Helal Olsun. Allah Razı Olsun"
  },
  { review_owner: "Emre Toprak", txt: "yararlı bir eğitim seti" },
  {
    review_owner: "Tuncay Gungor",
    txt:
      "Şu ana kadar gayet güzel,açıklayıcı, aydınlatıcı bir ders idi. Sadece video eski olduğu için, güncellenmesi (vakit bulabilirse), daha iyi olur."
  },
  {
    review_owner: "Mehmet Dilsiz",
    txt:
      "yeni bir kanal açtım, şuana kadar çok güzel bundan sonrada çok güzel olacağına inanıyorum"
  },
  {
    review_owner: "Enes Tuncer",
    txt: "çok başarılı çok güzel kelimede kifayesizim vallah, süper anlatım"
  },
  {
    review_owner: "Emirhan Camcı",
    txt:
      "Hızlı eğitimi izledim ve eğitimi daha yeni aldım şimdi sıra diğer videolarda emeğini sağlık. :)"
  },
  { review_owner: "Furkan", txt: "Efsane daha yeni aldım çok hoşuma gitti" },
  {
    review_owner: "Şerife Özbilek",
    txt:
      "Detaylı ve açıklayıcı bir eğitim.Sürekli yeni bilgi almak heyecanlandırıyor."
  },
  {
    review_owner: "Arda Özgen",
    txt:
      "Afgan abiye sonsuz teşekkürler. Onun sayesinde kanalım gelişecek inşallah."
  },
  {
    review_owner: "Volkan Yazıcı",
    txt:
      "Kursu kısa sürede tamamladım. İçerikler gayet anlaşılır bir şekilde paylaşılmış. Ses ve görüntü gayet güzel. Tahminimce negatif yorumların sebebi hocanın en başta hızlı tur atarken anlatacağı her konuyu orada özet olarak geçmesinden kaynaklı. Yani En başta anlatıp sonra derslerde daha fazla değiniyor. Kursiyerde 'Bana başta anlattın neden tekrar anlatıyorsun?' yanılgısına kapılıyor olabilir. Youtube=Google çalışma prensibi olduğu için hoca youtube üzerinde SEO çalışmalarını ve içeriklerin doğru nasıl hazırlanacağı ile ilgili her konuya değinmiş teorik ve pratik olarak anlatmış. Ayrıca kursun güncellendiğini söyleyebilirim örnek olarak 'google adwords' den 'google ads' e geçiğildiğini hoca anlatmış ve konuların başına YENİ yazısını koymuş. Kurs için emeğinize sağlık. Kursu alacak olan kişilerede şimdiden bol şans diyorum."
  },
  {
    review_owner: "Sedat Yalçın",
    txt:
      "İzledikçe motive oluyorum çok püf noktalara değiniyor eğitmenimiz. Teşekkürler Afgan Rasulov."
  },
  {
    review_owner: "Ramazan",
    txt: "iyki kaydolmuşum sen bitanesin eşin benzerin yok afgan abicim"
  },
  {
    review_owner: "Selahaddin Talha Turna",
    txt: "hepsini bire bir uyguladım, çok güzel ayrıntılar var. teşekkürler"
  },
  {
    review_owner: "Celal",
    txt:
      "kursu yeni satın aldım ve bu benim ilk eğtımımdı . ilk 3uncu vidio olmasına göre gerçekten faydalıydı .  bu egtımlerı herkese tavsiye ederım :)"
  },
  {
    review_owner: "Okinoks",
    txt: "Hızlı ve etkili idi, diğer derslerde ayrıntıları merak ediyorum"
  },
  {
    review_owner: "Hakan Ünsal",
    txt:
      "Gerek yazılı dokuman desteği gerek sözlü anlatımı ile çok başarılı bir eğitim olmuş. Teşekkürler"
  },
  {
    review_owner: "Erkan",
    txt:
      "İçerik üretme ve dijital reklamcılık yolunda çıktığım en iyi yol arkadaşım bu dersler.Şimdiden teşekkürler"
  },
  {
    review_owner: "İlker Urlu",
    txt:
      "İşinde uzman bir kişinin anlattıklarına bundan daha fazla Yıldız verilir de sistem buna müsade etmiyor"
  },
  {
    review_owner: "Selahattin Kula",
    txt: "Eğitim çok başarı idi. Tebrik ederim Teşekkür ederim"
  },
  {
    review_owner: "Serkan Unal",
    txt:
      "Afgan hoca konusunda gerçekten çok önemli bir isim. Türkiyedeki bir çok youtube kanalı hakkında detay bilgi sahibi olması doğru reçeteleri tanımlamasını sağlıyor. Kursun içeriği oldukça kapsamlı, bir çok farklı konu işlenmiş, atlanan bir kısım görmedim. Kursun sunumu oldukca akıcı ve anlatım dili güzel. Sabırsızlar için bir saatlik ozet bölüm eklenmiş olsada detaylı sunumun dinlenmesini tavsiye ederim. Ayrıca Afgan hocaya direkt soru sorabilmek ise gerçekten şans. Kendisine teşekkür ederim bu güzel eğitim için."
  },
  {
    review_owner: "Etem Aygündüz",
    txt:
      "Kursu aldığım için çok mutluyum.Gerçekten başarılı bir kurs ve inşallah fayda sağlayacak diye düşünüyorum."
  },
  {
    review_owner: "Zeynel",
    txt: "Çok güzel bir eğitim,alanında gayet iyi.Çok yararlı oldu."
  },
  {
    review_owner: "Volkan Cive",
    txt:
      "Kendi Youtube sayfalarımda deneyerek tamamladığım kursun farkı gözle görülür şekilde iyiydi. Herkese tavsiye ederim"
  },
  { review_owner: "Ali Emre Erdem", txt: "HARİKA EĞİTİM" },
  {
    review_owner: "A.Samet Karataş",
    txt: "Cok faydalı bilgiler öğreniyorum teşekkürler"
  },
  {
    review_owner: "Berkay Butgül",
    txt: "Yeni başladık inşallah yararlı olur yararlı olucagından eminim"
  },
  {
    review_owner: "Hakan Serilmez",
    txt: "Afgan yotube eğitiminde bir numara..."
  },
  {
    review_owner: "Sedat Özkan",
    txt: "Gerçekten çok faydalı bilgiler içeriyor. Herkese tavsiye ederim."
  },
  { review_owner: "Kemal Keskin", txt: "güzeldi" },
  { review_owner: "Hakkı Puza", txt: "çok faydalı oldu benim için.harika." },
  {
    review_owner: "FİZYOTERAPİST MERT TUNÇSEZEN",
    txt: "çok şey kattı teşekkürler:)"
  },
  {
    review_owner: "Mehdi Şerifoğlu",
    txt: "Hünüz uygulama olarak denemedim. anlatım güzel ve yalın"
  },
  {
    review_owner: "Şahin Başaran",
    txt: "Çok beğendim çok güzel bir eğitim seti herkese tavsiye ederim"
  },
  {
    review_owner: "Cihangir Yılmaz",
    txt: "tebrikler harikaydı bu hızda anca bu kadar olurdu :D"
  },
  {
    review_owner: "Musab Bedir EKE",
    txt: "Anlatım ve örnek verme baya güzel."
  },
  {
    review_owner: "Yakup yıkılmaz",
    txt: "Afgan hocanın kursu. Fazla söze gerek yok. :)"
  },
  {
    review_owner: "Bedirhan Roni",
    txt: "Harika idi. Herkese tavsiye ediyorum"
  },
  {
    review_owner: "Abdullah",
    txt:
      "bildiğim temel bilgilere daha profesyonel ve faydalı bilgiler sahip oluyorum bu ders aracılığı ile başarılı bir ders olmuş"
  },
  { review_owner: "Fatih Mehmet Özbahçe", txt: "çok teşekkür ederim" },
  {
    review_owner: "Emirhan Itis",
    txt: "abi senin sayende iyi yerlere geleceğimi düşünüyorum"
  },
  {
    review_owner: "Baris Altayli",
    txt:
      "YouTube kanali acmayi planlayan yada mevcut kanalini bir adim öteye tasimak isteyenler icin tasarlanmis, konulari adim adim anlatan bir egitim setidir. Egitimcinin icten ve samimi anlatimida baska bir arti ozellik.Bu egitim setini herkese tavsiye edebilirim."
  },
  {
    review_owner: "Taçlan TATBUL",
    txt: "Sevgili Afgan güzel ve detaylı anlatımın için teşekkürler."
  },
  { review_owner: "Ha", txt: "çok guzel  faydalı bir kurs" },
  { review_owner: "Agamyrat", txt: "Mükemmel" },
  { review_owner: "Görkem", txt: "mükemmel" },
  {
    review_owner: "braille skateboarding türkiye",
    txt: "EFSANE ÇOK YAYARI OLDU :)"
  },
  {
    review_owner: "Ahmetkachar",
    txt:
      "Zaten youtube dan birçok videosuyla bana hem ilham veren hem de birçok bilgi edindiğim Afgan kardeşim eğitimi aldığım için pişman olmayacağımı çok önceleri kanıtlamıştı...Emeklerine paylaşımlarına sağlık..."
  },
  { review_owner: "Fati̇h Ulaştepe", txt: "Harika bir acıklama yapılıyor" },
  {
    review_owner: "Umut Han",
    txt: "İYi ABİ ÇOK GÜZEL ANLATIM DAHA OLSA İZLERDİM"
  },
  {
    review_owner: "Ekrem Keser",
    txt: "doğru bir eşleşmeydi çok teşekkür ediyorum"
  },
  {
    review_owner: "Zohidjon Imindjanov",
    txt: "harika afgan rasulova başarilar diliyorum"
  },
  {
    review_owner: "Murad Talibli",
    txt:
      "Bir saatlik hızlandırılmış eğitimi izledim, çok şey öğrendim, şimdi diğer derslere de bakacağım. Çok başarılır. Tebrik ederim!"
  },
  {
    review_owner: "Ahmet Husrev Tatli",
    txt: "Kursta kendimi buldum teşekkürler hocam."
  },
  {
    review_owner: "Ilker Meriç",
    txt:
      "Eğitmen bilgi sahibi ve gerçekten anlatım tarzı ve öğretme isteği üst seviyede."
  },
  {
    review_owner: "Emel Erten",
    txt: "Hoca Cok enerjik , kendini dinlettiriyor"
  },
  {
    review_owner: "Taha Asan",
    txt:
      "Güzel bilgiler içeriyor. Umarım bir gün profesyonel olarak birlikte çalışırız."
  },
  {
    review_owner: "Mustafa Batuhan Eser",
    txt:
      "kanalımı büyütebileceğimi ve geliştirebileğimi anladım, çok mutlu oldum. Kanalımı geliştiriyorum ve tavsiyeleriniz sayesinde büyüyorum, teşekkür ederim"
  },
  { review_owner: "Akın Uğurlu", txt: "Özgün içerik" },
  {
    review_owner: "akif acar",
    txt: "Başlangıç seviyesindeki bir insanada hitap ediyor"
  },
  { review_owner: "Emre AKKUZU", txt: "evet" },
  {
    review_owner: "Ali Eşgen",
    txt: "Anlatım ve uygulamanın doğru sentezi Afgan Rasulov :)"
  },
  {
    review_owner: "Burak Çilcan",
    txt: "Oldukça açıklayıcı, net ve güzel bir diksiyon. Teşekkürler."
  },
  {
    review_owner: "Batuhan Topuzoğlu",
    txt: "Şuana Kadar Bu Kursu Aldığıma Pişman Olmadım. Çalışmaya Devam."
  },
  {
    review_owner: "Metincan6161",
    txt:
      "Merhabalar Afgan Abi Seti yeni satın aldım ve şuana kadar hiç sıkılmadım. Çok Başarılı ve bilgili bi set olmuş ellerinize sağlıkArkadaşlar Kesinlike Bu Eğitim Setini Alın. Gerçekten Sizi Okadar Bilgilendiriyorki. Herşey İçin Teşekkürler :)"
  },
  { review_owner: "Karakin", txt: "güzel eğtimler var güzel site" },
  {
    review_owner: "Dağhan Aslanger",
    txt:
      "Merhaba; öncelikle Afgan Resulov'a teşekkür ediyor, bilmediğim birçok şeyi öğrendiğimi belirtmek istiyorum. Şu an kanalımız çok yeni ama öğrendikçe ve eksiklerimizi tamamladıkça çok daha güzel yerlere geleceğimize inanıyorum."
  },
  { review_owner: "Mehmet gülçek", txt: "Harika !!!" },
  { review_owner: "Celalettin", txt: "Çok güzel bir kurs çok işime yaradı" },
  {
    review_owner: "Alperen",
    txt:
      "Harika anlatım, harika bilgiler. Bu kadar kaliteli bir içeriği Türkçe bulmak bir şans."
  },
  {
    review_owner: "Salih güçlüten",
    txt: "Ben rasulov afganım bir youtube aşiretinin reisiyim"
  },
  {
    review_owner: "Antiboss",
    txt:
      "benim için faydalı olduğunu düşünüyorum, Afgan beye fasih lisanı ve güzel anlatımı için teşekkür ederim"
  },
  {
    review_owner: "Okanaydın",
    txt:
      "Çok güzel ve bu anlatımları doğru buluyorum herşey için teşekkür ederim seviliyorsunuz..."
  },
  {
    review_owner: "Kadir",
    txt:
      "1.dersi izledim. Gerçekten motive edici bir eğitim olacak. Teşekkürler ."
  },
  { review_owner: "Günay Mustafayeva", txt: "Teşekkürler kurs için." },
  { review_owner: "Huseyin Gumus", txt: "mükemmel bir ders." },
  {
    review_owner: "İsmail Furkan Korkmaz",
    txt: "Mükemmel bir içerik. Çok Teşekkür ederim."
  },
  { review_owner: "Emir Öcal", txt: "Gayet iyi" },
  { review_owner: "Cuma Öğüt", txt: "çok beğendim" },
  {
    review_owner: "Nevzat Akpolat",
    txt:
      "Kursun başında olmama rağmen kafamda bir çok konuyu oturttu. Sade ve çok profesyonelce bir anlatım. Teşekkürler Afgan!"
  },
  { review_owner: "Batuhan Calis", txt: "başaırılı" },
  {
    review_owner: "Berke Ağıllı",
    txt:
      "Kesinlikle Öneriyorum her bır sorumuza tek tek cevap veren ve uzun yıllar bı işin içinde olduğu için en bilgili türk sertifikalı eğitimci diyebiliriz.Teşekkürler Afgan Rasulov!"
  },
  { review_owner: "burak durmazlar", txt: "Ben böyle anlatım görmedim Süper" },
  { review_owner: "Egehan Göç", txt: "tek kelimeyle mükemmel" },
  {
    review_owner: "Serkan Özkan",
    txt: "Çok güzel bir eğitim akıcı güzel bir anlatım elinize sağlık"
  },
  { review_owner: "Hayrettin doğan", txt: "harika!" },
  {
    review_owner: "Barış Ege",
    txt: "Tam aradığım eğitim, basit, anlaşılır ve çok faydalı"
  },
  {
    review_owner: "Eyüp Can Dursun",
    txt:
      "Aslında bu sete başlarken öylesine bir umudum olmadan başladım. Ama Afgan beyin cana yakın samimi konumasından sonra bir şeyleri başarabileceğime inanır vaziyete geldim. Bakalım daha çok ders var hayırlısı olsun şimdiden teşekkürler."
  },
  { review_owner: "Özkan Çamyar", txt: "Kendi açımdan faydalı buluyorum." },
  {
    review_owner: "Okay İNANÇ",
    txt:
      "Kanalımı 2 yıldır açmıştım fakat büyütebileceğim ve bir youtuber olabileceğimi hiç düşünmezdim. Afgan Rasulov'un eğitim videolarını gördüm, ilgimi çekti ve satın alıp eğitime başladım. Öğrendiğim bilgilerden çok memnun kaldım. Tabi ki henüz sonuçlarını görmedim ama bence çok işe yarayacak Afgan abinin taktikleri :)Teşekkür ediyorum kendisine buradan böyle değerli bir birikimi bizimle cüzi bir miktarda para karşılığında paylaştığı için :)"
  },
  { review_owner: "Furkan Kekeç", txt: "efsane" },
  {
    review_owner: "Ömer Batu Coskun",
    txt:
      "süper bir eğitim.tekrar sayısının çokluğu oldukça önemliydi benim için.harika"
  },
  {
    review_owner: "SalimT",
    txt:
      "Bence anlatımı çok akıcı. Aynı zamanda detaylı anlatıyor. Gayet başarılı. Teşekkür ediyorum kendisine"
  },
  { review_owner: "Uğur Onat", txt: "Şimdilik güzel gidiyor..." },
  { review_owner: "Emre KAFTAR", txt: "Teşekkür ederim!" },
  {
    review_owner: "Yağız Karadeniz",
    txt: "yeni başlayanlar için çok yararlı."
  },
  { review_owner: "Batuhan Yıldırım", txt: "Gayet İYİ" },
  { review_owner: "Zübeyir Demir", txt: "Harika ??" },
  { review_owner: "Elif Hande aktaş", txt: "Süper bir eğitim , teşekkürler" },
  {
    review_owner: "Abdul Bashir Hakimi",
    txt: "Harıka bir eğitim seti elinize sağlık"
  },
  { review_owner: "Vurgun Aliyev", txt: "ALLAH Razi olsun, Super Egitim" },
  { review_owner: "bakbakoyun -", txt: "good match. thanks" },
  {
    review_owner: "Erdem",
    txt:
      "şuana kadar herşey çok iyi gidiyor devam eden süreçte gene fikirlerimi belirticem"
  },
  {
    review_owner: "Miri Ahmed",
    txt: "Bu kurs için size gerçekten teşekkür ederim ! Efsane olmuş !"
  },
  {
    review_owner: "Hamit Erkan",
    txt: "insankarın istekleri için güzel bir dunum olmuş"
  },
  {
    review_owner: "Nuriye Çetin",
    txt: "başladık bakalım umutluyuz mutluyuz :)"
  },
  {
    review_owner: "Nihat Çalış",
    txt:
      "Çok faydalı bilgilerin yanı sıra mükemmel anlatım ile samimi bir ders olmuş. Tebrikler Afgan. Daha sık videolar, dersler bekliyoruz.."
  },
  { review_owner: "Doğuş Birecikligil", txt: "Kusursuz bir adamsın." },
  { review_owner: "Kemal Yavuz", txt: "evet doğru eşleşme idi" },
  { review_owner: "Musa Mahmud", txt: "mükemmel" },
  {
    review_owner: "Muhammed hillo",
    txt:
      "abi ben arabca video uretmeye başladım ama turkçe bir eğitim seti aldım ama bana faydalı olacaığnı düşnüyorum"
  },
  { review_owner: "Doğuş Bahadır", txt: "Tek kelimeyle harikulade" },
  {
    review_owner: "Kamil Uğraş Türkoğlu",
    txt: "Anlaşılır, öğretici ve kaliteli bir eğitim olmuş."
  },
  {
    review_owner: "Burak Yaprak",
    txt:
      "HERKESE TAVSİYE EDERİM YOUTUBEDE Bİ YER GELMEK İSTİYORSANIZ İŞİ UZMANINDAN ÖĞRENMELİSİNİZ :)"
  },
  { review_owner: "Salih Kivanc", txt: "harika" },
  {
    review_owner: "Naki Pektaş",
    txt:
      "Bir an olsun, gmail hesabı nasıl açılır diye başlayacaksınız diye korktum =) edit:Biz, youtube hakkında gerçekten birşey bilmediğimizi anladıkedit : 2 ayda 1071 abone 27.000 saat yaptık. Tamamen Afgan'ın taktiklerini uyguladık. Ekstra başka çakallıklar yapmadık. kesinlikle alınması gerekli bir eğitim."
  },
  { review_owner: "Sedat Aslan", txt: "Güzel, açıklayıcı ve samimi bir kurs." },
  {
    review_owner: "Kaan Kandağ",
    txt: "Ellerine sağlık, çok bilgilendiriciydi :)"
  },
  { review_owner: "Yaman Yagiz", txt: "Bu kurs eğlenceli ve yararlıydı." },
  { review_owner: "Ahmet Ayyıldız", txt: "Harika" },
  {
    review_owner: "Mehmet Akif ORHAN",
    txt:
      "Gerçekten çok güzel bir eğitim.Deneyimli ve uzman birisinden bu bilgileri almak bir ayrıcalık.Bu eğitimde anlatılanları uygulayabilmek en önemli nokta bunu bilmekte fayda var.Herkese başarılar dilerim."
  },
  {
    review_owner: "Büşra Işikdemi̇r",
    txt:
      "Çok başarılı bir eğitim gerçekten uzman bir anlatım ile eğitim çok keyifli gidiyor :) Afgan Rasulov tercihi çok başarılı olmuş.Bence Udemye daha fazla içerik üretmeli.Udemy Afgan Rasulov ile daha çok proje yapmalı****MUHTEŞEM OLMUŞ  BENİM İÇİN ÖYLE OLDU :) RESMEN AYDINLANDIM BU EĞİTİMDE :)"
  },
  {
    review_owner: "Gökhan Sözbir",
    txt:
      "Yaklaşık olarak 4,5 yıldır takip ediyorum hocam sizi Youtube platformların da inanılmaz bilgi ve birikimlerinizden yararlandım fakat youtube başaramadım lâkin pes etmedim. Başarıya ulaşmak için hâla çalışıyorum. Bu eğitimi de hem size destek amaçlı aldım hem de yeni birşeyler öğrenmek için. Belki klişe gelebilir ama sizi seviyorum daima mutlu olun :)"
  },
  {
    review_owner: "Furkan Akdağ",
    txt:
      "Süper, eğitimi bugün itibariyle bitirdim, görebileceğiniz en efsane YouTube eğitim setidir. Başarılarının devamını dilerim.Bir insanın hayatı iyi bir eğitim ile değişebilir.                                                    -Afgan Rasulov"
  },
  {
    review_owner: "Cem Palandökenler",
    txt:
      "Sevgili Afgan kardeşim sevdiği işi nitelikli bir şekilde yapıyor. Kesinlikle kendisinden eğitim almanızı öneririm. Alternatifler var ama bu kadar iyi olacağını sanmıyorum.Başarılarının devamını diliyorum."
  },
  {
    review_owner: "Hamit Büyükgüler",
    txt:
      "Merhaba Afgan Bey, Udemy ve öğrencileri.Kendisini tanıdığıma memnun olduğum az insanlardan birisi Afgan Bey... Bilmediğimiz veya doğru bildiğimiz bir çok noktaları öğrendik. Detaylı anlatımı ile konulara hakimiyetinden ve ihtisas sahibi olmasından gelen güven, aklımızda acaba doğru diye soru işaretleri bırakmamaktadır. Gerek anlatımı gerek samimi oluşu ve de bilgileri ile gerçekten çok memnun kaldım. Gerçek hayatta da kendisiyle tanışıp dost kurmak istediğim nadir insanlardan. Kendisi bizim cesaretlenmemizi, azimli olup sabretmemizi, kendimize inanmamızı ve doğru uygulamalar yaptığımız takdirde başarıya ulaşacağımız inancını bizlere aşıladı.Teşekkürler Afgan Rasulov ve Udemy ekibi.DilkologTV admini Hamit Büyükgüler"
  },
  {
    review_owner: "Nagehan UNUSAN",
    txt:
      "Beklediğimizden daha kapsamlı, anlaşılır ve örnekli olması çok yararlı oldu... Anlatımı çok akıcı ve kesinlikle sıkıcı değil, uzun bir kurs süresi olmasına rağmen uykunuz hiç gelmiyor... Donanımlı bir şekilde kursu tamamlamış oluyorsunuz, ayrıca inanın beklentimizin üstünde bir eğitim aldık...Kendisine çok teşekkür ediyoruz, sevgiler..."
  },
  {
    review_owner: "Birol Deniz",
    txt:
      "Merhaba Afgan,Kursu tamamladım teşekkür ederim. Sormak istediğim, Ruhi çenet facebook ta linkli paylaşım yapıyor fakat sen facebook ta linki paylaşım yapmayın diyorsun. Ruhi ile beraber çalıştığınıza göre facebook paylaşımlarını linkli olarak yapmalımıyız tereddütte kaldım. İkinci sorum ise, video konumlandırmadan bahsetmemişsin, yararı var mıdır?"
  },
  {
    review_owner: "Alper Kıral",
    txt:
      "Gayet başarılı ve isabetli. Bir süre sonra adım adım uygulanacak şeylerin  sırası karışıyor gibi hissedebilirsiniz, videonun en başında söylendiği gibi; derslerle eş zamanlı uygulama yapmakta fayda var. PDF'leri de sürekli göz önünde bulundurmakta fayda olduğunu düşünüyorum."
  },
  {
    review_owner: "Onur ömer Kırıcı",
    txt:
      "Çok kapsamlı bir içerik olmuş, Öğretmende oldukça aktif, deneyimli ve kendini dinleten enerjik bir yapıya sahip. Sıkılmadan sonuna kadar izledim ve uygulama noktasında tekrar geri dönüşler yapılarak çok verimli işler ortaya çıkarılabilir. Zaman içinde eklemeler ve güncellemeler de yapılmasını umuyorum... Emeğinize sağlık..."
  },
  {
    review_owner: "Açelya Damdelen",
    txt:
      "Bilmediğim ve yalnış uyguladığım ne çok şey varmış.. Bu eğitim seti benim için çok faydalı oldu çok teşekkürler Afgan bey :)"
  },
  {
    review_owner: "Eren Yaşar Yücel",
    txt:
      "Gerçekten bir çoğumuzun bilmediği ya da atladığı ayrıntılara değinmişsiniz.Bana göre bazı söyledikleriniz etik gelmiyor,tabii bu benim fikrim.Ama yararlı bir eğitim olduğunu söyleyebilirim.Umarım güzel geri dönüşler alırsınız.AdWords ve Soru cevap bölümünü yeni izleme şansım oldu kursu güncel tutmanız ve verdiğiniz bilgiler gerçekten şahane."
  },
  {
    review_owner: "Izlen Çindemir",
    txt:
      "0 aboneli ve 0 videolu bir kanala sahibim bir kameram yok ama bu işe ilk başlangıç olarak tesadüf olarak udemy'de gördüm ve indirdim..ayrıca udemy'de ödeme yaptığım ilk ve tek eğitim paketi...her kuruşu helal olsun...enerjisi çok iyi..bu eğitimi indirmeden izlemeden ben youtube biliyorum demeyin !!!"
  },
  {
    review_owner: "Şamil Baykal",
    txt:
      "afgan abi'yi daha önceden de takip ediyordum.gerçekten çok kaliteli eğitimler paylaşıyordu.udemy üzerinden eğitim setini görünce tereddütsüz satın aldım ve hiçbir şekilde pişman değilim.youtube hakkında en detaylı en kapsamlı ve en deneyimli bir şekilde karşınıza sunulmuş.afgan abi'nin bana çok yarar sağladığını ve güzel yorumları sevdiğini bilerek bende bu yorumu paylaşmak istedim.bu kursu hepinize tavsiye ederim."
  },
  {
    review_owner: "Osman Emir Gülbahar",
    txt:
      "Kurs gerçekten çok iyi her şey detaylı bir şekilde anlatılıyor bu eğitimin youtube ile  ilgilenen herkese yardımcı olacağını düşünüyorum. Gerçekten başarılı bir set olmuş ."
  },
  {
    review_owner: "Furkan Kandemir",
    txt:
      "YouTube ile ilgili bilmediğim birçok detayı Afgan Rasulov'un bu kursu sayesinde öğrendim. Profesyonelleşmiş içerik üreticileri dahi bu kurs sayesinde YouTube'da bilmedikleri püf noktalar olduğunu göreceklerdir. Tebrik ediyorum."
  },
  {
    review_owner: "Tanju Tunalı",
    txt:
      "harika bir insan ve inanılmaz önemli ve değerli bilgileri sunarak öğretiyor."
  },
  {
    review_owner: "Abdurrahman Bayaslan",
    txt:
      "Ben Afgan Abi Sayesinde Grafik Tasarım Yapmaya Başladım ve Şuan Bir Çok Kişisel ve Kurumsal Yerlere Tasarımlar Yapıyorum Aynı Zamanda Afgan Abiden Edindiğim Bilgiler Sayesinde Çok Daha Kaliteli İçerikler Hazırlıyorum..Bu Eğitimi Alırken Hiç Tereddüt Etmeden Aldım ve Şuan Eğitimi Bitirdiğimde Gerçekten de Aldığıma Çok Memnun Kaldım Faydalı Bilgiler Kesinlikle Ben Zaten Afgan Abi Sayesinde Neredeyse Yarısını Biliyordum Geriye Kalan Kısımları ve Açıklarımı da Tamamlamış Oldum ve Şimdi Çok Daha Kaliteli İçerikler Hazırlayarak Çok İyi Yerlere Ulaşmayı Hedefliyorum..Emeğine ve Yüreğine Sağlık Afgan Abi..."
  },
  {
    review_owner: "Sherzod Ochilov",
    txt:
      "abijim tashakkurlar.... Men Uzbekistan vatandashim...guzal hepisi....."
  },
  {
    review_owner: "Haydar Koç",
    txt:
      "Bu Kursa kayıt olmam hayatımın en büyük adımı idi. Abi senden allah razı olsun bu seviyeye kadar çok yanlışım vardı onları düzelttim ve inşallah dahada iyi olacağım kurs bitiminde inşallah 10 binleri 100 binleri ve milyonları görürüm. Seviyorum seni Teşekkür ediyorum. Kanalım bu bakabilirsin abi senin dediğin şeyleri yaparakdan ilerliyorum :https://www.youtube.com/c/lazmanya?sub_confirmation=1"
  },
  {
    review_owner: "Abdullah Zübeyir Yıldız",
    txt:
      "Eğitim Gerçekten Başarılı Sıkılmadan izledim uyguladım öğrendim emeğine sağlık youtube başlıyacaklara öneriyorum mutlaka alınacak bir eğitim :)"
  },
  {
    review_owner: "Tuğçe Yurdagül",
    txt:
      "Daha önce duyduğum bir çok öneri vardı ama bu öneriler bazen tutuyor bazen olmuyordu . Şimdi genel olarak baktığımda yanlışlarımı görebildim. Umarım bu bilgiler ile başarıya ulaşabilirim."
  },
  {
    review_owner: "ilker Yüksel",
    txt:
      "Not olarak izlemeyi sevdiren bir eğitim oldu benim için, kendi youtube kanalımda oyun ve sanatı nasıl birleştirebileceğim konusunda parlak fikirler verdi."
  },
  {
    review_owner: "halil yamak",
    txt:
      "Kurs merak ettiğimiz her şeyin cevabını veriyor hemen hemen... Afgan kardeşim sonuna kadar yaptığı işin hakkını veriyor..Teşekkürler her zaman takipteyim.."
  },
  {
    review_owner: "Selçuk Atay",
    txt:
      "kesinlikle afgan bey harika anlatım ve tecrübesi ile harika bir eğitim seti olmuş teşekkürler..."
  },
  {
    review_owner: "Orhan Yenici",
    txt:
      "Kursun içeriği çok güzel, fakat bir video içerisinde aynı cümlelerin tekrar tekrar kurulması zaman kaybına ve içeriğin sıkıcı bir hal almasına sebep oluyor. Dijital ortamda tekrar etmenin anlamsız olduğunu düşünüyorum. Anlamadığım bir kısım olduğunda tek tuşla durdurup geri sarıp tekrar izleyebilme lüksüne sahipken eğitmenin tekrar etmesi tamamen zaman kaybı. Yine de içerik bakımından değerli bir eğitim, teşekkürler."
  },
  {
    review_owner: "Nazmi Yılmaz",
    txt:
      "Daha dar kesime hitap eden kanalların gelişimi ve bu kanalların gelirlerini nasıl artırabilir konusuna değinmemişsiniz. Bu eksik kalmış ancak bütün olarak baktığımızda ise oldukça verimli bir eğitim hazırlanmış............"
  },
  {
    review_owner: "Ahmet Berk ÜNLÜ",
    txt:
      "Afgan Beyi Youtubeden de Takip Ediyorum Bu Eğitimi Hiç Tereddütsüz Aldım Zerre Şüphem Yoktur Başta Kendisine Daha Sonra Bu Kursu Alıp Hedeflediği Yolda Yürüyen Herkese Başarılar... (Engineers Of TURKEY)"
  },
  {
    review_owner: "Cenk gokhan aktaş",
    txt:
      "Daha Henüz Yolun Basındayız Kanal Olarak Katıldıgım taraflar ve katılmadıgım taraf oldu anlatımı harika cok iyi anladım bir çok şeyi bir tek eksikligi video cekim süreleri eski yani bazı seyler degişmiş buda onun suçu diil ama en azından adwords gibi güncellemiş konuları yenileri ile degiştirse çok daha iyi olur genel anlamda çok yeterli tabiki sizin nasıl aldıgınızlada alakalı teşekkürler afgan resulov ve ekibi gelcekde başaralılar dilerim hepinize :)"
  },
  {
    review_owner: "Serkan Yıldız",
    txt:
      "Kesinlikle çok başarılı. Detaylar konusunda bilgi sahibi oluyorum. Eğitim bilmediğimiz detaylara değiniyor. Bilgileri kanalımda tek tek uyguluyorum. Emeğinize sağlık. Çok teşekkürler. Kanaldaki sonuçları zaman gösterecek. Kursu bitirdim ve kendilerine soru yönelttim. Çok kısa bir zamanda detaylı cevap aldım. Asla sizi yalnız bırakmadıklarını ve sorularınıza her zaman cevap verdiklerini göreceksiniz. Bu kurs asla sizin için bir pişmanlık olmayacak."
  },
  {
    review_owner: "Serkan Yadigar",
    txt:
      "Afgan Bey'in sunmuş olduğu bu mükemmel eğitim sayesinde Youtube de neler ve nasıl yapılacağını çok kapsamlı şekilde öğrendik. İyiki kendisi var teşekkür ederiz. Ayrıca bu kursu sağlayan Udemy firmasına da sonsuz teşekkürlerSaygılarımlaSerkan Yadigar"
  },
  {
    review_owner: "Mustafa Ozan",
    txt:
      "Bu kurs, benim gelecek çalışmalarım üzerinde ne yapacağım konusunda oldukça muhteşem bilgiler öğrenmemi sağladı. Ne yapmam gerektiği konusunda beni aydınlatan tek insan. AFGAN hocama binkere teşekkür ederim."
  },
  {
    review_owner: "Mehmet Can ERGUN",
    txt:
      "harika, gerçekten kursu büyük bir zevkle takip ettim.Uygulamaları gerçek hayata geçirince pek başarılı olduğunu gördüm.Çok profesyonel bir kurstu teşekkür ederim."
  },
  {
    review_owner: "Emre ALTUNTAŞ",
    txt:
      "Anlatım tarzı, örnekler harika. Her derste not alarak yola devam ediyorum. Çok etkileyici dersler gerçekten. Youtube video atacağım zaman notlara bakarak yola devam ediyorum ve farkları yavaş yavaş görüyorum. Not: paylaşımlarım hiç iyi olmasa bile. ^^"
  },
  {
    review_owner: "Ramazan Harmankaya",
    txt:
      "türkiye üzerinde en kapsamlı eğitimi veren bir kişi benim gözümde. hem sıkmadan hem de yapılması gerekenleri güzelce anlatıyor. kurstan önce de youtube üzerinden sıkı takipçisi olduğum bir kişidir kendisi. teşekkür ederim bu eğitim seti için."
  },
  {
    review_owner: "Kadir ÖZTÜRK",
    txt:
      "Gerçekten kusursuz bir eğitim. Farklı kanalların başarılarını inceleme videoları arttıkça daha da teşvik edici olabilir. Bugüne kadar Udemy den aldığım en iyi eğitimdi."
  },
  {
    review_owner: "Hasan M",
    txt:
      "Eğitimin kalitesi ve içeriğinden çok memnun kaldım. Yeni başladığımız minymon youtube kanalımızı geliştirmeyi hedefliyoruz. Öğrendiğim bilgiler sayesinde daha iyi izlenmeler almaya başladık bile. Afgan beye çok teşekkür ederiz."
  },
  {
    review_owner: "Ozlem Duygu",
    txt: "çok şahane ve enerjik. Hemencecik akıyor."
  },
  {
    review_owner: "Tekin32",
    txt:
      "Gerçekten güzel bir eğitim seti herkese tavsiye ederim ve yıllardır youtube ile uğraşıyorum ama kendi yüzümü göztermeye cesaretim olmadığı için çalıştığım tek kanalım bile yok bundan sonra kanal hazırlayıp başlama hevesim oldu."
  },
  {
    review_owner: "Deyiş Devran",
    txt:
      "Afgan'a ait her videoyu izledim. Her konuda en ince ayrıtısına kadar doğru ve açıklayıcı bir anlatım dili ile bizi bilgilendirdiğinden başarı kaçınılmaz olmaktadır. İyi ki böyle bir video hazırlamışsın... Herkes izlemeli..."
  },
  {
    review_owner: "Aybüke Zeynep Uçar",
    txt:
      "Abi gözlüklerin ekranda çok parlıyor gözlüksüz halin daha iyi. eğitimin çok güzel katkılarından dolayı teşekkürler."
  },
  { review_owner: "Mehmet Emin bali", txt: "HARİKA ANLATIYOR" },
  {
    review_owner: "Abdulkadir TATAR",
    txt:
      "Kursu bitirdim çok beğendim ve faydasını şimdiden gòrmeye başladım izlenmelerim artmaya başladıTeşekkur eder Başarılarının devamını dilerim"
  },
  {
    review_owner: "Kemal Erce Bedelcigil",
    txt:
      "YouTube eğitimleri arasında temel bilgi ve yeterlilikleri aldıktan sonra mutlaka işin ayrıntısına ve daha derinine inmek için alınması gereken bir eğitim seti emeklerinden dolayı Afgan'a teşekkür ederim çok başarılı olmuş bir eğitimi bizlerle paylaşmış."
  },
  {
    review_owner: "Barış Şenkan",
    txt:
      "Özellikle Adwords için yapılan açıklamalar ve videoları seçerken karar vermemiz gereken evergreen / clickbait ilişkisi beni en çok etkileyen kısımlar oldu. Bu ve bunun gibi birçok detay ve ayrıntı, bu eğitimin içinde yer almaktadır. Açıkcası ben oldukça memnun kaldım ve kanalım için yeni şeyler öğrendiğim düşünüyorum.Heyecan içinde yeni videomu paylaşacağım zaman bu öğrendiklerimi uygulamak için sabırsızlanıyorum.Tekrar teşekkürler Afgan Rasulov.Diline bilgine emeğine sağlık..."
  },
  {
    review_owner: "Neslihan KOÇ ERDOĞAN",
    txt:
      "Şu an çok daha umutluyum, bilgilerin tekrar tekrar anlatılması çok hoşuma gitti daha iyi kavrıyorum"
  },
  {
    review_owner: "Melih Cangür",
    txt:
      "Bence verdiğim parayı sonuna kadar hak ediyor. İnşallah hayalime bu kurs sayesinde ulaşırım. Gerçekten harika bir şekilde ilerliyor."
  },
  {
    review_owner: "Özgün Pekdemir",
    txt:
      "Aslında yararlı olan şeylerin diğer insanlar tarafından nasıl farklı bir şekilde çarpıtılarak size kötü olarak anlatıldığını ve sizin bunları yapmadığınız için gelişemediğimizi anlatımınız için teşekkürler.Ayrıca bazı bölümlerin daha detaylı anlatılması gerektiğini düşünüyorum."
  },
  {
    review_owner: "Mahmut yıldızbaş",
    txt:
      "Merhaba ben yaklaşık iki ay önce kanal açtım ve amatörce ilerliyorum başarı mı? şimdilik bana uzak ama bu eğitim gerçekten güzel içerikler üreteceksiniz ve büyümeyi, gelişmeyi hedefliyorsanız çok faydalı olacaktır. Kendi kanalım için işe yaramayacaktır buna eminim. Samimi deneyimli ve bilgilendirici bir anlatımı var pişman olmazsınız. Emeğine sağlık sevgili Afgan."
  },
  {
    review_owner: "Bülent Yakut",
    txt:
      "konular ve dersler güzel ama meyvelerini alırsam daha da güzel olur inşallah.."
  },
  {
    review_owner: "Mustafa Akyüz",
    txt:
      "Güzel bir deneyim oldu. Bir çok bilmediğim konuyu ve eksiklerimi gördüm. Elde ettiğim bilgileri uygulayacağım. Faydasını görürsem daha detaylı yorum yapabilirim..."
  },
  {
    review_owner: "ilge ipek",
    txt:
      "Ruhi Çenet'in öneri ile kursu aldım. Gerçekten çok faydalı bilgiler edindim. Ruhi Çenet eğitimleri ile karıştırılmamalı. İki eğitimde de çok güzel ve yeni başlayanların mutlak ihtiyacı olan bilgiler mevcut.İki eğitimde aldığım notları birleştirerek kendime bir YouTube el kitabı hazırlayacağım. Bu kitabı tekrar tekrar okumak gerekir. Eğitimler izlerken mutlaka not alın ve tekrar tekrar okuyun. Afgan Rasulov, Sinan Ergin, Ruhi Çenet emeklerinize sağlık. Eğitimlerin devamı gelecek ise merakla bekliyorum."
  },
  {
    review_owner: "Evrim Ertorsun",
    txt:
      "Özellikle 3.bölümden itibaren çoook işe yarar bilgiler paylaşıyo. 3894549 yıldır youtube izleyicisiyim. Youtube para kazanma, izlenme arttırmayla ilgili videolar izledim ama bu kadar ayrıntılı ve kaliteli bilgi elde etmemiştim. Peees dedim. Bazı yerlerde şaşırdım. Gerçekten bu bilgiler çok işime yarayacak. Nese diğer yarısını da izleyeyim.Eğitimi bitirdim ve gerçekten çoook iyidi. Ben indirimdeyken satın almıştım ama kuruşu kuruşuna helal olsun valla. Eğitimin son videolarında da süpriz yutubırları görebilirsiniz ;)"
  },
  {
    review_owner: "Buğrahan Tekeli",
    txt:
      "Bence abimizin hakkını vermeliyiz gerçekten detaylı anlatıyor ve anlattığı her kelimenin arkasında duruyor en ufak bir yanlış yok  bu eğitimi aldığım için çok mutluyum..."
  },
  {
    review_owner: "Yunus Emre ARSLAN",
    txt:
      "Çok kaliteli sunum oluyor. Yeni videonun gelmesini sabırsızlıkla bekliyorum. Gayet başarılı bir şekilde devam ediyor. Teşekkür Ederim.-----Kursu başarılı bir şekilde bitirdim. Gerisini zaman gösterecek. Dipnot: Afkan Rasulov bilmediğimiz ve öğrenemeyeceğimiz bilgileri bizimle paylaştığın için sana sonsuz teşekkür ederim ve  ilgiyi kesmediğin için. Tekrar tekrar Teşekkür Ederim."
  },
  {
    review_owner: "Kerim Teke",
    txt:
      "Kursun tamamını eksiksiz izliyorum ve emeğinize sağlık. Verdiğim paraya hatta fazlasına değecek bir eğitim olmuş."
  },
  {
    review_owner: "Ahmet Özgür",
    txt:
      "Kanalım için çok faydalı oldu. Pek çok bilgiyi yine Afgan beyden YouTube üzerinde de izlemiştim. Burada çok daha önemli bilgiler var. Pek çok yanlış yaptığım nokta fark ettim ve düzelttim."
  },
  {
    review_owner: "Tamer",
    txt:
      "Sayenizde vaar olan kanalımı daha hızlı ve ne yapmam gerektiğini anlayarak devam etme imkanı sundugunuz için çok teşekkür ederim. Kanal başlığı olsun öneriler olsun anlatım süper olmuş youtube'de kanalı olan videolar yükleyenlerin hemen anlayacagı tarzda ve net olarak anlatım sunmuşsunuz şimdie kadar aldığım en iyi ve sonuca yönelik bir eğitimdi."
  },
  {
    review_owner: "Göktuğ Alperen Durmuş",
    txt:
      "kurs videolarını izleyerek birazda olsa     bir şeyler öğrendim öğrendiklerimi videolarım da  kullanmaya başlayacağım :)"
  },
  {
    review_owner: "Ömer Anlı",
    txt:
      "Eğitimi tamamladım ve mutluyum. Çünkü gerçekten kanalımın neden gelişmediği konusunda kafamda ki sorulara cevap buldum. Anladığım ilk şey önce niyetimin ne olduğunu kavramak. Sonra bunun için nasıl bir çeşitlilik sağlayabilirim onu belirlemek. Daha sonra videolarımı montajlarken güzel ve insanları tutabilir kurgular hazırlamak. Ardından başlık-açıklama-küçük resim ayarlarını gerçekten sağlam yapmak. Sonra da verileri düzenli olarak takip etmek. Yüzeysel olarak anlattım. Bunların bende ayrı birer notları ve sıralamaları var tabii. Çok teşekkür ederim. Çok sağolun her şey için. Gerçekten iyi ki eğitimi almışım :)"
  },
  {
    review_owner: "Osman Boztepe",
    txt:
      "Gerçekten harika bir eğitim programı öncelikle çok teşekkürlerimi iletiyorum."
  },
  { review_owner: "Lazrail", txt: "Müthiş" },
  {
    review_owner: "Hasan Kahveci",
    txt:
      "Kendine özgü anlatımı ve mizacı ile eğitime özel bir sinerji katıyor. 'Hiç bir yerde bulamayacağın bilgiler burada' dedi! Bende farklı eğitimlere de bakmış biri olarak, gerçekten kayda değer bilgiler bulacaksınız. Değer katacak bir çok konu ve konu başlığı var. Eğer bir kanalım olsun diye başlayıp devam ettirirseniz sabırlı bir şekilde, sizde bir vlogçu yada youtube fenomeni olmanız kaçınılmaz. Seni İzlemeye devam ediyorum. Afgan Rasulov;  TEŞEKKÜRLER..."
  },
  {
    review_owner: "Erhan Aslan",
    txt:
      "Bildiğimi zannettiğim ama hiç bir şey bilmediğimi farkkettiğim bir video oldu. Emeğine yüreğine sağlık çok faydalı oldu."
  },
  {
    review_owner: "Mzuo1414",
    txt:
      "Tamamıyla Mükemmel bir kurs mükemmel bir ders çok şey öğrendim tabikide bunları kendi kanalımda uygulayacağım faydalı olacağına sonuna kadar inanıyorum. Teşekkürler Afgan Rasulov."
  },
  {
    review_owner: "Efe Yaman",
    txt:
      "Türkiye de YouTube platformunun gelişmesi ve işini iyi yapmaya çalışan yetenekli insanların ivme kazanabilmesi için gerekli herşey detaylıca anlatılmış. Başka hiçbir yerde bu konuları yada benzerlerini anlatan sayfa yada kişiye denk gelmedim. Emeğine yüreğine sağlık."
  },
  {
    review_owner: "Gürkan Ademir",
    txt:
      "Çok başarılı. Youtube'da da videolarını takip ederek bir çok konuda kendimi geliştirdiğim ender insanlardan birisi. Emeğine sağlık."
  },
  {
    review_owner: "Güven Açık",
    txt:
      "İyi anlatıyor. Sıkmıyor.Süperdi. Çok şey öğrendim teşekkür ederim Afgan Bey.İlerde sorularım olacak.Güven AÇIK"
  },
  {
    review_owner: "Mirkomil Shernazarov",
    txt:
      "Tassakur ederem egitim seti çök gezel çikmiş ancak örnek nedan sadece duygu kösaöglu başka örneklar yökmu mesala egitimla alakali örneklar bida örnekler hepsi buyuk kanallar yeni açmak istayanlar için kuçuk kanal örnekler yok bu kadar degar kalanlari super"
  },
  {
    review_owner: "Armağan Ilıkçı",
    txt:
      "Bu kursu izlemeye başlarken yaklaşık 850 abone idim ve ilk 3 seviyedeki kuralları uyguladıktan hemen sonra 1000 abone oldum.Gerçekten çok bilgilendirici :)"
  },
  {
    review_owner: "Sedat Orkun Avsal",
    txt:
      "Gerçekten mükemmel bir insan ben inanıyorum ki kendimde Youtube'a video atmaya başladığımda gelişip büyüyeceğim çünkü afgan abi bir çok şeyi detaylı olarak vermiş çok güzel bir anlatımı var akıcı heyecan verici insanın bir anda video çekesi geliyor :) ve kendisi çok sempatik bir insan Youtube'a gelişmek için yapılması gereken her şeyi bu videoda anlatmış herkesin almasını bu kursa katılmasını tavsiye ediyorum ki çünkü bir daha böyle detaylı ve kesin sonuç veren bir kurs bulamazsınız tekrardan herkesin almasını tavsiye ediyorum şahsen ben kursu bitirdim ve ne kadar çok şey bilmiyormuşum dedim kurstan sonuna kadar memnunum kendisini bu azmi ve başarısı için tebrik ediyorum ve umarım daha iyi yerlere gelir..."
  },
  {
    review_owner: "Ahmet Salih Sevgi",
    txt:
      "Afgan Rasulov eğitimi 2 günde bitirdim. Son kurusuna kadar Helali hoş olsun. Öğrenmem gereken ne kadar çok şey olduğunu fark ettim Halbuki bu eğitimden öncede uzun süre kan alımı nasıl geliştirebileceğim hakkında çok detaylı araştırmalar yapmıştım. Eğitimi satın almak isteyen arkadaşlar Hiç düşünmeden hemen alıp izlesinler Eğer YouTube'dan başarılı olmak istiyorsanız mutlaka ama mutlaka bu eğitimi alın. Tekrar tekrar teşekkür ederim sana Afgan rasulov"
  },
  {
    review_owner: "Ceylan Dilşad Özdemir",
    txt:
      "Kısa sürede genel detayları gerçekten öğrenebileceğiniz dersler. Faydalı işe yarar.."
  },
  {
    review_owner: "Mehmet Oguz KORUK",
    txt:
      "YouTube kanal geliştirmek için alabileceğimiz en iyi eğitim bu olsa gerek... :)"
  },
  {
    review_owner: "Barış satılmış",
    txt:
      "İlk defa video çekmek için kısa eğitim için izledim fazla birşeyler öğrenemem ama 2 her zaman 1 den iyidir diyip izledim ama bence birdaha izlememe gerek bile yok herşeyi anlatmışsın abim ve bir sürü not aldım hepsi çok gerekli ama yinede ilerleyen zamanlarda tekrar yapıcam SÜPERİ BE BU KADAR ŞEY ÖĞRENEBİLMEYİ BEKLEMİYODUM. TEŞEKÜR EDERİM."
  },
  {
    review_owner: "Muhammed yıldızhan",
    txt:
      "Allah cc. razı olsun çok güzel profesyonelce bir anlatım mükemmel bir sunum."
  },
  {
    review_owner: "Tolga Yalçın",
    txt:
      "Ben kanalımı daha açmadan bu eğitimi satın aldım. Hem hataları düzeltmekle uğraşmamak, hem yanlış öğrenilenleri düzeltmenin zorluğunu bilerek hem de keşfedilmiş bir ülkeyi bir daha keşfetmeye çalışmamak için. İyi ki de öyle yapmışım. Kursu tamamlayıp, emin adımlarla Afgan Bey'den öğrendiklerimi uygulamak için sabırsızlanıyorum. Her şey çok güzel olacak bunu hissedebiliyorum. Emekleri, samimi tavrı ve her şey için Afgan Rasulov'a teşekkür ederim."
  },
  {
    review_owner: "Emrecan",
    txt:
      "AFGAN BEY İÇERİK OLUŞTURMADA SIKINTILAR ÇEKİYORUM YARDIMCI OLURMUSUNUZ 2 TANE VİDEO YÜKLEDİM HER HAFTA 2 VİDEO BİLGİ VİDEOLU RESİMDE YAZIALR VAR BİLGİ VERİYOR FAKAT GÖRÜNTÜLENME ALAMIYORUM 100 GÖRÜNTÜLENMEM 19 ABONEM VAR ABONE GÖRÜTÜNLENME ALAMIYORUM NEDEN BİLİYORUM DAHA YENİ AMA TAVSİYELERİNİZİ BEKLİYORUM LÜTFEN YARDIMCI OLUN O GÜLEN YÜZÜNÜZ HİÇ BİR ZAMAN DÜŞMESİN EFENDİM SEVİLİYORSUN AFGAN ABİ :)"
  },
  {
    review_owner: "Salih Eren Kılınç",
    txt:
      "Harika,fakat çaba sarf etmeniz kanalınızın büyümesi için en önemli etken. Bu kurs size gideceğiniz yolu gösteriyor, dediklerini harfiyen uygularsanız getirisini fazlasıyla göreceksiniz."
  },
  {
    review_owner: "Doğan Göksu",
    txt:
      "Ben Doğan Göksu Minecraft kanalıyım ve izlenmelerim düştüğü için Afgan abinin YouTube eğitim setini dikkatli izledim söylediklerini harfien yaptım kanalım 2 gün içinde 10 kat izlenmeye ulaştı son 48 saatte görüntülenmem 30binlerdeyken şuan 250bin ve 300bin olmak üzere attığım ver videoyu entegre ettiğim için youtube tarafından öneriliyor teşekkürler Afgan RasuLov-e?❤"
  },
  {
    review_owner: "Bülent Önür",
    txt:
      "Çok detaylı ve anlaşır anlatım var daha önce duymadığım bir çok konuya değinilmiş inşallah doğru uygulayıp başarılı olurum."
  },
  {
    review_owner: "Muhammed Öztünç",
    txt:
      "Kurs beklentimin aşağısında kaldı şu ana kadar  belki son videolarda fikrim değişebilir ama 1 yıldız vererek emeğe saygısızlık yapmak istemiyorum 5 yıldız emeğe saygı için."
  },
  {
    review_owner: "Muhammed Tonaydin",
    txt:
      "Afgan Abi ellerine agzina saglik, gercekten cok guzel olmus. Italia da bir kanal acmayi istiyordum baya bir suredir sayende aydinlandim ,insallah yakinda video cekimlerine baslayacagim."
  },
  {
    review_owner: "Web Eğitim ///",
    txt:
      "Sade ve net bilgiler içeriyor. Gerçekten işe yarar bilgiler. Üstelik bölümler sıkıcı düzeyde değil."
  },
  {
    review_owner: "Bülent Vural",
    txt:
      "Çok harika paylaşımları var. YouTube kanalım Denizli Gurme sayesinde gün geçtikçe büyüyor"
  },
  {
    review_owner: "Osman Morgül",
    txt:
      "Kursta bilmediğim tek bir bilgi edindim ve uygulamaya başladığım gibi etkisini çok ama çok net gördüm. Bu bilgi ile 4. videom ve etkisi son 2 ay boyunca göremediğim kadar çok . Aldığı parayı kuruşuna kadar hakeden güzel insana teşekkürlerimi sunuyorum.Ne demiş atalarımız, bin bilsende bir bilene danış."
  },
  {
    review_owner: "Erkan Karahan",
    txt:
      "İlk başlarda ön yargılı başladım, sonuçta bir MCN için profesyonel olarak çalışan bir kişi gerçek püf noktalarını bizden saklayabilir diye düşünüyordum. Kurs ilerledikçe, öğrendiklerimi kanalımda uygulamaya başladım ve çok kısa bir sürede etkisini gerçekten görmeye başladım. Ben içeriğime ve prodüksiyonuma güveniyordum, sonuçta televizyon sektörü içinde kariyer yapmış biriyim. Sadece Youtube dünyasında elimdeki yetenek ve bilgi birikimi uygulamam için bir yol haritasına ihtiyaç vardı, sağ olsun Afgan'ın bu kursu bana çok yardımcı oldu."
  },
  {
    review_owner: "Furkan Kılıç",
    txt:
      "ben zaten Afgan Rasulovu bayağı süredir takip ediyorum ve her zamanki gibi kusursuz bir anlatımı var. Aynı zamanda onun sayesinde 17 aboneli bir kanalım olmasına rağmen bence iyi izleniyorum buradan ona sonsuz teşekkürlerimi sunuyorum ve ilerde Alaah nasip eder de 1 milyon abone olamyı başarırsam akıl hocamın olmasını isterim"
  },
  {
    review_owner: "Mehmet Basoglu",
    txt:
      "Bir çok detay öğrendim, bir çok fark etmediğim önemsemediğim noktanın aslında ne kadar önemli olduğunu öğrendim. Teşekkürler."
  },
  {
    review_owner: "Halim Öztürk",
    txt:
      "Bu kursa yapılmış olan çoğu yorumu okudum ve genel görüşe ben de katılıyorum. Kursta çok fazla bence gereksiz olan tekrar var. Afgan Bey tekrarı sevdiğini söylüyor kursta devamlı  ama bence bu iş doz aşımı miktarında olmuş herkes böyle düşündüğüne göre göz önünde bulundurmalıdır diye düşünüyorum.Kursun içeriğine gelecek olursak, gerçekten insana mantıklı gelen ve uygulandığında faydalı olabileceğini düşündüğüm bilgilerle dolu. Hatta gerekli gördüğümde tekrar tekrar açıp izlemeyi düşünüyorum. Denilenleri uygulamaya başladım fakat mantıklı düşünen biri iseniz hemen etki görmenin mümkün olmadığını bilirsiniz.  Zamanla etki gördükçe buradaki yorumu güncellemeye çalışırım. Her şeye rağmen 5 yıldızı hak eden ve para vermeye değer bir kurs olarak görüyorum. Tavsiye ederim."
  },
  {
    review_owner: "Tayfun Esref",
    txt:
      "Çox yararlı bir eğitim olmuş herkes açısından.Kursu almayan insanlar bence bir çok ince ayrıntıyı kaçırdı."
  },
  {
    review_owner: "Yunus Emre Kahrimn",
    txt:
      "Çok iyi gerçekten çok şey öğrendim inşallah abi beni kanalında tanıtır da daha hızlı abone artarım zaten bu kurs sayesinde abonem artışa geçti"
  },
  {
    review_owner: "Muhammed Kahramanoğlu",
    txt:
      "2 Tane kanal açmayı düşünüyordum. Birisi kızım için; oyuncak tanıtımı,eğlence,gezi vb... tarzı. İkincisi benim için; eğitim kanalı. Bu eğitimle kanalımı nasıl optimize etmem gerektiği hakkında fikir edindim. Bakış açımı genişletti."
  },
  {
    review_owner: "Mehmet Üzüm",
    txt:
      "Eğitim seti benim için oldukça yararlı oldu. 5.000 kişilik kanalımı  3-4 gün içerisinde 10.000'e çıkardım, şu an ortalama günde 1.000 abone geliyor. Bu anlamda Seo öğrenmenin, bu eğitim setinin faydasını gördüm. Temel düzeyde eğitime ihtiyacı olan herkese tavsiye ederim.  :)"
  },
  {
    review_owner: "Furkan Akman",
    txt:
      "Afgan abi kurstaki bilgileri uygulamaya çalışıyorum. Kanalımın linkini bıraksam bir inceler misin? Çok teşekkürler şimdiden."
  },
  {
    review_owner: "Furkan Yazgeç",
    txt:
      "Son derece faydalı buldum. Sadece ekstra olarak biraz daha sektörel olarak anlatabilirdi. Yani ben bunu kendi kanalım için değil bazı firmalar için yapmak istiyorum."
  },
  {
    review_owner: "Mim Sinan Birincioğlu",
    txt:
      "Mükemmel bir eğitim oldu. Gerçek hayatta işime yarayacağına eminim! Teşekkürler."
  },
  {
    review_owner: "Mahsun Uludağ",
    txt:
      "Bence Her Videonun Sonunda Motive Sunumu Yapsaydın Mükemmel Olurdu Fakat Gene Bilmediğimiz Bir Çok Konu Varmış Çok İyisiniz Gene"
  },
  {
    review_owner: "Ali Atay",
    txt:
      "Afgan Rasulov Gerçekten yaptıgı işin hakkını veriyor Ve Anlamadıgınız Yerleri Sordugunuzda Size Olabildiğince Erken Cevap Vermeye Çalışıyor Hatta ve hatta arada size Özel Videolarla Size Süpriz Bile Yapıyor :) Seo ile ilgili bir kaç kursiyer Var Ama Benim Fikrim Bütün Kursiyerler Afgan Abiden birşeyler almıştır.. Yani Afgan Rasulovun Diğer Kurs veren Arkadaşları Da eğittiğini söylemek çok yanlış olmaz .. Sevgiler Saygılar"
  },
  {
    review_owner: "Mehmet kaya",
    txt:
      "Çok faydalı bir eğitimdi keyif alarak kursu bitirdim. Kanalımın tam olarak bir amacı yok ama anlatılanlar ışığında video eklediğim zaman fayda görüyorum. Ödediğim ücretin karşılığını aldığımı düşünüyorum."
  },
  {
    review_owner: "Ali Aloush",
    txt:
      "kelime anlamıyla mükemmel bir kurstu çok faydalı oldu en içten teşekkür ederim"
  },
  {
    review_owner: "ALİ ASKERDEN",
    txt: "Afgan Bey'e tşk. ediyorum. Gerçekten harika bi eğitim oldu."
  },
  {
    review_owner: "Doğan Doğan",
    txt:
      "Afgan Abi Gerçekten Helal Olsun. Daha 10. Dersteyim ama Bir Sürü Bilgi Edindim Senin Sayende. Allah Seni Başımızdan Eksik Etmesin."
  },
  {
    review_owner: "Mustafa Necati Acarçiçek",
    txt:
      "Ben çok memnunum. Çok akıcı anlatım iç sıkmıyor. Sadece bazı bölümlerin güncellenmesi gerekiyor diye düşünüyorum. Adworks vs. gibi"
  },
  {
    review_owner: "Uğur Yiğit",
    txt:
      "Yeni yüklediğimiz videolarda öğrendiklerimizi uygulamaya çalışıyoruz.  İnşallah bu eğitimle hem izlenme hem de abonemiz artar henüz 5 aylık kanalız istediğimizi bir türlü elde edemedik."
  },
  {
    review_owner: "Arman Yılmazkurt",
    txt:
      "3 yıldır bende youtube da içerik üreticisiyim 75.000 abonelik bir kitleye ulaştım. Ancak son 1 yıldır kanalım geriliyordu. Eğitim setini satın aldım. Daha eğitim setini bitirmeme rağmen yavaş yavaş tekrardan ilerleme kat etmeye başladım. Afgan Rasulov hem iyi bir dille anlatıyor hem de gayet deneyimli bir adam. Kendisine buradan teşekkürlerimi sunarım."
  },
  {
    review_owner: "Memluk",
    txt: "çok faydalı bilgiler aldım, bakış açım değişti"
  },
  {
    review_owner: "Anıl Idi",
    txt:
      "Doğru yolu gösteren, gayet faydalı bir kurs. İş sadece uygulayabilme becerisine ve sabrına kalıyor ."
  },
  {
    review_owner: "Ugur Aydin",
    txt:
      "İnanılmaz yöntemler ! (youtube seo eğitimi)sanırım birşeyler öğreniyorum :D"
  },
  {
    review_owner: "Ismail Sahin",
    txt: "Başarılı bir eğitim seti olmuş. Başarılarınızın devamını dilerim."
  },
  {
    review_owner: "Şevket",
    txt: "Her şey için çook teşekkür ederim faydalı bir eğitimdi"
  },
  {
    review_owner: "Bera",
    txt:
      "Ruhi abinin kursu ile bu kurs arasında kaldım ilk hangisini alıyım diye sonra bu kurs ile başlamanın en doğru karar olcağını düşündüm 2015 ten beri youtubedeyim ve gelişemiyorum nerede hatalarım var diye merak ediyorum şuan kursun daha %40 ını bitirdim ve o kadar bilgi edindimki  gerçekten bu kursu almak çok doğru bir karar almak isteyen 1 sn durmasın hıç tereddüt etmeyin ve alın kursun %40 ına bile gelince çok fazla hata yaptığnızı fark ediceksiniz kurs çok başarılı.Bide kursu YouTube sertifikalı uzmandan alıyorsunuz yani en döğru kişiden alıyorsunuz böyle güzel bir kurs hazırladığın için teşekkürler Afgan abi"
  },
  {
    review_owner: "Bilal",
    txt: "anlatım harika, bilgiler doyurucu, bu güzel set için teşekkürler...."
  },
  {
    review_owner: "Kenan",
    txt:
      "Bence harika bir deneyim oldu bana. Bu kadar herşeyin değişeceğine inanmazdım. Teşekkürler..."
  },
  {
    review_owner: "Alperenoral Oral",
    txt:
      "Tüm samimiyetimle söylüyorum ki. diğer hiç bir kursa gerek kalmadan Afgan Rasulov ' dan tüm bilgileri edinebilirsiniz.Anlatmadığı bir kaç bilgi olabilir. kendine has olmasını istediği. onları da kendi ekranlarından gözlemleyerek öğrenebilirsiniz. İlaveten karalamak istemem kimseyi ama. diğerleri gibi ön izlemede canlı gözüküp sonradan lambur lumbur bir anlatım sergileyen birisi değil kendisi. çok içten ve enerjik."
  },
  {
    review_owner: "Kahraman Rencber",
    txt:
      "Paranızın karşılığını almak mı ? Bence eğitimi parasını ödeyecek bir birim yok."
  },
  {
    review_owner: "Gökhan Özkan",
    txt:
      "ŞUANA KADAR ÇOĞU ŞEYİ ÖĞRENDİM AFGAN ABİ ÇOK TEŞŞEKKÜR  EDERİM ABİ HALA İZLEMEYE DEVAM EDİYORUM"
  },
  {
    review_owner: "Burak Bilici",
    txt:
      "anlatımı , sunuşu ve enerjisiyle hiç tereddüt etmeden satın aldım. bu parayı haketmiyor , kesinlikle daha pahalı olmalı. şeffaflığınız için ise ayrıca teşekkür ederim."
  },
  {
    review_owner: "Emre KAPLAN",
    txt:
      "Bir işi uzmanından eğitim alarak yapmak ne kadar başarılı olur diye kendinize sorarsanız Afgan Rasulov'un danışmanlık yaptığı başta Duygu Köseoğlu , Ruhi Çenet , Yabancı Oyuncu olmak üzere diğer danışmanlık yaptığı 600'ün üzerinde kanala bakarsanız başarıyı göreceksiniz. Kesinlikle işe yarayan bir eğitim."
  },
  {
    review_owner: "Ahmet Ziya Sekendiz",
    txt:
      "Bu sette anlatılanları uygulayarak aygın yapılan yanlışlardan kurtulmak ve kanalı daha verimli hale getirmek mümkün."
  },
  {
    review_owner: "Muratcan İçdağ",
    txt: "Harika bir eğitim. Sonsuza dek devam etsin. Çünkü çok sevdim"
  },
  {
    review_owner: "Mehmet Kırbaş",
    txt:
      "Konuya hakim bir kişiden ders aldıgımın tam olarak farkına vardım ve dıger derslerı merakla beklıyorum."
  },
  {
    review_owner: "Ersin Efendioğlu",
    txt:
      "Youtube dan tanıdığım çok içten, bilgili bir arkadaş olduğu için Afgan Rasulov'a gönül rahatlığıyla 5 yıldız veriyorum. Buradaki bilgiler, daha ayrıntılı, düzenli ve devamlı elimin altında olacağı için daha çok beğendim."
  },
  {
    review_owner: "Mehmed",
    txt: "Hershey harika! Harika bilgiler! Devamini bekliyorum!"
  },
  {
    review_owner: "Zekeriya Korubük",
    txt: "Youtube kanalımı geliştirmek için faydalı bilgiler edindim."
  },
  {
    review_owner: "Harun Çavuş",
    txt: "Eğitim çok iyi ve detaylı Teşekkürler hocam"
  },
  {
    review_owner: "Hakan Bozok",
    txt: "çok faydalı olcağını ve benide youtube da gelişterceğini düşünüyorum"
  },
  {
    review_owner: "ahmet ÖZER",
    txt: "Mükemmel bir eğitim olmuş emeğine ve ağzına sağlık."
  },
  {
    review_owner: "Serkan Biçici",
    txt: "Yeni başlayanlar için kesinlikle faydalı buluyorum."
  },
  {
    review_owner: "Emrah Güler",
    txt: "Harika bir eğitimdi çok teşekkür ederim hocam"
  },
  {
    review_owner: "Çağlar Meri̇ç Polat",
    txt:
      "Afgan Rasulov gerçekten bu işin uzmanı diyebiliriz. Çok detaylı anlatıyor. Bu kursta çok kolay bulamayacağınız önemli bilgilere yer veriyor."
  },
  {
    review_owner: "Aşkın TEMEL",
    txt: "düşünmeden alabilirsiniz afgan bey çok güzel bir iş çıkarmış"
  },
  {
    review_owner: "Murat Akbulut",
    txt:
      "yeni başlıyacak bir blogır olarak güzel fikir sahibi oldum anlatımınızdan ve benimde yeni açacagım kanalıma destek verenizi isterim sizinde yardıınızla gereken ilgiyi alacagıma inanıyorum bana dönüs yaparsanız sevinirim muratakbulut6034@gmail.com saygılarımla"
  },
  {
    review_owner: "Halil Bakmış",
    txt:
      "Kursu aldığımda abone sayım 10bin civarında.daha 3. derste olmama rağmen birçok eksiği farkettim. anlatımlar harika umarım kanalıma doğru uygulayıp verimde alırım."
  },
  { review_owner: "İbrahim Akyurt", txt: "Çok aydınlatıcı ve samimi" },
  {
    review_owner: "Emin Karadeniz",
    txt:
      "Arkadaşımın tavsiyesi üzerine bu satın aldım. İyikide almışım.İlk videodan beri adamın enerjisi pozitifliği size yansıyor.Size bu yolda başarılı olacağınızın güvenini en baştan veriyor.Bu bile motive edici.Youtube kanalımda belli bir kitleye sahibim milyonlarca izlenmem var  keşke bu kursu daha önce farketseydim çok daha iyi yerlerde olacağıma emindim.Emin olun birçok youtuberın bilmediği bilgilere sahip bir adam.Kesinilikle pişman olmayacaksınız.Daha yazacak yüzlerce kelime var ama bu kadarı yeterli:)Sevgiler Afgan Ağabey..."
  },
  {
    review_owner: "Şafak SARAÇOĞLU",
    txt: "Çok teşekkürler %70 i bilmediğim tekniklerdi"
  },
  {
    review_owner: "Sinan Karabalta",
    txt: "Gayet başarılı bir eğitim seti olmuş. Tebrikler Afgan Abi ..."
  },
  {
    review_owner: "Erdal Güngör",
    txt:
      "şu ana kadar genel olarak bildiğim ve web sitelerim içinde uyguladığım formüller hakkında bilgiler vardı (video başlıkları hariç) anlatım, ısrarcılık, ve sen bunu öğreniceksin arkadaş kaçarı yok gibi bi tabir ile sunum git gide hoşma gitmeye başladı. Eksiklerimi görüp hemen uygulamaya aldım. ve enterasan şekilde kanalım 4 saat gibi kısa sürede dahi ivmede gelişim göstermeye başladı."
  },
  {
    review_owner: "Kaan Kalaycı",
    txt: "Çok doğru yerlere değiniyorsunuz teşekkür ederim"
  },
  { review_owner: "Yunus Eser Özerkan", txt: "Harikaydı tek kelimeyle" },
  {
    review_owner: "Elman Yunisov",
    txt:
      "Herşey çok iyi ve anlaşılan. Youtube'de çalışanlar için en iyi türkçe kaynak burada var. Youtube sektoru benim ilgimi çekmese bile, yine kursa katılıp bu sektorun da inceliğin öğrendim. Teşekkürler!"
  },
  {
    review_owner: "Mehmet Gültekin",
    txt: "her yerde bulunan bilgilerin dışında faydalı bilgiler veriyor"
  },
  { review_owner: "Emrah EROĞLU", txt: "kendimi hızla geliştiririyorum" },
  { review_owner: "Cem Çelikel", txt: "Her zaman ki gibi muhteşem" },
  { review_owner: "Yunus Emre Örek", txt: "Güzel iyi valla" },
  { review_owner: "Mehtapp", txt: "Benc daha iyisi olamaz" },
  {
    review_owner: "Mustafa Kemal Koca",
    txt: "Very good and detailed course. Definitely recommended to everyone!"
  },
  {
    review_owner: "Erdal Hoca",
    txt:
      "bildiğimi zannettiğim ama bilmediğim bir çok bilgi öğrendim birde matematikle ilgili harika şeyler söyleseydiniz on numara olacaktı :))"
  },
  {
    review_owner: "Ragıp Ayzit",
    txt:
      "Doğru Bilgiler Ve Yardımcı Olacak Teknikler Gerçekten Çok Başarılı Bence"
  },
  {
    review_owner: "Berkan Bulut",
    txt:
      "​Soru değilde birşey demek istiyorum daha ilk seviyelerde bile daha detaya girmeden özette iken bile bu kadar bilgi veriyorsunuz ve hepsi gerçekten de çok değerli bilgiler. Emin olun ki bu kurs bittikten sonra youtube da iyi yerlere geliceğimi düşünüyorum(yaklaşık 3 yıldır youtubedayım.) Yeni bir dönem başlıyor benim için. Afgan Rasulov'dan önce Afgan Rasulov'dan sonra :) Buraya yazıyorum bu bilgiler çok değerli. İyi bir yerlere gelirsem seni kesinlikle unutmayacağım abi. Başarılarının devamını dilerim."
  },
  {
    review_owner: "Bektaş Murtezaoğlu",
    txt:
      "Şu ana kadar çok faydası dokundu daha 2. bölümdeyim ama eminimki binlerce izlenmemi başlarda bu sayede çok rahat kazanıcam. teşekkür ederim herkese tavsiye ederim. '#afganrasulov"
  },
  {
    review_owner: "Cebecioglları Cebeciogulları",
    txt:
      "anlatılandan ziyade anlatım şekli zaten insan bir özgüven bir heves veriyor çok başarılı ve faydalı bir çok egitim seti aldım hepsinin toplamından çok daha fazla burada teşekkürler güzel kardeşim"
  },
  {
    review_owner: "Prenses MeLisa",
    txt: "Gerçekten harika bilgiler çok faydalı olucağına inanıyorum"
  },
  {
    review_owner: "Fatma Zehra Yıldırım",
    txt: "Güzel youtubeile güzel şeyler anlatıyor"
  },
  {
    review_owner: "Erman Tansal",
    txt:
      "Kanalıma başlamadan tüm ulaşılabilecek bilgileri tüyoları, ipuçlarını öğrenerek, youtube macerasına bilgili olarak girmek istememden dolayı bu videoların çok öğretici olması"
  },
  { review_owner: "Erhanfaris", txt: "teşekkür ederim" },
  {
    review_owner: "Orçun TV",
    txt:
      "gerçeğe dayalı veriler ile söylenenlerin doğrulanması benim için bu eğitim setinin gerçekçi ve yanıltmasız olması 5 yıldız 10 puan"
  },
  { review_owner: "Ren2x", txt: "Gayet açık,net ve eğlenceli anlatım." },
  {
    review_owner: "Emre ersoy",
    txt:
      "Abi iyi ki almışım eğitimi. Eğitimi tamamlayıp her söylediğini uygulayacağım. İnanırsak olur. Sevgilerle..."
  },
  {
    review_owner: "Fırat Ürekli",
    txt: "İhtiyacımız olan bilgileri paylaştığını düşünüyorum."
  },
  {
    review_owner: "Tolgahan Özkan",
    txt:
      "Afgan Rasulov'u uzun zamandır Youtube üzerinden takip etmekteyim. Böyle bir kursu olduğunu duyduğumda tabiki hemen almak istedim. Kursun içeriğine gözattığımda tabii yine her zamanki gibi profesyonel ve özgüyü hakeden bir duruşu olduğunu biliyorum. Afgan'ın en sevdiğim özelliği ise diğer kursların aksine bize direkt olarak ihtiyacımız olan bilgiyi eveleyip gevelemeden hızlı bir şekilde sunması. Buda hem zaman açısından hem de karmaşıklığı önlemesi açısından bir kursta olması gereken en önemli özellik diye düşünüyorum. Tebrikler Afgan Rasulov..."
  },
  {
    review_owner: "Ferdi Gören",
    txt: "Gayet başarılı ama daha detaylı olabilirdi."
  },
  {
    review_owner: "Regenweald kurtcan",
    txt:
      "ben bu videoları yapan kişiyi youtubede buldum nasıl buldum inanın bilmiyorum ama adam haketten işinde iyi yani bircok kişinin kanalına bakıyor ben bunu nerden biliyoum diye soruyorsan eger bende sana şöyle bir soru sormak isterim sen 2.500.000 milyon taklipcin olan bir kanalsın 150.000 bin takipcisi olan kanhalın videosunda görünürmüsün evet görünmezsin ama bu adamın kanalındaki videolarından bir tanesinde ruhi cenet yer alıyor ayriyeten videolarının cogunda yani youtubeyle ilgili olan kısımlarında ilk 5 saniyesinde ruhi cenetin sesi var yani şu ortaya cıkıyor ruhini paraya ihtiyacı yok nede olsa atıgı her video 2.000.000 milyon izleniyor niye afgan rasılovun kanalındaki bir videoya cıksınki eger afgan rasılov ona yardım etmediyse borcunu odemek icin cıkmadıysa ben öyle düşünüyorum ayriyeten buda dogru bence ben bu adamın yalan söylemedigine eminim"
  },
  {
    review_owner: "Mehmet Nazif Dereci",
    txt:
      "Gerçeketen çok iyi hazırlanmış bir eğitim. Bu çalışma için Afgan Rasulov'a teşekkür ederim."
  },
  {
    review_owner: "Nazım BEKTAŞ",
    txt:
      "YouTube'da Yeni Bir Kanal Oluşturmak İstiyorum Ve Eğer Bu Seti Almadan Başlasaydım Belkide YouTube Hayatıma Çok Geride Başlıyacaktım Bunu İzlediğim Videolardan Rahatça Anlayabiliyorum."
  },
  {
    review_owner: "Can Börklü",
    txt:
      "Çok kaliteli bir eğitmen. Söyledikleri çok anlaşılabilir, böyle bir platformu geç keşfettiğim için üzgünüm ?"
  },
  {
    review_owner: "Ömer Faruk Ermiş",
    txt:
      "Youtube konusunda çok bilgiye sahip olduğum halde, bu eğitimi denemek istedim. Kanalımda abone sayım 300 lerdeyken +100.000 hızlı izlenme alacak kapasitem olmasına rağmen bu eğitim benim içinde daha fazlasını sunuyor."
  },
  {
    review_owner: "Muhammet Uzekmek",
    txt:
      "son derece başarılı anlaşılır bir dil kullanılmış. uygulayıp deniyecem. afgan kardeş ellerine yüreğine saglık"
  },
  {
    review_owner: "Berk SASMAZ",
    txt: "Memnunum ve yararlı buluyorum. Teşekkürler"
  },
  { review_owner: "cizgi film dünyası", txt: "cok faydalı" },
  {
    review_owner: "Okan Göktekin",
    txt:
      "YouTube’a video yüklemeye karar verdim ama neredeyse kendi yaratıcılığım dışında bilgim yoktu. Afgan Rasulov sayesinde montaj programını 2 gün gibi kısa bir sürede öğrendim. ( tabiki Prof değil ?) Sadece montaj programı da değil istediğim birçok bilgiye Afgan Rasulov sayesinde ulaşabiliyorum. Mükemmelsin abiiiii. ??"
  },
  {
    review_owner: "Ayberk Karasoy",
    txt:
      "Tamamen Kaliteli Bir Kurs Bu Kursa Başlarken 1260 Abonem Bulunmakta  Bakalım Ne Kadar Bir İvme Alacağım Teşekkürler Afgan Abi :)"
  },
  {
    review_owner: "Mahmut KAÇAN",
    txt: "Yorumumu değiştirdim. Kursu tamamladım. İyi bir kurs."
  }
];
