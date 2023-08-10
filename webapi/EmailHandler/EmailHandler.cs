using MimeKit;
using MimeKit.Text;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;
using webapi.Database.Entities;
using System.Security.Authentication;

namespace webapi.EmailHandler
{
    public static class EmailHandler
    {
        public static void Send(Reservations reservation, bool Add)
        {
            var message = new MimeMessage
            {
                Sender = new MailboxAddress("CinemaApp - Krzysztof Solecki", "krzysztof.solecki@stazysta.comarch.pl"),
                Subject = "Potwierdzenie rezerwacji"
            };

            if (Add)
            {
                message.Body = new TextPart(TextFormat.Plain)
                {
                    Text = "Witaj " + reservation.User.Firstname + " \nTwoja rezerwacja (" + reservation.BookedSeance.StartDate + ") została zatwierdzona."
                };
            }
            else
            {
                message.Body = new TextPart(TextFormat.Plain)
                {
                    Text = "Witaj " + reservation.User.Firstname + " \nTwoja rezerwacja (" + reservation.BookedSeance.StartDate + ") została anulowana."
                };
            }

            message.To.Add(new MailboxAddress("Klient", "krzysztof.solecki@stazysta.comarch.pl"));

            using (var client = new SmtpClient())
            {
                client.SslProtocols = SslProtocols.Tls;
                client.Connect("smtp.comarch.com", 465);
                client.Authenticate("krzysztof.solecki@stazysta.comarch.pl", "password");
                client.Send(message);
            }
        }
    }
}
