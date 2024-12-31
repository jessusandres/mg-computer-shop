import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

/* Project */
import { HeaderComponent } from '@app/shared/header/header.component';
import { SidebarMenuComponent } from '@app/shared/sidebar-menu/sidebar-menu.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';
import { MenusStateProvider } from '@app/providers/menus-state.provider';

declare let gsap: any;

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [HeaderComponent, SidebarMenuComponent, NavbarComponent, RouterLink],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent implements OnInit {
  constructor(
    private router: Router,
    private readonly menusStateProvider: MenusStateProvider,
  ) {
    this.menusStateProvider.setCategoriesMenu(false);
  }

  ngOnInit() {
    gsap.set('svg', { visibility: 'visible' });

    gsap.to('#headStripe', {
      y: 0.5,
      rotation: 1,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      duration: 1,
    });

    gsap.to('#spaceman', {
      y: 0.5,
      rotation: 1,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      duration: 1,
    });

    gsap.to('#craterSmall', {
      x: -3,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: 'sine.inOut',
    });

    gsap.to('#craterBig', {
      x: 3,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: 'sine.inOut',
    });

    gsap.to('#planet', {
      rotation: -2,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: 'sine.inOut',
      transformOrigin: '50% 50%',
    });

    gsap.to('#starsBig g', {
      rotation: 'random(-30,30)',
      transformOrigin: '50% 50%',
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });

    gsap.fromTo(
      '#starsSmall g',
      { scale: 0, transformOrigin: '50% 50%' },
      {
        scale: 1,
        transformOrigin: '50% 50%',
        yoyo: true,
        repeat: -1,
        stagger: 0.1,
      },
    );

    gsap.to('#circlesSmall circle', {
      y: -4,
      yoyo: true,
      duration: 1,
      ease: 'sine.inOut',
      repeat: -1,
    });

    gsap.to('#circlesBig circle', {
      y: -2,
      yoyo: true,
      duration: 1,
      ease: 'sine.inOut',
      repeat: -1,
    });

    gsap.set('#glassShine', { x: -68 });

    gsap.to('#glassShine', {
      x: 80,
      duration: 2,
      rotation: -30,
      ease: 'expo.inOut',
      transformOrigin: '50% 50%',
      repeat: -1,
      repeatDelay: 8,
      delay: 2,
    });
  }

  redirectToHome(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']);
  }
}
