using india.DATA;
using india.Models.DBEntities;
using Microsoft.AspNetCore.Mvc;

namespace india.Controllers
{
    public class UrunController : Controller
    {
        private readonly MyAppDbContext _context;
        public UrunController(MyAppDbContext context)
        {
            _context = context; 
        }

        public IActionResult Index() 
        { 
            return View();
        }

        public JsonResult GetUruns()
        {
            var uruns = _context.Uruns.ToList();
            return Json(uruns);

        }

        [HttpPost]
        public JsonResult Insert(Urun model)
        {
            if(ModelState.IsValid)
            {
                _context.Uruns.Add(model);
                _context.SaveChanges();
                return Json("Ürün Bilgileri Başarıyla Kaydedildi.");    
            }
            return Json("Model validation failed");
           
        }

        [HttpGet]
        public JsonResult Edit(int id)
        {
            var urun = _context.Uruns.Find(id);
            return Json(urun);
        }

        [HttpPost]
        public JsonResult Update(Urun model)
        {
            if(ModelState.IsValid)
            {
                _context.Uruns.Update(model);
                _context.SaveChanges();
                return Json("Ürün detayları güncellendi");
            }
            return Json("Model validation failed.");
        }
    }
}
