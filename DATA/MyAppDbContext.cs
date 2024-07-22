using india.Models.DBEntities;
using Microsoft.EntityFrameworkCore;

namespace india.DATA
{
    public class MyAppDbContext : DbContext
    {
        public MyAppDbContext(DbContextOptions options) : base(options)
        {
        }
        public virtual DbSet<Urun> Uruns { get; set; }  
    }
}
