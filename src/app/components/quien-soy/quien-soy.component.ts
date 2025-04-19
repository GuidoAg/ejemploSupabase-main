import { Component } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

const supabase = createClient(environment.apiUrl, environment.publicAnonKey);

@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.scss'
})
export class QuienSoyComponent {

  imageUrl: string = '';

  constructor() {
    this.imageUrl = this.getAvatarUrl('Guido/guido.png');
  }

  getAvatarUrl(path: string): string {
    return supabase.storage.from('images').getPublicUrl(path).data.publicUrl;
  }
}