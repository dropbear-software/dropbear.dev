import 'package:dropbear/controllers/get_user.dart';
import 'package:shelf_router/shelf_router.dart';

import 'homepage.dart';

Router getRouter() {
  final router = Router();

  router.add(
    HomeController.route.verb,
    HomeController.route.path,
    HomeController().handleRequest,
  );

  router.add(
    GetUserController.route.verb,
    GetUserController.route.path,
    GetUserController().handleRequest,
  );

  return router;
}
