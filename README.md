# Napredno programiranje web aplikacija

Rješenja laboratorijskih vježbi, organizirana u mape `lab1`, `lab2` i `lab3`.

## Pregled

| Lab | Sadržaj | Stanje |
| --- | --- | --- |
| `lab1` | JavaScript zadaci u zasebnim `.js` datotekama | Spremljeni zadaci 1–7 |
| `lab2` | JavaScript zadaci u zasebnim `.js` datotekama | Spremljeni zadaci 1–8 i 15–17; zadaci 9–14 nisu dodani |
| `lab3` | React aplikacija s povezanim padajućim izbornicima | Riješen zadatak 1; zadatak 2 radit će se naknadno |

## Preduvjeti

Potreban je Node.js s npm-om. Za dohvat podataka u labu 3 potrebna je internetska veza.

## Pokretanje labova 1 i 2

Iz korijenske mape projekta pokrenuti željenu datoteku, primjerice:

```powershell
node lab1/zadatak1.js
node lab2/zadatak1.js
```

Za druge zadatke promijeniti broj u nazivu datoteke.

## Lab 3 — zadatak 1

Aplikacija koristi React, Parcel, funkcijske komponente te hookove `useState` i `useEffect`. Struktura i stil koda prilagođeni su primjeru profesorice `FunctionComponentHooks`.

Prvi izbornik služi za odabir kategorije, a drugi prikazuje proizvode odabrane kategorije. Promjena proizvoda ne mijenja kategoriju. Pri promjeni kategorije prethodna lista i odabir proizvoda se prazne te se dohvaćaju novi proizvodi.

- `useEffect` s `[]` dohvaća kategorije pri prvom prikazu.
- `useEffect` s `[category]` dohvaća proizvode pri prvom prikazu i nakon promjene kategorije.

Podaci se dohvaćaju s javnog mock API-ja DummyJSON:

- Kategorije: `https://dummyjson.com/products/category-list`
- Proizvodi: `https://dummyjson.com/products/category/{category}?limit=0`

Lokalni mock server nije potreban.

### Pokretanje

Iz korijenske mape projekta:

```powershell
cd lab3
npm.cmd install
npm.cmd run dev
```

Otvoriti adresu koju ispiše Parcel (obično `http://localhost:1234`). Terminal ostaviti otvoren; za zaustavljanje pritisnuti `Ctrl+C`.

Na sustavima gdje PowerShell ne blokira npm skriptu može se koristiti i `npm` umjesto `npm.cmd`.

### Glavne datoteke

- `lab3/src/App.js` — glavna komponenta i prikaz komponente `SearchParams`.
- `lab3/src/SearchParams.js` — stanje izbornika, dohvat podataka i prikaz filtera.
- `lab3/src/index.html` — ulazna HTML stranica.
- `lab3/src/style.css` — stilovi aplikacije.
- `lab3/package.json` — paketi i naredbe za pokretanje.

### Zadatak 2 — naknadno

Drugi zadatak još nije implementiran. Rješenje će se izraditi zasebno pomoću vlastitog `useDropdown` hooka, uz očuvanje rješenja prvog zadatka.

## Generirane datoteke

Zajednički `.gitignore` izostavlja `node_modules`, Parcel predmemoriju i `dist`. Te se mape automatski ponovno stvaraju instalacijom paketa i pokretanjem odnosno izgradnjom aplikacije.

`package.json` i `package-lock.json` ostaju u projektu radi instalacije potrebnih paketa i bilježenja njihovih verzija.
