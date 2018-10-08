-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 08, 2018 at 06:36 AM
-- Server version: 5.6.38
-- PHP Version: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `magasinet`
--
CREATE DATABASE IF NOT EXISTS `magasinet` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `magasinet`;

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `street` varchar(55) NOT NULL,
  `zip_code` int(11) NOT NULL,
  `city` varchar(55) NOT NULL,
  `country` varchar(55) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `fax` varchar(15) NOT NULL,
  `email` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `street`, `zip_code`, `city`, `country`, `phone`, `fax`, `email`) VALUES
(1, 'Marielundvej 46 E', 2730, 'Herlev', 'Denmark', '+45 7011 5100', '+45 4485 8925', 'redaktionen@bbbmag.dk');

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(55) NOT NULL,
  `article` text NOT NULL,
  `time` varchar(16) NOT NULL COMMENT 'unix',
  `views` int(11) NOT NULL,
  `category_fk` int(11) NOT NULL,
  `editor_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `title`, `article`, `time`, `views`, `category_fk`, `editor_fk`) VALUES
(1, 'Småt er godt – endelig', 'Ford har store planer med den nye Ford Fiesta- serie, som ikke kun skal sælges i Europa, men også i USA.\nDen nye Ford Fiesta-serie var en af stjernerne på Geneve udstillingen, der lyste kraftigt op på den store Ford stand. Den er baseret på den tidligere viste prototype Verve og kommer til salg i løbet af året herhjemme. Til næste år skal den samme modelserie som sedan indtage det store marked i Nordamerika. Designchef Peter Horbury er sikker på, at mindre biler går en stor fremtid i møde, også i Nordamerika efter mange års mere eller mindre mærkværdig modelstrategi fra de såkaldte tre store i USA, GM, Ford og Chrysler. Amerikanerne er begyndt at tage ved lære af europæerne med de stigende oliepriser og mindre biler, mener han.\n- Small is beautiful - at last, som han udtrykte det, under en samtale. Småt er godt - endelig.\nOg han fortsatte:\n- Alt er grønt med mindre biler og en del spændende ny teknologi. Jeg tror, kunderne i USA efterhånden har samme opfattelse, og jeg er sikker på, at de vil synes om den nye Fiesta, ligesom jeg er sikker på, at Ford vil tjene gode penge på modellen.\nFord har aldrig introduceret Focus Mark II i Nordamerika, som er blevet en stor succes i Europa, af frygt for at den ville blive for dyr. De er fortsat med den første Focus i ret skrabede udstyrsversioner, men med den nye Fiesta ser tingene anderledes ud, udtaler han. Den bliver udstyret med iPod og alt andet nyt såsom navigation og MP3 i topversionerne, samt hele sikkerhedspakken i alle modeller.\nPeter Horbury, 57, engelsk født, er uddannet på London College of Art, og har blandt andet arbejdet hos Ford, hvor han var med til at designe Escort og Sierra, derefter i 11 år hos Volvo, hvor han udviklede designet til modellerne S40/V50, S60/S80 og XC90, der er blevet meget rost. Han blev hædret som bedste designer i Storbritannien i 1998.\nI dag er han ansvarlig for Fords design i Nordamerika, med modellerne Lincoln og Mercury. Horbury bor i Detroit.', '1457946132', 0, 1, 1),
(2, ' General Motors svarer igen', 'Om et par år er General Motors klar med hybrid-teknologi med nye batterityper, der forlænger bilernes aktionsradius mere end tre gange.\r\nMiljøbiler\r\nGeneral Motors har alt for længe set stiltiende på, at blandt andet Toyota og Honda sælger hybridbiler, men nu slår GM tilbage. Det sker blandt andet med den lille smarte Volt, som blev præsenteret i Detroit sidste år under stor festivitas, samt med en ny Saab 9-X, ligesom GM og Ford begge satser enormt på ethanol i benzinen i USA. På dette punkt er man i dag langt foran japanerne, der først lige er begyndt at interessere sig for den nye blandede benzin. GM er også\r\nlangt fremme med diesel-hybrid i konceptmodellen Flextreme, som blandt andet stod i Geneve for nogle uger siden.\r\nHer præsenterede chef Rick Wagoner samtidig anden generation af de ny Lithium-Ion batterier. Det er samme batteriudvikling som i mobiltelefoner. De har mindst tre gange længere aktionsradius end almindelige batterityper. De nye batterier kommer først ned i den nye Saab 9-X fra 2010. Det er planen, at fremstille mindst 100.000 Saab 9-X årligt, der sparer på brændstoffet, og loves et benzingennemsnit på 20,4 kilometer med et CO2 udslip på kun 117 g/km fra en mindre motor.\r\nStor interesse for Volt\r\nGM vil fremstille cirka 10.000 af den lille Chevrolet Volt i 2010, og derefter højere styktal i de efterfølgende år. Efter lanceringen sidste år i Detroit fik GM så mange henvendelser fra interesserede kunder, at det nærmest overstiger alle andre nyhedspræsentationer i nyere tid, som en GM medarbejder udtrykte det i Detroit i år.\r\nOgså flere tusinde mails fra Europa viser, at interessen for hybrid ikke kun er den lille niche, som flere europæiske bil-topchefer troede for nogle år siden.\r\nDet var småt med tekniske informationer sidste år, men de foreligger nu. Med Lithium-Ion batterier er bilens aktionsradius altså mindst tre gange længere end almindelige batterier, som de kendes i dag, og som hjælpemotor, til de store afstande i USA eller i Europa, bliver Volt udstyret med en lille trecylindret benzinturbomotor, der yder 160 hk og klarer 0-100 kilometer i timen på cirka 8,0 sekunder, med en topfart på cirka 190 kilometer i timen. Med en 55 liters tank er der nok batterieffekt og brændstof til cirka 1000 kilometers kørsel før optankning. Genopladningen af batterierne sker fra et almindeligt strømudtag, og varer seks timer.\r\nPrisen loves på linie med en mellemklassebil i dag. Næste trin på Volt udviklingsstigen bliver solarenergi og brændselscelle med brint, men det har længere udsigter.', '1457795860', 2, 1, 1),
(3, 'Nissan-finansiering skærer i prisen', 'Med en anderledes finansieringsform af nye biler vil for eksempel en Nissan X-Trail på hvide plader, med en nybilpris på omkring 400.000 kroner, kunne erhverves med under det halve til udbetaling og godt halvdelen af den månedlige ydelse i forhold til et traditionelt lån, oplyser Nissan i en meddelelse.\r\nEn Nissan X-Trail koster med metallak 417.717 kroner, som nu kan levere med en udbetaling på kun 36.000 kroner, inklusive oprettelsesomkostninger, til en månedlig ydelse før skat på 3.595 kroner, efter skat 2.972 kroner.\r\nEn traditionel finansiering med billån vil løbe op i 83.554 kroner i udbetaling og en månedlig ydelse på 5.516 kroner.\r\nNissan oplyser videre, at efter tre år og maksimalt 60.000 kilometer kan bilen leveres tilbage til Nissan, hvis kunden ønsker det, eller kunden kan fortsætte sin månedlige betaling i den resterende\r\nløbetid og beholde bilen. Tilbuddet er en kampagnepris, der gælder til 30. juni i år og er baseret på det nuværende renteniveau, og det tilbydes hos udvalgte forhandlere, skriver Nissan.', '1457612520', 0, 1, 1),
(5, ' Kongen blandt sportsvogne tilbage', '\r\nI hjemlandet USA kaldes Corvette ”King of the Hill” - ZR1 har fået super højt drejningsmoment, dobbeltkobling, sekstrins close-ratio transmission samt helt ny undervogn og affjedring.\r\nCorvette ZR1 er noget af en bil for entusiaster, der endnu engang har taget de andre på sengen med en helt ny LS9 6.2 liters V8-motor, der yder over 600 hk med et drejningsmoment på hele 823 Newtonmeter.\r\nDet er sikkert baggrunden for den nye models fornemme titel i hjemlandet, ”King of the Hill” med det super høje drejningsmoment, dobbeltkobling, sekstrins close-ratio transmission, helt ny undervogn og affjedring med Magnetic Selective Ride Control, 19” hjul foran, og 20” bagunder med dækstørrelsen 285/30 ZR19 foran og 335/25 ZR20 bag, med specielt udviklede Michelin Pilot Sport til den ny amerikanske sportsvogn.\r\nBremseskiverne er i kulfiber, keramik og større end tidligere. I det hele taget er bilen opbygget som mere eller mindre end racerbil til banerne med nye lette materialer for og bag, såsom specielle polycarbonat ruder, en ny spoiler, der hæves ved højere hastigheder samt head-up display i forruden.\r\nBilen kører 370 kilometer på toppen, og den vejer kun 1.519 kilogram. Det er den hurtigste bil, General Motors har fremstillet i selskabets 100-årige historie\r\nDet var store ord, der blev brugt forleden ved introduktionen i Detroit.\r\n- Kongen er vendt tilbage, sagde Chevrolets direktør Ed Pepper, og han fortsatte:\r\n- Det nye ZR1 er det ypperste, en amerikansk superbil kan give, med værdier der overtrumfer andre eksotiske biler, som måske koster to til fire gange mere.\r\nDe første test har vist, at den nye Corvette også overtrumfer den højt respekterede Corvette Z06, kendt fra banerne. Corvette lover en topfart på 325-330 kilometer, men gearingen afgør dette. Effekt-vægtforholdet er bedre end Porsche GT2, Ferrari 599 og selv Lamborghini LP640.', '1453540652', 0, 1, 2),
(6, 'Seat Leon Van tordner frem', 'Sidste års afgiftsændring, der tog livet af de tunge firehjulstrækkere, har betydet at de mindre gul- pladebiler som for eksempel Seat Leon Van tordner frem. I januar måned kom Leon Van ud med knap 21 procent markedsandel i segmentet for varebiler op til 2.000 kilogram og blev den mest solgte varebil til private.\r\nFra Seat-importøren fortæller pressechef Tonny Soltau, at salget af Leon Van i øvrigt er meget polariseret. Enten vælger køberne de vilde powervans 240 hk Cupra eller 170 hk FR TDI, eller også går de målrettet efter den nye pendlerbil 1.9 TDI Ecomotive Van.\r\n- Ud fra en ren CO2-reducerende betragtning er der en stor her-og-nu miljøgevinst for samfundet ved at købe de mindre og energieffektive dieselbiler, som for eksempel Leon Ecomotive Van. Denne van-model, med fuld sikkerhedspakke og 1.200 liter varerum til under 154.000 kroner inklusive moms, udleder kun 119 gram CO2 og 0,0005 gram partikelmasse per kilometer, siger Tonny Soltau.', '1453491747', 0, 1, 2),
(7, 'Fremtidens Supermateriale: Nanorør', 'Der er tale om et ægteskab, som for os bådfolk er mere sensationelt end Brad Pitts og Angelina Jolies. Kulfiberen har mødt nanoteknologien, og hed musik er opstået. Nanorør er nu jordens stærkeste og letteste materiale. Og det er på vej frem. Smag på ordet – om kort tid er det på alles læber!\r\n<newline>\r\nSejlbåde i den dyre ende har længe været bygget af kulfiber fra top til tå – ikke kun skrog og dæk, men også mast, bom og sejl. Men kulfiberlaminaterne er også på vej ind i ganske almindelig bådproduktion, i takt med at priserne falder, og brugen bliver velkendt. Nanoteknologi er et andet af tidens ”buzzwords”. Det handler om at ændre molekyle-strukturen og dermed egenskaberne i alverdens materialer, altså helt nede på et niveau hvor der arbejdes i milliontedel millimeter. Nanoteknologi bruges foreløbig mest til overfladebehandling og har endnu ikke haft nogen stor betydning for bådbranchen. Men alt tyder på at både kulfiber og nanoteknologi vil få langt større og mere vidtgående konsekvenser i de kommende år. Ikke mindst fordi de to nu har mødt hinanden og indgået et sensationelt ægteskab. Navnet er nanorør.\r\n<newline>\r\n<title>Milliontedel millimeter</title>\r\nNanorør er, som navnet antyder, mikroskopiske, hule cylindre. De er lavet af kulstof, altså samme substans som kulfiber, bare i en anden struktur. Diameteren er under en milliontedel millimeter, og længden er nogle få mikro (en mikro er en milliontedel meter). De ligner støv, så små er de. Og hvad der er ret interessant for os sejlere: De danner basis for det suverænt stærkeste og letteste materiale, menneskeheden nogensinde har frembragt. Sammenligner man et laminat af nanorør med et tilsvarende stykke stål, vejer stålet seks gange mere. Og styrken? Vel, hold fast; Nanorør- strukturen er 100 gange stærkere! Nu vil folk med en smule indsigt i fysik ryste lidt på hovedet, for styrke er rent faktisk mange ting. En lidt mere præcis beskrivelse vil være at sige, at kulfiber-nanorør har fantastiske egenskaber, hvad angår strækbelastning og elasticitet. Kompression er ikke materialets livret, selv om resultaterne her også er bedre end det meste andet på markedet.', '1453503073', 0, 2, 3),
(8, 'Bryant 190 Bowrider', 'Lille og til en konkurrencedygtig pris. Endnu et amerikansk mærke på det danske marked og med bowriders fra 18 til 27 fod. Noget, du kan være helt sikker på, er, at du i en Bryant ikke finder et eneste stykke træ. For bådene er garanteret 100 % fri for træ.\n190-modellen er den mindste i flåden. Det betyder en båd på lidt over 18 fod. Som standard findes en 3 liters MerCruiser på 135 hk i motorrummet. Ikke nogen avanceret motor, men den har kræfter nok og er med til at give en fornuftig pris. Når man ser båden på afstand ved broen, virker det, som om den ligger lidt højt med agterskibet. Dette forstærkes under sejlads og vidner om, at båden antagelig bør leveres med en noget tungere motor. Typisk amerikansk – for en større motor koster næsten ikke noget ”over there”, og benzinpriserne er lave i forhold til herhjemme.\nDet er en fornuftig båd, hvor du får det, du ser. Her er integreret badeplatform med lejder, agterbænk, to stole og et par siddepladser foran vindspejlet. Båden har pæn indstøbt staffering og blød polstring. Under dørken er stuverum til vandski etc., og midt i bænken foran er der plads til den medfølgende transportable køleboks. Smart detalje! Instrumenterne er placeret i et buet instrumentpanel, og et lille kompas foran rattet er standard. Selve førerpladsen fungerer fint, man sidder godt, og der er vippehynde i forkanten af den formstøbte stol. Man vælger fortrinsvis at sidde med vippehynden oppe. Så ser man lige over vindspejlet. At sejle båden i stående stilling kan man godt glemme, for motorkontrol og rat er placeret til en siddende. Instrumenterne er overskuelige med kontakterne ved siden af rattet. Her er også kontrolpanel til stereoanlægget – selvfølgelig standard med vandtætte højtalere i hver side.\nNår alt kommer til alt, er dette en lille båd. Det skal man tage hensyn til, når man laster den. Det er også vigtigt med korrekt vægtfordeling, og fribordet er ikke særligt højt. Med tanke på det skal man være opmærksom på ikke at sejle ud i for store bølger og ikke med for meget last fremme. At få en ”grøn sø” ind over stævnen er ikke sagen, for båden er ikke selvlænsende. Brugsområdet for denne båd begrænser sig altså til det samme som for en almindelig, åben båd, selvom der medfølger et dækken til at lukke forskibet med. Man får bare lidt mere design og komfort i indretningen med bløde hynder, stole og polstring.\nBådens egenskaber\nGenerelt er båden enkelt udstyret – her er, hvad der er brug for til en familietur, når vejret er godt. Båden passer f.eks. til en familie på to voksne og to børn. Med en kraftig motor og friske svingegenskaber vil den være en god trækbåd til vandski og vandlegetøj.\nDen amerikanske producent påstår, at de bruger flere timer på hver enkelt båd end nogen anden producent. Det kan godt være rigtigt. Men der er lidt raslelyde i båden, og den virker kompakt. Man kunne dog godt have lagt nogle flere timer i at gøre lydisoleringen perfekt. For motoren larmer overraskende meget.\nDer var krap sø og bølger på omkring en meter på vores testtur. Planingstærsklen er lav, og båden kommer hurtigt i fart, virker levende og sjov at sejle. Den svinger let, og lægger man den ind i et maksimalt sving fra høj fart, drejer den på en femøre. Stævnen tager fat, agterskibet slipper og giver et skarpt sving med kraftige G-kræfter.\nSelvfølgelig sejler man ikke sådan på en familietur, men vi blev lidt overstadige og susede af sted mod fotobåden. En levende hop- og sprøjt-tur. Med 17 graders V-bund i agterspejlet bliver sejloplevelsen ikke en af de mest behagelige, vi har haft, men holder sig på et niveau, som vi vil betegne som gennemsnitligt. Pludselig må vi erkende, at dette er en forholdsvis lille båd med et moderat fribord fremme. Vi tager en bølgetop ind over stævnen. Og får en ordentlig skylle. Efter at have gentaget manøvren et par gange føler vi ikke behov for at blive mere våde og vender stævnen mod land.\nVor konklusion er, at Bryant 190 er en konkurrencedygtig båd med hensyn til prisen. Den virker godt bygget og har gode fartegenskaber. Men man skal ikke tage ud i for store bølger med den. Vi var kun to personer i båden under testsejladsen. Har man hele familien og bagage om bord, er det endnu vigtigere at passe på bølgehøjden. Det gælder også, hvis man skal over store hæksøer. Båden er slet og ret ikke større, end den er, og uden fordæk skal man tage de samme forholdsregler som i en helt åben båd.\nLængde/bredde: 5,80/2,45 m\nVægt:\nMaks. personer:\nMotor, standard/testbåd: Brændstoftank: CE-kategori:\nPris fra/testbåd: Producent:\nImportør:\n1.245 kg\n7 stk. 135/135 hk 120 l\nC\n199.900 / 216.900 kr.\nBryant Boats\nKøge Trolling Center, tlf. 56 63 01 00, www.k-t-c.dk\n+ Konkurrencedygtig pris\n+ Virker velbygget\n+ Fin trailerbåd\n- Lavt fribord\n- Den kan blive våd\n- Skal lastes med fornuft', '1453471990', 0, 2, 4),
(9, 'Nauta motoryacht', 'Dobbeltskruet motoryacht fra 1934. Motorbåden ”Nauta” er i dag 73 år og stadig i topform. Som ny i 1934 kostede den 11 m lange båd ”meget mere end en stor villa”. Det siger noget om kvaliteten.\r\nAlle stopper på kajen og kikker på den fine, gamle motorbåd med lakeret oregonpinedæk og forkromede beslag, mahognikahyt og ulasteligt hvidmalet fribord.\r\nHavnens naboer til ”Nauta” mener, at den gamle motorbåd er irriterende. For når de hører folk oppe på kajen sige ”Nej, en flot båd,” så håber de, at det er deres egen båd, der menes. Men det er altid gamle ”Nauta”, tilskuere ser på, for træbåden skiller sig meget ud fra hvide glasfiberbåde.\r\nInge og Torben Leig Andersen har ejet ”Nauta” siden 1971, altså 36 år. ”Der er af og til folk, der vil købe båden,” siger Torben og Inge muntert. ”Engang for 30 år siden i en sluse på Göta kanalen kom en meget interesseret svensker, der fotograferede båden og ville købe den for 100.000 kr. Vi ville ikke sælge. Straks tilbød han 150.000 kr. Vi ville stadig ikke sælge. Svenskeren kørte i bil fra sluse til sluse efter os og gentog sit tilbud, og i tilgift ville han give en taxa hjem til Danmark.”\r\n”Nautas” marchfart er 8 knob, hvor dieselforbruget er fornuftigt med 5 liter i timen. Topfarten er ca. 13 knob, men med et brændstofforbrug på 26-27 liter i timen. ”Men vi kan da hurtigt komme af vejen for en færge,” siger Torben.\r\n”Vi vandt engang et væddemål om, at ”Nauta” kunne trække en vandskiløber. Det kunne hun sagtens, endda en stor en,” ler Torben, ”og jeg vandt en bajer.”\r\nDe foretrækker at sejle på fladt vand uden bølger, men egentlig generer bølger ikke båden meget. ”Det er bare pokkers ubehageligt,” synes Inge.\r\nTo ”baglæns” motorer\r\nBåden er bygget i 1934 som ”dobbeltskruet motoryacht” af spejlskåret kalmarfyr på eg og egesvøb på Bogense Skibsværft.\r\nBåden havde dengang to skruer og to Albin 4-cylindrede motorer. De stod i hver sin side af agterkahytten, der hvor der nu er en sofa og et skab. For at undgå at motorerne optog plads i cockpittet, var installationen ret avanceret. Motorerne stod ”baglæns” i agterkahytten med drevet vendt fremad, hvor det blev ført lodret ned til skrueakslerne, der gik agterud neden under motorerne. De kørte på traktolin, en blanding af benzin og petroleum. De startedes på ren benzin, hvorefter man skiftede over til billigere petroleum.\r\nI 1956 fik båden erstattet de to motorer med én ny 6-cylindret Albin motor på 70 hk, også til traktolin. Den blev placeret midtskibs i forkahyttens agterste del, og med en lang skrueaksel under cockpitdørk og bådbund til en stor propel agter. For at få plads til propellen blev egetræs-kølen foran skrue og ror gjort dybere til nuværende 1,2 m dybgang.\r\nI 1975 fik ”Nauta” den nuværende motor, en Scania Vabis D8 dieselmotor på 156 hk, og den kører stadig fint efter 32 år. Motoren vejer ca. 1.100 kg, så for ikke at trykke forskibet ned blev den flyttet agterud til det naturlige sted, cockpittet. Torbens ældre bror er mekaniker og hjalp med ombytningen. Selv har Torben masser af mekanisk snilde, men får også stadig hjælp af sin bror ”doktor mek.”, der hvert andet år tjekker motoren. Han sætter som et stetoskop en skruetrækker mellem øre og motor og lytter til hver af de seks cylindere, mens motoren kører.\r\nStolt af glasfiber spørgsmål\r\nBåden vækker altid opmærksomhed. ”Hvor gammel er den?” er det almindelige spørgsmål. ”73 år,” er svaret i dag.\r\nDet er næsten altid starten på flere spørgsmål og hyggelige samtaler. ”Et spørgsmål, vi er lidt stolte over at få, er, når nogen siger: Jamen, man byggede da ikke glasfiberbåde i 1934? Så ved vi, at vores arbejde med at male fribordet er gjort godt nok,” siger Torben.\r\n”Nauta” har også været filmstjerne: ”Under sejlads i Göta kanalen blev vi filmet af et tysk tv-hold, som fulgte båden op ad den store slusetrappe i Mem. Tv-holdet bad os gentage visse manøvrer, så de kunne filme en ekstra gang. Desværre har vi aldrig set optagelserne.”\r\nDe har en fin tilladelse fra 1954 til at føre yachtflag. ”Ha,” siger Torben, ”hvem har sådan en tilladelse i dag?” Dengang skulle hver båd søge om lov til at føre yachtflag (splitflag), men siden 1956 er der generel tilladelse til alle både.\r\nCykler, fisketip og landstrøm\r\nSiden ”Nauta” i 1975 fik den nye motor, har de sejlet ca. 30.000 sømil. De er hvert år på sommertur, og de har været i stort set alle danske havne. Desuden i Stockholm, Göta kanalen, på Gotland, ad tyske kanaler til Berlin få år efter murens fald, ad Trave kanalen, i Hannover, på Elben, Kielerkanalen og Ejderen, Slien og to gange ad Dalslands kanal til Norge.\r\nDe bruger minicykler. ”Næst efter kompasset er cyklerne det vigtigste om bord,” siger de. ”Det er tredje hold cykler, vi har nu. For at få plads til en ”cykelkælder” sløjfede vi en lille sofa i agterkahytten.”\r\nDe fisker en del og sætter af og til lidt garn med ruser. Torben overvejede at bygge flybridge på båden, men det passede ikke i stilen, så han nænnede det ikke.\r\nDet originale porcelæns-wc og håndvasken fra 1934 måtte udskiftes med nyt i 2007. ”Mon den nye wc-pumpe af plast kan holde i 73 år som den gamle af bronze?” tvivler Torben.\r\nTil landstrøm er der 230 volt stik i hver af de to kahytter og i cockpittet. En god ting med landstrøm er det ”nye” køleskab, som er 16-17 år. Det er af rustfrit stål, 60 liter med et lille fryserum. Det forrige, almindelige køleskab rustede op og var i øvrigt en meget stor strømforbruger.\r\nDen store motor har et meget stort el-forbrug i startøjeblikket, mens de to startbatteriers kapacitet er lille. Hvis motoren ikke starter inden for ni sekunder, er batterierne tømt. Men motoren starter altid straks. De har dog en meget kraftig oplader, og med den koblet til landstrøm kan den i nødsituation starte motoren.\r\nBådebygger genså sit ”barn”\r\nDen dobbeltskruede motoryacht blev bygget i 1934 på Bogense Skibsværft til Herr Direktør H. Rasmussen, Vedbæk, læser man i Skibsregisterets ”Tilsynsbog”. Bådens navn blev ”Mayo”, for H. Rasmussen var direktør for mayonnaisefabrikken Mayo.\r\nKun to år efter, i 1936, blev båden solgt og kom i 1937 til Rungsted.\r\nI 1946 var båden i Århus. Det var jo en bemærkelsesværdig stor båd dengang, og den lå for enden af sin egen bro. Der bemærkede den 9-10 årige Torben båden. Han er fra Århus og var begyndt at sejle i motorbådsklubben, men drømte ikke om, at han senere skulle eje den.\r\nI 1951 kom ”Nauta” til København for en større renovering af motorerne.\r\nI 1953 var båden i Køge og hed ”Ulla” et års tid, inden den blev døbt ”Nauta” og kom i Skibsregisteret, og i 1961 kom ”Nauta” så til Snekkersten, hvor Torben og Inge overtog båden i 1971.\r\nI sommeren 1974 var de i Bogense med ”Nauta”, og om bord kom den dengang 87-årige Eiler Pedersen, ”Bogense-Pedersen”, som byggede båden. Han fortalte, at ”den i 1934 kostede meget mere end en stor villa”. Den gamle bådebygger klappede kærligt båden og sagde: ”Godt at man kan være sine børn bekendt.”\r\nHan kunne ikke hjælpe med de originale tegninger til båden, for en mindre brand på værftets kontor havde ødelagt næsten alle arkiver.\r\nNylig søsat i 1934 fik båden ”midlertidig godkendelse til indskrænket fart indtil 6 sømil af kysten” af Statens Skibstilsyn. Men følgende skulle findes i båden: Søvejsregler, to pøse, kompas og flag, og ”5 BRT” skulle indhugges i en lugekarm, som det var almindeligt dengang. BRT er bruttoregistertons, et nu forældet rummål for bådens størrelse. En uge efter var de ting i orden, og båden fik den 9. juli 1934 den endelige godkendelse ”til indskrænket fart, dog ikke vest for Skagen.”\r\nAnker i fjord og i have\r\nTorben begyndte som nævnt som 9-10 årig at sejle. Inge havde kun været i morfaderens pram på Stege Nor. Ellers havde hun ikke sejlet, før hun og Torben havde været gift i 16 år, og de overtog ”Nauta” i 1971. ”Jeg vidste jo ikke, hvad jeg gik ind til,” undskylder Inge tilfreds.\r\nAnkrene i stævnen havde oprindelig henholdsvis 40 og 60 m galvaniseret kæde. Nu er de to ankre kun til pynt, og de er boltet fast i ankerklyssene. De er nemlig hule kopier smedet i jernplade efter de originale massive 22 kg ankre. Det ene af dem ligger på bunden af Roskilde Fjord, det andet ligger til pynt i Torben og Inges have.\r\nInge og Torben er næsten på alder med Nauta, men har slet ingen planer om at ”sluge ankeret”, som man siger om søfolk, der går i land.\r\nDobbeltskruet motoryacht ”Nauta” ex ”Ulla” ex ”Mayo”.\r\nBygget 1934 på Bogense Skibsværft, som også byggede store fiskekuttere.\r\nMarchfart/topfart: Længde/bredde/dybgang: Vægt:\r\nDieseltanke:\r\nVandtanke:\r\n8/13 knob 11,1/3/1,2 m 9t\r\n2x180l 75+250l', '1451927424', 0, 2, 4),
(10, 'Hvis nabobåden kommer i klemme', 'Hvad gør du, hvis du ser en ubemandet båd i havn i færd med at synke – og hvad har du lov til? Advokaten giver svar.\r\nNu er vi så langt henne på året, at de fleste har fået deres båd på land. Enkelte bådejere lader dog båden blive i vandet, og set med de sidste mange års milde vintre er det forståeligt nok. Men under efterårs- og vinterstormene kan der opstå ekstraordinære vind- og vejrforhold, der betyder, at der skal holdes ekstra øje med båden.\r\nAf og til oplever man den situation, at en båd hænger så voldsomt i sine fortøjninger, at der er overhængende risiko for, at den vil synke. Hvad skal man gøre i denne situation, hvor det ikke kan lade sig gøre at komme i kontakt med bådens ejer – han sidder måske og hygger sig under sydens sol? Skal man skære bådens fortøjninger over, for at undgå at båden synker, uanset at det kan medføre problemer, og hvordan forholder det sig, hvis båden efterfølgende driver over i nabobåden og forvolder skade på denne båd?\r\nDet må du\r\nI nævnte eksempel er det klart, at hjælperen ikke pådrager sig noget ansvar over for ejeren af den nødstedte båd, som han klipper fortøjningerne over på. Hjælperen sikrer, at båden ikke synker, og ejeren undgår et formuetab. Næste spørgsmål er, om hjælperen kan risikere at blive ansvarlig for andre skader, der eksempelvis pådrages nabo båden.\r\nEksemplet rummer en velkendt problemstilling, nemlig retten til at foretage rimelige foranstaltninger, der er nødvendige for at afværge et truende tab, når tredjemand selv er forhindret i at handle. Man taler om uanmodet forretningsførelse eller nødret i de tilfælde, hvor man foretager en handling for at afværge skade på tredjemands ting og derved pådrager denne tredjemand en udgift.\r\nNødret\r\nForudsætningen for at den person, der handler på ejerens vegne, bliver ansvarsfri, er:\r\n• At ejeren selv har været forhindret i at gribe ind\r\n• At handlingen har været forsvarlig, og at den har været nødvendig.\r\nEr de betingelser opfyldt, er den handlende person ikke ansvarlig for de udgifter, som handlingen påfører ejeren. Ejeren af båden skal derfor erstatte nabobåden, de skader, der bliver påført denne som følge af, at bådens fortøjninger bliver skåret over.', '1449750120', 0, 2, 4),
(11, 'Vinterstorm = 25-33 m/s', 'En storm har ufattelig kraft. Her genopfrisker vi din fantasi om, hvad der kan ske, og hvad du kan gøre for at skåne båden.\r\nDet er rystende dagen efter en storm at se en 177 kg tung Wayfarerjolle blæst op fra sin trailer og smidt oven på nabojollen. Tunge tagplader kan også blæse omkring på havnepladsen, og store træer, der har stået trygt i mange år, kan vælte i en vinterstorm.\r\nDu kan næppe forebygge stormskader, men når stormen først er der, må du forlade din varme stue og se til båden. Måske kan nogle ekstra surringer forebygge skader.\r\nBåden i haven\r\nVi kender til en forsigtig bådejer, der har båden vinteroplagt hjemme i haven. Der kom varsel om orkanagtig storm fra nordvest, den værst tænkelige retning for netop den have. I haven er et 20 m højt, tyndt grantræ, der efter tidligere vestlige storme hældede lidt mod øst, og normalt svajede det også rigtig meget i kuling. Nu frygtede bådejeren, at en storm kunne vælte træet ned over båden – et 20 m træ vejer 500-1.000 kg.\r\nDerfor klatrede han så højt op i træet som muligt, bandt en trosse om stammen og førte trossen til roden af et stærkt træ til luv og strammede op med en talje.\r\nTræet væltede da heller ikke i stormens vilde sus, og nogle dage efter savede han konsekvent øverste tredjedel af træet af, så det fik mindre vindfang. Det var for risikabelt at fælde hele træet, mens båden stod i haven.\r\nStormen væltede motorbåden. En sejlbåd bagved rokkede ned ad sine klodser, men væltede ikke. Den orange jolle fik ved lavvande stævnen under bolværkets bjælke. Så kom storm og højvande. Ejerne kom ikke.\r\nEfter pålandsstormen 8. januar 2005. Orkanagtige vindstød har kastet den hvide Wayfarerjolle op på nabojollen. Wayfarer’en vejer 177 kg og stod på den tomme trailer bag manden.\r\nGamle træer er farlige i storm. Jollen med grøn bund var heldig, en tyk gren stoppede det tonstunge træ en millimeter over jollen. I baggrunden joller, som er smidt rundt af stormen.\r\nHusk\r\nInden du går i seng om aftenen er det sidste du gør at tjekke båden. Bor du langt fra båden, så få en ven til at tjekke.\r\nDet første, du gør næste morgen, er også at tjekke båden og nabobådene og se, om der er skader, der måske kan standses ved en hurtig indsats.\r\nHvad kan du gøre, inden stormen kommer?\r\n• Du kan lægge 50-100 kg ballast på trailerens aksel og trækstang, f.eks. vanddunke med strandsand bundet sammen to og to til at hænge over akselen.\r\n• Du kan tage masten af, så der er mindre vindfang. Så skades masten heller ikke, hvis båden blæser om.\r\n• Du kan forhindre, at en tynd plastpresenning blafrer for meget ved at lægge en tung, gammel presenning oven på. Den tunge presenning må godt være utæt, det er kun dens vægt, der tæller. Midt i stormen er det næppe muligt at lægge en ekstra presenning på.\r\nHvad kan du gøre, mens stormen raser?\r\n• Mærker du stormen uden for dine vinduer og ved, at der er pålandsvind, er det tid at gå ned og se til båden.\r\n• Tjek båden på land. Du kender havnens vinterplads og vindretningerne og ved, at stedet er mest udsat ved pålandsvind, hvis den ude fra vandet går rent ind på bådenes vinterplads, mens fralandsvind generer mindre eller slet ikke, når bygninger, bakker og træer giver læ for vinden.\r\n• Tjek båden i vand. Der vil altid være risiko for ekstremt høj- eller lavvande om vinteren, når det blæser, uanset vindretningen.\r\n• Er det mørkt, så tag en lommelygte, tovværk og måske også lidt værktøj med.\r\n• Lette joller og flerskrogsbåde på land har stor risiko for at blæse omkuld i pålandsvind. Sur dem stramt til traileren, så dens vægt er med til at holde på båden. Er masten på, så før et\r\nfald ud i vindretningen og bind det fast til noget solidt. Prøv ikke at lægge masten ned, mens det stormer. Når du ikke kan holde en avis op mod vinden, så vil en mast antagelig blæse fra dig.\r\n• Blafrer presenningen, kan den sikres ved at stramme linerne og hænge flere tunge vægte på dem. Kast evt. tunge trosser hen over båden og stram ned. Kast i medvind, ellers lykkes det ikke.\r\n• Giver presenningen for stort vindfang, er det antagelig for sent at pille den af midt i stormen. Hvis den fyldes af et stormpust, har du ingen chance for at holde den nede, og måske brager den over i en nabobåd, der herved får et for stort vindfang.\r\n• Basker nabobådens presenning i vinden, så båden truer med at vælte over i din båd, så gør noget, eller ring straks til naboen.\r\n• Rokker dit eller naboens bådstativ? Det kan ske, hvis stativet er dårligt, især hvis det er et træstativ. Det kan også ske, hvis presenningens liner er fastgjort højt oppe i stativet. Flyt linerne ned omkring bådens køl, ror, propelaksel og andre lavt placerede steder. Slå kiler under eller over stativets ben, hvis de er løse. Søm afstivninger på et mørt træstativ.\r\nVind\r\nKuling\r\nHård kuling: Stormende kuling:\r\nm/s\r\n14-17 17-21 21-25\r\nStorm: Stærk storm: Orkan:\r\n25-28 28-33 33+\r\nNår teksten nævner storm, er det altså 28-33 m/s. Ved ca. 30 m/s er det vanskeligt at stå op uden at blæse omkuld. I en båd kan man kun kravle, og ved sejlads mod vinden slår bølgesprøjt hårdere end hagl, så man må vende ansigtet bort.\r\nMeteorologer angiver en tropisk hurricane i km/t, ”for det ved alle, hvad er.” Nej, det ved vi sejlere ikke, for vi er vant til meter i sekundet. Men hvis du hører om en hurricane med 150 km/t, svarer det til 42 m/s 200 km/t er 56 m/s.', '1445097809', 0, 2, 3),
(12, 'Ny koncept-bike fra Suzuki', 'Suzuki har gjort det igen...\nKoncept-cyklen B-King tager dig med til en ny tid i motorcykel æraen - udover det sci-fi-agtige udseende, byder B-King på en superkraftig tunet 1300 kubik motor fra Hayabusa\'en, på i alt 250 hk. til blot 250 kg.\nDette giver altså et stærkt vægt/kraft forhold på hele 1 hk/kg...\nMen B-King er ikke kun en kraftig sports maskine, for under \"hjelmen\", gemmer der sig avanceret computer teknologi, der via censorer bla undersøger motorcyklen for fejl før hver køretur.\nB-king\'s elektroniske system indeholder endvidere en avanceret tyverisikring. Motorcyklen startes via \'finger-touch\', og kun hvis fingeraftrykket matcher ejerens. Skulle en tyv prøve på at få startet eller flyttet motorcyklen, ringer B-king op til din mobiltelefon, hvorefter du har mulighed for at tale med synderen, eller aktivere horn og lys.\nKommunikations forbindelsen giver naturligvis også mulighed for internetadgang og e-mail, og der er selvfølgelig installeret GPS navigationssystem.\nChancen for at vi ser B-king på gaden er nok ret minimal, men der er ingen tvivl om at dette er fremtiden.', '1457215450', 0, 3, 5),
(13, 'Når en anglofil skal vælge', 'Triumph Daytona 955i årgang 2000.\r\nFor 2 år siden havde jeg fornøjelsen af at prøvekøre en Triumph 1200 Daytona, og det var en særdeles positiv oplevelse.\r\nAllerede fra første sekund vidste jeg at her er en spændende maskine, men desværre skulle den ikke blive min.\r\nLyden fra den 147 heste store motor glemte jeg ikke lige med det samme.\r\nDa jeg så efter en lang vinter skulle til at overveje, hvilken MC jeg skulle købe, faldt tankerne tilbage på den positive oplevelse jeg havde på 1200 Daytona’en. Jeg kørte ned til Vagn Jensen. i Lystrup og spurgte efter en 1200 Daytona - han mente imidlertid i stedet, at jeg skulle købe en 955i. Efter en prøvetur var jeg solgt og købte den med det samme.\r\nEfter nu at have kørt en del km på 955\'eren er jeg ikke i tvivl om at jeg har fundet en MC, som jeg vil have glæde af i mange år.\r\nUdseende og lyd\r\nDet karry gule udseende får mange til at vende hovedet en ekstra gang, især når man er inde og tanke op.\r\nLyden af denne motor er en behagelig oplevelse, dens tre cylindres klang giver omgående opmærksomhed, når man kommer hurtigt frem i trafikken. De fleste bilister spærrer øjnene op når man foretager en hurtig overhaling og motoren runder de 9000 omdrejninger.\r\nKøreegenskaber\r\n955’eren egner sig ikke til længerevarende bykørsel. Efter et stykke tid begynder kørestillingen at føles anstrengende, men det er heldigvis ikke i byen at jeg tilbringer det meste af min tid. På landevejen føler man sig noget bedre til rette, dog skal man holde øje med kilometertælleren, da man helt ubevidst kommer til at overskride de tilladte 80 km i timen. Motorvejen er 955’erns foretrukne legeplads, og her er det sjovt at lukke op for de 130 legesyge heste. De 250 km/t opnås på ingen tid og selv på den anden side af denne hastighed, føler du stadig at det er dig der har kontrollen over MC’en.\r\nStyreegenskaber\r\nStyringen er præcis, og man kan trække den igennem et sving, uden man på noget tidspunkt føler vrik eller vrid.\r\nSkal det gå stærkt, og er man i et område med en masse sving, så er det at det bliver sjovt - her kan man virkeligt komme igennem uden at man føler maskine tager magten fra en.\r\nBremser\r\nBremserne er særdeles effektive og nemme at dosere. En bilist med sorte nummerplader som ikke overholdte sin vigepligt, gav mig lejlighed at foretage en katastrofe opbremsning. Testen forløb perfekt og bilisten fik opfrisket diverse gloser fra det danske sprog.\r\nØkonomi\r\nDet er en dyr, meget dyr MC, men man får trods alt en MC der er anderledes. Ved normal kørsel er benzin forbruget omkring de 18km/l.\r\nKaskoforsikringen ligger på ca. 12.000 kr. om året.\r\nTuning\r\nDet skulle ikke være nødvendigt, men det er muligt at få ekstra HK ud af denne pragtmaskine. Triumph kan levere en effektudstødning med en ganske lækker lyd. Derudover kan man chiptune og på denne måde få ekstra HK.\r\nSkal det være voldsomt, kan man faktisk få en turbo der er specielt udviklet til 955\'eren. Med denne påmonteret, har man mere end 160 heste på baghjulet. Desværre koster sådan en 35.000 tusinde, men hvem har også brug for en turbo...? Måske skulle man her til vinter. Hmm...\r\nKonklusion\r\nAlt i alt en flot maskine, som styrer fortræffeligt, men der er dog minusser:\r\nSelve gearskiftet virker lidt for mekanisk, og burde være mere lydløst på en sådan cykel.\r\nPå begge sider af maskinen sidder der et skjold, der dækker for kæde og for bag bremsen. Dette er udformet på en sådan måde, at ens buksekant kan hænge fast, hvis den hænger løst. Dette prøvede jeg en dag da jeg standsede for at tanke op. Resultatet var et brud på kåben.\r\n', '1454330192', 0, 3, 6),
(14, 'BMW F650GS', 'Jeg har haft fornøjelsen af at prøvekøre BMW\'s F650GS, som er en særdeles alsidig motorcykel. Motorcyklen er udstyret med semi-offroad affjedring og dæk, hvilket gør den til en all-round motorcykel der både kører godt i byen, på landevejen og i lettere terræn.\r\nF650GS\'eren er ikke noget lyn, og henvender sig, med sine 650 kubik og en topfart på godt 160 km/t, også til det yngre motorcykelfolk, hvor den udmærker sig ved let og hurtig styring, god komfort og motocross præget udseende.\r\nUdseende og lyd\r\nMotorcyklen ser ikke ud af meget, og lyder heller ikke af meget. De 650 kubik kommer fra en en- cylindret motor, hvilket giver en lidt ujævn motorgang og svag accelerationsevne - den ujævne motorgang kommer især til udtryk ved højere hastigheder på motorvejen. En lækker detalje er at der er varme i håndtagene, hvilket er rigtig dejligt ved landevejs- og motorvejskørsel, og så er den ligeledes udstyret med ABS bremser der virker utroligt godt.\r\nKøreegenskaber\r\nMotorcyklen er bedst til bykørsel og landevejskørsel, da vindskærmen kun giver minimal beskyttelse på motorvejen, men er man til vind i håret (eller hjelmen red.), er den også sjov at køre på her.\r\nDen har, som skrevet, ikke de store præstationsegenskaber, men kan køre dig fra punkt A til B på en hurtig og betryggende måde. Eneste ønske til forbedring her, kunne være et ekstra gear at give af, da man meget hurtigt når femte og sidste gear.\r\nStyreegenskaber\r\nMotorcyklen føles rigtig retningsstabil, men dette gør hverken styringen træg eller langsom. Den manøvrerer godt i sving og slalom både på alm. asfaltvej og grusvej.\r\nBremser\r\nBremserne er effektive og nemme at dosere, og ABS\'en hjælper rigtig godt til ved katastrofeopbremsninger.\r\nØkonomi\r\nDette er en billig motorcykel, men kigger man på andre motorcykler i denne prisklasse, kan man let få en meget mere sportspræget motorcykel for pengene.\r\nKonklusion\r\nAlt i alt en god all-round maskine, som kører og styrer godt. Motorcyklen her er utrolig sjov at \"smide\" rundt på de kuperede grusveje...', '1450189032', 0, 3, 6),
(15, 'Suzuki GSF600S Bandit', 'Da jeg første gang satte mig op på Suzuki\'s \"ældre\" men bestemt ikke kedelige streetbike, var det ikke ligefrem forventningerne til en racercykel jeg havde i baghovedet, og den er vel nok også bedre til seriøs brug såsom et transportmiddel - ikke desto mindre gør den sig godt på vejen, og er en fornuftig motorcykel til prisen.\r\nMotorcyklen der har været en af Suzuki\'s mest populære, er utroligt letkørt og passer fint til nybegyndere såvel som de lidt mere garvede motorcyklister, og komfortmæssigt er der ikke meget at sætte fingre på, da sædet er af god kvalitet og kørestillingen fin til både store og små personer.\r\nDen har en fin gas-respons, og trækker godt i alle seks gear.\r\nUdseende og lyd\r\nBanditten er skåret efter streetbike eller nakedbike konceptet, hvor der er frit udsyn til motoren, og der er efter min mening gjort et godt arbejde.\r\nHalvkåben til 10.000 kr., er ganske vidst et dyrt skridt fra den helt nøgne model, men et godt valg, hvis man har lyst til at køre længere ture eller motorvejsture der bestemt ikke er særligt sjove uden - desuden ser den rigtig fræk ud forfra, noget man godt kunne have videreført til GSX-F serien.\r\nMotoren på banditten, der er luft og oliekølet og måske lidt gammeldags, lyder ikke af meget, men giver alligevel et indtryk af en motor der er rask gennemprøvet. De fire cylindre kan godt virke lidt \"slappe\" i de lave omdrejninger, men har faktisk et solidt træk i mellemområdet fra ca. 4-5000 omdrejninger til ca. 9-10.000 omdrejninger, hvorefter motoren ligesom mister pustet op imod de 12.000 omdrejninger.\r\nDen yder dog godt prisen taget i betragtning, og pepper man den lidt op med jet-kit, sportsfilter, potte og omdysning, vil man kunne hente nogle af de gemte kræfter frem, der har måttet vige for emissionskravene.\r\nKøreegenskaber\r\nDer er igen ikke snak om nogen sportscykel, men banditten er alligevel utrolig styrevillig og letkørt, og der føles ingen ubehag hvad enten man kører 50 km/t eller 200 km/t. Den ligger utroligt godt i svingene, der kan tages som en leg selv for de mere uerfarne.\r\nAffjedringen virker ok på en motorcykel som denne, hvor den bagerste monostøddæmpers dæmpning kan justeres i syv trin og returdæmpning i fire trin. Der er ingen justeringsmuligheder på dæmpningen i forgaflen, hvilket ikke fordrer alt for aggressiv kørsel.\r\nKørestillingen er som sagt rimelig, men det skal dog siges, at længere køreture kan blive lidt ubehagelige hvis man har lange ben, grundet fodhvilernes placering, hvilket især kan komme til at\r\ngenere hvis man under hurtig kørsel kryber ned bag halvkåben, og da de bagerste fodhvilere sidder rimeligt højt, kan det også blive lidt ubekvemt at sidde bagpå i længere tid.\r\nØkonomi\r\nDenne motorcykel hører til i den billige ende, og er en glimrende begynder-mc. Den har en fornuftig benzinøkonomi der ved almindelig kørsel giver en rækkeevne på omkring 17 km/l, og er billig i forsikring.\r\nDa nyprisen ligger godt under 100.000 kr., er den også noget alle burde kunne klemme ind i budgettet, uden at slå det helt i stykker.\r\nKonklusion\r\nHvis man har brug for et transportmiddel der samtidigt er sjovt at køre på, og som også kan køre hurtigt, er banditten lige sagen - søger man derimod noget mere sportspræget, er dette nok ikke motorcyklen, da den hurtigt bliver triviel at køre på.\r\nMen set på den lyse side, er den så billig at man vil kunne udskifte den med noget større efter et par år, hvis det er det man ønsker.', '1443692059', 0, 3, 5),
(16, 'Vedligeholdelse før vinteren', 'Der er ingen tvivl om at vinteren er hård ved din motorcykel. Derfor er det en god idé at opbevare den indendørs - har du ikke den mulighed, tilbyder flere forhandlere opbevaring og pleje for et par hundrede kroner.\r\nForsikringsselskaberne tager ekstra høje priser for forsikring af mc i vintermånederne, så derfor er det en god idé at indlevere nummerpladen til dem.\r\nPleje før vinteren\r\nDet første du skal gøre er at sørge for at tanken er fyldt op med benzin, således tanken ikke ruster - Husk at benzin godt kan blive for gammel.\r\nDernæst skal du rengøre motorcyklen grundigt, og give sædet en gang læderfedt - har du kåbe på din motorcykel, må du ikke bruge ruderens eller sprit til at rengøre glasset, da dette hærdes og splintrer under styrt. Smør al gummi med noget gummipleje.\r\nSmør alle lejer med olie eller WD-40, og rens kæden med noget kæderens. Påfør kæden kædespray.\r\nMotoren skal også have en omgang!\r\nAllerførst skal du skifte olie og oliefilter, hvorefter du tager tændrørene ud, og rengøre disse med en stålbørste hvis de trænger til det.\r\nAfmonter batteriet, og påfyld destilleret vand (kan fås på tankstationer), hvis dette er nødvendigt.\r\nDu kan evt. tilslutte en pære til det for at aflade det, og så oplade det igen. Dette bør gøres en gang om måneden - husk at bruge en decideret mc-oplader.\r\nDet er endvidere en god idé at udføre eftersyn på bremser, kæde, og luftfilter...\r\nI gang til foråret\r\nSørg for at aftappe karburatoren for benzin via den lille aftapningsskrue der sidder i bunden. Hæld evt. lidt karburatorvæske i tanken, for at lette starten.\r\nSørg for at batteriet er fuldt opladet.\r\nPuds og polér motorcyklen og så er du klar til at gå foråret i møde.', '1441915423', 1, 3, 6);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `name_d` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `name_d`) VALUES
(1, 'cars', 'bil'),
(2, 'boats', 'båd'),
(3, 'bikes', 'bike'),
(4, 'all', 'alt');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `name` tinytext NOT NULL,
  `email` tinytext NOT NULL,
  `comment` tinytext NOT NULL,
  `time` varchar(20) NOT NULL,
  `article_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `name`, `email`, `comment`, `time`, `article_fk`) VALUES
(1, 'Torben Simonsen', 'torbensim@gmail.com', 'ipsum asmdnas asnasmkas s aksmaskmas ', '1454348240', 1),
(2, 'Victor Jensen', 'victorjensen@live.com', 'asjnanasnanasa sajsnansasaans sa sus a sa sa', '1454523614', 1),
(10, 'name', 'mail@mail.com', 'hello world 1', '1538528932', 1),
(13, 'asasasas', 'asasas@mail.com', 'asasasasas', '1538609223', 12),
(18, 'Michael Sigurd', 'asas@asass.com', 'asasas as a s', '1538958023', 1);

-- --------------------------------------------------------

--
-- Table structure for table `editor`
--

CREATE TABLE `editor` (
  `id` int(11) NOT NULL,
  `f_name` varchar(55) NOT NULL,
  `l_name` varchar(55) NOT NULL,
  `image` varchar(55) NOT NULL,
  `about` tinytext NOT NULL,
  `username` varchar(55) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(55) NOT NULL,
  `created` varchar(55) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `role_fk` int(11) NOT NULL,
  `category_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `editor`
--

INSERT INTO `editor` (`id`, `f_name`, `l_name`, `image`, `about`, `username`, `password`, `email`, `created`, `active`, `role_fk`, `category_fk`) VALUES
(1, 'Lise', 'Lissen', 'lil.jpg', 'Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.', 'lisel', '21232f297a57a5a743894a0e4a801fc3', 'lil@bbbmag.dk', '12573637', 1, 2, 1),
(2, 'Mikkel', 'Mikkelsen', 'mim.jpg', 'Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.', 'mikkelm', '21232f297a57a5a743894a0e4a801fc3', 'mim@bbbmag.dk', '193857189', 1, 2, 1),
(3, 'Jan', 'Jensen', 'jaj.JPG', 'Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.', 'janj', '21232f297a57a5a743894a0e4a801fc3', 'jaj@bbbmag.dk', '81828812', 1, 2, 2),
(4, 'Hans', 'Hansen', 'hah.jpg', 'Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.', 'hansh', '21232f297a57a5a743894a0e4a801fc3', 'hah@bbbmag.dk', '121312212', 1, 2, 2),
(5, 'Carl', 'Carlsen', 'cac.jpeg', 'Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.', 'carlc', '21232f297a57a5a743894a0e4a801fc3', 'cac@bbbmag.dk', '12381812', 1, 2, 3),
(6, 'Erik', 'Eriksen', 'ere.jpg', 'Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.', 'erike', '21232f297a57a5a743894a0e4a801fc3', 'ere@bbbmag.dk', '9375673881', 1, 2, 3),
(8, 'Gitte', 'Frederiksen', '', 'Administrator.', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@bbbmag.dk', '182757812', 1, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `login_token`
--

CREATE TABLE `login_token` (
  `id` int(11) NOT NULL,
  `token` varchar(32) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login_token`
--

INSERT INTO `login_token` (`id`, `token`, `user_id`) VALUES
(37, '9nyMv5uMstL5Ncg4ZQvONOxHsu5Lq58Z', 3),
(38, 'MqPOXLfiuTzxd1VYZoGDsfzownkHGZMW', 6),
(70, 'ke7i8nkepha0ORBMk6DSdJoLqqrGfSN0', 5),
(77, 'gmzIsEnjvVTdY1ct5qbsjfkXvo2VnMTS', 8),
(79, 'SLfQhJ9WtQfthkmFYaRNTsAJlRqeAPTd', 2),
(80, 'J61nBKVNkatgdVUMpCCDkZOLfptmHY68', 1);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `subject` varchar(55) NOT NULL,
  `message` tinytext NOT NULL,
  `time` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `name`, `email`, `subject`, `message`, `time`) VALUES
(1, 'name', 'mail@mail.com', 'subject', 'message', '1538593224'),
(2, 'name', 'mail@mail.com', 'subject', 'message', '1538593247'),
(3, 'name', 'mail@mail.com', 'ghghgh', 'dfdfdf', '1538593278');

-- --------------------------------------------------------

--
-- Table structure for table `navigation`
--

CREATE TABLE `navigation` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `icon` varchar(55) NOT NULL,
  `url` varchar(55) NOT NULL,
  `sorted` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `navigation`
--

INSERT INTO `navigation` (`id`, `name`, `icon`, `url`, `sorted`) VALUES
(1, 'FORSIDE', '<i class=\"fas fa-home\"></i>', '/', 1),
(2, 'BILER', '', '/cars', 2),
(3, 'BÅDE', '', '/boats', 3),
(4, 'BIKE\'S', '', '/bikes', 4),
(5, 'ARKIVET', '', '/archive', 5),
(6, 'KONTAKT', '', '/contact', 6),
(7, 'REDAKTIONEN', '', '/editors', 7);

-- --------------------------------------------------------

--
-- Table structure for table `news_letter`
--

CREATE TABLE `news_letter` (
  `id` int(11) NOT NULL,
  `email` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `type` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `type`) VALUES
(1, 'admin'),
(2, 'editor');

-- --------------------------------------------------------

--
-- Table structure for table `sponsors`
--

CREATE TABLE `sponsors` (
  `id` int(11) NOT NULL,
  `company` varchar(55) NOT NULL,
  `image` varchar(55) NOT NULL,
  `category_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sponsors`
--

INSERT INTO `sponsors` (`id`, `company`, `image`, `category_fk`) VALUES
(1, 'Harley Davidson', 'bike_ad_2.gif', 3),
(2, 'Ammotor', 'bike_ad_3.gif', 3),
(3, 'MC Bixen', 'bike_ad_4.gif', 3),
(4, 'Ehlers', 'bike_ad_5.gif', 3),
(5, 'Arai', 'bike_ad_6.gif', 3),
(6, 'Bilkredit', 'car_ad_1.gif', 1),
(7, 'Diba', 'car_ad_2.gif', 1),
(8, 'Alm. Brand', 'car_ad_3.gif', 1),
(9, 'GE', 'car_ad_4.gif', 1),
(10, 'Auto Index', 'car_ad_5.gif', 1),
(11, 'Ekspres Lån', 'boat_ad_1.gif', 2),
(12, 'Køge MC & Båd', 'boat_ad_2.gif', 2),
(13, 'Topdanmark', 'boat_ad_3.gif', 2),
(14, 'Pro-safe', 'boat_ad_4.gif', 2),
(15, 'Raymarine', 'boat_ad_5.gif', 2),
(16, 'Bluebay', 'boat_ad_6.gif', 2);

-- --------------------------------------------------------

--
-- Table structure for table `sponsor_about`
--

CREATE TABLE `sponsor_about` (
  `id` int(11) NOT NULL,
  `sponsor_about` text NOT NULL,
  `price_1` varchar(5) NOT NULL,
  `price_2` varchar(5) NOT NULL,
  `price_3` varchar(5) NOT NULL,
  `price_4` varchar(5) NOT NULL,
  `price_5` varchar(5) NOT NULL,
  `price_6` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sponsor_about`
--

INSERT INTO `sponsor_about` (`id`, `sponsor_about`, `price_1`, `price_2`, `price_3`, `price_4`, `price_5`, `price_6`) VALUES
(1, 'Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit.\r\n\r\nInteger posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.', '0.50', '0.47', '0.45', '0.40', '0.35', '0.30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_fk` (`category_fk`),
  ADD KEY `editor_fk` (`editor_fk`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `editor`
--
ALTER TABLE `editor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `role` (`role_fk`),
  ADD KEY `category_fk` (`category_fk`);

--
-- Indexes for table `login_token`
--
ALTER TABLE `login_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `navigation`
--
ALTER TABLE `navigation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news_letter`
--
ALTER TABLE `news_letter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `sponsors`
--
ALTER TABLE `sponsors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sponsor_about`
--
ALTER TABLE `sponsor_about`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `editor`
--
ALTER TABLE `editor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `login_token`
--
ALTER TABLE `login_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `navigation`
--
ALTER TABLE `navigation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `news_letter`
--
ALTER TABLE `news_letter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sponsors`
--
ALTER TABLE `sponsors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `sponsor_about`
--
ALTER TABLE `sponsor_about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`category_fk`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `article_ibfk_2` FOREIGN KEY (`editor_fk`) REFERENCES `editor` (`id`);

--
-- Constraints for table `editor`
--
ALTER TABLE `editor`
  ADD CONSTRAINT `editor_ibfk_1` FOREIGN KEY (`role_fk`) REFERENCES `role` (`id`),
  ADD CONSTRAINT `editor_ibfk_2` FOREIGN KEY (`category_fk`) REFERENCES `category` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
