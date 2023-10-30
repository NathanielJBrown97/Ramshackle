**A/B Test Name:**  
**User Story Number:**  
**Metric (HeartGrid):**
**Hypothesis:**  
The key part of a A/B test is formulating your hypothesis as this basically guides the whole A/B test plan. What problem are we trying to solve? Its impact? (e.g. how big this problem is to our customers?) In formulating the hypothesis, first you need to define the problem you want to solve. For example, you are an SaaS that offers free trial and you want to improve the traffic-to-lead conversion ratio (i.e. attracting more website visitors to actually sign up for a free trial). But that problem might be too broad to form an A/B test as you can simply test one variable in an A/B test to be effective (otherwise you won’t know which variable is causing the change). So to narrow down the problem you want to solve, you need to find out the bottle-neck in the conversion funnel – where do people drop off the most? Are there any key information or call-to-action buttons that you expect people to read/click but they didn’t? 

After narrowing down the problem you want to solve, you then need to make a hypothesis as to what causes those bottlenecks and what you can do to improve. For example, you noticed most of the visitors will visit your “Features” page but very few of them will actually scroll past even half of the page so many features that you think are important are not actually viewed by the visitors. To improve this, one hypothesis might be using tab or toggle list design to make your page shorter and visitors can select to dig deeper into content that they are interested in by expanding the content.

Remember when formulating your hypothesis, change only one variable so that you will know it’s really that variable that is causing the change in conversion.

Now you have your hypothesis, the next is to plan how you are going to measure your results. Defining your success metrics carefully beforehand is important. Otherwise, if there is not enough tracking done during the experiment, it might be hard to draw conclusions and next steps at the end of the experiment.

**Experiment:**    
Detail out the experiment setup that you will use to test your hypothesis using Firebase capabilities. Describe the audiences – will all users be able to view the experiment? Or you will only allocate x% of your user base to the experiment? Lay out the details with the rationale behind this decision. Describe the tracking using Firebase Analytics. With the success metrics that you have defined, what tracking needs to be set up? 
**Variations:**
In this section, describe what variations you would like to test. Layout the design work related and add diagrams, mockups and designs related to the confirmed variation that you’d like to test.

Add to your team repo’s a PBI for each A/B test. Each PBI’s content should be a summary of one of the A/B tests with a reference to ABTEST.md for detail.   Add a label to your repo for “A/B Test”. Put that label on the PBI instead of the “User Story” label that you have typically used.  

-------------------------------------------------  

**A/B Test Name:**  Light or Dark Mode
**User Story Number:**  User Story 5  
**Metric (HeartGrid):**     
The toggling of light or dark mode on from our app can be tracked as a metric through firebase and google analytics, by creating a custom event trigger. For example we can run a simple javascript line that will log events whenever a particular button (or switch) is pressed. Effectively, when the user decides to open settings and toggle a dark mode switch (or lightmode) the event will trigger and log the event. From here we can create custom reports or dashboards in firebase's google analytics to then track the usage of dark and light mode, as well as check if people swapped back immediately, or how long until their next flip of the switch.
**Hypothesis:**  
**Experiment:**   
**Variations:**
  
--------------------------------------------------  

**A/B Test Name:**  Banner ad or Full ad (on window change)
**User Story Number:**  
**Metric (HeartGrid):**  
**Hypothesis:**   
**Experiment:**    
**Variations:**
