using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Products
    {
        [Key]
        public int id { get; set; }
        public string img { get; set; }
        public string nameProduct { get; set; }
        public string price { get; set; }
    }
}
