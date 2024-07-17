import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';

class HomeController {
  final RequestLogger logger;
  HomeController({required this.logger});

  Response handleRequest(Request request) {
    logger.info('Handling home route');
    return Response.ok('Hello from home!');
  }
}
