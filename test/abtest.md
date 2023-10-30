**A/B Test Name:**  Light or Dark Mode
**User Story Number:**  User Story 5  
**Metric (HeartGrid):**     
The toggling of light or dark mode on from our app can be tracked as a metric through firebase and google analytics, by creating a custom event trigger. For example we can run a simple javascript line that will log events whenever a particular button (or switch) is pressed. Effectively, when the user decides to open settings and toggle a dark mode switch (or lightmode) the event will trigger and log the event. From here we can create custom reports or dashboards in firebase's google analytics to then track the usage of dark and light mode, as well as check if people swapped back immediately, or how long until their next flip of the switch.  
  
**Hypothesis:**    
  
**Experiment:**     

**Variations:**
  
--------------------------------------------------  

**A/B Test Name:**  Banner ad or Full ad (on window change)
**User Story Number:**  User Story 6
**Metric (HeartGrid):**  
The number of people who leave the app at certain pages of the app can be measured using google analytics. This information could help tell us if certain ads are pushing users away, because if they leave the app every time an interstitial ad pops onto the screen, they're clearly annoyed by these ads. Unfortunately it will be a little harder to tell if banner ads are directly driving people away, but we could track several other variables and compare between users who receive banner ads vs. those who receive interstitial ads. This could be number of projects logged, time spent on the app, and logins per day.

**Hypothesis:**   
The number of projects logged per user, the amount of time spent on the app, and the number of logins per day will all be larger for users who receive banner ads vs. users who receive interstitial ads. Additionally, the number of users who exit the app from a screen displaying an interstitial ad will be higher than from any other screen for users who receive interstitial ads.

**Experiment:**    
5% of the app's users will receive interstitial ads when switching between pages in place of the small banner ads that are on the bottom of each page.

**Variations:**
The first variation will be a test which compares the number of projects logged per user, the amount of time spent on the app, and the number of logins per day for both groups. These numbers should all be higher in users who find the app more enjoyable and engaging.
The second variation will be a test which compares the number of users leaving the app from any given screen; for users with the interstitial ads, the number of departures from the ad screen should lend valuable insight.
