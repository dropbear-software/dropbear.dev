import 'dart:async';

import 'package:dropbear/controllers/get_user.dart';
import 'package:dropbear/controllers/homepage.dart';
import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf_router/shelf_router.dart';

// Import your middleware functions
import 'middleware.dart';

final class Application {
  final _router = Router();

  // Add a way to set the logger (constructor or setter)
  RequestLogger logger;

  Handler get handler => const Pipeline()
      .addMiddleware(_injectLogger) // Custom middleware to inject RequestLogger
      .addMiddleware(middlewareOne)
      .addMiddleware(middlewareTwo)
      // ... add more middleware as needed
      .addHandler(_router.call);

  Application({required this.logger}) {
    // Define your routes here
    _router.get('/', HomeController().handleRequest);
    _router.get('/users/<userId>', GetUserController().handleRequest);
    // ... add more routes
  }

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
