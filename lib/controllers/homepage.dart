import 'package:shelf/shelf.dart';

class HomepageController {
  Response onRequest(Request request) {
    return Response.ok('Home Page!');
  }
}
