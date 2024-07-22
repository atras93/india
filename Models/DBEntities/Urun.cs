using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace india.Models.DBEntities
{
    public class Urun
    {
        [Key]

        public int Id { get; set; }
        [Required]
        [DisplayName("Ürün Adı")]
        public string UrunAdi { get; set; }
        
        [Required]
        [DisplayName("Ürün Fiyatı")]
        public int UrunFiyat { get; set; }
       
        [Required]
        [DisplayName("Ürün Stok Miktarı")]
        public int UrunStok { get; set; }

    }
}
