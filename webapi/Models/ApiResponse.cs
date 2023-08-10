namespace webapi.Models
{
    public class ApiResponse<T>
    {
        public T Data { get; set; }
        public List<string> validationMessages { get; set; }
        public string Token { get; set; }
    }
}
