**A/B Test Name:**  Light or Dark Mode  
**User Story Number:**  User Story 5  
**Metric (HeartGrid):**     
The toggling of light or dark mode on from our app can be tracked as a metric through firebase and google analytics, by creating a custom event trigger. For example we can run a simple javascript line that will log events whenever a particular button (or switch) is pressed. Effectively, when the user decides to open settings and toggle a dark mode switch (or lightmode) the event will trigger and log the event. From here we can create custom reports or dashboards in firebase's google analytics to then track the usage of dark and light mode, as well as check if people swapped back immediately, or how long until their next flip of the switch.  
  
**Hypothesis:**    
Our hypothesis is that users will have a heavy preference as to which lighting theme will be more dominantly used; we will take it one step further to assume that users will heavily prefer a dark theme. This is based off of the analytics of our survey results and from noticing trends throughout technology industries in general. It is very rare for a platform not to offer some form of theme change. Especially if their product revolves around looking at a screen.  
*Solve*: Dark mode or light mode more preferable by users?  
*Impact*: Provided a user is using a comfortable color theme, they are more likely to use the app for prolonged period.  
*Rationale*: For many people dealing with painful bright colors on screens all day causes eye pain and stress; decreasing the likelihood of a user continously using an app. For example; if everytime I opened google I was met with painful bright white light, I probably wouldn't stop to google things at 8pm. They have a darkmode, that prevents this and I will happily google until 11pm. We want users to be comfortable using the app at all periods of the day, having a dark mode toggle will help solidify this.  
**Experiment:**   
Utilizing A/B testing methodologies we will launch the app in lightmode to 50% of the user base with a healthy mix of user demographics; primarily age-wise, the app will be shown to both younger users and older users. As well the app will bel launched in darkmode to 50% of our user base with the same mix of user demographics. From here we can determine if users are likely to swap to one preference over the other, and effectively distribute the two options among our userbase.  

**Variations:**  
The design work required to conduct htis test will be as follows; first the app must have a fully functioning light theme and dark theme. From here, a toggle method will need to be developed that switches these settings in the back end. This could be done by linking javascript in our backend to improve functionality. After this finished we will need to set two active versions of the application. One which defaults to light mode, and one which defaults to dark mode. From here we can start the experiment and A/B testing to determine whcih of the two modes should win the position of default starting theme for all users.  
  
--------------------------------------------------  

**A/B Test Name:**  Banner ad or Full ad (on window change)
**User Story Number:**  
**Metric (HeartGrid):**  
**Hypothesis:**   
**Experiment:**    
**Variations:**
