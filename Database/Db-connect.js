import * as SQLite from 'expo-sqlite';

export const DbConnect = {
  getConnection: () => SQLite.openDatabase("dbName", 1.0 ),
};