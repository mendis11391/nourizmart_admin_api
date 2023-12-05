const cors = require("cors");
import isAuth from "../middleware/isAuth";
import appRoutes from "./appRoute";
import adminRoutes from "./adminRoutes";
class AppRoute {
  public useRoute(app: any) {
    app.use("/admin", adminRoutes);
    app.use("/", appRoutes);
  }
}

export default AppRoute;
