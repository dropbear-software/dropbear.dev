import 'dart:async';

import 'package:dropbear/application.dart';
import 'package:dropbear/controllers/routing.dart';
import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';

final router = getRouter();

@CloudFunction()
FutureOr<Response> function(Request request, RequestLogger logger) async {
  final app = Application(logger: logger, router: router);
  return app.handler(request);
}
