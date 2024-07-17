import 'dart:async';

import 'package:dropbear/controllers/homepage.dart';
import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';

// Import your middleware functions
import 'middleware.dart';

class Application {
  final _router = Router();

  // Add a way to set the logger (constructor or setter)
  RequestLogger logger;

  late final HomeController _homeController;

  Handler get handler => const Pipeline()
      .addMiddleware(logRequests()) // Built-in Shelf logging middleware
      .addMiddleware(_injectLogger) // Custom middleware to inject RequestLogger
      .addMiddleware(middlewareOne)
      .addMiddleware(middlewareTwo)
      // ... add more middleware as needed
      .addHandler(_router);

  Application({required this.logger}) {
    _homeController = HomeController(logger: logger);
    // Define your routes here
    _router.get('/', _homeController.handleRequest);
    _router.get('/users/<userId>', _userHandler);
    // ... add more routes
  }

  // Route handlers
  FutureOr<Response> _userHandler(Request request, String userId) async {
    final logger = request.context['logger'] as RequestLogger;
    logger.info('Handling user route for userId: $userId');
    return Response.ok('Hello user $userId!');
  }

  // Middleware to inject RequestLogger into the request context
  Handler _injectLogger(Handler innerHandler) {
    return (Request request) {
      // Assuming you receive RequestLogger in your Cloud Function
      return innerHandler(request.change(context: {
        ...request.context,
        'logger': logger,
      }));
    };
  }
}
