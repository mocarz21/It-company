

const db ={
  topics:[
      {
          id: '1',
          title: 'Ms Excel',
          description: 'Szkolenia dla każdej osoby, której praca związana jest z arkuszami kalkulacyjnymi na wszystkich stopniach zaawansowania.',
          descryptionTwo:'Arkusz kalkulacyjny produkowany przez firmę Microsoft dla systemów Windows, macOS, iOS i Android. Pierwsza wersja programu przeznaczona dla systemu Windows trafiła na rynek w roku 1987 i stała się przebojem. Postępujący sukces rynkowy programu sprawił, że w roku 1993 programy pakietu Microsoft Office zostały przeprojektowane tak, by przypominać wyglądem arkusz Excel. Od wersji 5.0 wydanej w 1993 roku program zawiera wbudowany język Visual Basic. Od wersji 4.0 program dostępny jest w polskiej wersji językowej. Aplikacja jest powszechnie używana w firmach i instytucjach, a także przez użytkowników domowych. Jej główne zastosowanie to wykonywanie obliczeń (np. wydatków) zestawionych w formie tabelarycznej. W tym użyciu mają zastosowanie liczne funkcje matematyczne, finansowe i bazodanowe dostępne w programie. Istotne znaczenie ma też półautomatyczne powielanie tworzonych formuł z zastosowaniem różnych wariantów adresowania ' ,
          lvl:{
              podstawowy: [
                  'Wprowadzenie do programu MS Excel',
                  'Tworzenie i edycja arkuszy kalkulacyjnych',
                  'Formatowanie komórek i arkuszy',
                  'Podstawowe funkcje matematyczne i logiczne',
                  'Odwołanie bezwzględne'],
              sredniozawansowany: [
                  'Tworzenie i edycja wykresów',
                  'Tabele przestawne i analiza danych',
                  'Złożone formuły i funkcje',
                  'Import i eksport danych',
                  'Automatyczne formatowanie warunkowe'],
              zawansowany: [
                  'Makro i automatyzacja zadań',
                  'Zabezpieczanie i udostępnianie arkuszy',
                  'Tworzenie tabel dynamicznych',
                  'Wykorzystanie formuł i funkcji zaawansowanych',
              ]
          }
      },
      {
          id: '2',
          title: 'Ms Word',
          description: 'MS Word to zaawansowany edytor (a tak na prawdę procesor tekstu), z którego korzystamy na co dzień. Warto poznać to narzędzie dobrze.',
          descryptionTwo:'Microsoft Word to popularny program do tworzenia i edycji dokumentów tekstowych. Można w nim tworzyć i formatować tekst, dodawać obrazy, tabele, listy i inne elementy. Word oferuje szeroki wachlarz narzędzi do korekty gramatycznej i pisowni, a także funkcje do współpracy i udostępniania dokumentów z innymi osobami. Jest często używany w biurach, szkołach i do celów prywatnych.',
          lvl:{
              podstawowy: [    
                  'Wprowadzenie do interfejsu i funkcji podstawowych',
                  'Tworzenie i formatowanie dokumentu',
                  'Korzystanie z narzędzi do korekty gramatycznej i pisowni',
                  'Zapisywanie i udostępnianie dokumentów'
              ],
              sredniozawansowany: [    
                  'Dodawanie i formatowanie tabel, obrazów i innych elementów graficznych',
                  'Tworzenie i edycji szablonów',
                  'Korzystanie z narzędzi do współpracy i komentowania dokumentów',
                  'Zapisywanie dokumentów w różnych formatach i konwertowanie ich na inne formaty'
              ],
              zawansowany: [
                  'Korzystanie z makr i narzędzi programistycznych do automatyzacji czynności',
                  'Integracja z innymi programami i usługami, takimi jak Excel i OneDrive',
                  'Tworzenie i edycja formularzy i dokumentów w językach programowania',
                  'Optymalizacja i automatyzacja pracy z dużymi i złożonymi dokumentami'
              ]
          }
      },
      { 
          id: '3',
          title: 'MS Acces' ,
          description: 'Access to system obsługi relacyjnych baz danych, wchodzący w skład pakietu MS Office. Pokazujemy jak tworzyć bazy danych i jak z nich korzystać',
          descryptionTwo:'Microsoft Access to relacyjny system zarządzania bazami danych (RDBMS) opracowany przez Microsoft Corporation. Jest to część suite Office i umożliwia tworzenie, modyfikowanie i zarządzanie bazami danych z poziomu interfejsu graficznego użytkownika (GUI). Access oferuje łatwe w użyciu narzędzia do tworzenia formularzy, raportów i kwerend, a także integrację z innymi aplikacjami Microsoftu, takimi jak Excel i Outlook. Access jest popularny wśród użytkowników biznesowych, którzy potrzebują narzędzia do tworzenia i przechowywania baz danych.',
          lvl:{
              podstawowy: [    
                  'Wprowadzenie do Microsoft Access',
                  'Tworzenie bazy danych i tabel',
                  'Import i eksport danych',
                  'Proste operacje na bazie danych (np. wyszukiwanie, sortowanie, filtrowanie)',
                  'Tworzenie formularzy i raportów'
              ],
              sredniozawansowany: [    
                  'Złożone operacje na bazie danych (np. kwerendy, agregacje, grupowanie)',
                  'Zastosowanie funkcji i formuł',
                  'Integracja z innymi aplikacjami Microsoft'
              ],
              zawansowany: [
                  'Tworzenie i wykorzystywanie baz danych wielu użytkowników',
                  'Zabezpieczanie bazy danych',
                  'Analiza i optymalizacja wydajności',
                  'Projektowanie i tworzenie aplikacji Access',
              ]
          }
      },
      { 
          id: '4',
          title: 'MS PowerPoint',
          description: 'Prezentacja danych to istotna część raportowania. Dużo zależy od tego jak zaprezentujemy nasze dane i płynące z nich wnioski.',
          descryptionTwo:'Microsoft PowerPoint to program do tworzenia i prezentowania slajdów multimedialnych. Pozwala na łatwe tworzenie i edycję prezentacji, dodawanie tekstu, obrazów, tabel, wykresów, dźwięku i wideo. Umożliwia także współpracę i udostępnianie prezentacji z innymi osobami. Program oferuje szeroką gamę szablonów i motywów do wyboru, a także narzędzia do animacji i efektów wizualnych. PowerPoint jest często używany w biznesie, edukacji i na uroczystościach.',
          lvl:{
              podstawowy:[
                  'Wprowadzenie do interfejsu i funkcji programu',
                  'Tworzenie i formatowanie slajdów',
                  'Dodawanie tekstu, obrazów i innych elementów graficznych',
                  'Korzystanie z narzędzi do animacji i efektów wizualnych',
                  'Zapisywanie i udostępnianie prezentacji',
              ],
              zawansowany: [
                  'Korzystanie z makr i narzędzi programistycznych do automatyzacji czynności',
                  'Tworzenie i edycja szablonów i motywów',
                  'Integracja z innymi programami i usługami, takimi jak Excel i OneDrive',
                  'Korzystanie z narzędzi do współpracy i komentowania prezentacji',
                  'Optymalizacja i automatyzacja pracy z dużymi i złożonymi prezentacjami.'
              ]
          }
      },
      { 
          id: '5',
          title: 'MS Project',
          description: 'Tworzenie planu i bieżące śledzenie postępu prac to zadania, dla których stworzony został MS Project. Każdy project manager pwoinien znać to narzędzie.',
          descryptionTwo:'Microsoft Project to program komputerowy służący do planowania, realizacji i monitorowania projektów. Program pozwala tworzyć harmonogramy projektów, wyznaczać i śledzić terminy ważnych zadań, alokować zasoby i monitorować postęp projektu. Microsoft Project umożliwia także tworzenie i analizę różnych scenariuszy, integrację z innymi programami i usługami, takimi jak Excel i SharePoint, a także umożliwia współpracę w zespołach projektowych. Program jest szczególnie przydatny dla managerów projektów, kierowników i specjalistów zarządzania projektami, którzy potrzebują skutecznego narzędzia do zarządzania swoimi projektami.',
          lvl:{
              podstawowy:[
              'Wprowadzenie do interfejsu i funkcji programu',
              'Tworzenie i definiowanie zadań w projekcie',
              'Określanie zależności między zadaniami i harmonogramowanie projektu',
              'Określanie i alokowanie zasobów do zadań',
              'Wprowadzanie i monitorowanie postępu projektu'
              ],
              zawansowany:[
                  'Korzystanie z narzędzi do analizy i raportowania postępu projektu',
                  'Integracja z innymi programami i usługami, takimi jak Excel i SharePoint',
                  'Tworzenie i używanie wielu scenariuszy do symulacji różnych opcji projektu',
                  'Korzystanie z narzędzi do współpracy i komunikacji w zespołach projektowych',
                  'Optymalizacja i automatyzacja procesów zarządzania projektami'
              ]
          }
      },
      { 
          id:  '6',
          title: 'MS Outlook',
          description: 'Obsługa poczty elektronicznej to bardzo powszechne zajęcie. Outlook posiada mechanizmy umożliwiające automatyzację tego zajęcia.',
          descryptionTwo:'Microsoft Outlook to program komputerowy służący do zarządzania komunikacją elektroniczną i kalendarzem. Program zawiera funkcje e-mail, kontaktów, kalendarza, notatek i zadań. Outlook umożliwia łatwe przeglądanie, odbieranie i wysyłanie wiadomości e-mail, a także tworzenie i zarządzanie kalendarzem i kontaktami. Program pozwala także tworzyć i używać reguł automatycznego przetwarzania wiadomości e-mail, współpracować z innymi użytkownikami i integrować się z innymi programami i usługami, takimi jak OneDrive i SharePoint. Outlook jest popularnym i elastycznym narzędziem do zarządzania komunikacją elektroniczną, które pomaga użytkownikom w skutecznej i efektywnej organizacji swoich komunikacji.',
          lvl:{
              podstawowy:[
                  'Wprowadzenie do interfejsu i funkcji programu',
                  'Tworzenie i zarządzanie kontami e-mail i kalendarzem',
                  'Kompozycja i wysyłanie wiadomości e-mail',
                  'Odbieranie i przeglądanie wiadomości e-mail',
                  'Tworzenie i zarządzanie kontaktami',
                  'Korzystanie z funkcji wyszukiwania i filtrowania wiadomości e-mail',
                  'Ustawianie reguł automatycznego przetwarzania wiadomości e-mail',
                  'Integracja z innymi programami i usługami, takimi jak OneDrive i SharePoint',
                  'Tworzenie i używanie szablonów wiadomości e-mail',
                  'Korzystanie z funkcji delegowania i współpracy z innymi użytkownikami'

              ]
          }
      },
      { 
          id: '7',
          title: 'Narzędzia Google',
          description: 'Duże możliwości, nawet w bezpłatnej wersji, jakie dają narzędzia firmy Google np. Google Docs czy Gmail, to tematy nad którym warto się pochylić.',
          descryptionTwo:'Narzędzia Google to zestaw bezpłatnych i płatnych aplikacji i usług oferowanych przez Google. Zawierają one narzędzia do pracy i produktywności, takie jak Google Docs, Google Sheets i Google Slides, a także narzędzia do komunikacji i współpracy, takie jak Gmail i Google Meet. Narzędzia Google zapewniają wiele funkcji i narzędzi do zarządzania i udostępniania informacji, takich jak Google Drive, Google Calendar i Google Keep. Oprócz tego, narzędzia Google oferują także narzędzia do marketingu i reklamy, takie jak Google AdWords i Google Analytics, a także narzędzia do map i lokalizacji, takie jak Google Maps. W sumie, narzędzia Google to zintegrowane i wszechstronne rozwiązanie dla wielu potrzeb biznesowych i osobistych.',
          lvl:{
              podstawowy:[
                  'Rejestracja i logowanie w kontach Google',
                  'Wprowadzenie do interfejsu i nawigacji w narzędziach Google',
                  'Zalety i wady korzystania z narzędzi Google',
                  'Wprowadzenie do Google Docs, Google Sheets i Google Slides',
                  'Tworzenie i współdzielenie dokumentów i arkuszy',
                  'Wprowadzenie do funkcji edycji i kolaboracji w czasie rzeczywistym',
                  'Wprowadzenie do Gmail i Google Meet',
                  'Tworzenie i zarządzanie kontami e-mail i spotkaniami online',
                  'Współdzielenie plików i dokumentów z innymi użytkownikami',
                  'Integracja z innymi narzędziami Google, takimi jak Google Calendar i Google Drive.'
                  
              ]
          }
      },
      { 
          id: '8',
          title: 'Libre,Open Office',
          description: 'Darmowe pakiety biurowe to alternatywa dla MS Office. Warto poznać te narzędzia choćby po to, aby wiedzieć jak wymieniać pomiędzy nimi dokumenty.',
          descryptionTwo:'LibreOffice i OpenOffice to darmowe i otwarte oprogramowanie biurowe, które oferuje funkcje podobne do Microsoft Office. Oba narzędzia zawierają aplikacje do pracy z tekstem, arkuszami kalkulacyjnymi, prezentacjami, bazami danych i ilustracjami. LibreOffice i OpenOffice są dostępne na wiele platform, w tym Windows, macOS i Linux, i umożliwiają otwieranie i edytowanie plików Microsoft Office.',
          lvl:{
              podstawowy:[
                  'Tworzenie i formatowanie dokumentów tekstowych w Writerze',
                  'Tworzenie i obliczanie w arkuszach kalkulacyjnych w Calc',
                  'Tworzenie i prezentacja slajdów w Impress',
                  'Tworzenie i zarządzanie bazami danych w Base'

              ],
              zawansowany:[
                  'Współpraca z plikami Microsoft Office',
                  'Tworzenie i wykorzystywanie szablonów',
                  'Automatyzacja procesów z wykorzystaniem makr',
                  'Łączenie danych z różnych źródeł i tworzenie raportów'
              ]
          }    
      },
      { 
          id: '9',
          title: 'AutoCad',
          description: 'Szkolenie zorientowane jest na naukę od podstaw związanych z rysowaniem prostych obiektów po coraz bardziej zaawansowane zagadnienia.',
          descryptionTwo:'Autocad to oprogramowanie do projektowania i wizualizacji w 2D i 3D, które jest szeroko stosowane w branżach architektonicznej, budowlanej, inżynieryjnej i przemysłowej. Z jego pomocą projektanci, inżynierowie i architekci tworzą dokładne i precyzyjne projekty, rysunki i modele 3D. Autocad oferuje narzędzia do tworzenia i edycji szczegółowych projektów, takich jak linie, figury i teksty, a także narzędzia do tworzenia bibliotek symboli i wzorców. Oprogramowanie umożliwia również import i eksport danych z innych formatów plików, takich jak PDF, DWG i DXF.',
          lvl:{
              podstawowy: [
                  'Wprowadzenie do oprogramowania i jego funkcji',
                  'Konfiguracja środowiska pracy i interfejsu użytkownika',
                  'Tworzenie i edycja projektów 2D'
              ],
              zawansowany: [
                  'Techniki pracy',
                  'Tworzenie i zarządzanie bibliotek symboli i wzorców',
                  'Import i eksport danych z innych formatów',
                  'Współpraca i udostępnianie projektów z innymi użytkownikami',
              ],
              _3d_:[
                  'Wprowadzenie do technik i narzędzi modelowania 3D',
                  'Konfiguracja środowiska pracy i interfejsu użytkownika',
                  'Tworzenie i edycja prostej geometrii 3D',
                  'Tworzenie bardziej złożonych modeli 3D',
                  'Zastosowanie tekstur i materiałów',
                  'Oświetlenie i rendering'
              ]

          }
      },
      { 
          id: '10',
          title: 'Podstawy obsługi komputera',
          description: 'Spokojnie i rzeczowo pokażemy, wytłumaczymy i nauczymy korzystania z komputera, laptopa, tabletu czy smartfona każdą chętną osobę.',
          descryptionTwo:'Podstawy obsługi komputera to zestaw umiejętności i wiedzy potrzebnych do prawidłowego korzystania z komputera i oprogramowania',
          lvl:{
              podstawowy:[
                  'Obsługa systemu operacyjnego, takiego jak Windows, macOS lub Linux',
                  'Podstawy pracy z dokumentami i plikami, w tym tworzenie, edycja i zapisywanie.',
                  'Korzystanie z pakietu biurowego, takiego jak Microsoft Office lub LibreOffice.',
                  'Przeglądanie sieci Web i korzystanie z wyszukiwarek internetowych.',
                  'Bezpieczeństwo i ochrona danych, w tym korzystanie z oprogramowania antywirusowego i zabezpieczania plików.',
                  'Konserwacja i naprawa komputera, w tym instalacja i aktualizacja oprogramowania.'
              ]
          }
      },
      { 
          id: '11',
          title: 'Power Bi',
          description: 'Nazwa dla szeregu aplikacji i usług klasy Business Intelligence stworzonych przez Microsoft, w znacznej mierze opartych na chmurze obliczeniowej',
          descryptionTwo:'Power BI to narzędzie do tworzenia i udostępniania interaktywnych raportów i wizualizacji danych, opracowane przez Microsoft. Może ono integrować dane z wielu źródeł, w tym arkuszy kalkulacyjnych, baz danych i usług w chmurze, i umożliwia ich prezentację w formie estetycznych i łatwych do interpretacji wizualizacji danych.',
          lvl:{
              podstawowy:[
                  'Łączenie danych z wielu źródeł w jednym miejscu.',
                  'Tworzenie interaktywnych wizualizacji i raportów, w tym wykresów, map i tabel.',
                  'Udostępnianie raportów i wizualizacji zespołowi i klientom.',
                  'Współdzielenie raportów i wizualizacji na urządzeniach mobilnych.',
                  'Automatyczne aktualizowanie danych w czasie rzeczywistym.'
                  
              ]
          }
      },
      { 
          id: '12',
          title: 'Tworzenie stron internetowych',
          description: 'Jasne i proste wprowadzenie do najważniejszej technologii tworzenia stron - Opanuj od podstaw tworzenie stron z użyciem HTML, CSS oraz JS.',
          descryptionTwo:'Front-end to część tworzenia stron internetowych, która odpowiada za wygląd i interaktywność strony. W front-endzie używa się języków takich jak HTML, CSS i JavaScript, aby stworzyć interfejs użytkownika strony internetowej, który jest widoczny dla odwiedzających stronę.Przy tworzeniu strony internetowej, programiści front-end korzystają z narzędzi takich jak narzędzia do tworzenia szablonów i frameworki, takie jak Bootstrap i React, aby ułatwić i usprawnić proces tworzenia.Celem front-endu jest stworzenie atrakcyjnego i funkcjonalnego interfejsu użytkownika, który jest łatwy w nawigacji i umożliwia odwiedzającym łatwe i przyjemne doświadczenie na stronie internetowej.',
          lvl:{
              podstawowy:[
                  'HTML',
                  'CSS',
                  'JS'
                  
              ]
          }
      },
      { 
          id: '13',
          title: 'Photoshop, Gimp',
          description: 'Program graficzny przeznaczony do tworzenia i obróbki grafiki rastrowej - Naucz się obróbki zdjęć, tworzenia materiałów graficznych.',
          descryptionTwo:'Photoshop to profesjonalne narzędzie do obróbki graficznej, stworzone przez firmę Adobe. Umożliwia ono tworzenie i edycję zdjęć, ilustracji i grafiki. Ma bogaty zestaw narzędzi do retuszu i modyfikacji zdjęć, takich jak narzędzia do korekty koloru i kontrastu, narzędzia do usuwania plam i narzędzia do tworzenia warstw i masek. GIMP to darmowa i otwarta alternatywa dla programu Photoshop. Ma wiele podobnych narzędzi i funkcji, takich jak narzędzia do retuszu i modyfikacji zdjęć, narzędzia do korekty koloru i kontrastu i narzędzia do tworzenia warstw i masek. Jest popularny wśród osób, które potrzebują narzędzia do obróbki zdjęć, ale nie chcą wydawać pieniędzy na profesjonalne oprogramowanie. Oba narzędzia są wysoce funkcjonalne i przydatne dla osób zajmujących się obróbką zdjęć, projektowaniem graficznym i innymi zastosowaniami wymagającymi wysokiej jakości obróbki graficznej. W zależności od wymagań i preferencji, można wybrać odpowiednie narzędzie.',
          lvl:{
              podstawowy:[
                  'Wprowadzenie do GIMP lub Photoshop, ich funkcji i narzędzi',
                  'Podstawy retuszu zdjęć i korekty koloru',
                  'Tworzenie warstw i masek',
                  'Edycja i retusz zdjęć'
              ],
              sredniozawansowany:[
                  'Zastosowanie filtrów i efektów specjalnych',
                  'Tworzenie grafik i ilustracji',
                  'Zastosowanie narzędzi do tworzenia i modyfikacji tekstu',
                  'Kompozycja i montaż zdjęć'
              ],
              zawansowany:[
                  'Techniki tworzenia i edycji warstw i masek',
                  'Zastosowanie narzędzi do korekty perspektywy i zniekształceń',
                  'Zastosowanie narzędzi do tworzenia panoram i zdjęć 360 stopni',
                  'Tworzenie animacji i wideo w Photoshopie',
              ]
          }
      },
      { 
          id: '14',
          title: 'TIK w dydaktyce',
          description: 'Metody dydaktyczne, posiłkujące się treściami i narzędziami cyfrowymi, wspomagają nauczanie przez nauczyciela i uczenie się przez ucznia.',
          descryptionTwo:'ICT (Information and Communication Technologies) w dydaktyce to wykorzystanie technologii informacyjnej i komunikacyjnej w procesie nauczania i uczenia się. ICT wspiera i uzupełnia tradycyjne metody nauczania, umożliwiając nauczycielom i uczniom dostęp do szerokiej gamy zasobów i narzędzi edukacyjnych, takich jak: Platformy e-learningowe: umożliwiają nauczycielom tworzenie i dostarczanie materiałów dydaktycznych, a uczniom uzyskanie dostępu do nich i współpracę z innymi uczniami i nauczycielami w czasie rzeczywistym. Narzędzia komunikacyjne: takie jak e-maile, czaty, fora dyskusyjne itp., umożliwiają nie tylko komunikację między nauczycielami i uczniami, ale także współpracę i wymianę wiedzy i doświadczeń między nimi. Gry edukacyjne i symulatory: wspierają proces uczenia się poprzez zabawę i interaktywne doświadczenie. Multimedia i filmy edukacyjne: umożliwiają wizualne przedstawienie trudnych pojęć i koncepcji, co ułatwia ich zrozumienie. Narzędzia analityczne i służące do tworzenia raportów: pozwalają nauczycielom monitorować postępy uczniów',
          lvl:{
              podstawowy:[
                  'Wprowadzenie do ICT w dydaktyce: omówienie znaczenia i korzyści wynikających z wykorzystania technologii informacyjno-komunikacyjnych w procesie nauczania.',

                  'Narzędzia ICT w dydaktyce: omówienie popularnych narzędzi ICT, takich jak: programy do tworzenia prezentacji, narzędzia do tworzenia scenariuszy lekcji, programy do nauczania języków obcych, itp.',
              
                  'Tworzenie materiałów edukacyjnych z wykorzystaniem ICT: pokazanie, jak wykorzystać narzędzia ICT do tworzenia atrakcyjnych i skutecznych materiałów edukacyjnych, takich jak: prezentacje multimedialne, gry edukacyjne, filmy instruktażowe, itp.',
              
                  'Wykorzystanie ICT w procesie nauczania: omówienie, jak wykorzystać narzędzia ICT do realizacji celów edukacyjnych, np. do wspierania rozwoju umiejętności językowych, do ćwiczenia umiejętności matematycznych, itp.',
              
                  'Bezpieczeństwo i etyka w wykorzystaniu ICT w dydaktyce: omówienie zagadnień dotyczących bezpieczeństwa i etyki w wykorzystaniu technologii informacyjno-komunikacyjnych w procesie nauczania, np. zasady bezpieczeństwa danych, zasady dotyczące wykorzystywania zasobów internetowych, itp.',
              
                  'Ćwiczenia praktyczne: uczestnicy będą mieli okazję wykorzystać zdobyte wiedzę i umiejętności do tworzenia własnych materiałów edukacyjnych oraz do przeprowadzenia lekcji z wykorzystaniem ICT.',
              ]
          }
      },
      { 
          id: '15',
          title: 'Edukacja zdalna',
          description: 'Kurs został stworzony z myślą o wszystkich nauczycielach, którzy chcą usprawnić nauczanie przez internet.',
          descryptionTwo:'Praca zdalna to model pracy, w którym pracownik wykonuje swoje obowiązki poza miejscem zatrudnienia, zwykle za pomocą komputera i internetu. Może to być stałe lub okazjonalne rozwiązanie, które pozwala pracownikom na elastyczność w organizacji swojego czasu pracy i życia prywatnego.',
          lvl:{
              podstawowy:[
                  'Różnice między nauczaniem stacjonarnym a zdalnym',
                  'Platformy e-learningowe i ich funkcje',
                  'Narzędzia do prowadzenia lekcji online (np. komunikatory, narzędzia do współdzielenia ekranu)',
                  'Metody i techniki nauczania w środowisku online',
                  'Zasady prowadzenia skutecznych lekcji online',
                  'Radzenie sobie z trudnościami wynikającymi z edukacji zdalnej (np. brak bezpośredniego kontaktu z uczniami)',
                 ' Sposoby oceny postępów uczniów w nauce na odległość',
                  'Weryfikacja efektywności nauczania zdalnego',
                  
              ],
              Przykładowe_narzędzia:[
                  'Google Classroom - bezpłatna platforma e-learningowa oferowana przez Google.',
                  'Microsoft Teams - bezpłatna platforma komunikacyjna i kooperacyjna, która umożliwia prowadzenie lekcji online oraz współpracę z uczniami.',
                 ' Jitsi Meet - darmowe oprogramowanie do prowadzenia wideokonferencji, które można wykorzystać do prowadzenia lekcji online.',
                  'Padlet - bezpłatna platforma do tworzenia tablic wirtualnych, która może być użyta do udostępniania materiałów i zadań dla uczniów.',
                  'Kahoot! - bezpłatna platforma do tworzenia gier i quizów, która może być użyta do oceny postępów uczniów w nauce.',
                  'Google Forms - bezpłatne narzędzie do tworzenia ankiet i formularzy, które można wykorzystać do ewaluacji nauczania zdalnego.',
                  'Edmodo - bezpłatna platforma e-learningowa, która umożliwia tworzenie i prowadzenie lekcji online, a także współpracę z uczniami.',
                  'Moodle - darmowa platforma e-learningowa, która umożliwia tworzenie i prowadzenie kursów online.',
                  'Canvas - bezpłatna platforma e-learningowa, która umożliwia tworzenie i prowadzenie lekcji online oraz współpracę z uczniami.',
                  'Slido - bezpłatne narzędzie do tworzenia ankiet i sond, które można wykorzystać do ewaluacji nauczania zdalnego.',
                  'screencast-o-matic - darmowe oprogramowanie do nagrywania i publikowania filmów ekranowych, które można wykorzystać do udostępniania materiałów dla uczniów.',
                  'Coursera - platforma e-learningowa, na której można znaleźć darmowe i płatne kursy od topowych uczelni i instytucji na całym świecie.',
                  'Codecademy - platforma e-learningowa, na której można nauczyć się programowania i innych umiejętności technicznych.',
                  'Zoom - platforma do prowadzenia wideokonferencji i webinariów, która oferuje bezpłatne i płatne opcje.',
                 'Skype for Business - platforma do prowadzenia wideokonferencji i komunikacji głosowej, która jest częścią pakietu Office 365.',
                  'GoToMeeting - platforma do prowadzenia wideokonferencji i webinariów, która oferuje bezpłatne i płatne opcje.',
                  'Webex - platforma do prowadzenia wideokonferencji, webinariów i spotkań online, która oferuje bezpłatne i płatne opcje.',
                  'BigBlueButton - darmowa platforma do prowadzenia wideokonferencji i webinariów, która jest przeznaczona specjalnie dla szkół i uczelni.',
                  'Blackboard Collaborate - platforma do prowadzenia wideokonferencji i webinariów, która jest częścią pakietu Blackboard.',
                  'Nearpod - platforma do tworzenia i prowadzenia interaktywnych prezentacji, która oferuje bezpłatne i płatne opcje.',
                  'Quizlet - platforma do tworzenia i udostępniania fiszek i quizów, która oferuje bezpłatne i płatne opcje.',
                  'Flipgrid - platforma do tworzenia i prowadzenia dyskusji wideo, która oferuje bezpłatne i płatne opcje.',
                  'Duolingo - platforma do nauki języków obcych, która jest darmowa i łatwa w użyciu.',
                  'Grammarly - narzędzie do sprawdzania pisowni i gramatyki, które oferuje bezpłatne i płatne opcje.',
                  'Desmos - bezpłatna platforma do nauki matematyki, która umożliwia tworzenie interaktywnych wykresów i symulacji.',
                  'GeoGebra - bezpłatna platforma do nauki matematyki i geometrii, która umożliwia tworzenie interaktywnych wykresów i symulacji.',
                  'Mathway - platforma do rozwiązywania zadań matematycznych, która oferuje bezpłatne i płatne opcje.',
                  'Khan Academy - bezpłatna platforma do nauki matematyki i innych przedmiotów, która oferuje lekcje wideo i ćwiczenia.',
                  'Photomath - aplikacja do rozwiązywania zadań matematycznych, która umożliwia rozwiązanie zadania za pomocą zdjęcia.',
                  'MyMathLab - platforma do nauki matematyki, która jest częścią pakietu Pearson'

              ]
          }
      },
  ],
  osoby:[
    {
      id:'123',
      name:'Jan',
      companyName:'Golden aye',
      email:'asdfghuja@wp.pl',
      phone: '333 222 111',
      message: 'proszę o kontakt',
    }
  ]

}




  module.exports = db;