
# CinemaApp - Aplikacja kinowa

CinemaApp to aplikacja kinowa składająca się z interfejsu frontendowego napisanego w Angularze oraz backendu opartego na technologii .NET. Aplikacja umożliwia użytkownikom przeglądanie informacji o filmach, rezerwowanie biletów i wiele innych funkcji związanych z kinem.

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
![Alt text](../angularapp/src/assets/img/database_schema.png)