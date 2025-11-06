# WeatherProject

Node.js web aplikacija za dobijanje vremenske prognoze za bilo koji grad. Aplikacija omogućava korisnicima da unesu ime grada i dobiju trenutnu temperaturu, opis vremena i ikonu koja predstavlja vremenske uslove. Koristi Express.js za kreiranje web servera i OpenWeatherMap API za dobijanje vremenskih podataka.

## Tehnologije

- **Node.js** - JavaScript runtime okruženje
- **Express.js** - Web framework za Node.js
- **Body-parser** - Middleware za parsiranje HTTP zahteva
- **OpenWeatherMap API** - API za dobijanje vremenskih podataka

## Preduslovi

Pre pokretanja projekta, potrebno je imati instalirano:

- [Node.js](https://nodejs.org/) (verzija 12.18.3 ili novija)
- [npm](https://www.npmjs.com/) (obično dolazi sa Node.js)
- OpenWeatherMap API ključ (besplatan na [openweathermap.org](https://openweathermap.org/api))

## Instalacija

1. **Klonirajte ili preuzmite projekat**

   ```bash
   git clone <repository-url>
   cd WeatherProject
   ```

   Ili jednostavno preuzmite projekat i otvorite terminal u folderu projekta.

2. **Instalirajte zavisnosti:**

   ```bash
   npm install
   ```

   Ovo će instalirati sve potrebne pakete definisane u `package.json`:

   - `express` - Web framework za Node.js
   - `body-parser` - Middleware za parsiranje HTTP zahteva

3. **Konfigurišite OpenWeatherMap API ključ:**

   Aplikacija koristi `.env` fajl za čuvanje API ključa.

   **Koraci:**

   1. **Kreirajte `.env` fajl:**

      Kopirajte `.env.example` fajl i preimenujte ga u `.env`:

      ```bash
      # Windows
      copy .env.example .env

      # Linux/Mac
      cp .env.example .env
      ```

   2. **Dobijte OpenWeatherMap API ključ:**

      - Idite na [openweathermap.org/api](https://openweathermap.org/api)
      - Kreirajte besplatan nalog
      - Dobijte API ključ

   3. **Dodajte API ključ u `.env` fajl:**

      Otvorite `.env` fajl i zamenite placeholder sa vašim API ključem:

      ```env
      TATA=your_openweather_api_key_here
      ```

      **⚠️ VAŽNO:** 
      - Zamenite `your_openweather_api_key_here` sa vašim stvarnim API ključem
      - **NIKADA ne commit-ujte `.env` fajl na GitHub!** (već je dodat u `.gitignore`)
      - `.env.example` fajl je template i može se sigurno commit-ovati na GitHub

## Pokretanje

1. **Proverite da li su zavisnosti instalirane:**

   Ako niste već instalirali zavisnosti, pokrenite:

   ```bash
   npm install
   ```

2. **Pokrenite server:**

   ```bash
   node app.js
   ```

   Server će se pokrenuti i prikazati poruku: `Server started on port 3000`

3. **Otvorite web browser:**

   Idite na `http://localhost:3000`

4. **Unesite ime grada:**

   - Unesite ime grada u formu (npr. "Belgrade", "London", "New York")
   - Kliknite na dugme "Go"
   - Videćete temperaturu, opis vremena i ikonu

## Funkcionalnosti

### Zajedničke rute

#### 1. Početna stranica (`/`)

- **URL:** `http://localhost:3000/`
- **Metod:** GET
- **Opis:** Prikazuje formu za unos imena grada

#### 2. POST zahtev za dobijanje vremenske prognoze (`/`)

- **URL:** `http://localhost:3000/`
- **Metod:** POST
- **Opis:** Prima ime grada iz forme i vraća vremensku prognozu (temperatura, opis, ikona)

## Struktura projekta

```
WeatherProject/
├── app.js                 # Glavni fajl aplikacije (Express server)
├── index.html             # HTML forma za unos grada
├── package.json           # Node.js zavisnosti i konfiguracija
├── package-lock.json      # Zaključane verzije zavisnosti
├── Procfile               # Konfiguracija za Heroku deployment
├── node_modules/          # Instalirane zavisnosti (može se obrisati)
└── README.md              # Dokumentacija projekta
```

## API Endpoints

### GET Endpoints

- `GET /` - Početna stranica sa formom za unos grada

### POST Endpoints

- `POST /` - Dobijanje vremenske prognoze za uneti grad

## Funkcionalnosti aplikacije

### Forma za unos grada

- Omogućava unos imena grada
- Validacija se izvršava na strani servera
- Podržava gradove na engleskom jeziku

### Vremenska prognoza

- Prikazuje trenutnu temperaturu u stepenima Celzijusa (°C)
- Prikazuje opis vremena (npr. "clear sky", "few clouds", "rain")
- Prikazuje ikonu koja predstavlja vremenske uslove
- Koristi OpenWeatherMap API za dobijanje podataka

### OpenWeatherMap API

- Koristi besplatni API plan
- Podaci se dobijaju u realnom vremenu
- Temperatura se prikazuje u metrijskim jedinicama (°C)
- Ikone se učitavaju sa OpenWeatherMap servera

## Primeri korišćenja

### Primer 1: Pokretanje servera

```bash
# Instalirajte zavisnosti (samo prvi put)
npm install

# Pokrenite server
node app.js
```

Server će se pokrenuti i prikazati poruku: `Server started on port 3000`

### Primer 2: Dobijanje vremenske prognoze

1. **Otvorite browser i idite na `http://localhost:3000/`**

   - Videćete formu sa poljem za unos grada

2. **Unesite ime grada**

   - Npr. "Belgrade", "London", "New York", "Paris"

3. **Kliknite na dugme "Go"**

   - Videćete temperaturu u stepenima Celzijusa
   - Videćete opis vremena (npr. "clear sky", "few clouds")
   - Videćete ikonu koja predstavlja vremenske uslove

### Primer 3: Različiti gradovi

Možete uneti bilo koji grad na engleskom jeziku:

- `Belgrade` - Beograd
- `London` - London
- `New York` - Njujork
- `Paris` - Pariz
- `Tokyo` - Tokio
- `Moscow` - Moskva

## Folders koji se mogu obrisati (slično kao Python venv)

**⚠️ VAŽNO:** Ovi folderi se mogu obrisati, ali moraju se ponovo instalirati pre pokretanja aplikacije.

### `node_modules/` folder

Folder `node_modules/` je **ekvivalent Python venv folderu**. Sadrži sve instalirane Node.js pakete i zavisnosti.

**Možete ga obrisati:**

```bash
# Windows (Command Prompt)
rmdir /s node_modules

# Windows (PowerShell)
Remove-Item -Recurse -Force node_modules

# Linux/Mac
rm -rf node_modules
```

**Kako ponovo instalirati:**

```bash
npm install
```

Ovo će ponovo instalirati sve zavisnosti na osnovu `package.json` i `package-lock.json` fajlova.

**Kada obrisati `node_modules/`:**

- Kada želite da oslobodite prostor na disku
- Kada imate probleme sa zavisnostima i želite čistu instalaciju
- Kada želite da proverite da li projekat ima sve potrebne informacije za instalaciju
- Pre slanja projekta na Git (dodajte `node_modules/` u `.gitignore`)

**⚠️ NE brišite:**

- `package.json` - definiše zavisnosti projekta
- `package-lock.json` - zaključava tačne verzije zavisnosti
- `app.js` - glavni fajl aplikacije
- `index.html` - HTML forma
- `Procfile` - Heroku deployment konfiguracija
- `node_modules/` pre nego što imate backup `package.json` i `package-lock.json`

## Rešavanje problema

**Problem: "Cannot find module 'express'" ili slične greške**

- Pokrenite `npm install` da instalirate zavisnosti
- Proverite da li postoji `package.json` fajl
- Proverite da li postoji `node_modules/` folder

**Problem: "Error: listen EADDRINUSE: address already in use :::3000"**

- Port 3000 je već zauzet
- Promenite port u `app.js` (npr. `app.listen(3001, ...)`)
- Ili zaustavite proces koji koristi port 3000

**Problem: `node_modules` folder je obrisan i ne mogu da pokrenem aplikaciju**

- Pokrenite `npm install` da ponovo instalirate zavisnosti

**Problem: "Cannot GET /" ili druge rute ne rade**

- Proverite da li je server pokrenut (`node app.js`)
- Proverite da li server radi na portu 3000
- Proverite da li URL u browseru je tačan (npr. `http://localhost:3000/`)

**Problem: Forma ne šalje podatke**

- Proverite da li je `body-parser` middleware pravilno konfigurisan
- Proverite da li forma ima `method="post"` i `action="/"`
- Proverite da li input polje ima `name="cityName"` atribut

**Problem: "API key is invalid" ili greška sa OpenWeatherMap API**

- Proverite da li je API ključ tačan u `app.js` fajlu
- Proverite da li je API ključ aktivan na OpenWeatherMap nalogu
- Proverite da li imate internet konekciju
- Proverite da li je ime grada tačno (mora biti na engleskom jeziku)

**Problem: "City not found" ili slične greške**

- Proverite da li je ime grada tačno napisano
- Proverite da li je ime grada na engleskom jeziku
- Proverite da li grad postoji u OpenWeatherMap bazi podataka

**Problem: Temperatura se ne prikazuje**

- Proverite da li je API ključ tačan
- Proverite da li imate internet konekciju
- Proverite da li je OpenWeatherMap API dostupan
- Proverite konzolu za greške (F12 u browseru)

**Problem: Ikona se ne prikazuje**

- Proverite da li imate internet konekciju
- Proverite da li je OpenWeatherMap server dostupan
- Proverite da li je URL ikone tačan

## Dodatne informacije

- Aplikacija koristi Express.js za kreiranje web servera
- Server radi na portu 3000
- Aplikacija koristi OpenWeatherMap API za dobijanje vremenskih podataka
- Temperatura se prikazuje u stepenima Celzijusa (°C)
- Ikone se učitavaju sa OpenWeatherMap servera
- `Procfile` je konfigurisan za Heroku deployment

## OpenWeatherMap API Setup

Aplikacija koristi `.env` fajl za čuvanje API ključa.

1. **Kreirajte OpenWeatherMap nalog:**

   - Idite na [openweathermap.org](https://openweathermap.org)
   - Kliknite "Sign Up" i kreirajte besplatan nalog

2. **Dobijte API ključ:**

   - Idite na "API keys" sekciju
   - Kopirajte vaš API ključ

3. **Konfigurišite API ključ u `.env` fajlu:**

   - Kopirajte `.env.example` fajl i preimenujte ga u `.env`:

   ```bash
   # Windows
   copy .env.example .env

   # Linux/Mac
   cp .env.example .env
   ```

   - Otvorite `.env` fajl i zamenite placeholder sa vašim API ključem:

   ```env
   TATA=your_openweather_api_key_here
   ```

   **⚠️ VAŽNO:** 
   - Zamenite `your_openweather_api_key_here` sa vašim stvarnim API ključem
   - **NIKADA ne commit-ujte `.env` fajl na GitHub!** (već je dodat u `.gitignore`)
   - `.env.example` fajl je template i može se sigurno commit-ovati na GitHub

## Bezbednost

**⚠️ VAŽNO:** Ova aplikacija je edukativna i ne treba je koristiti u produkciji bez dodatnih bezbednosnih mera:

- Aplikacija koristi OpenWeatherMap API za dobijanje vremenskih podataka
- **API ključ se čuva u `.env` fajlu** - ovo je dobra praksa za produkciju
- **`.env` fajl je dodat u `.gitignore`** - neće biti commit-ovan na GitHub
- Nema validacije korisničkih inputa
- Nema zaštite od XSS napada
- Nema zaštite od CSRF napada
- Za produkciju, dodajte:
  - Validaciju i sanitizaciju svih korisničkih inputa
  - Implementirajte rate limiting za zaštitu od napada
  - Dodajte error handling middleware
  - Implementirajte CSRF zaštitu
  - Koristite HTTPS u produkciji
  - Dodajte logging za security events
  - **Uvek koristite `.env` fajl za osetljive podatke (nikada ne hardkodujte u kodu)**
  - **Proverite da je `.env` fajl u `.gitignore` pre commit-a na GitHub**
  - **Nikada ne commit-ujte API ključeve na GitHub!**

## Licenca

ISC

