const TYPES = {
  // Repo Definition
  IRepository: Symbol.for('IRepository'),

  // Service Definition
  IBasicAuth: Symbol.for('IBasicAuth'),
  IOAuth2: Symbol.for('IOAuth2'),
  IUserService: Symbol.for('IUserService'),
  IIconService: Symbol.for('IIconService'),

  // Service - Repo implementation
  IconRepo: Symbol.for('IconRepo'),
  UserRepo: Symbol.for('UserRepo'),

  // Service - Business Logic implementation
  BasicAuthController: Symbol.for('BasicAuthController'),
  OAuth2Controller: Symbol.for('OAuth2Controller'),
  IconController: Symbol.for('IconController'),
  UserController: Symbol.for('UserController')
};

export { TYPES };