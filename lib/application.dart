import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';

// Import your middleware functions
import 'middleware.dart';

final class Application {
  final Router router;

  final RequestLogger logger;

  Handler get handler => const Pipeline()
      .addMiddleware(_injectLogger) // Custom middleware to inject RequestLogger
      .addMiddleware(middlewareOne)
      .addMiddleware(middlewareTwo)
      // ... add more middleware as needed
      .addHandler(router.call);

  Application({required this.logger, required this.router});

  // Middleware to inject RequestLogger into the request context
  Handler _injectLogger(Handler innerHandler) {
    return (Request request) {
      return innerHandler(request.change(context: {
        ...request.context,
        'logger': logger,
      }));
    };
  }
}
