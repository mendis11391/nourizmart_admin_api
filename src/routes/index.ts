const cors = require("cors");
import isAuth from "../middleware/isAuth";
import appRoutes from "./appRoute";
import adminRoutes from "./adminRoutes";
import productRoutes from "./productRoutes";
class AppRoute {
  public useRoute(app: any) {
    app.use("/product", productRoutes);
    app.use("/admin", adminRoutes);
    app.use("/", appRoutes);
  }
}

export default AppRoute;
