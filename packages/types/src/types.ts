type uid = string | null;
type NotificationsType = "IN_APP" | "PUSH";

/**
 * BaseEntity
 * @param [uid] Unique identifier
 */
interface BaseEntity {
  uid: uid;
}

/**
 * A User
 * @public
 * @param {name} User Name
 * @param {currency} User's currency
 * @param {language} User's language
 * @param {notificationsPref} type of user notifications preference could be "IN_APP" or "PUSH"
 */
export interface IUser extends BaseEntity {
  name: string;
  currency: string;
  language: string;
  notificationsPref: NotificationsType;
}

export interface ICustomerSystem extends BaseEntity {
  firstName: string;
  lastName: string;
  dob: Date;
  employeeId: uid;
  jobTitle: string;
  officeLocation: string;
  jobEmail: string;
  personalEmail: string;
}

export interface INotifications extends BaseEntity {
  type: string;
  body: string;
  id: BaseEntity;
  userId: BaseEntity;
  title: string;
  deepLink: string;
  date: Date;
  status: string;
}

export interface IDriver extends BaseEntity {
  name: string;
  description: string;
}

export interface ILifeMoment extends BaseEntity {
  name: string;
  description: string;
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

export interface IByte extends BaseEntity {
  type: string;
  body: string;
  order: number;
}

export interface IContent extends BaseEntity {
  bytes: IByte[];
  goalId: BaseEntity;
  goalOrder: number;
  title: string;
  description: string;
  image?: string;
}

export interface IAchievement extends BaseEntity {
  name: string;
  body: string;
}

export interface IGamification {
  field: string;
}
