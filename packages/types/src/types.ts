/**
 * @private
 */
interface IId {
  id: string;
}

/**
 * A User
 * @public
 */
export interface IUser extends IId {
  name: string;
  currency: string;
}

/**
 * A Benefit
 * @public
 */
export interface IBenefit extends IId {
  name: string;
  description: string;
}

/**
 * A Notifications
 * @public
 */
export interface INotifications extends IId {
  userId: string;
}
