import 'dart:async';

import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';

import '../misc.dart';
import 'route_controller.dart';

final class GetUserController extends RouteController {
  static const RouteDefinition route = (verb: 'GET', path: '/users/<userId>');

  @override
  FutureOr<Response> onRequest(Request request, RequestLogger logger) {
    final userId = request.params['userId'];
    logger.info('$userId has entered the chat');
    return Response.ok('Hello to user $userId');
  }
}
