import 'package:shelf_router/shelf_router.dart';

import 'controllers/homepage.dart';

Router provideRouter(){
  final router = Router();
  router.get('/', HomepageController().onRequest);
  return router;
}