// Example subclass (route controller)
import 'dart:async';

import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';

import 'route_controller.dart';

final class HomeController extends RouteController {
  @override
  FutureOr<Response> onRequest(Request request, RequestLogger logger) async {
    logger.info('Handling home route');
    return Response.ok('Hello from home!');
  }
}
