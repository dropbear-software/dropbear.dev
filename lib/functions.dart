import 'dart:async';

import 'package:dropbear/application.dart';
import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';

@CloudFunction()
FutureOr<Response> function(Request request, RequestLogger logger) async {
  final app = Application(logger: logger);
  return app.handler(request);
}
