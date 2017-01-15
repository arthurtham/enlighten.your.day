# enlighten.your.day
Enlighten Your Day with a collection of inspirational quotes from ten distinct categories.

## Inspiration
Our Chrome extension was inspired by the Currently extension and how the latter displayed information, like the time of the day, when a new tab was opened. We wanted to create an extension that shows information about random things based on categories. We saw that the quirky quotes from Wikiquotes can be a pleasant read and aesthetic on our user’s screen, and decided to start our project under the name “enlighten.your.day”.

## What it does
Our Chrome extension allows users to “enlighten their day” with quirky quotes. This page is accessible by opening a new tab in a Google Chrome desktop browser. On the main page, users can select a category that they would like to be enlightened about. Quotes are then randomly spawned for the users to read. In addition, users have the ability to switch categories after reading a quote and change the background color of the page using the side navigation bar on the main page.

## How we built it
We took advantage of Google Chrome’s Extensions feature which allows us to write Chrome extensions using popular web languages. We used HTML and CSS to conceive the look and feel of our New Tab Chrome extension, while we used Javascript and jQuery to make ajax requests to the Wikiquotes server and get/display quotes. Taking advantage of Chrome Extensions’ local storage feature, we were able to save user settings that included category and background color selection.

## Challenges we ran into
One of the unexpected challenges we faced was writing and execute Javascript code in accordance with Google Chrome’s Content Security Policy (CSP) feature. Specifically, Javascript code could not be executed as inline scripts in HTML files. After consulting with the HackUCI Mentors, we decided to utilize a workaround where we called Javascript code located in dedicated Javascript files. We also used a method where we “listened” to input from the mouse to allow the sidebar and sandwich button to work correctly.

Another challenge that surprised us was the lack of available APIs that could generate random facts about categories of our choosing. In fact, the only API that we found that was suitable for our extension was the Wikiquotes API conceived by Nate Tyler. This API provided some great quotes from Wikiquotes, but it did not provide an author and allow us to use shorter quotes easily. The result is that some of our presented quotes sometimes did not make sense. Thankfully, the API was able to perform beyond our expectations with its ability to even pull quotes from the large database that is Wikiquotes.

## Accomplishments that I'm proud of
As a team, we are proud that we completed our project and created our very first Chrome Extension. As this was our first hackathon and our first project together, we were very pleased that we were able to create our very first program. In broader terms, we learned how to create our own webpage from scratch together, using HTML, CSS, Javascript, and jQuery to our advantage. Overall, we are satisfied with our extension and will definitely share it with family and friends.

## What I learned
In general, we learned a lot about web development and how really small details can actually require more work than it looks. Specifically, loading a random quote took a lot more lines of code and analysis of APIs than we anticipated. We learned about the power of APIs and its ability for us to perform things we could not do without those services, such as searching up random quotes.

We also learned how to write code according to specifications other than our own; Google Chrome’s CSP forced us to learn about its security features and rethink our code without violating its security measures. 

## What's next for enlighten.your.day
Possible improvements include finding a new API to include authors for the quotes that are provided, providing images as possible background selections, and improving the rate at which quotes are spawned. While the speed at which quotes appeared was fast, it was sometimes inconsistent. Our next update will aim to improve this. 

