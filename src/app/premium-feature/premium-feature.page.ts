/*
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premium-feature',
  templateUrl: './premium-feature.page.html',
  styleUrls: ['./premium-feature.page.scss'],
})
export class PremiumFeaturePage implements OnInit {
  isPremiumUser: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkUserSubscriptionStatus();
  }

  checkUserSubscriptionStatus() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.hasPremiumAccess(userId).then(userData => {
        // Correctly access the isPremium property from the UserData object
        this.isPremiumUser = userData.role.isPremium;
      }).catch(error => {
        console.error(error);
        // Handle error, e.g., user not found or not logged in
      });
    }
  }

  upgradeToPremium() {
    // Logic to navigate to the upgrade page or handle the upgrade process
    this.router.navigate(['/upgrade']);
  }

  performPremiumAction() {
    if (this.isPremiumUser) {
      // Perform the action
    } else {
      // Prompt to upgrade
      alert('Please upgrade to premium to use this feature.');
      this.upgradeToPremium();
    }
  }
}

*/





import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-premium-feature',
  templateUrl: './premium-feature.page.html',
  styleUrls: ['./premium-feature.page.scss'],
})
export class PremiumFeaturePage implements OnInit {

  isPremiumUser: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.checkUserSubscriptionStatus();
  }

  async checkUserSubscriptionStatus() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const userData = await this.userService.hasPremiumAccess(userId);
      this.isPremiumUser = userData?.role?.isPremium || false;
    }
  }
  performPremiumAction() {
    if (this.isPremiumUser) {
      // Perform the action for premium users
    } else {
      // Prompt to upgrade for basic users
      alert('This feature is available for premium users. Upgrade to enjoy all our features.');
      this.upgradeToPremium();
    }
  }

  async upgradeToPremium() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      await this.userService.upgradeToPremium(userId);
      this.isPremiumUser = true;
    }
  }
}




