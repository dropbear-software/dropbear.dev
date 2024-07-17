// Example subclass (route controller)
import 'dart:async';

import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';

import 'route_controller.dart';
import '../misc.dart';

final class HomeController extends RouteController {
  static const RouteDefinition route = (verb: 'GET', path: '/');

  @override
  FutureOr<Response> onRequest(Request request, RequestLogger logger) async {
    logger.info('Handling home route');
    return Response.ok('Hello from home!');
  }
}
