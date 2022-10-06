export class Constants{   
    public static GetProductDetailsUrl="/api/product/getProductDetailsById";  /* même chaine que dans [Route("getbyId")] dans le fichier ProductsController.cs*/
    public static GetProductEditUrl="/api/product/getProductEditById";
    public static GetAllProductsUrl="/api/product/getAll";  /* même chaine que dans [Route("getall")] dans le fichier ProductsController.cs*/
    public static CreateProductsUrl="/api/product";  /* même chaine que dans [Route("create")] dans le fichier ProductsController.cs*/
    public static UpdateProductsUrl="/api/product";  /* même chaine que dans [Route("create")] dans le fichier ProductsController.cs*/

    public static GetCategoryUrl="/api/category/getbyId";  /* même chaine que dans [Route("getbyId")] dans le fichier CategorysController.cs*/
    public static GetAllCategorysUrl="/api/category/getall";  /* même chaine que dans [Route("getall")] dans le fichier CategorysController.cs*/
    public static CreateCategorysUrl="/api/category";  /* même chaine que dans [Route("create")] dans le fichier CategorysController.cs*/

}
