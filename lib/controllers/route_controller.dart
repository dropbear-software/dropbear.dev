import 'dart:async';

import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';

abstract class RouteController {
  // Method with partial implementation to set the logger
  FutureOr<Response> handleRequest(Request request) {
    final logger = (request.context['logger'] as RequestLogger);
    return onRequest(request, logger);
  }

  // Abstract method to be implemented by subclasses, now with logger available
  FutureOr<Response> onRequest(Request request, RequestLogger logger);
}
