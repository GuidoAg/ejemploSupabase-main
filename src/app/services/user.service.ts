import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserData } from '../models/user-data';

const supabase = createClient(environment.apiUrl, environment.publicAnonKey);

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDataSubject = new BehaviorSubject<UserData | null>(null);
  userData$ = this.userDataSubject.asObservable();

  constructor() {
    this.loadUserData();
  }

  async loadUserData() {
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError || !authData.user) {
      console.error('Error al obtener usuario auth:', authError?.message);
      return;
    }

    const userId = authData.user.id;
    const { data, error } = await supabase
      .from('users-data')
      .select('*')
      .eq('authId', userId)
      .single();

    if (error) {
      console.error('Error al obtener datos del usuario:', error.message);
    } else {
      this.userDataSubject.next(data);
    }
  }

  getAvatarUrl(path: string): string {
    return supabase.storage.from('images').getPublicUrl(path).data.publicUrl;
  }
}
