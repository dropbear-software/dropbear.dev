import 'package:functions_framework/functions_framework.dart';
import 'package:shelf/shelf.dart';

// Middleware 1: Adds a timestamp to the context
Handler middlewareOne(Handler innerHandler) {
  return (Request request) {
    var updatedRequest = request.change(context: {
      ...request.context,
      'timestamp': DateTime.now().toString(),
    });
    return innerHandler(updatedRequest);
  };
}

// Middleware 2: Reads the timestamp and logs a message
Handler middlewareTwo(Handler innerHandler) {
  return (Request request) {
    var timestamp = request.context['timestamp'];
    print('Request received at: $timestamp');
    getLoggerFromContext(request).info('Request received at: $timestamp');
    return innerHandler(request);
  };
}

RequestLogger getLoggerFromContext(Request request) {
  return request.context['logger'] as RequestLogger;
}
