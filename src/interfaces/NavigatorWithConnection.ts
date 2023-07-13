export interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: string;
  };
}
