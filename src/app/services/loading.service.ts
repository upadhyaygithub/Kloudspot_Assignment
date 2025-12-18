import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    // Signal to hold loading state (modern Angular)
    readonly isLoading = signal(false);

    show() {
        this.isLoading.set(true);
    }

    hide() {
        this.isLoading.set(false);
    }
}
