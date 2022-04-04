[film](https://www.youtube.com/watch?v=64KGL3NBPzs&list=PLT7X0UTo8GN_nsAlEdVInoRkvE_pmLayP&index=2)

# Search + Dropdown = Wyszukiwarka stanów

### Linki:

- https://fusejs.io/
- https://bulma.io/documentation/
- https://github.com/CivilServiceUSA/us-states

## Opis projektu

- wyszukiwarka stanów w USA
- po wpisaniu frazy rozwija się dropdown z pasującymi wynikami
- wyszukiwanie fuzzy search za pomocą biblioteki `Fuse.js`
- sterowanie klawiaturą
- strona z informacjami na temat stanu
- można też wrócić i wyszukiwać dalej

DO DZIEŁA!

## Instalacja bundlera Parcel

- upewnij się, że masz zainstalowanego `node.js`
- w tym odcinku pokazuję jak to zrobic - [(instalacja node.js)](https://www.youtube.com/watch?v=fhw9SHtzAX0&feature=youtu.be)
- przejdź do terminala i wpisz `npm init -y`
- następnie `npm i -S parcel-bundler`
- utwórz katalog `src` a w nim plik `index.js`, zrób jakiś `hello world`
- utwórz plik `index.html` i wypełnij go treścią
- dodaj tag script do pliku js
- w pliku `package.json` dodaj `"start": "parcel src/index.html"`
- przejdź do terminala i uruchamiam serwer deweloperski `npm start`
- sprzewdź w przeglądarce czy wszystko ok

## Instalacja Reacta i Bulmy

- z Parcelem jest bardzo proste
- przejdź do pliku `index.js` i importuj co potrzebne, Parcel pobiera w tle
- dodaj jeszcze `div` z odpowiednim id do `index.html`
- zatrzymaj serwer
- Bulma: w terminalu wpisz `npm i -S bulma`
- zainportuj plik CSS

## Dropdown z inputem

- utwórz komponent `App.js` w katalogu `components`
- w [dokumentacji bulmy](https://bulma.io/documentation/) `Components/Dropdow`
- skopuj kod, ale zmień button na input
- input jest w sekcji `Form`
- pamiętaj o zmianie `class` na `className`

## Przygotowanie do wyszukiwania

- kontroluj wartość z inputa
- zapisz ją do stanu używając hooka `useState`

## Dane do przeszukiwania

- link do repo z [listą stanów coś na githubie](https://github.com/CivilServiceUSA/us-states)
- skopiuj dane z jsona do pliku `states.json`

## Instalacja Fuse.js

- filtruj listę po zmianie `query`, wykorzystaj hook `useEffect`
- w środku funkcji filtruj listę na podstawię `query`
- wtedy zapisz nową listę wyników
- utwórz stan stan takiej listy - useState
- do wyszukiwania uzyj [biblioteki fuse.js](https://fusejs.io/)
- przejdź do dokumentacji i sprawdź jak zainstalować i jak używać
- skopiuj kod do funkcji hooka `useEffect` i przerób do własnych potrzeb
- przefiltrowaną listę zapisz do stanu

## Renderowanie listy z wynikami

- weź zmienną `resultsList` i mapuj zamiast tych testowych optionów
- niestety musisz użyć tagu <a> bo inaczej klasa `is-active` nie będzie działać
- trzeba pamiętać o propsie `key`
- jako label ustawiaw nazwę stanu czyli klucz `state`
