import { HTTPStatusCode } from '../enums/http-status-code.enum';
import { HTTPMessages } from '../constants/http-messages';
import createHttpError = require('http-errors');

export class BadRequestException {
  constructor(message = HTTPMessages.BAD_REQUEST) {
    throw createHttpError(HTTPStatusCode.BadRequest, message);
  }
}

export class UnauthorizedException {
  constructor(message = HTTPMessages.UNAUTHORIZED) {
    throw createHttpError(HTTPStatusCode.Unauthorized, message);
  }
}

export class NotFoundException {
  constructor(message = HTTPMessages.NOT_FOUND) {
    throw createHttpError(HTTPStatusCode.NotFound, message);
  }
}

export class ConflictException {
  constructor(message = HTTPMessages.CONFLICT) {
    throw createHttpError(HTTPStatusCode.Conflict, message);
  }
}

export class UnprocessableEntityException {
  constructor(message = HTTPMessages.UNPROCESSABLE_ENTITY) {
    throw createHttpError(HTTPStatusCode.UnprocessableEntity, message);
  }
}

export class TooManyRequestsException {
  constructor(message = HTTPMessages.TOO_MANY_REQUESTS) {
    throw createHttpError(HTTPStatusCode.TooManyRequests, message);
  }
}

export class InternalServerErrorException {
  constructor(message = HTTPMessages.INTERNAL_SERVER_ERROR) {
    throw createHttpError(HTTPStatusCode.InternalServerError, message);
  }
}

export class BadGatewayException {
  constructor(message = HTTPMessages.BAD_GATEWAY) {
    throw createHttpError(HTTPStatusCode.BadGateway, message);
  }
}