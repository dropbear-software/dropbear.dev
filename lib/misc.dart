import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';

typedef RouteDefinition = ({
  String verb,
  String path,
});

RequestLogger getLoggerFromContext(Request request) {
  return request.context['logger'] as RequestLogger;
}
