import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface FeaturePath {
    title: string;
    description: string;
    icon: string;
    path: string;
}

@Component({
    selector: 'app-home-overview',
    standalone: true,
    imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class HomeOverviewComponent {
    features: FeaturePath[] = [
        {
            title: 'Component Demos',
            description: 'Explore Angular Material component demos and usage examples.',
            icon: 'call_to_action',
            path: '/button'
        },
        {
            title: 'Features',
            description: 'Browse all available features in this application.',
            icon: 'star',
            path: '/features'
        },
        {
            title: 'Botstudio',
            description: 'Create and manage prompts in the Botstudio feature.',
            icon: 'smart_toy',
            path: '/botstudio'
        }
    ];
}
