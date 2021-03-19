/**
 * A User
 * @public
 */
export interface IUser {
  id: string;
  name: string;
  currency: string;
}

/**
 * A Benefit
 * @public
 */
export interface IBenefit {
  id: string;
  name: string;
  description: string;
}

/**
 * A Notifications
 * @public
 */
export interface INotifications {
  id: string;
  userId: string;
}
