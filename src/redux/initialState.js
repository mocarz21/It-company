const initialState ={
    topics:[
        {
            id: '1',
            title: 'Ms Excel',
            description: 'Szkolenia dla każdej osoby, której praca związana jest z arkuszami kalkulacyjnymi na wszystkich stopniach zaawansowania.',
            descryptionTwo:'Arkusz kalkulacyjny produkowany przez firmę Microsoft dla systemów Windows, macOS, iOS i Android. Pierwsza wersja programu przeznaczona dla systemu Windows trafiła na rynek w roku 1987 i stała się przebojem. Postępujący sukces rynkowy programu sprawił, że w roku 1993 programy pakietu Microsoft Office zostały przeprojektowane tak, by przypominać wyglądem arkusz Excel. Od wersji 5.0 wydanej w 1993 roku program zawiera wbudowany język Visual Basic. Od wersji 4.0 program dostępny jest w polskiej wersji językowej. Aplikacja jest powszechnie używana w firmach i instytucjach, a także przez użytkowników domowych. Jej główne zastosowanie to wykonywanie obliczeń (np. wydatków) zestawionych w formie tabelarycznej. W tym użyciu mają zastosowanie liczne funkcje matematyczne, finansowe i bazodanowe dostępne w programie. Istotne znaczenie ma też półautomatyczne powielanie tworzonych formuł z zastosowaniem różnych wariantów adresowania ' ,
            lvl:{
                podstawowy: 'aaa',
                sredniozawansowany: 'bbb',
                zawansowany: 'ccc'
            }
        },
        {
            id: '2',
            title: 'Ms Word',
            description: 'MS Word to zaawansowany edytor (a tak na prawdę procesor tekstu), z którego korzystamy na co dzień. Warto poznać to narzędzie dobrze.',
            descryptionTwo:'',
            lvl:{
                podstawowy: 'aaa',
                sredniozawansowany: 'bbb',
                zawansowany: 'ccc'
            }
        },
        { 
            id: '3',
            title: 'MS Acces' ,
            description: 'Access to system obsługi relacyjnych baz danych, wchodzący w skład pakietu MS Office. Pokazujemy jak tworzyć bazy danych i jak z nich korzystać',
            descryptionTwo:'',
            lvl:{
                podstawowy: 'aaa',
                sredniozawansowany: 'bbb',
                zawansowany: 'ccc'
            }
        },
        { 
            id: '4',
            title: 'MS PowerPoint',
            description: 'Prezentacja danych to istotna część raportowania. Dużo zależy od tego jak zaprezentujemy nasze dane i płynące z nich wnioski.',
            descryptionTwo:'',
            lvl:{
                podstawowy: 'aaa',
                sredniozawansowany: 'bbb'
            }
        },
        { 
            id: '5',
            title: 'MS Project',
            description: 'Tworzenie planu i bieżące śledzenie postępu prac to zadania, dla których stworzony został MS Project. Każdy project manager pwoinien znać to narzędzie.',
            descryptionTwo:'',
        },
        { 
            id:  '6',
            title: 'MS Outlook',
            description: 'Obsługa poczty elektronicznej to bardzo powszechne zajęcie. Program MS Outlook posiada mechanizmy umożliwiające automatyzację tego zajęcia.',
            descryptionTwo:'',
        },
        { 
            id: '7',
            title: 'Narzędzia Google',
            description: 'Duże możliwości, nawet w bezpłatnej wersji, jakie dają narzędzia firmy Google np. Google Docs czy Gmail, to tematy nad którym warto się pochylić.',
            descryptionTwo:'',
        },
        { 
            id: '8',
            title: 'Libre/Open Office',
            description: 'Darmowe pakiety biurowe to alternatywa dla MS Office. Warto poznać te narzędzia choćby po to, aby wiedzieć jak wymieniać pomiędzy nimi dokumenty.',
            descryptionTwo:'',
        },
        { 
            id: '9',
            title: 'AutoCad',
            description: 'Szkolenie AutoCAD Podstawy zorientowany jest na naukę krok po kroku – od podstaw związanych z rysowaniem elementarnych obiektów jak linie, prostokąty czy okręgi po coraz bardziej zaawansowane zagadnienia.',
            descryptionTwo:'',
            lvl:{
                podstawowy: 'aaa',
                zawansowany: 'ccc'
            }
        },
        { 
            id: '10',
            title: 'Podstawy obsługi komputera',
            description: 'Spokojnie i rzeczowo pokażemy, wytłumaczymy i nauczymy korzystania z komputera, laptopa, tabletu czy smartfona każdą chętną osobę.',
            descryptionTwo:'',
        },
        { 
            id: '11',
            title: 'Power Bi',
            description: ' Zbiorcza nazwa dla szeregu aplikacji i usług klasy Business Intelligence stworzonych przez Microsoft, w znacznej mierze opartych na chmurze obliczeniowej, które pomagają organizacjom gromadzić, zarządzać, przetwarzać i analizować dane',
            descryptionTwo:'',
        },
        { 
            id: '12',
            title: 'Tworzenie stron internetowych',
            description: 'Jasne i proste wprowadzenie do najważniejszej technologii tworzenia stron.',
            descryptionTwo:'',
        },
        { 
            id: '13',
            title: 'Photoshop/Gimp',
            description: 'Naucz się obróbki zdjęć, tworzenia materiałów graficznych i podstaw cyfrowego malowania.',
            descryptionTwo:'',
        },
        { 
            id: '14',
            title: 'TIK w dydaktyce',
            description: 'Nowoczesne metody dydaktyczne, posiłkujące się treściami i narzędziami cyfrowymi, wspomagają nauczanie przez nauczyciela i uczenie się przez ucznia, nadając temu procesowi bardziej interaktywny, dynamiczny i dostosowany do współczesnej percepcji ucznia charakter, niż metody tradycyjnej szkoły.',
            descryptionTwo:'',
        },
        { 
            id: '15',
            title: 'Edukacja zdalna',
            description: 'Kurs został stworzony z myślą o wszystkich nauczycielach, którzy chcą usprawnić nauczanie przez internet.',
            descryptionTwo:'',
        },
    ]
}

export default initialState;