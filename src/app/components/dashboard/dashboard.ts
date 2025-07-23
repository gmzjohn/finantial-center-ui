import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DashboardOption {
  title: string;
  description: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  @Input() options: DashboardOption[] = [];

  selectOption(option: DashboardOption): void {
    console.log('Opción seleccionada:', option.title);
  }
}
