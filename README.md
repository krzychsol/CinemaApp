
# CinemaApp - Aplikacja kinowa

CinemaApp to aplikacja kinowa składająca się z interfejsu frontendowego napisanego w Angularze oraz backendu opartego na technologii .NET. Aplikacja umożliwia użytkownikom przeglądanie informacji o filmach, rezerwowanie biletów i wiele innych funkcji związanych z kinem.

Wykaz funkcjonalności:
- [x] Utworzona logika po stronie backendu dla wszystkich funkcjonalości aplikacji
- [x] Dwa typy użytkowników - użytkownik zwykły i administrator
- [x] Administrator posiada możliwość dodania i usuwania filmu, podgladu panelu administratora i listy użytkowników
- [x] Możliwość rejestracji i logowania użytkowników
- [x] Zaimplementowane generowanie tokenu JWT
- [x] Strona jest responsywna
- [x] Galeria wykazu filmów
- [x] Widok rezerwacji biletów
- [x] Dodany Gurad przed wejściem do ścieżek niebedac zalogowanym 
- [ ] Logika po stronie frontendu do obsługi rezerwacji biletów i anulowania rezerwacji
- [ ] Możliwość edycji filmu i użytkownika przez administratora
- [ ] Możliwość tworzenia harmonogramu seansów przez admina
- [ ] Podpięte wysyłania e-maila po stronie frontendu
- [ ] Dodany i skonfigurowany obraz za pomoca dockera         

## Wymagania wstępne

Aby móc zbudować i uruchomić CinemaApp, musisz mieć zainstalowane następujące narzędzia:

1. [Node.js](https://nodejs.org/) - potrzebne do uruchamiania i budowania aplikacji Angular.
2. [Angular CLI](https://angular.io/cli) - narzędzie do zarządzania projektami i budowania aplikacji Angular.
3. [.NET SDK](https://dotnet.microsoft.com/download) - potrzebne do kompilowania i uruchamiania aplikacji .NET.
4. [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) - klient PostgreSQL, potrzebny do przechowywania bazy danych projektu.

## Instrukcje budowania i uruchamiania

### Backend (.NET)

1. Przejdź do katalogu `webapi` w głównym folderze aplikacji.
2. Otwórz terminal i wpisz następujące polecenia:

```bash
dotnet ef migrations add InitialMigration 
dotnet ef database update

dotnet restore
dotnet build
dotnet run
```

### Frontend (Angular)

1. Przejdź do katalogu `angularapp` w głównym folderze aplikacji.
2. Otwórz terminal i wpisz następujące polecenia:

```bash
npm install
ng serve
```

### Baza danych (Postgres)

1. W katalogu `Database` znajduje się plik .sql zawierajacy backup struktury bazy danych oraz katalog `mock_data` zawierajacy przykładowe dane
które można zaimportować do bazy o nazwie `cinema`. 
2. Użytkownik bazy danych: postgres, hasło: postgres, port: 5432, host: localhost.
3. Poniżej znajduje się schemat bazy danych:
![Alt text](../cinemaapp/angularapp/src/assets/img/database_schema.png)