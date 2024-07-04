// global.d.ts
import { Connection, ConnectOptions } from 'mongoose';

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: Connection | null;
        promise: Promise<Connection> | null;
      };
    }
  }
}
