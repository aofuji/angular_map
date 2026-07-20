import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly statusItems = [
    'Runtime carregado via Native Federation',
    'Remote rodando independente na porta 4201',
    'Shell consumindo em /mfe sem rebuild',
  ];
}
