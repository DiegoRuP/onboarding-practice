import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, value: any): void {
    try {
      const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string): any {  
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return null;
      }
  
    try {
      return JSON.parse(item);
    } catch {
      return item;
    }
  } catch (e) {
      console.error('Error getting from localStorage', e);
      return null;
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing from localStorage', e);
    }
  }
}
