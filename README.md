## Struktura aplikacji:

Na podstawową strukturę aplikacji składają się poniższe komponenty:<br/>
<br/>
-> App<br/>
-->Header<br/>
-->Filters<br/>
-->Data<br/>
--> Footer<br/>

Korzystają one z szeregu komponentów reużywalnych
-->Button<br/>
-->Dropdown<br/>
-->Row<br/>
-->Tile<br/>

## Opis komponentów:

<ins>1. App</ins> -  Komponent root'owy, stanowiący kontener dla wszystkich pozostałych. Są w nim zdefiniowane stany oraz pobierane dane biznesowe obsługiwane przez wszystkie pozostałe komponenty<br/>

<ins>2. Header</ins> - Komponent nagłówka. Zawiera pojedynczy tag z tytułem strony<br/>

<ins>3. Filters</ins> - Komponent, służący do filtrowania danych, które użytkownik ogląda na głównej stronie aplikacji. Zawiera w sobie komponenty: Input - umożliwiający ręczne wyszukiwanie danych w tabeli za pomocą imienia wyszukiwanej osoby, trzech komponentów Dropdown - umożliwiających filtrowanie wyników za pomocą wybranych pozycji oraz dwóch komponentów Button implementujących przyciski i obsługujących funkcje wykonywane po ich naciśnięciu

<ins>4. Data</ins> - Komponent tworzący tabelę z danymi pobieranymi z API. Została ona zbudowana w oparciu o CSS Grid. Wykorzystuje komponent reużywalny Row, stanowiący krotkę tabeli.<br/>

<ins>5. Footer</ins> - Stopka strony aplikacji. Wykorzystuje komponent Tile - "kafelek" umożliwiający przełączanie pomiędzy pobieranymi z API danymi<br/>
